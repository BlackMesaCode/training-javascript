"use strict";

function repeatStringNumTimes(str, num) {
  if (num === 0)
    return "";
  // repeat after me
  return str + repeatStringNumTimes(str, num-1);
}

repeatStringNumTimes("abc", 3);
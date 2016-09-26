// reflection

var obj = { name: "Peter", height: 180 }
for(var prop in obj) {
    console.log(prop);
    obj[prop] = "overriden!";
}
console.log(obj.name);


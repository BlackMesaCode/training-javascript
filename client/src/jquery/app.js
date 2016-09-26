// jQuery == $
// the jQuery variable gets injected into the global scope upon loading. jQuery is no object but a function that takes parameters!

$(function() {
    console.log("dom loaded");
});

// .prop() vs .attr():  http://stackoverflow.com/questions/5874652/prop-vs-attr

// .val() vs .text(): http://stackoverflow.com/questions/807867/difference-between-val-and-text
// dont use .text() with input elements - instead use. val()


// most used functions:

// find(): Selects elements based on the provided selector string
// hide(): Hides an element if it was visible
// show(): Shows an element if it was hidden
// html(): Gets or sets an inner HTML of an element
// append() Injects an element into the DOM after the selected element
// prepend() Injects an element into the DOM before the selected element
// on(): Attaches an event listener to an element
// off() Detaches an event listener from an element
// css(): Gets or sets the style attribute value of an element
// attr() Gets or sets any attribute of an element
// val(): Gets or sets the value attribute of an element
// text(): Gets the combined text of an element and its children
// each(): Iterates over a set of matched elements
// ajax() dynamically loading content, scripts and data and using them on a live Web page
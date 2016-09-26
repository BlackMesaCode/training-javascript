// So every node module is wrapped as the body of a function as shown here in the node source code

// NativeModule.wrapper = [
//   '(function (exports, require, module, __filename, __dirname) { ',
//   '\n});'
// ];

// So if you declare a variable with var, it is function-local to the module, basically a private variable for that module. It is not a property of global, module, module.exports, or this. If you forget var, it goes into the global object as a property. If you explicitly create a property on this, that goes into exports and is available to other modules.

var aDeclaredVar = '*aDeclaredVar*';
undeclaredVar = '*undeclaredVar*';
this.aThisProperty = '*aThisProperty*';
module.aModuleProperty = '*aModuleProperty*';
module.exports.anExportProperty = '*anExportProperty*';

console.log('this', this);
console.log('this === exports', this === exports);
console.log('this === module', this === module);
console.log('this === module.exports', this === module.exports);
console.log('aDeclaredVar', aDeclaredVar);
console.log('undeclaredVar', undeclaredVar);
console.log('this.aThisProperty', this.aThisProperty);
console.log('module.aModuleProperty', module.aModuleProperty);
console.log('module.exports.anExportProperty', module.exports.anExportProperty);
console.log('global.undeclaredVar', global.undeclaredVar);
console.log('global.aDeclaredVar', global.aDeclaredVar);
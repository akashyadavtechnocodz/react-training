// let a:string='javascript'
// console.log(a)
var display = function () {
    var color = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        color[_i] = arguments[_i];
    }
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
display('Red');
display('Red', 'blue');
display('Red', 'blue', 'green');

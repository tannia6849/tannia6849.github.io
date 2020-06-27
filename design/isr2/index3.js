function fact() {
    return function(x) {
        return x**2;
    }
}
var f = fact();
console.log(f(5));

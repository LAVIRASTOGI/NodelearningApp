const pi = Math.PI;
var r = 5;
var a = pi * r * r;
exports.radiusfunc = (radius) => {
    var area = radius * radius;
    console.log(area);
}
exports.area = a;
const pi = Math.PI.toFixed(2);
var r = 5;
var a = pi * r * r;
var radiusfunc = (radius) => {
        var area = radius * radius;
        console.log(area);
    }
    //exports.area = a;
module.exports = { radiusfunc, obj: { area: a, r: r }, pi }
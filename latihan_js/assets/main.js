var e1 = "jakarta bogor depok tasikmalaya depok bekasi";
var e2 = e1.split(" ");
var sleman1 = e1.indexOf("bogor");
var sleman = e1.lastIndexOf("depok");
var sleman2 = e1.indexOf("purwodadi");
var sleman3 = e1.indexOf("depok", 19);
var sleman4 = e1.lastIndexOf("depok", 15);
var sleman5 = e1.slice(7, 13);
var sleman6 = e1.substring(7, 13);
var sleman7 = e1.substr(7, 6);
kota = ["purwodadi ", " yogyakarta ", " semarang "];
alamat = {
    dusun: "tambak",
    desa: "sarirejo",
    kecamatan: "ngaringan"
}

function myFunction3() {
    kikuk6 = e1.concat("", kikuk5);
    document.getElementById("kukuk7").innerHTML = kikuk6;
}
document.getElementById("kikuk4").innerHTML = e1.charAt(0) + " " + kota[0] + " " + e2[0];
kota[0] = "purwodadi kece";
document.getElementById("kikuk8").innerHTML = e1.charCodeAt(0) + " " + kota[0]; // maksudnya apa
var x = 10;
var y = 20;
// nggak ngerti
var myNumber = 201;
document.getElementById("kikuk10").innerHTML =
    "75 = " + "<br>" +
    " Decimal " + myNumber.toString(10) + "<br>" +
    " Hexadecimal " + myNumber.toString(16) + "<br>" +
    " Octal " + myNumber.toString(8) + "<br>" +
    " Binary " + myNumber.toString(2);
// nggak ngerti
var x = 9.656;
document.getElementById("kikuk11").innerHTML =
    x.toExponential() + "<br>" +
    x.toExponential(2) + "<br>" +
    x.toExponential(4) + "<br>" +
    x.toExponential(6);
// nggak ngerti
var x = 9.656;
document.getElementById("kikuk12").innerHTML =
    x.toFixed(0) + "<br>" +
    x.toFixed(2) + "<br>" +
    x.toFixed(4) + "<br>" +
    x.toFixed(6);
// nggak ngerti
var x = 9.656;
document.getElementById("kikuk13").innerHTML =
    x.toPrecision() + "<br>" +
    x.toPrecision(2) + "<br>" +
    x.toPrecision(4) + "<br>" +
    x.toPrecision(6);

var qodr = alamat.kecamatan.length;

var a = 3;
var b = 3;
var c = a * b;
var z = "99";
var y = "99";
var g = Number.MIN_VALUE;
var h = Number.MIN_VALUE;
document.getElementById("kikuk14").innerHTML = z + " " + typeof (z);
document.getElementById("pur").innerHTML = Number(y) + " " + typeof (y) + " " + Number(new Date("2019-10-22")) +
    " " + parseInt("19 years") + " " + parseFloat("19.08 years") + " " + g + " " + h;

// document.getElememtById("jogja").innerHTML = "jogja istemewa " + a + b;
// document.getElememtById("demo4").innerHTML = a + b + " jogja istemewa";

function mefunction(a, b) {
    return a * b;
}

var h = 29;

function function4() {
    document.getElementById("kikuk15").innerHTML = h;
}

function kikuk() {
    document.getElementById("demo1").innerHTML = Date();
}

function myFunction1() {
    var str = document.getElementById("demo3").innerHTML;
    var txt = str.replace(/PURWODADI/i, "grobogan");
    document.getElementById("demo3").innerHTML = txt.toUpperCase();
}

function myFunction2() {
    var str = document.getElementById("demo3").innerHTML;
    var txt = str.replace(/GROBOGAN/g, "purwodadi");
    document.getElementById("demo3").innerHTML = txt;
}

var kikuk5 = document.getElementById("demo").innerHTML =
    "hasil dari " + a + " x " + b + " = " + c +
    "<br>" + kota +
    "<br> dusun = " + alamat.dusun +
    " desa =  " + alamat.desa + " kecamatan = " + alamat.kecamatan +
    "<br>" + "5 x 6 = " + mefunction(5, 6) + "<br>" +
    qodr + " " + sleman1 + " " + sleman + " " + sleman2 + " " +
    sleman3 + " " + sleman4 + " " + sleman5 + " " + sleman6 + " " + sleman7 + " " + x.valueOf();
var d = 40.500500;
// var e = ;
// var f = ;
// log ada banyak ?
document.getElementById("kikuk16").innerHTML = Math.floor(Math.random() * 1000) + 1;
document.getElementById("kikuk17").innerHTML = Math.min(x, y, a, b, z) + " <- min . max -> " + Math.max(x, y, a, b, z) +
    "| round -> " + Math.round(d) + "| ceil -> " + Math.ceil(d) + "| floor -> " + Math.floor(d) +
    "| log -> " + Math.log(d) + "| log1 -> " + Math.log10(d) + "| log2 -> " + Math.log2(d) + "| log -> " + Math.log(d);
// document.getElementById("kikuk18").innerHTML=
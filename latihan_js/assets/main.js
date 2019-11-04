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
    user = 5000;
    user2 = 5000;
    barang = 10000;

    kota = ["purwodadi", "gorontalo", "depok", "bekasi", "jakarta", "ambon"];
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
    kota[0] = "purwodadii";
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
    if (user >= barang) {
        document.getElementById("beli").innerHTML = "uang anda sendiri sudah cukup";
    } else if (user + user2 >= barang) {
        document.getElementById("beli").innerHTML = "uang anda tidak cukup jadi pembayaran akan diatambah dengan saldo teman kamu";
    } else {
        document.getElementById("beli").innerHTML = "uang anda dan teman anda tidak cukup silahkan isi saldo kalian";
    }
    // kenapa if yang kedua tidak mucul
    if (user >= barang) {
        document.getElementById("beli1").innerHTML = "uang anda sendiri sudah cukup";
        if (user + user2 >= barang) {
            document.getElementById("beli1").innerHTML = "uang anda tidak cukup jadi ditambah uang teman kamu untuk membeli barang";
        }
    } else if (user2 >= barang) {
        document.getElementById("beli1").innerHTML = "uang anda tidak cukup jadi pembayaran akan diatambah dengan saldo teman kamu";
    } else {
        document.getElementById("beli1").innerHTML = "uang anda dan teman anda tidak cukup silahkan isi saldo kalian";
    }

    var kelas = document.getElementsByClassName("kikuk19");

    kelas[0].innerHTML = "mantappu jiwa 1";
    kelas[1].innerHTML = "mantappu jiwa 2";
    kelas[2].innerHTML = "mantappu jiwa 3";

    var teknem = document.getElementsByTagName("li");

    teknem[0].innerHTML = "purwodadi";
    teknem[1].innerHTML = "jogjakarta";
    teknem[2].innerHTML = "blora";

    // nggak muncul dipage diconsole muncul
    // var elBaru = document.createElement('h1');
    // var textbaru = document.createTextNode('purwodadi is smart city');
    // var tempatnya = document.getElementById('kikuk20');

    // elBaru.appendChild(textbaru);
    // tempatnya.appendChild(elBaru);

    // tempatnya.removeChild(elBaru);

    // var elanyar = document.createElement('h2');
    // var textanyar = document.createTextNode('mantapu jiwa')
    // elanyar.appendChild(textanyar);
    // var elchange = document.getElementById('kikuk21');
    // box.replaceChild(elchange, elanyar);

    // sampai sini gak ada yang work 


    // document.getElementsByClassName(kikuk19)[0].style.color = "blue";
    // document.getElementsByClassName(kikuk19)[1].style.color = "blue";
    // document.getElementsByClassName(kikuk19)[2].style.color = "blue";
    // document.getElementsByClassName('kikuk19')[0].style.color = "blue";
    // document.getElementsByClassName('kikuk19')[0].style.color = "blue";
    var a11 = document.getElementsByClassName('kikuk19');
    a11[0].style.color = "blue";
    a11[1].style.color = "blue";
    a11[2].style.color = "blue";



    function myFunction5() {
        var kk = kota.sort().join(" ");
        document.getElementById("hasil").innerHTML = kk;
    }

    function myFunction6() {
        var kk = kota.length;
        document.getElementById("hasil").innerHTML = kk;
    }

    function myFunction7() {
        kota[0] = Date();
        kota[1] = myFunction6();
        kota[2] = e1;
        document.getElementById("hasil").innerHTML = kota;
    }

    function myFunction8() {
        document.getElementById("hasil").innerHTML = kota[kota.length - 1];
    }

    function myFunction9() {
        document.getElementById("hasil").innerHTML = kota;
    }

    //no work

    function myFunction10() {
        var kk = kota.length;
        text = "<ul>";
        for ($i = 0; $i < kk; $i = $i + 1) {
            text += "<li>" + kota[$i] + "</li>";
        }
        text += "</ul>";
        document.getElementById('hasil').innerHTML = text;
    }

    function myFunction11() {
        var kk = kota.length;
        var $i = 0;
        text = "<ul>";
        kota.forEach(ulangi);
        text += "</ul>";
        document.getElementById('hasil').innerHTML = text;

        function ulangi(value) {
            text += "<li>" + value + "</ul>";
        }
    }

    function myFunction12() {
        kota.push("surabaya");
    }

    function myFunction13() {
        document.getElementById('hasil').innerHTML = kota instanceof Array;
    }

    function myFunction14() {
        document.getElementById('hasil').innerHTML = kota.join(' ');
    }

    function myFunction15() {
        document.getElementById('hasil').innerHTML = kota.pop();
    }


    function myFunction16() {
        document.getElementById('hasil').innerHTML = kota.shift();
    }

    function myFunction17() {
        document.getElementById('hasil').innerHTML = kota.unshift('malang');
    }
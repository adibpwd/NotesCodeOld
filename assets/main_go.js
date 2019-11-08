    if (user >= barang) {
        document.getElementById("beli").innerHTML = "uang anda sendiri sudah cukup";
    } else if (user + user2 >= barang) {
        document.getElementById("beli").innerHTML = "uang anda tidak cukup jadi pembayaran akan diatambah dengan saldo teman kamu";
    } else {
        document.getElementById("beli").innerHTML = "uang anda dan teman anda tidak cukup silahkan isi saldo kalian";
    }
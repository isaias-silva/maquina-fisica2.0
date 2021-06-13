//calculo termometrico

function check(botao) {
    switch (botao) {
        case "termometria":
            window.document.getElementById("termometria").style.display = "block";
            window.document.getElementById("menus").style.display = "none";
            break;
        case "calorimetria":
            window.document.getElementById("calorimetria").style.display = "block";
            window.document.getElementById("menus").style.display = "none";
            break
        default:
            alert("deu ruim");
            break;
    }
}

function retorno(v) {
    switch (v) {
        case "voltartermo":
            window.document.getElementById("termometria").style.display = "none";
            window.document.getElementById("menus").style.display = "block";
            break;

        case "vt_cal":
            window.document.getElementById("calorimetria").style.display = "none";
            window.document.getElementById("menus").style.display = "block";
            break;

        default:
            break;
    }
}

function termo() {
    //capturando os valores
    var c = window.document.getElementById("c");
    var f = window.document.getElementById("f");
    var k = window.document.getElementById("k");
    //convertendo para numero
    var c_n = Number(c.value);
    var f_n = Number(f.value);
    var k_n = Number(k.value);
    if (c_n == 0 && f_n == 0 && k_n == 0) {
        alert("digite um valor valido");
    } else {
        //calculando celcius

        var celcius = c_n;
        var faren = f_n;
        var kelvin = k_n;

        if (c.value == 0) {
            celcius = k_n - 273; //
            if (k.value == 0) {
                celcius = (f_n - 32) / 1.8;
            }
        }

        //calculando farhrenheit

        if (f.value == 0) {
            faren = (k_n - 273) * 1.8 + 32; //
            if (k.value == 0) {
                faren = c_n * 1.8 + 32;
            }
        }

        //calculando kelvin

        if (k.value == 0) {
            kelvin = c_n + 273; //
            if (c.value == 0) {
                kelvin = ((f_n - 32) * 5) / 9 + 273;
            }
        }
        // inserindo devolta

        c.value = `${celcius}`;
        f.value = `${faren}`;
        k.value = `${kelvin}`;
    }
}

function erase() {
    c.value = 0;
    f.value = 0;
    k.value = 0;
}
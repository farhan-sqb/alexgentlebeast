window.onload = function(){
    calculation();
}

function calculation(){
    var ip_mw_1 = document.getElementById("ip_mw_1").value;
    var ip_mw_2 = document.getElementById("ip_mw_2").value;
    var ip_mw_3 = document.getElementById("ip_mw_3").value;

    var ip_p_1 = document.getElementById("ip_p_1").value;
    var ip_p_2 = document.getElementById("ip_p_2").value;
    var ip_p_3 = document.getElementById("ip_p_3").value;
    
    var ip_w_1 = document.getElementById("ip_w_1").value;
    
    var ip_e_2 = document.getElementById("ip_e_2").value;
    var ip_e_3 = document.getElementById("ip_e_3").value;

    var ip_d_1 = document.getElementById("ip_d_1").value;
    var ip_d_2 = document.getElementById("ip_d_2").value;
    var ip_d_3 = document.getElementById("ip_d_3").value;

    //Output 1
    if(ip_w_1 != "" && ip_d_1 != ""){
        var output_1 = ip_w_1 / ip_d_1;
        document.getElementById("output_1").innerHTML = output_1.toFixed(2);
    }

    //Output 2
    if(ip_mw_1 != "" && ip_p_1 != "" && ip_w_1 != ""){
        var output_2 = ip_w_1 / ip_d_1;
        output_2 = (ip_w_1 * ( ip_p_1 / ip_mw_1 )) / 100;
        document.getElementById("output_2").innerHTML = output_2.toFixed(4);
    }

    //Output 5
    var moles_1 = document.getElementById("output_2").innerHTML;
    if(moles_1 != "" && ip_e_2 != ""){
        var output_5 = moles_1 * ip_e_2;
        document.getElementById("output_5").innerHTML = output_5.toFixed(4);
    }

    //Output 3
    var moles_5 = document.getElementById("output_5").innerHTML;
    if(moles_5 != "" && ip_mw_2 != "" && ip_p_2 != ""){
        var output_3 = (moles_5 * ( ip_mw_2 / ip_p_2 )) * 100;
        document.getElementById("output_3").innerHTML = output_3.toFixed(2);
    }

    //Output 4
    var weight_3 = document.getElementById("output_3").innerHTML;
    if(weight_3 != "" && ip_d_2 != ""){
        var output_4 = weight_3 / ip_d_2;
        document.getElementById("output_4").innerHTML = output_4.toFixed(2);
    }

    //Output 8
    var moles_1 = document.getElementById("output_2").innerHTML;
    if(moles_1 != "" && ip_e_3 != ""){
        var output_8 = moles_1 * ip_e_3;
        document.getElementById("output_8").innerHTML = output_8.toFixed(4);
    }

    //Output 6
    var moles_8 = document.getElementById("output_8").innerHTML;
    console.log(ip_mw_3);
    if(moles_8 != "" && ip_mw_3 != "" && ip_p_3 != ""){
        var output_6 = (moles_8 * ( ip_mw_3 / ip_p_3 )) * 100;
        document.getElementById("output_6").innerHTML = output_6.toFixed(2);
    }

    //Output 7
    var output_6 = document.getElementById("output_6").innerHTML;
    if(output_6 != "" && ip_d_3 != ""){
        var output_7 = output_6 / ip_d_3;
        document.getElementById("output_7").innerHTML = output_7.toFixed(2);
    }


}
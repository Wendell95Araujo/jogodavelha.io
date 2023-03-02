$(function(){
var vez = 1;
var vencedor = "";
var jogador = "";
var jogador1 = "";
var jogador2 = "";
var empate = 0;
var placar1 = 0;
var placar2 = 0;
function casasIguais(a, b, c){
    var casaA = $("#casa"+a);
    var casaB = $("#casa"+b);
    var casaC = $("#casa"+c);
    var bgA = $("#casa"+a).css("background-image");
    var bgB = $("#casa"+b).css("background-image");
    var bgC = $("#casa"+c).css("background-image");
    if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
        if(bgA.indexOf("1.jpg") >= 0)
            vencedor = "1";
        else
            vencedor = "2";

        $("#imagem1").css("border", "solid 0px");
        $("#imagem2").css("border", "solid 0px");
        return true;
    }
    else{
        verificaEmpate();
        return false;
    }
}
function verificarFimDeJogo(){
    if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
        casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
        casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
        ){
    	if(vencedor == "1"){
            jogador1 = $("#jogador1").val().toUpperCase();
    		jogador = jogador1;
            placar1 = placar1 +1
            $("#placar1").html(placar1)

    	}
    	else{
            jogador2 = $("#jogador2").val().toUpperCase();
    		jogador = jogador2;
            placar2 = placar2 +1
            $("#placar2").html(placar2);
    	}
        $("#resultado").html("<h1>" + jogador + " venceu! </h1>");
        $("#leitor").val(jogador + " venceu!");
        $(".casa").off("click");
    }
}
$(".casa").click(function(){
    jogador1 = $("#jogador1").val().toUpperCase();
    jogador2 = $("#jogador2").val().toUpperCase();
    var bg = $(this).css("background-image");
    if(jogador1 == ""){
        alert("preencha o campo nome do jogador 1");
    } else if(jogador2 == ""){
        alert("preencha o campo nome do jogador 2");
    } else{
        if(bg == "none" || bg == ""){           
            var fig = "url(" + vez.toString() + ".jpg)";
            $(this).css("background", fig);
            vez = (vez == 1? 2:1);
            if(vez ==1){
                $("#imagem1").css("border", "solid 1px");
                $("#imagem2").css("border", "solid 0px");
            }else{
                $("#imagem1").css("border", "solid 0px");
                $("#imagem2").css("border", "solid 1px");
            }

            empate = empate + 1;   
            verificarFimDeJogo();
        }
    }
});


$("#reiniciar").click(function(){
    $(".casa").css("background", "none");
    $("#resultado").html("");
    empate = 0;
    $(".casa").on("click",function(){
        jogador1 = $("#jogador1").val().toUpperCase();
        jogador2 = $("#jogador2").val().toUpperCase();
        var bg = $(this).css("background-image");
        if(jogador1 == ""){
            alert("preencha o campo nome do jogador 1");
        } else if(jogador2 == ""){
            alert("preencha o campo nome do jogador 2");
        } else{
            if(bg == "none" || bg == ""){           
                var fig = "url(" + vez.toString() + ".jpg)";
                $(this).css("background", fig);
                vez = (vez == 1? 2:1);
                $("#imagem"+vez).css("border", "solid 1px");
                if(vez ==1){
                    $("#imagem1").css("border", "solid 1px");
                    $("#imagem2").css("border", "solid 0px");
                }else{
                    $("#imagem1").css("border", "solid 0px");
                    $("#imagem2").css("border", "solid 1px");
                }
                empate = empate + 1;
                verificarFimDeJogo();
            }       
    }
});
});

function verificaEmpate(){
    if(empate >=9){
        $("#imagem1").css("border", "solid 0px");
        $("#imagem2").css("border", "solid 0px");
        $("#resultado").html("<h1>EMPATE!</h1>");
        $("#leitor").val("jogo terminou em empate!");
    }else {
        verificarvez()
    }
}

$("#novojogo").click(function(){
    $(".casa").css("background", "none");
    $("#resultado").html("");
    empate = 0;
    placar1 = 0;
    placar2 = 0;
    $("#placar1").html(placar1);
    $("#placar2").html(placar2);
    $("#jogador1").val("");
    $("#jogador2").val("");
    $(".casa").on("click",function(){
        jogador1 = $("#jogador1").val().toUpperCase();
        jogador2 = $("#jogador2").val().toUpperCase();
        var bg = $(this).css("background-image");
        if(jogador1 == ""){
            alert("preencha o campo nome do jogador 1");
        } else if(jogador2 == ""){
            alert("preencha o campo nome do jogador 2");
        } else{
            if(bg == "none" || bg == ""){           
                var fig = "url(" + vez.toString() + ".jpg)";
                $(this).css("background", fig);
                vez = (vez == 1? 2:1);
                $("#imagem"+vez).css("border", "solid 1px");
                if(vez ==1){
                    $("#imagem1").css("border", "solid 1px");
                    $("#imagem2").css("border", "solid 0px");
                }else{
                    $("#imagem1").css("border", "solid 0px");
                    $("#imagem2").css("border", "solid 1px");
                }
                empate = empate + 1;
                verificarFimDeJogo();
            }       
    }
});
});

function verificarvez(){
    vezJogador = $("#jogador"+vez).val();
    $("#leitor").val("Sua vez " + vezJogador);
}

});
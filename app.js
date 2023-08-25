//Define uma função global chamada main, que é o ponto de entrada pra execução do app
/*var main = function () {
	// interpretação mais correta da linguagem
	"use strict";
	window.alert("hello world");
};*/

//Usa Jquery para configurar a execução da função main
//apos o docuento esta totalmente carregado.
var main = function(){
	"use strict";
	//Capturar evento do click
	$(".comment-input button").on("click", function(event){
		var $new_comment;
		if ($(".comment-input input").val() !== ""){
			/*$new_comment = $("<p>"),
				comment_text = $(".comment-input input").val();
			$new_comment.text(comment_text);*/
			$new_comment = $("<p>").text($(".comment-input input").val());
			/*esconde o elemento
			$new_comment.hide();*/
			$(".comments").append($new_comment);
			/*faz aparecer gradualmente
			$new_comment.fadeIn();*/
			//Limpar a caixa de comentarios
			//$(".comment-input input").val("");
		}
	});
	/*Verificar qual keycode corresponde a tecla apertada*/
	$(".comment-input input").on("keypress", function(event){
		console.log("this is a keyCode "+ event.keyCode);
	});
	//Capturar evento de pressionar botão enter
	$(".comment-input button").on("keypress", function(event){
		var $novo_comentario;
		if (event.keyCode === 13){
			if ($(".comment-input input").val() !== ""){
				$novo_comentario = $("<p>").text($(".comment-input input").val());
				$novo_comentario.hide();
				$(".comments").append($novo_comentario);
				$novo_comentario.fadeIn();
				$(".comment-input input").val("");
			}
		}
	});
	/*Código Refatorado
	var main = function () {
		"use strict";
		
		var addCommentFromInputBox = function () {
		    var $new_comment;

		    if ($(".comment-input input").val() !== "") {
		        $new_comment = $("<p>").text($(".comment-input input").val());
		        $new_comment.hide();
		        $(".comments").append($new_comment);
		        $new_comment.fadeIn();
		        $(".comment-input input").val("");
		    }
		};

		$(".comment-input button").on("click", function (event) {
		    addCommentFromInputBox();
		});

		$(".comment-input input").on("keypress", function (event) {
		    if (event.keyCode === 13) {
		            addCommentFromInputBox();
		    }
		});
	};

	$(document).ready(main);
	*/
	
};
/*Esse codigo contem o bug de permitir adicionar linhas vazias*/
$(document).ready(main);
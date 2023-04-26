var main = function(){
	"use strict";
	$(".comment-input button").on("click", function(event){
		if($(".comment-input input").val() !== ""){
			var $novo_comentario = $("<p>"),
			comment_text = $(".comment-input input").val();
			$novo_comentario.text(comment_text);
			$novo_comentario.hide();//Esconde o texto
			$(".comments").append($novo_comentario);
			$novo_comentario.fadeIn();// Exibe gradualmente
			$(".comment-input input").val("");
		}
	});
};

$(".comment-input input").on("keypress", function(event){
	console.log("keyCode "+ event.keyCode);
});

$(document).ready(main);
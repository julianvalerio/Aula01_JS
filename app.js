var main = function(){
	"use strict";
	var addComentario = function(){
		var $novo_comentario;
		if($(".comment-input input").val() !== ""){
			$novo_comentario = $("<p>").text($(".comment-input input").val());
			$novo_comentario.hide();
			$(".comments").append($novo_comentario);	
			$novo_comentario.fadeIn();
			$(".comment-input input").val("");
		}
	};
	$(".comment-input button").on("click", function(event){
		addComentario();
	});
	$(".comment-input input").on("keypress", function(event){
		if(event.keyCode === 13){
			addComentario();
		}
	});
};
$(document).ready(main);
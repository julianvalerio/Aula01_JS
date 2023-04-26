var main = function(){
	"use strict";
	$(".comment-input button").on("click", 
		function(event){
			var $novo_comentario = $("<p>"),comment_text = $(".comment-input input").val();
			$novo_comentario.text(comment_text);
			$(".comments").append($novo_comentario);
	});
};

$(document).ready(main);
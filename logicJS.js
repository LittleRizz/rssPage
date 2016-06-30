$(document).ready(function logicJS(){
	//okay, here we go, let's see what I can still remember
	console.log("Operational.  Let's do this like Brutus.");
	$.get('http://rss.cnn.com/rss/cnn_topstories.rss',
		function (data){
			$(data).find("item").each(function(){
				var el =$(this);

				console.log("Hey it worked!");
				console.log(el);
			}); 
		});
});
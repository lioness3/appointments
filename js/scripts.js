$(document).ready(function(){
 $("#user").submit(function(event){
 var name = $("input#username").val();
 var description = $("input#userdescriptipon").val();
 var date = $("input##userdate").val();
 var time = $("input#usertime").val();

 $(".username").text("name");
 $(".userdate").text("date");
 $(".usertime").text("time");
 $(".userdescriptipon").text("description")

 event.preventDefault();
 });
});

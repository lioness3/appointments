$(document).ready(function(){
 $("#user").submit(function(event){
 var name = $("input#username").val();
 var description = $("input#userdescriptipon").val();
 var date = $("input#userdate").val();
 var time = $("input#usertime").val();

 $(".username").append(name);
 $(".userdate").append(date);
 $(".usertime").append(time);
 $(".userdescriptipon").append(description);

 event.preventDefault();
 $(".response").show();
 });
});

$("button").click(function() {
 $(".name").val();
 $(".hour").val();
 $(".blanket").val();
    var Name = $(".name").val();
    var Hours = parseInt($(".hour").val()) *43;
    var Blanket = $(".blanket").val();
  $("#p").append(Name);  
  $("#Time").append(Hours);
  $("#Color").append(Blanket);
});
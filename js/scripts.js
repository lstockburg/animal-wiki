$(document).ready(function() {
  $("button").click(function() {
    var btnname= this.id;
    $(".animalinfo").hide();
    if (btnname === "gatorbtn") {
      $("#gator").show();
    }
    else {

    }
  });
});

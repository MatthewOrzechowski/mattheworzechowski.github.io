$(document).ready(function() {

  $(".morestate").click(function() {
    $(".morestatement").show();
    $(".keywords").show();
    $('.lessstate').show();
    $(".morestate").hide();
  })

  $(".lessstate").click(function() {
    $(".morestatement").hide();
    $(".keywords").hide();
    $('.lessstate').hide();
    $(".morestate").show();
  })

  $("#morequest").click(function() {
    $("#morequestions").show();
    $("#moreanswers").show();
    $('#lessquest').show();
    $("#morequest").hide();
  })

  $("#lessquest").click(function() {
    $("#morequestions").hide();
    $("#moreanswers").hide();
    $('#lessquest').hide();
    $("#morequest").show();
  })

  $("#morecomm1").click(function() {
    $(".moresubcomments1").show();
    $('#lesscomm1').show();
    $("#morecomm1").hide();
  })

  $("#lesscomm1").click(function() {
    $(".moresubcomments1").hide();
    $("#lesscomm1").hide();
    $("#morecomm1").show();
  })

    $("#morecomm2").click(function() {
    $(".moresubcomments2").show();
    $('#lesscomm2').show();
    $("#morecomm2").hide();
  })

  $("#lesscomm2").click(function() {
    $(".moresubcomments2").hide();
    $("#lesscomm2").hide();
    $("#morecomm2").show();
  })
   
});
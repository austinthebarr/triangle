var sum = function(input1,input2){
  return input1 + input2;
};

$(function(){
  $("#triangleForm").submit(function(event){

  var side1 = parseInt($("input#side1").val())
  var side2 = parseInt($("input#side2").val())
  var side3 = parseInt($("input#side3").val())




  if (side1 === side2 && side2 === side3){
    $("#Equilateral").show()
    $("#Isosceles").hide()
    $("#Scalene").hide()
    $("#NOT-a-triangle").hide()
  } if (side1 === side2 || side2 === side3 || side1 === side3){
    $("#Isosceles").show()
    $("#Equilateral").hide()
    $("#Scalene").hide()
    $("#NOT-a-triangle").hide()
  } if (side1 !== side2 && side2 !== side3 && side1 !== side3){
    $("#Scalene").show()
    $("#Equilateral").hide()
    $("#Isosceles").hide()
    $("#NOT-a-triangle").hide()
  } if (sum(side1,side2) <= side3 || sum(side2,side3) <= side1 || sum(side3,side1) <= side2){
    $("#NOT-a-triangle").show()
    $("#Equilateral").hide()
    $("#Isosceles").hide()
    $("#Scalene").hide()
  };
    event.preventDefault()

  });
});

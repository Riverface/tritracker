var tri1 = 0;
var tri2 = 0;
var tri3 = 0;
function calctriangle()
{
  console.log(tri1 + tri2 + tri3);
  tri1 = $("#tri1").val();
  tri2  = $("#tri2").val();
  tri3  = $("#tri3").val();

  if(tri1 == tri2 && tri2 == tri3 && tri3 == tri1)
  {
    console.log(tri1 + tri2 + tri3);
    /* Equilateral  */
    tritype = "Equilateral";
    $(".triangle").html(tritype);
  }

  else if(tri1 === tri2 && tri2 != tri3 || tri2 == tri3 && tri2 != tri1)

  {

    console.log(tri1 + tri2 + tri3);
    /* Isosceles  */
    tritype = "isosceles";
    $(".triangle").html(tritype);
  }

  else if(tri1 !== tri2 && tri2 !== tri3 && tri1 != tri3)
  {
    console.log(tri1 + tri2 + tri3);
    tritype = "scalene";
    $(".triangle").html(tritype);
  }
if((tri1 + tri2) > tri3 || (tri1 > tri2) + tri3 || (tri3 > tri2) + tri1)
{
tritype = "not a triangle"
    $(".triangle").html(tritype);
}
}
$(document).ready(function(){

  });

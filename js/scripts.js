var tri1 = 0;
var tri2 = 0;
var tri3 = 0;

  var isosc = false;
  var scal = false;
  var equi = false;
  var notatriangle;
function calctriangle()
{
  notri();

  if(!notatriangle)
{

  iso();
  equil();
  scalene();
}

if(notatriangle)
{
}
}

$(document).ready(function(){
  $("#calcbutton").click(function(){
    tri1  = parseFloat($("#tri1").val());
    tri2  = parseFloat($("#tri2").val());
    tri3  = parseFloat($("#tri3").val());
    calctriangle();
    });
  });

  function notri()
  {
    notatriangle = (tri1 + tri2) <= tri3;
    notatriangle = notatriangle || tri1 >= (tri2 + tri3);
    notatriangle = notatriangle || tri2 >= (tri1 + tri3);
    notatriangle = notatriangle || (tri1 == 0||tri2 == 0 || tri3 == 0);
    notatriangle = notatriangle || ( isNaN(tri1) || isNaN(tri2) ||  isNaN(tri3));

    if(notatriangle)
    {
      tritype = "not a triangle";
        $(".triangle").html(tritype);
    }
  }

  function iso()
  {
    isosc = tri1 == tri2 && tri1 != tri3;
    isosc = isosc || tri1 == tri3 && tri1 != tri2;
    isosc = isosc || tri2 == tri3 && tri2 != tri1;
    isosc = isosc || tri1 == tri2 && tri2 != tri3;
    if (isosc  )
    {
      tritype = "isosc";
        $(".triangle").html(tritype);
    }
  }

  function equil()
  {

    equi = tri1 == tri2 && tri1 == tri3;
    if(equi)
    {
      tritype = "equilateral";
        $(".triangle").html(tritype);
    }
  }

  function scalene()
  {

    scal = tri1 !== tri2 && tri1 != tri3 && tri2 != tri3;
    if(scal)
    {
      tritype = "scalene";
        $(".triangle").html(tritype);
    }

  }

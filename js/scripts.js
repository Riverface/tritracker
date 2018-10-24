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

    tri1  = parseInt($("#tri1").val());
    tri2  = parseInt($("#tri2").val());
    tri3  = parseInt($("#tri3").val());
    calctriangle();

    });
  });

  function notri()
  {

    notatriangle = (tri1 + tri2) <= tri3;
    notatriangle = notatriangle || tri1 >= (tri2 + tri3);

    notatriangle = notatriangle || tri2 >= (tri1 + tri3);

    notatriangle = notatriangle || (tri1 == 0||tri2 == 0 || tri3 == 0);

    notatriangle = notatriangle || (tri1  == NaN || tri2  == NaN || tri3  == NaN);

    console.log("test4");
    console.log(notatriangle);
    if(notatriangle)
    {
          console.log(notatriangle);
      tritype = "not a triangle";
        $(".triangle").html(tritype);
    }
  }

  function iso()
  {
    isosc = tri1 == tri2 && tri1 != tri3;

    isosc = isosc || tri1 == tri3 && tri1 != tri2;
            console.log( tri1 + " " + tri2 + " " + tri3);

    isosc = isosc || tri2 == tri3 && tri2 != tri1;

    isosc = isosc || tri1 == tri2 && tri2 != tri3;

    console.log("isosceles" + isosc);
    if (isosc  )
    {
                    console.log("isosceles");
      tritype = "isosc";
        $(".triangle").html(tritype);
    }
  }

  function equil()
  {

    equi = tri1 == tri2 && tri1 == tri3;
              console.log(equi);
    console.log(equi);
    if(equi)
    {
              console.log("equilateral");
      tritype = "equilateral";
        $(".triangle").html(tritype);
    }
  }

  function scalene()
  {

    scal = tri1 !== tri2 && tri1 != tri3 && tri2 != tri3;
    console.log(scal);
    if(scal  )
    {
      tritype = "scalene";
        $(".triangle").html(tritype);
        console.log("scalene");
    }

  }

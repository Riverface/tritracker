var tri1 = 0;
var tri2 = 0;
var tri3 = 0;
function calctriangle()
{
  console.log(tri1 + tri2 + tri3);
  tri1  = parseInt($("#tri1").val());
  tri2  = parseInt($("#tri2").val());
  tri3  = parseInt($("#tri3").val());
  var notatriangle;
  notatriangle = false;

  var isosc = false;
  var scal = false;
  var equi = false;
  notri();
  if(notatriangle == false)
{
  iso();
  equil();
  scalene();
}
if(notatriangle == true)
{
}

}

$(document).ready(function(){

  });

  function notri()
  {

    notatriangle = (tri1 + tri2) < tri3;
    notatriangle = notatriangle || tri1 > (tri2 + tri3);

    console.log("test1");
    console.log(notatriangle);

    notatriangle = notatriangle || tri2 > (tri1 + tri3);

    console.log("test2");
    console.log(notatriangle);

    notatriangle = notatriangle || (tri1 == 0||tri2 == 0 || tri3 == 0);

    console.log(notatriangle);
    console.log("test3");
    console.log(notatriangle);

    notatriangle = notatriangle || (tri1  == NaN || tri2  == NaN || tri3  == NaN);

    console.log("test4");
    console.log(notatriangle);
    if( notatriangle == true)
    {
      tritype = "not a triangle";
        $(".triangle").html(tritype);
    }
  }

  function iso()
  {
    isosc = tri1 == tri2 && tri1 != tri3;
        console.log(isosc);
    isosc = isosc || tri1 == tri3 && tri1 != tri2;
            console.log(isosc);
    isosc = isosc || tri2 == tri3 && tri2 != tri1;
            console.log(isosc);
    isosc = isosc || tri1 == tri2 && tri2 != tri3;
            console.log(isosc);
    console.log("isosceles" + isosc);
    if (isosc == true)
    {
                    console.log("isosceles");
      tritype = "isosc";
        $(".triangle").html(tritype);
    }
  }

  function equil()
  {

    equi = tri1 == tri2 == tri3;

    console.log(equi);
    if(equi == true)
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
    if(scal == true)
    {
      tritype = "scalene";
        $(".triangle").html(tritype);
        console.log("scalene");
    }

  }

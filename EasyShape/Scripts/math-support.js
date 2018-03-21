var MathSupport = {

    /*
    Upon given the side length and the number of sides of a regular polygon, this will calculate the radius
    This uses the common geometry function
     Radius = sideLendth/Sin(180/numberOfSides)
    */
    CalculateRadius:function (sideLength, numberOfSides) {

        //pi==180 degrees
        return sideLength / (2 * Math.sin(Math.PI / numberOfSides));

    }


}
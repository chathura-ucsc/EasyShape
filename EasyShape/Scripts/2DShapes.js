paper.install(window);

window.onload = function () {
    paper.setup('shape');
};

var twoDShapes = {

    LineColor: "blue",
    Circle: function (radius) {
        project.activeLayer.removeChildren();
        //radius is coming as pixels. The library uses pt/points. 1px=0.75pt
        //starting point is taken as the below
        var myCircle = new Path.Circle(new Point(radius+100, radius +100), (radius * 0.75));
        twoDShapes.AddStyles(myCircle);
        paper.view.draw()
    },
    Square: function (sideLength) {
        project.activeLayer.removeChildren();
        var squareSize = new Size((sideLength * 0.75), (sideLength * 0.75));
        var square = new Rectangle(new Point(100, 100), squareSize);
        var mySquare = new Path.Rectangle(square);
        twoDShapes.AddStyles(mySquare);
        paper.view.draw()

    },
    ScaleneTriangle: function (height, width) {

        project.activeLayer.removeChildren();
        var point1 = new Point((width+100), height+100);
        //convert px to pt
        var point2 = new Point(point1.x + (width * 0.75), point1.y);

        // we assume that the height is not equal to the width.
        // we can create a triangle which contains 90 degrees 
        var point3 = new Point(point1.x, point1.y - (height * 0.75));

        var path1 = new Path.Line(point1, point2);
        var path2 = new Path.Line(point2, point3);
        var path3 = new Path.Line(point1, point3);

        twoDShapes.AddStyles(path1);
        twoDShapes.AddStyles(path2);
        twoDShapes.AddStyles(path3);
        paper.view.draw()
    },
    IsoscelesTriangle: function (height, width) {

        project.activeLayer.removeChildren();
        var point1 = new Point((width+100), height+100);
        //convert px to pt
        var point2 = new Point(point1.x + (width * 0.75), point1.y);
        //in isosceles triangles, height of the triangle equally divides the base
        //width/2 ==> convert to pt => *0.75 == 0.375
        var point3 = new Point(point1.x + (width * 0.375), point1.y - (height * 0.75));
        
        var path1 = new Path.Line(point1, point2);
        var path2 = new Path.Line(point2, point3);
        var path3 = new Path.Line(point1, point3);

        twoDShapes.AddStyles(path1);
        twoDShapes.AddStyles(path2);
        twoDShapes.AddStyles(path3);
        paper.view.draw()
    },
    Parallelogram: function (baselength, height) {
        
        project.activeLayer.removeChildren();
        var point1 = new Point((baselength+100), height+100);
        //convert px to pt
        var point2 = new Point(point1.x + (baselength * 0.75), point1.y);
        //here, we have been given only the base length and the height, so we have hard coded the
        // amount the parrellel line move farward---> its 1/4th of the baselength --> convert to pt
        //0.75*0.25==0.1875
        var point3 = new Point(point1.x + (baselength * 0.1875), point1.y - (height * 0.75));
        var point4 = new Point(point2.x + (baselength * 0.1875), point2.y - (height * 0.75));

        var path1 = new Path.Line(point1, point2);
        var path2 = new Path.Line(point1, point3);
        var path3 = new Path.Line(point2, point4);
        var path4 = new Path.Line(point4, point3);

        twoDShapes.AddStyles(path1);
        twoDShapes.AddStyles(path2);
        twoDShapes.AddStyles(path3);
        twoDShapes.AddStyles(path4);

        paper.view.draw()
    },
    /*
    This will generate a regular polygon with the given side length  and the number of sides
    Ex: Equilateral Triangle
    */
    RegularPolygon: function (sideLength, numberOfSides) {
        project.activeLayer.removeChildren();
        var radius = MathSupport.CalculateRadius(sideLength, numberOfSides) * 0.75; //convert the radius to pt
        var polygon = new Path.RegularPolygon(new Point(radius+100, radius+100), numberOfSides, radius);
        twoDShapes.AddStyles(polygon);
        paper.view.draw()
    },
    Rectangle: function (height, width) {
        project.activeLayer.removeChildren();
        //height and weight are coming as pixels. The library uses pt/points. 1px=0.75pt
        var rectSize = new Size((width * 0.75), (height * 0.75));
        var rectangle = new Rectangle(new Point(100, 100), rectSize);
        var myRectangle = new Path.Rectangle(rectangle);
        twoDShapes.AddStyles(myRectangle);
        paper.view.draw()
    },
    Oval: function (height, width) {
        project.activeLayer.removeChildren();
        var rectangle = new Rectangle(new Point(100,100), new Size(width * 0.75, height * 0.75));
        var oval = new Path.Ellipse(rectangle);
        twoDShapes.AddStyles(oval);
        paper.view.draw()

    },
    /*
    This is useful when styling the shapes
    */
    AddStyles: function (path) {
        path.strokeColor = twoDShapes.LineColor;
    }

};
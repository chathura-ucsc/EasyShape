########EASY SHAPE######

This has been built as an assignment

(1) This is an ASP.Net MVC Web Application Solution
(2) This contains two projects - MVC Web project and regular support project
(3) In this solution, I have done the logical separation as follows
(4) Sentence validation/parsing has been done in the back end using C#-- Display logics are in the front end
(when validating the sentence, I have done both client and server side validation, but input is processed/parsed in the back-end)
(5) Since there is a format, I used regular expressions.
(6) I allowed easy modification using dynamic .net objects rather than static ones.
(7) Patterns are defined in the Web.config file.Any new shape can be added there. So without recompiling we can do that.
(8) In-order to support easy modification, most of the tasks has been give to the JavaScript to resolve.

##Nuget Packages###
 (1) Unity has been used as a dependency resolver
 (2) two(2) nuget packages (Papaer.js for 2DShapes and Three.Js(3D shapes) were used for shapes generations.

 -- The main focus was to support 2d shapes. One 3D shape was implemented just to elaborate the easy extension without recompiling

--For more information, please refer the code.

##### COMMANDS#####
-- All the 2D measurements are in pixels. 3D measurements are in SI units (m) -- They are with a ratio

--If we add larger values, object is going out of the canvas

(1) Draw a circle with a radius of 100
(2) Draw a square with a side length of 200
(3) Draw a rectangle with a width of 250 and a height of 400
(4) Draw an octagon with a side length of 200
(5) Draw an isosceles triangle with a height of 200 and a width of 100
(6) Draw an Scalene Triangle with a height of 200 and a width of 100
(7) Draw an Parallelogram with a height of 200 and a base length of 100
(8) Draw a Equilateral Triangle with a side length of 200
(9) Draw a Pentagon with a side length of 200
(10)Draw a Hexagon with a side length of 200
(11)Draw a Heptagon with a side length of 200
(12)Draw an oval with a width of 250 and a height of 40
(13)Draw a cube with a width of 3 and a height of 4 and a depth of 2

-----Chathura Weerasooriya-------waachathura@gmail.com--------

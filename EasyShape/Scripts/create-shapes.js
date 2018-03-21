var CreateShapes = {

    DelayTime: 1000,

    CommandPattern: /^draw (a|an) (isosceles triangle|square|scalene triangle|parallelogram|equilateral triangle|pentagon|rectangle|hexagon|heptagon|octagon|circle|oval|cube) with a (height|length|side length|width|radius|base length|depth) of [0-9]+( and a (height|length|side length|width|radius|base length|depth) of [0-9]+)*$/,

    /*
    This will send the command to the server-->back end for processing
    */
    SendCommand: function () {

        Common.AddPageOverlay();

        CreateShapes.ResetMessage();

        var command = $("#simpleCommand").val().trim().toLowerCase();;

        var message = CreateShapes.ValidateCommand(command);

        if (message) { //message is not empty

            CreateShapes.DisplayMessage(message, "error-message");
            Common.RemovePageOverlay();
            return;
        }
        //if we do not find any basic error, we do a server call to parse the command
        $.ajax({
            url: "Create",  //controller - Shape - Action - Create - Post method -- default  controler is Shape -> so no need to define
            cache: false,
            data: JSON.stringify({ drawCommand: command }),
            dataType: 'json',
            contentType: 'application/json',
            type: 'POST'

        }).done(function (data) {

            var result = JSON.parse(data.Shape);
            if (result.IsValid) {
                CreateShapes.GenerateShape(result);
            }
            else {
                CreateShapes.DisplayMessage(result.ErrorMessage, "error-message");
            }


        }).fail(function (xhr, status, ex) {
            CreateShapes.DisplayMessage(ex, "error-message");
        }).always(function () {
            Common.RemovePageOverlay();
        });

    },
    /*
    This will validate the command
    */
    ValidateCommand: function (command) {

        var message = "";

        if (!command) { //command is empty

            message = "Please enter a command in the given format.";
        }

        else if (!CreateShapes.CommandPattern.test(command)) {
            message = "Invalid command";
        }


        return message;

    },

    /*
    This will display the message with given styles

    */
    DisplayMessage: function (message, cssclass) {

        CreateShapes.ResetMessage();

        $("#message").addClass(cssclass);
        $("#message").text(message);
        $("#message").show(CreateShapes.DelayTime);

    },

    /*
    This will remove modifications of the message div element
    */
    ResetMessage: function () {

        $("#message").hide(CreateShapes.DelayTime);
        $("#message").removeClass("error-message");
        $("#message").removeClass("success-message");
    },

    /*
    This will call the relevant method in the 2DShape or 3DShape js objects to generate the shape
    */
    GenerateShape: function (shape) {
        //remove the previous 3d scene if it is there
        $("canvas:not(.canvas)").remove();
        //show the 2d canvas if it is hidden
        $("#shape").show();
        switch (shape.ShapeName) {
            case "square":
                if (!shape.sidelength) { //side length is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                twoDShapes.Square(shape.sidelength);
                break;
            case "isosceles triangle":
                if (!shape.height || !shape.width) { //height or width is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                twoDShapes.IsoscelesTriangle(shape.height, shape.width);
                break;
            case "scalene triangle":
                if (!shape.height || !shape.width) { //height or width is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                twoDShapes.ScaleneTriangle(shape.height, shape.width);
                break;
            case "equilateral triangle":
                if (!shape.sidelength) { //side length is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                twoDShapes.RegularPolygon(shape.sidelength, 3);
                break;
            case "pentagon":
                if (!shape.sidelength) { //side length is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                twoDShapes.RegularPolygon(shape.sidelength, 5);
                break;
            case "hexagon":
                if (!shape.sidelength) { //side length is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                twoDShapes.RegularPolygon(shape.sidelength, 6);
                break;
            case "octagon":
                if (!shape.sidelength) { //side length is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                twoDShapes.RegularPolygon(shape.sidelength, 8);
                break;
            case "heptagon":
                if (!shape.sidelength) { //side length is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                twoDShapes.RegularPolygon(shape.sidelength, 7);
                break;
            case "parallelogram":
                if (!shape.baselength || !shape.height) { //height or base length is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                twoDShapes.Parallelogram(shape.baselength, shape.height);
                break;
            case "rectangle":
                if (!shape.height || !shape.width) { //height or width is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                twoDShapes.Rectangle(shape.height, shape.width);
                break;
            case "oval":
                if (!shape.height || !shape.width) { //height or width is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                twoDShapes.Oval(shape.height, shape.width);
                break;
            case "circle":
                if (!shape.radius) { //radius is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                twoDShapes.Circle(shape.radius);
                break;
            case "cube":
                if (!shape.depth || !shape.width || !shape.height) { //width or depth or height is not defined
                    CreateShapes.DisplayMessage("Invalid command", "error-message");
                    break;
                }
                threeDShapes.Cube(shape.width, shape.height, shape.depth);
                //hide the two-D canvas
                $("#shape").hide();
                break;
            default:
                CreateShapes.DisplayMessage("Invalid Shape", "error-message");

        }
    }

};

using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Text.RegularExpressions;

namespace CommandProcessor
{
    public class BasicStringProcessor : ICommandProcessor
    {
        /// <summary>
        /// This will process the command and return an object which contains command info - shape info
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        public Object ProcessCommand(string command)
        {
            var message = ValidateCommand(command);

            //we use the dynamic object, because we can change the properties on the fly 
            dynamic dynamicObject = new ExpandoObject();

            if (!String.IsNullOrEmpty(message)) //if the validation message is not empty
            {                                  
                dynamicObject.IsValid = false;
                dynamicObject.ErrorMessage = message;

                return dynamicObject;
            }

            //if the command is valid            
            dynamicObject.ShapeName = Regex.Match(command, WebConfig.ShapePattern, RegexOptions.IgnoreCase).Value; //get the shape name
            dynamicObject.IsValid = true;

            var measurements = Regex.Matches(command, WebConfig.DimensionPattern, RegexOptions.IgnoreCase);

            var objectDict= dynamicObject as IDictionary<string, object>;

            foreach (Match m in measurements)
            {
                //the pattern most of the times contains
                //  radius of 100,  side length of 200
                //so we remove 'of' part
                //then we capture the first two occurences/at most
                //then "radius" or "side length" can be taken
                //the relevant number is in the next value

                //we add properties to the dynamic object- remove spaces of the property name, if they have spaces
                //this will add length, width etc. properties with their value
                //this dynamic method was used to support any extensions
                objectDict.Add(Regex.Match(m.Value.Replace("of", ""), @"^[a-z]+ ([a-z]+)?").Value.Replace(" ",""), Int32.Parse(Regex.Match(m.Value, @"\d+$").Value));
            }

            return dynamicObject;

        }


        /// <summary>
        /// This will validate the command for basic structure
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        private string ValidateCommand(string command)
        {
            var message = "";
            if (!Regex.IsMatch(command, WebConfig.CommandPattern, RegexOptions.IgnoreCase)) //check whether the format is correct
            {
                message = "Invalid command format.";
            }
            return message;
        }
    }
}

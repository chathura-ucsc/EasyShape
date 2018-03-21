using CommandProcessor;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JeyLabs.Controllers
{
    public class ShapeController : Controller
    {

        private ICommandProcessor commandProcessor;

        public ShapeController(ICommandProcessor commandProcessor)
        {
            this.commandProcessor = commandProcessor;
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Create()
        {
            return View("CreateShape");
        }

        /// <summary>
        /// This is called by the Ajax call from the clint side with a command
        /// </summary>
        /// <param name="drawCommand"></param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult Create(string drawCommand)
        {   
            //convert the dynamic object to json string --> this will be helpfull to flatten the dynamic object
            return Json(new { Shape = JsonConvert.SerializeObject(commandProcessor.ProcessCommand(drawCommand)) });
        }
    }
}
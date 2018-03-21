using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommandProcessor
{
    public static class WebConfig
    {
        public static string CommandPattern
        {
            get { return ConfigurationManager.AppSettings["CommandPattern"]; }
        }

        public static string ShapePattern
        {
            get { return ConfigurationManager.AppSettings["ShapePattern"]; }
        }

        public static string DimensionPattern
        {
            get { return ConfigurationManager.AppSettings["DimensionPattern"]; }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace APICovid19.Controllers
{
    public class Covid19Controller : Controller
    {
        // GET: Covid19
        public ActionResult Index()
        {
            return View();
        }
    }
}
using Microsoft.AspNetCore.Mvc;

namespace Activity_5.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

using Microsoft.AspNetCore.Mvc;

namespace Activity_5.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

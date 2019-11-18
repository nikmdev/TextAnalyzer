using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TextAnalyzeLib;

namespace TextAnalyzerWebApp.Controllers
{
    [Route("api/[controller]")]
    public class MetricsController : Controller
    {
        private readonly IEnumerable<IMetric> metrics;

        public MetricsController(IEnumerable<IMetric> metrics)
        {
            this.metrics = metrics;
        }

        [HttpPost]
        public IEnumerable<MetricsResult> Index([FromBody] string textForAnalyze)
        {
            List<MetricsResult> results = new List<MetricsResult>();

            foreach (var metric in metrics)
            {
                results.Add(new MetricsResult()
                {
                    Title = metric.Title,
                    Result = metric.CalculateMetric(textForAnalyze)
                });
            }            

            return results;
        }

        public class MetricsResult
        {
            public string Title { get; set; }
            public string Result { get; set; }
        }
    }
}

using System;
using System.Linq;

namespace TextAnalyzeLib
{
    public class ProperNamesMetric : IMetric
    {
        public string Title => "Собственные имена";

        public bool IsActive { get; set; } = true;

        public int TopNResult { get; set; }

        public string CalculateMetric(string textForAnalyze)
        {
            var result = TextAnalyzeService.FindProperNames(textForAnalyze);

            return result.Length.ToString();
        }
    }
}

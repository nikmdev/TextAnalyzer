using System;
using System.Linq;

namespace TextAnalyzeLib
{
    public class MostRareMetric : IMetric
    {
        public string Title => "Самые редкие слова";

        public bool IsActive { get; set; } = true;
        
        public int TopNResult { get; set; } = 5;

        public string CalculateMetric(string textForAnalyze)
        {
            var result = TextAnalyzeService.OrderByMostCommonWords(textForAnalyze).TakeLast(TopNResult);
            
            return string.Join(", ", result);
        }
    }
}

using System;
using System.Linq;

namespace TextAnalyzeLib
{
    public class MostCommonWordsMetric : IMetric
    {
        public string Title => "Самые часто встречающиеся слова";

        public bool IsActive { get; set; } = true;

        public int TopNResult { get; set; } = 5;

        public string CalculateMetric(string textForAnalyze)
        {
            var result = TextAnalyzeService.OrderByMostCommonWords(textForAnalyze).Take(TopNResult);

            return string.Join(", ", result);
        }        
    }
}

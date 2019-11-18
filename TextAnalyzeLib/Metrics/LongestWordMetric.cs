using System;
using System.Linq;

namespace TextAnalyzeLib
{
    public class LongestWordMetric : IMetric
    {
        public string Title => "Длина самого длинного слова";

        public bool IsActive { get; set; } = true;

        public int TopNResult { get; set; }

        public string CalculateMetric(string textForAnalyze)
        {
            string result = string.Empty;

            result = TextAnalyzeService.FindLongestWord(textForAnalyze).Length.ToString();

            return result;
        }       
    }
}

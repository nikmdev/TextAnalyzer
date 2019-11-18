using System;
using System.Collections.Generic;
using System.Text;

namespace TextAnalyzeLib
{
    public interface IMetric
    {
        string Title { get; }

        bool IsActive { get; set; }

        int TopNResult { get; set; }

        string CalculateMetric(string textForAnalyze);
    }
}

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace TextAnalyzeLib
{
    static class TextAnalyzeService
    {
        private static readonly char[] splitSymbols = new char[] { ' ', '\u000A', ',', '.', ';', ':', '-', '?', '/' };

        internal static string[] OrderByMostCommonWords(string textForAnalyze)
        {
            return textForAnalyze
                     .Split(splitSymbols, StringSplitOptions.RemoveEmptyEntries)
                     .Where(w => w.Length > 4)
                     .GroupBy(w => w)
                     .Select(w => new {
                         KeyField = w.Key,
                         Count = w.Count()
                     })
                     .OrderByDescending(w => w.Count)
                     .Select(w => $"{w.KeyField.ToString()}({w.Count})").ToArray();

        }

        internal static string FindLongestWord(string textForAnalyze)
        {
            string[] words = textForAnalyze.Split(splitSymbols,
               StringSplitOptions.RemoveEmptyEntries);

            return (from w in words
                    orderby w.Length descending
                    select w).FirstOrDefault();
        }

        internal static string[] FindProperNames(string textForAnalyze)
        {
            string[] words = textForAnalyze.Split(splitSymbols,
               StringSplitOptions.RemoveEmptyEntries);

            return (from w in words
                    where w.Length > 1
                    && w.First() == Char.ToUpper(w.First()) 
                    select w).ToArray();
        }
    }
}
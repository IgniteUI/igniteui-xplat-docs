---
title: $Platform$ Data Chart | Data Visualization Tools | Data Source | Infragistics
_description: Use Infragistics' $Platform$ charts control to create range charts such as range area, range column and more. Learn about our $ProductName$ graph types!
_keywords: $Platform$ charts, data chart, range chart, $ProductName$, Infragistics, data source
mentionedTypes: ['XamDataChart']
---
# $Platform$ Sample Data Source for Range Series

This topic provides an example on how to implement data source for [Range Series](data-chart-type-range-series.md)

```razor
public class SampleRangeData
    {
        public static Random random = new Random();

        public static List<SampleRangeItem> Create()
        {
            var data = new List<SampleRangeItem>();
            var temperature = 25.0;

            for (var i = 1900; i < 2020; i++)
            {
                temperature += (random.NextDouble() - 0.485) * 0.5;
                var low  = (temperature + (random.NextDouble() * 1));
                var high = (temperature - (random.NextDouble() * 1));
                var item = new SampleRangeItem();
                item.Year = i;
                item.High = Math.Round(low * 10) / 10;
                item.Low = Math.Round(high * 10) / 10;
                data.Add(item);
            }
            return data;
        }
    }

    public class SampleRangeItem
    {
        public double High { get; set; }
        public double Low { get; set; }
        public int Year { get; set; }
    }
```

```ts
export class SampleRangeData {

    public static create(): any[] {
        let temperature = 25;
        const data: any[] = [];
        for (let i = 2000; i < 2025; i++) {
            temperature += (Math.random() - 0.5) * 0.5;
            const high = this.round(temperature + (Math.random() * 2));
            const low  = this.round(temperature - (Math.random() * 2));
            data.push({"High": high, "Low": low, "Index": i});
        }
        return data;
    }
    public static round(value: number) {
        return Math.round(value * 10) / 10;
    }
}
```
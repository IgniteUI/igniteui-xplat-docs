---
title: $Platform$ Data Chart | Data Visualization Tools | Data Source | Infragistics
_description: Use Infragistics' $Platform$ charts control to create financial charts such as Candlestick and OHLC and more. Learn about our $ProductName$ graph types!
_keywords: $Platform$ charts, data chart, financial, $ProductName$, Infragistics, data source
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries', 'FinancialSeries']
---
# $Platform$ Sample Data Source for Financial Series

This topic provides an example on how to implement data source for [Financial Series](data-chart-type-financial-series.md)

```razor
public class SampleFinancialData
    {
        public static Random random = new Random();
        public static List<SampleFinancialItem> Create(int itemsCount = 365)
        {
            var data = new List<SampleFinancialItem>();

            // initial values
            var v = 10000.0;
            var o = 500.0;
            var h = Math.Round(o + (random.NextDouble() * 5));
            var l = Math.Round(o - (random.NextDouble() * 5));
            var c = Math.Round(l + (random.NextDouble() * (h - l)));

            var today = DateTime.Now;
            var end = new DateTime(today.Year, 12, 31);
            var time = end.AddDays(-itemsCount);

            for (var i = 0; i < itemsCount; i++)
            {
                var date = time.ToShortDateString();
                var label = GetShortDate(time, false);
                // adding new data item
                var item = new SampleFinancialItem();
                item.Time = time;
                item.Date = date;
                item.Label = label;
                item.Close = c;
                item.Open = o;
                item.High = h;
                item.Low = l;
                item.Volume = v;
                data.Add(item);

                // generating new values
                var mod = random.NextDouble() - 0.49;
                o = Math.Round(o + (mod * 5 * 4));
                v = Math.Round(v + (mod * 5 * 100));
                h = Math.Round(o + (random.NextDouble() * 15));
                l = Math.Round(o - (random.NextDouble() * 15));
                c = Math.Round(l + (random.NextDouble() * (h - l)));
                time = time.AddDays(1);
            }
            return data;
        }

        public static string GetShortDate(DateTime dt, bool showYear)
        {
            var months = new List<string> {
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            };
            var ind = dt.Month - 1;
            var day = dt.Day;
            var label = months[ind] + " " + day;
            if (showYear)
            {
                label += " " + dt.Year;
            }
            return label;
        }
    }

    public class SampleFinancialItem
    {
        public double High { get; set; }
        public double Low { get; set; }
        public double Open { get; set; }
        public double Close { get; set; }
        public double Volume { get; set; }

        public string Label { get; set; }
        public string Date { get; set; }
        public DateTime Time { get; set; }
    }
```

```ts
export class SampleFinancialData {

    public static create(): any[] {
        // initial values
        let v = 10000;
        let o = 500;
        let h = o + (Math.random() * 5);
        let l = o - (Math.random() * 5);
        let c = l + (Math.random() * (h - l));

        const items = 100;
        const end = new Date(2020, 11, 1);
        let time = this.addDays(end, -items);

        const data: any[] = [];
        for (let i = 0; i < items; i++) {
            const label = time.toDateString();
            // adding new data item
            data.push({"Date": time, "Label": label, "Close": c, "Open": o, "High": h, "Low": l, "Volume": v});
            // generating new values
            const mod = Math.random() - 0.4;
            o = o + (mod * 5 * 2);
            v = v + (mod * 5 * 100 );
            h = o + (Math.random() * 5);
            l = o - (Math.random() * 5);
            c = l + (Math.random() * (h - l));
            time = this.addDays(time, 1);
        }
        return data;
    }

    public static addDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }
}
```
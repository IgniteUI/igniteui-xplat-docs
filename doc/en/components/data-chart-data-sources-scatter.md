---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Data Source | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create scatter charts such as scatter area, scatter bubble, scatter contour and more. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, scatter chart, $ProductName$, Infragistics, data source
mentionedTypes: ['XamDataChart']
---
# $PlatformShort$ Sample Data Source for Scatter XY Series

This topic provides an example on how to implement data source for  [Scatter XY Series](data-chart-type-range-series.md)

```razor
public class SampleScatterData
    {
        public static List<SampleScatterPoint> Create()
        {
            var data = new List<SampleScatterPoint>();
            var xMin = -180;
            var xMax = 180;
            var yMin = -90;
            var yMax = 90;
            var xCount = 11;
            var yCount = 11;

            var xStep = (xMax - xMin) / (xCount - 1);
            var yStep = (yMax - yMin) / (yCount - 1);
            var index = 0;
            for (var x = xMin; x <= xMax; x += xStep)
            {
                for (var y = yMin; y <= yMax; y += yStep)
                {
                    var z = Math.Cos(x) + Math.Cos(y);
                    var p = new SampleScatterPoint { X = x, Y = y, Z = z, Index = index++ };
                    data.Add(p);
                    Console.WriteLine("x=" + x + " y=" + y + " z=" + z);
                }
            }
            return data;
        }
    }

    public class SampleScatterPoint
    {
        public double X { get; set; }
        public double Y { get; set; }
        public double Z { get; set; }
        public double Index { get; set; }
    }
```

```ts
export class SampleScatterData {

    public static create(): any[] {

        const data: any[] = [];
        const xMin = -100;
        const xMax = 100;
        const yMin = -100;
        const yMax = 100;
        const xCount = 11;
        const yCount = 11;

        const xStep = (xMax - xMin) / (xCount - 1);
        const yStep = (yMax - yMin) / (yCount - 1);
        let index = 0;
        for (let x = xMin; x <= xMax; x += xStep)
        {
            for (let y = yMin; y <= yMax; y += yStep)
            {
                const z = Math.cos(x) + Math.cos(y);
                // adding new data item
                data.push({"X": x, "Y": y, "Z": z, "Index": index++});
            }
        }
        return data;
    }
}
```
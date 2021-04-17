---
title: $Platform$ Data Chart | Data Visualization Tools | Data Source | Infragistics
_description: Use Infragistics' $Platform$ charts control to create polar charts such as polar area, polar line, polar scatter and more. Learn about our $ProductName$ graph types!
_keywords: $Platform$ charts, data chart, polar, $ProductName$, Infragistics, data source
mentionedTypes: ['XamDataChart']
---
# $Platform$ Sample Data Source for Polar Series

This topic provides an example on how to implement data source for [Polar Series](data-chart-type-polar-series.md)

```razor
public class SamplePolarData
    {
        public static List<SamplePolarItem> Create()
        {
            var data = new List<SamplePolarItem>() {
                new SamplePolarItem { Direction= 0,   BoatSpeed= 70,  WindSpeed= 90 },
                new SamplePolarItem { Direction= 45,  BoatSpeed= 35,  WindSpeed= 65 },
                new SamplePolarItem { Direction= 90,  BoatSpeed= 25,  WindSpeed= 45 },
                new SamplePolarItem { Direction= 135, BoatSpeed= 15,  WindSpeed= 25 },
                new SamplePolarItem { Direction= 180, BoatSpeed= 0,   WindSpeed= 0  },
                new SamplePolarItem { Direction= 225, BoatSpeed= 15,  WindSpeed= 25 },
                new SamplePolarItem { Direction= 270, BoatSpeed= 25,  WindSpeed= 45 },
                new SamplePolarItem { Direction= 315, BoatSpeed= 35,  WindSpeed= 65 },
                new SamplePolarItem { Direction= 360, BoatSpeed= 70,  WindSpeed= 90 },
            };
            return data;
        }
    }

    public class SamplePolarItem
    {
        public double WindSpeed { get; set; }
        public double BoatSpeed { get; set; }
        public double Direction { get; set; }
    }
```

```ts
export class SamplePolarData {

    public static create(): any[] {
        const data: ISamplePolarItem[] = [
            { Direction: 0,   WindSpeed: 70,  BoatSpeed: 90 },
            { Direction: 45,  WindSpeed: 35,  BoatSpeed: 65 },
            { Direction: 90,  WindSpeed: 25,  BoatSpeed: 45 },
            { Direction: 135, WindSpeed: 15,  BoatSpeed: 25 },
            { Direction: 180, WindSpeed:  0,  BoatSpeed: 0  },
            { Direction: 225, WindSpeed: 15,  BoatSpeed: 25 },
            { Direction: 270, WindSpeed: 25,  BoatSpeed: 45 },
            { Direction: 315, WindSpeed: 35,  BoatSpeed: 65 },
            { Direction: 360, WindSpeed: 70,  BoatSpeed: 90 },
        ];
        return data;
    }
}

interface ISamplePolarItem {
    Direction?: number;
    WindSpeed?: number;
    BoatSpeed?: number;
}

```
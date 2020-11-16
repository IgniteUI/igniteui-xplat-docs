---
title: $PlatformShort$ Data Chart | Data Visualization Tools | Data Source | Infragistics
_description: Use Infragistics' $PlatformShort$ charts control to create radial charts such as radial area, radial line, radial scatter and more. Learn about our $ProductName$ graph types!
_keywords: $PlatformShort$ charts, data chart, radial, $ProductName$, Infragistics, data source
mentionedTypes: ['XamDataChart']
---
# $PlatformShort$ Sample Data Source for Radial Series

This topic provides an example on how to implement data source for [Radial Series](data-chart-type-radial-series.md)

```razor
public class SampleRadialData
    {
        public static List<SampleRadialItem> Create()
        {
            var data = new List<SampleRadialItem>() {
                new SampleRadialItem { Spending= 20, Budget= 60, Department= "Admin" },
                new SampleRadialItem { Spending = 80, Budget = 40, Department = "Sales" },
                new SampleRadialItem { Spending = 30, Budget = 60, Department = "IT" },
                new SampleRadialItem { Spending = 80, Budget = 40, Department = "Marketing" },
                new SampleRadialItem { Spending = 40, Budget = 60, Department = "Research" },
                new SampleRadialItem { Spending = 60, Budget = 20, Department = "Support" },
            };
            return data;
        }
    }

    public class SampleRadialItem
    {
        public double Budget { get; set; }
        public double Spending { get; set; }
        public string Department { get; set; }         
    }
```

```ts

export class SampleRadialData {

    public static create(): any[] {
        const data: any[] = [];
        data.push( { "Spending": 20, "Budget": 60, "Department": "Admin" });
        data.push( { "Spending": 80, "Budget": 40, "Department": "Sales" });
        data.push( { "Spending": 30, "Budget": 60, "Department": "IT" });
        data.push( { "Spending": 80, "Budget": 40, "Department": "Marketing" });
        data.push( { "Spending": 40, "Budget": 60, "Department": "Research" });
        data.push( { "Spending": 60, "Budget": 20, "Department": "Support" });
        return data;
    }
}
```
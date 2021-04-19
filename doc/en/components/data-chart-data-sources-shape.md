---
title: $Platform$ Data Chart | Data Visualization Tools | Data Source | Infragistics
_description: Use Infragistics' $Platform$ charts control to create shape charts such as scatter polygon and scatter polyline. Learn about our $ProductName$ graph types!
_keywords: $Platform$ charts, data chart, shape chart, $ProductName$, Infragistics, data source
mentionedTypes: ['XamDataChart']
---
# $Platform$ Sample Data Source for Scatter Shape Series

This topic provides an example on how to implement data source for [Scatter Shape Series](data-chart-type-shape-series.md)

```razor
public class SampleShapeData
    {
        public static Random random = new Random();

        public static List<SampleShapeItem> Create()
        {
            var shapeGuestBedroom = new List<Point>
            {
                new Point { X = 2, Y = 10 }, new Point { X = 7, Y = 10 }, new Point { X = 7, Y = 7 }, new Point { X = 2, Y = 7 }, new Point { X = 2, Y = 10 }
            };
            var shapeBath = new List<Point>
            {
                new Point { X = 0, Y = 10 }, new Point { X = 2, Y = 10 }, new Point { X = 2, Y = 7 }, new Point { X = 0, Y = 7 }, new Point { X = 0, Y = 10 }
            };
            var shapeKitchen = new List<Point>
            {
                new Point { X = 6, Y = 7 }, new Point { X = 10, Y = 7 }, new Point { X = 10, Y = 4 }, new Point { X = 6, Y = 4 }, new Point { X = 6, Y = 7 }
            };
            var shapeLivingRoom = new List<Point>
            {
                new Point { X = 6, Y = 4 }, new Point { X = 10, Y = 4 }, new Point { X = 10, Y = 0 }, new Point { X = 6, Y = 0 }, new Point { X = 6, Y = 4 }
            };
            var shapeMasterBedroom = new List<Point>
            {
                new Point { X = 0, Y = 0 }, new Point { X = 4, Y = 0 }, new Point { X = 4, Y = 5 }, new Point { X = 0, Y = 5 }, new Point { X = 0, Y = 0 }
            };

            var data = new List<SampleShapeItem>
            {
                new SampleShapeItem { Label = "Guest Bedroom", Points = ToPoints(shapeGuestBedroom) },
                new SampleShapeItem { Label = "Bath", Points = ToPoints(shapeBath) },
                new SampleShapeItem { Label = "Kitchen", Points = ToPoints(shapeKitchen) },
                new SampleShapeItem { Label = "Living Room", Points = ToPoints(shapeLivingRoom) },
                new SampleShapeItem { Label = "Master Bedroom", Points = ToPoints(shapeMasterBedroom) },
            };

            return data;
        }

        public static List<List<Point>> ToPoints(List<Point> points)
        {
            var shape = new List<List<Point>>();
            shape.Add(points);
            return shape;
        }
    }

    public class SampleShapeItem
    {
        public string Label { get; set; }

        public List<List<Point>> Points { get; set; }
    }
```

```ts
export class SampleShapeData {

    public static create(): any[] {
        const shapes = [
            { "Label": "Hallway",
              "Points": [[ // points must a nested arrays
                { x: 6, y: 0 },
                { x: 6, y: 7 },
                { x: 4, y: 7 },
                { x: 4, y: 0 },
                // last point does not have to match 1st point of the shape
                // because polygon chartType always closes a shape by connecting 1st and last point with a line
              ]]
            },
            { "Label": "Entrance",
              "Points": [[
                { x: 0, y: 5 },
                { x: 4, y: 5 },
                { x: 4, y: 7 },
                { x: 0, y: 7 } ]]
            },
            { "Label": "Guest Bedroom",
              "Points": [[{ x: 2, y: 10 }, { x: 7, y: 10 }, { x: 7, y: 7 }, { x: 2, y: 7 }], ] },
            { "Label": "Bath",
              "Points": [[{ x: 0, y: 10 }, { x: 2, y: 10 }, { x: 2, y: 7 }, { x: 0, y: 7 }], ] },
            { "Label": "Kitchen",
              "Points": [[{ x: 6, y: 7 }, { x: 10, y: 7 }, { x: 10, y: 4 }, { x: 6, y: 4 }], ] },
            { "Label": "Living Room",
              "Points": [[{ x: 6, y: 4 }, { x: 10, y: 4 }, { x: 10, y: 0 }, { x: 6, y: 0 }], ] },
            { "Label": "Master Bedroom",
              "Points": [[{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 5 }, { x: 0, y: 5 }], ] },
        ];
        return shapes;
    }
}

```
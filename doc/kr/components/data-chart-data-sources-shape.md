---
제목: 데이터 차트 구성 요소 - 네이티브 $PlatformShort$ | $ProductName$
_description: 컴포지트 차트 뷰를 만들기 위해 동일한 플롯 영역에 여러 개의 시각적 요소 인스턴스를 표시하는 데이터 차트를 만듭니다.
_keywords: $ProductName$, $PlatformShort$, Native $PlatformShort$ Components Suite, Native $PlatformShort$ Controls, Native $PlatformShort$ Components, Native $PlatformShort$ Components Library, $PlatformShort$ Chart, $PlatformShort$ Data Chart Control, $PlatformShort$ Data Chart Example, $PlatformShort$ Data Chart Component, $PlatformShort$ Data Chart
_language: kr
---
# $PlatformShort$ 분산 모양 시리즈의 샘플 데이터 소스

이 항목에서는 [분산 모양 시리즈](data-chart-type-shape-series.md)의 데이터 소스를 구현하는 방법에 대한 예제를 제공합니다


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

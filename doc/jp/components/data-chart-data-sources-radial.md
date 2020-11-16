---
title: $PlatformShort$ データ チャート | データ可視化ツール | データソース | インフラジスティックス
_description: ンフラジスティックスの $PlatformShort$ チャート コントロールを使用して、ラジアル領域、ラジアル折れ線、ラジアル散布などのラジアル チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, radial, $ProductName$, Infragistics, data source, $PlatformShort$ チャート, データ チャート, ラジアル, インフラジスティックス, データソース
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ ラジアル シリーズのサンプル データソース

このトピックでは、[ラジアル シリーズ](data-chart-type-radial-series.md) のデータソースを実装する方法の例を示します。

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
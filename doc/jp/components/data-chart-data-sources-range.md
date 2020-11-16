---
title: $PlatformShort$ データ チャート | データ可視化ツール | データソース | インフラジスティックス
_description: インフラジスティックスの $PlatformShort$ チャート コントロールを使用して、範囲エリア、範囲柱状などの範囲チャートを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $PlatformShort$ charts, data chart, range chart, $ProductName$, Infragistics, data source, $PlatformShort$ チャート, データ チャート, 範囲チャート, インフラジスティックス, データソース
mentionedTypes: ['XamDataChart']
_language: ja
---
# $PlatformShort$ エリア シリーズのサンプル データソース

このトピックでは、[エリア シリーズ](data-chart-type-range-series.md) のデータソースを実装する方法の例を示します。

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
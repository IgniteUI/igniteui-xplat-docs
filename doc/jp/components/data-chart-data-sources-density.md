---
title: $Platform$ データ チャート | データ可視化ツール | データソース | インフラジスティックス
_description: インフラジスティックスの $Platform$ チャート コントロールを使用して、高密度散布シリーズを作成します。$ProductName$ グラフ タイプについて説明します。
_keywords: $Platform$ charts, data chart, high density scatter, $ProductName$, Infragistics, data source, $Platform$ チャート, データ チャート, 高密度散布, インフラジスティックス, データソース
mentionedTypes: ['XamDataChart', 'PolarBase']
_language: ja
---
# $Platform$ 散布図 - HD シリーズのサンプル データソース

このトピックでは、[散布 HD シリーズ](data-chart-type-polar-series.md) のデータソースを実装する方法の例を示します。

```razor
public class SampleDensityData
    {
        public static Random random = new Random();

        public static List<SampleDensityPoint> Create()
        {
            var amount = 25000;
            var data = new List<SampleDensityPoint>();
            generate(data, amount / 2, 0, 0, 75000, 20000);
            generate(data, amount / 4, 0, 0, 100000, 25000);
            generate(data, amount / 8, 0, 0, 150000, 30000);
            generate(data, amount / 8, 0, 0, 200000, 75000);

            return data;
        }

        public static void generate(
            List<SampleDensityPoint> data, int count,
            int centerX, int centerY, int spreadX, int spreadY) {

            for (var i = 0; i <= count; i++)
            {
                var rangeX = random.NextDouble() * spreadX;
                var rangeY = random.NextDouble() * spreadY;
                var prop = random.NextDouble();
                var flip = 1;

                if (prop < .25) {
                    rangeX *= flip;
                    rangeY *= flip;
                }
                else if (prop >= .25 && prop < .5) {
                    rangeX *= -flip;
                    rangeY *= flip;
                }
                else if (prop >= .5 && prop < .75) {
                    rangeX *= flip;
                    rangeY *= -flip;
                }
                else {
                    rangeX *= -flip;
                    rangeY *= -flip;
                }

                var dispersionX = random.NextDouble() + 0.12;
                var dispersionY = random.NextDouble() + 0.12;
                var x = Math.Round(centerX + (rangeX * dispersionX));
                var y = Math.Round(centerY + (rangeY * dispersionY));

                data.Add(new SampleDensityPoint { X = x, Y = y });
            }
        }
    }

    public class SampleDensityPoint
    {
        public double X { get; set; }
        public double Y { get; set; }
    }
```

```ts
export class SampleDensityData {

    public static create(): any[] {
        const amount = 950000;
        const data: any[] = [];
        // generating a lot of data points that spread from specified X/Y center
        data.concat(this.generate(amount / 8, 5000, 3000, 3000, 2000));
        data.concat(this.generate(amount / 8, 6000, 5000, 2000, 2000));
        data.concat(this.generate(amount / 4, 7000, 7000, 5000, 4000));
        data.concat(this.generate(amount / 8, 8000, 9000, 2000, 2000));
        data.concat(this.generate(amount / 8, 9000, 11000, 3000, 2000));
        return data;
    }

    public static generate(count: number,
        centerX: number, centerY: number,
        spreadX: number, spreadY: number): any[] {

        const data: any[] = [];
        for (let i = 0; i <= count; i++)
        {
            let rangeX = Math.random() * spreadX;
            let rangeY = Math.random() * spreadY;
            const flip = 1;
            const prop = Math.random();
            if (prop < .25) {
                rangeX *= flip;
                rangeY *= flip;
            }
            else if (prop >= .25 && prop < .5) {
                rangeX *= -flip;
                rangeY *= flip;
            }
            else if (prop >= .5 && prop < .75) {
                rangeX *= flip;
                rangeY *= -flip;
            }
            else {
                rangeX *= -flip;
                rangeY *= -flip;
            }
            const dispersionX = Math.random() + 0.12;
            const dispersionY = Math.random() + 0.12;
            const x = centerX + (rangeX * dispersionX);
            const y = centerY + (rangeY * dispersionY);
            data.push({ "X": x, "Y": y });
        }
        return data;
    }
}
```
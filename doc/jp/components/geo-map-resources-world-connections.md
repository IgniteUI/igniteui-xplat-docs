---
title: {Platform} マップ | ワールド コネクション | データ ソース | インフラジスティックス
_description: インフラジスティックスの {Platform} JavaScript マップ データ ユーティリティを使用して、空港の位置、飛行経路、および地理的なグリッド線を生成します。{ProductName} マップのサンプルを是非お試しください!
_keywords: {Platform} map, map data, {ProductName}, Infragistics, {Platform} マップ, マップ データ, インフラジスティックス
mentionedTypes: ['XamGeographicMap']
_language: ja
---
# {Platform} ワールド コネクション

リソース トピックは、空港の位置、飛行経路、および地理的なグリッド線を生成するためのデータユーティリティの実装を提供します。これらのデータ ソースを独自の地理データを作成するための参照点として使用できます。このユーティリティは [WorldUtil](geo-map-resources-world-util.md) と [WorldLocations](geo-map-resources-world-locations.md) スクリプトに依存していることに注意してください。

## コード スニペット

```ts
import WorldLocations from "./WorldLocations";
import WorldUtils from "./WorldUtils"

export default class WorldConnections {

    private static airports: any[] = [];
    private static airportsLookup = new Map<string, any>();

    private static flights: any[] = [];
    private static flightsLookup: string[] = [];

    public static getFlights(): any[] {
        if (this.flights.length == 0) this.init();
        return this.flights;
    }

    public static getAirports(): any[] {
        if (this.airports.length == 0) this.init();
        return this.airports;
    }

    public static comparePopulation(a: any, b: any): number {
        if (a.pop < b.pop) {
            return 1;
        }
        if (a.pop > b.pop) {
            return -1;
        }
        return 0;
    }

    public static init() {

        const cities: any[] = WorldLocations.getAll();
        cities.sort(this.comparePopulation);
        let count = cities.length;
        let minDistance = 200;
        let maxDistance = 9000;
        let flightsLimit = 1500;
        let flightsCount  = 0;

        for (let i = 0; i < count; i++) {
            let origin = cities[i];
            let connectionsCount = 0;
            let connectionsMax = Math.min(20, Math.round(origin.pop * 4));

            for (let ii = 0; ii < count; ii++)
            {
                let dest = cities[ii];
                if (origin.name != dest.name)
                {
                    let route = [origin.name, dest.name].sort().join('-');
                    let routeIsValid = this.flightsLookup.indexOf(route) == -1;
                    let distance = Math.round(WorldUtils.calcDistance(origin, dest));
                    let distanceIsValid = distance > minDistance && distance < maxDistance;
                    let pass = Math.round((Math.random() * 200)) + 150;
                    let time = distance / 800;
                    let trafficIsValid = origin.pop > 3 && dest.pop > 1.0;

                    if (routeIsValid && distanceIsValid && trafficIsValid) {
                         this.flightsLookup.push(route);

                        let paths = WorldUtils.calcPaths(origin, dest);
                        flightsCount++;
                        connectionsCount++;
                        let id = origin.name.substring(0,3).toUpperCase() + "-" + flightsCount;
                        let flight = { id: id, origin: origin, dest: dest, time: time, passengers: pass, distance: distance, points: paths };
                        this.flights.push(flight);
                    }
                    if (connectionsCount > connectionsMax) {
                        break;
                    }
                }
            }
            if (flightsCount > flightsLimit)  {
                break;
            }
        }

        for (const flight of this.flights) {
            this.addAirport(flight.origin);
            this.addAirport(flight.dest);
        }

        this.airports = Array.from(this.airportsLookup.values());
    }

    private static addAirport(city: any) {
        if (this.airportsLookup.has(city.name)) {
            this.airportsLookup.get(city.name).flights += 1;
        } else {
            let airport = Object.assign({flights: 1}, city );
            this.airportsLookup.set(city.name, airport);
        }
    }

    public static getGridlines(): any[] {
        let gridlines = [];
        // longitude lines
        for (let lon = -180; lon <= 180; lon += 30) {

            let line: any[] = [{x: lon, y: -90}, {x: lon, y: 90}];
            let points: any[] = [line];

            let coordinateLine = {points: points,
                degree: lon,
                direction: lon > 0 ? "E" : "W"
              };
              gridlines.push(coordinateLine);
        }
        // latitude lines
        for (let lat = -90; lat <= 90; lat += 30) {

            let line: any[] = [{x: -180, y: lat}, {x: 180, y: lat}];
            let points: any[] = [line];
            let coordinateLine = {points: points,
                degree: lat,
                direction: lat > 0 ? "N" : "S"
              };
              gridlines.push(coordinateLine);
        }
        return gridlines;
    }
}
```

```razor
    public class WorldConnections
    {

        public static List<FlightInfo> Flights { get; set; }
        public static List<WorldCity> Airports { get; set; }

        public static Dictionary<string, string> FlightsLookup = new Dictionary<string, string>();
        public static Dictionary<string, WorldCity> AirportsLookup = new Dictionary<string, WorldCity>();

        public static List<FlightInfo> GetFlights()
        {
            Init();
            return Flights;
        }

        public static List<WorldCity> GetAirports()
        {
            Init();
            return Airports;
        }

        public static int ComparePopulation(WorldCity a, WorldCity b)
        {
            if(a.Pop < b.Pop)
            {
                return 1;
            }
            if(a.Pop > b.Pop)
            {
                return -1;
            }

            return 0;
        }

        static Random r = new Random();
        public static void Init()
        {
            Flights = new List<FlightInfo>();
            Airports = new List<WorldCity>();

            List<WorldCity> cities = WorldLocations.GetAll();
            cities.Sort(new Comparison<WorldCity>(ComparePopulation));

            int count = cities.Count;
            int flightsCount = 0;
            int connectionsCount = 0;

            double minDistance = 200;
            double maxDistance = 9000;
            double flightsLimit = 1500;

            for (int i=0; i<count; i++)
            {
                WorldCity origin = cities[i];

                for(int j=0; j<count; j++)
                {
                    WorldCity dest = cities[j];

                    GeoLocation originGeo = new GeoLocation() { Lat = origin.Lat, Lon = origin.Lon };
                    GeoLocation destGeo = new GeoLocation() { Lat = dest.Lat, Lon = dest.Lon };

                    if(origin.Name != dest.Name)
                    {
                        string route = origin.Name + "-" + dest.Name;
                        bool routeIsValid = !FlightsLookup.ContainsKey(route);

                        double distance = Math.Round(WorldUtils.CalcDistance(originGeo, destGeo));
                        bool distanceIsValid = distance > minDistance && distance < maxDistance;

                        double pass = Math.Round(r.NextDouble() * 200) + 150;
                        double time = distance / 800;
                        bool trafficIsValid = origin.Pop > 3 && dest.Pop > 1.0;

                        if(routeIsValid && distanceIsValid && trafficIsValid)
                        {
                            FlightsLookup.Add(route, route);

                            List<List<Point>> paths = WorldUtils.CalcPaths(originGeo, destGeo);
                            flightsCount++;
                            connectionsCount++;

                            string id = origin.Name.Substring(0, 3).ToUpper() + "-" + flightsCount;
                            FlightInfo flight = new FlightInfo() { ID = id, Origin = origin, Dest = dest, Time = time, Passengers = pass, Distance = distance, Points = paths };
                            Flights.Add(flight);
                        }
                    }
                }

                if(flightsCount > flightsLimit)
                {
                    break;
                }
            }

            foreach(FlightInfo flight in Flights)
            {
                AddAirport(flight.Origin);
                AddAirport(flight.Dest);
            }

            Airports = AirportsLookup.Values.ToList();
        }

        public static void AddAirport(WorldCity city)
        {
            if (!AirportsLookup.ContainsKey(city.Name))
            {
                AirportsLookup.Add(city.Name, city);
            }
        }

        public static List<CoordinateLine> GetGridlines()
        {
            List<CoordinateLine> gridlines = new List<CoordinateLine>();

            List<List<Point>> latLines = new List<List<Point>>();
            List<List<Point>> lonLines = new List<List<Point>>();

            for (int lon = -180; lon <= 180; lon += 30)
            {
                List<Point> points = new List<Point>();
                points.Add(new Point(lon, -90));
                points.Add(new Point(lon, 90));

                lonLines.Add(points);
            }

            for (int lat= -90; lat<= 90; lat += 30)
            {
                List<Point> points = new List<Point>();
                points.Add(new Point(-180, lat));
                points.Add(new Point(180, lat));

                latLines.Add(points);
            }

            CoordinateLine lines1 = new CoordinateLine() { Points = lonLines };
            CoordinateLine lines2 = new CoordinateLine() { Points = latLines };

            gridlines.Add(lines1);
            gridlines.Add(lines2);

            return gridlines;
        }
    }

    public class FlightInfo
    {
        public string ID { get; set; }
        public WorldCity Origin { get; set; }
        public WorldCity Dest { get; set; }
        public double Time { get; set; }
        public double Passengers { get; set; }
        public double Distance { get; set; }
        public List<List<Point>> Points { get; set; }
        public string Color { get; set; }
    }

    public class CoordinateLine
    {
        public List<List<Point>> Points { get; set; }
    }
```

## API リファレンス

 - `XamGeographicMap`
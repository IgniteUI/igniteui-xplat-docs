export class JsonEx {

    // stringify by the keys in alpha numeric order or by specified sortOrder
    static stringify(data: any, replacer?: (number | string)[] | null, space?: string | number, sortOrder?: string[]): string {
        var sortedData = JsonEx.sort(data, sortOrder);
        return JSON.stringify(sortedData, replacer, space);
    }

    // https://staxmanade.com/2018/08/how-to-json.stringify-and-order-dictionary-result/
    static sort(unordered: any, sortOrder?: string[]): any {
        // If it's an array - recursively order any dictionary items within the array
        if (Array.isArray(unordered)) {
            unordered.forEach(function (item, index) {
                unordered[index] = JsonEx.sort(item, sortOrder);
            });
            return unordered;
        }

        if (typeof unordered === 'object') {
            let ordered: any = {};
            let sortedKeys: string[] = [];

            // let sortOrder = ['name', 'header', 'href', 'flag', 'items'];

            if (sortOrder === undefined) { // order by the keys in alpha numeric
                sortedKeys = Object.keys(unordered).sort();
            } else {  // order by the keys using sortOrder
                sortedKeys = Object.keys(unordered).sort(
                    function(a, b) {
                        return sortOrder.indexOf(a) - sortOrder.indexOf(b);
                    }
                );
            }
            sortedKeys.forEach(function(key) {
                ordered[key] = JsonEx.sort(unordered[key], sortOrder);
            });
            return ordered;
        }

        return unordered;
    }

}

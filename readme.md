## Converts a CSV file to an array of objects

_Note: The package will return values as strings. Parse the values before using them._

```
const csvToArray = require("mumbi-module");

csvToArray("./data/adult_sal.csv").then((result) => {
  console.log(result);
});
```

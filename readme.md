## Converts a CSV file to an array of objects

> Note: The package will return values as strings. Parse the values before using them.

Install using `npm i mumbi-module`

```
const csvToArray = require("mumbi-module");

csvToArray("./data/adult_sal.csv").then((result) => {
  console.log(result);
});
```

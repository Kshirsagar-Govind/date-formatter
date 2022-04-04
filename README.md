﻿# date-formatter

## Uses

1. Get Date Formatted in 3 types 
    DD/MM/YYYY
    MM/DD/YYYY
    YYYY/MM/DD

2. Get Days Difference From Curret Date -
    agrument to be passed should be in MM/DD/YYYY format

3. Get Days Difference between two days - agrument to be passed should be in MM/DD/YYYY format


## Usage/Examples

```javascript
const form = require('my-date-formatter');

console.log(form.DateFormate_1())
console.log(form.DateFormate_2())
console.log(form.DateFormate_3())
console.log(form.Days_From_Curr_Date('04/01/2022'))
console.log(form.Diff_Between_Two_Date('04/01/2022', '05/01/2022'))
```


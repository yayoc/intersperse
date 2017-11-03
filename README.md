# intersperse

`intersperse` in JavaScript.  
**intersperse :: a -> [a] -> [a]** 

```js
const intersperse = require("intersperse"); 

intersperse("," "ABCDEF") // "A,B,C,D,E,F"
intersperse("/", [1,2,3]) // [1, "/", 2, "/", 3]
intersperse("/", []) // []
intersperse((prev, next) => {
  return prev + next;   
}, [1,2,3]) // [1, 3, 2, 5, 3]

```

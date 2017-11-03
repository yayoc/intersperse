![intersperse](https://user-images.githubusercontent.com/6383334/32359483-c1a2e82c-c091-11e7-801e-3101e237504a.png)
**intersperse :: a -> [a] -> [a]**   

> takes an element or a function and a list and `intersperse` that element between the elements of the list.

### Example

```js
const intersperse = require("@yayoc/intersperse"); 

intersperse("," "ABCDEF") // "A,B,C,D,E,F"

intersperse("/", [1,2,3]) // [1, "/", 2, "/", 3]

intersperse({ a: "A" }, [1,2,3]) // [1, { a: "A" }, 2, { a: "A" }, 3]

intersperse("/", []) // []

intersperse((prev, next) => {
  return prev + next;   
}, [1,2,3]) // [1, 3, 2, 5, 3]

intersperse((prev, next) => {
  return prev + next;   
}, ["a","b","c"]) // ["a", "ab", "b", "bc", "c"]


```

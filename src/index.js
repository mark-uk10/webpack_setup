import { add } from "./addition";
import { sub } from "./sub";
import "./styles/index.scss";

alert("Hello hhhkkkkh");
console.log(add(1, 2));
console.log(sub(3, 1));
const obj = { a: "alpha", b: "brava" };
const newObj = { ...obj, c: "charlie" };
console.log(newObj);

let myVar = 0;

console.log(myVar ?? "change this value");
const billion = 1000_000;
console.log(billion);
const str = "Backbencher sits at the Back";
const newStr = str.replaceAll("Back", "Front");
console.log(newStr); // "Frontbencher sits at the Front"

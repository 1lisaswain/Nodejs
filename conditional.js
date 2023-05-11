for (i = 1; i <= 10; i++) {
  const result = 5 * i;
  console.log(result);
};
let k = 1, n = 5;
while (k <= n) {
  console.log(k);
  k += 1;
}
let o = 1;
const m = 5;
do {
  console.log(o);
  o++;
} while (o <= m);
let n1 = 5;
let string = "";
for (let i = 1; i <= n1; i++) {
  // printing spaces
  for (let j = 0; j < n1 - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

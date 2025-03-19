// Realize uma multiplicação sem usar o operador *

function multi(x, y) {
  let result = 0

  if (y > 0) {
    for (let i = 1; i <= y; i++) {
      result += x;
    }
  } else {
    for (let i = -1; i >= y; i--) {
      result -= x;
    }
  }
  return result
}

x = 8.3
y = -1.3333

console.log(`${x} * ${y} = ${multi(x, y)}`)
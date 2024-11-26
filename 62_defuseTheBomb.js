const code = [5, 7, 1, 4];
const k = 2;

const decrypt = (code, k) => {
  const n = code.length;
  if (k === 0) return new Array(code.length).fill(0);

  const absk = Math.abs(k);
  const diretion = k > 0 ? 1 : -1;

  return code.map((_, i) => {
    let sum = 0;
    for (let j = 0; j <= absk; j++) {
      let index = (i + diretion * j + n) % n;
      sum += code[index];
    }
    return sum;
  });
};

console.log(decrypt(code, k));

function getGrade(s1, s2, s3) {
  const arr = [s1, s2, s3];
  const sum = arr.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);
  const average = sum / arr.length;
  return average;
}

console.log(getGrade(1, 2, 3));

function getGrade1(s1, s2, s3) {
  return (s1 + s2 + s3) / 3;
}

console.log(getGrade1(1, 7, 10));

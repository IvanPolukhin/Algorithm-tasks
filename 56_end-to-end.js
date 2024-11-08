function solution(str1, str2) {
  return str1.endsWith(str2);
}
console.log(solution("11123", "123"));
console.log(solution("sadada", "adы"));
console.log(solution("sadada", "daыa"));
console.log(solution("sadada", "da"));

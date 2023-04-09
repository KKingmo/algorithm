/*
약수 구하기
문제 설명
정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 10,000
입출력 예
n	result
24	[1, 2, 3, 4, 6, 8, 12, 24]
29	[1, 29]
입출력 예 설명
입출력 예 #1

24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.
입출력 예 #2

29의 약수를 오름차순으로 담은 배열 [1, 29]를 return합니다.
*/

function solution(n) {
  let i = 1;
  const arr = [];
  while (i <= n) {
    if (n % i == 0) {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

describe("solution", () => {
  test("1", () => {
    expect(solution(24)).toEqual([1, 2, 3, 4, 6, 8, 12, 24]);
  });

  test("2", () => {
    expect(solution(29)).toEqual([1, 29]);
  });
});

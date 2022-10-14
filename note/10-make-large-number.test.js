/*
큰 수 만들기
문제 설명
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

제한 조건
number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
k는 1 이상 number의 자릿수 미만인 자연수입니다.
입출력 예
number	k	return
"1924"	2	"94"
"1231234"	3	"3234"
"4177252841"	4	"775841"
*/

function solution(number, k) {
  // n이 백만이면 O(n), O(n log n) 따라서 모든 케이스를 순회하는 것보다 빠른 방법을 찾아야한다.
  // 큰 값이 나오면 이전 값은 전부다 삭제
  // 스택의 바닥에서부터 탑은 큰 수 부터 작은 수로 나열
  const stack = [];
  let count = 0; // 제거 횟수

  for (const item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count += 1;
    }
    stack.push(item);
  }

  // 예외사항. 만약 ("911654321" ,4)을 인자로 받는다면
  return stack.slice(0, number.length - k).join("");
}

describe("solution", () => {
  test("1", () => {
    expect(solution("1924", 2)).toEqual("94");
  });

  test("2", () => {
    expect(solution("1231234", 3)).toEqual("3234");
  });

  test("3", () => {
    expect(solution("4177252841", 4)).toEqual("775841");
  });
});

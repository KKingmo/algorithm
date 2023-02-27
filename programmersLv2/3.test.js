/*
https://school.programmers.co.kr/learn/courses/30/lessons/12939
최댓값과 최솟값
문제 설명
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

제한 조건
s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
입출력 예
s	return
"1 2 3 4"	"1 4"
"-1 -2 -3 -4"	"-4 -1"
"-1 -1"	"-1 -1"
*/

function solution(s) {
  const arrS = s.split(" ").map((e) => parseInt(e));
  const minMax = {
    min: arrS[0],
    max: arrS[0],
  };
  for (let i = 1; i < arrS.length; i++) {
    if (arrS[i] < minMax.min) {
      minMax.min = arrS[i];
      continue;
    }
    if (arrS[i] > minMax.max) {
      minMax.max = arrS[i];
    }
  }
  return `${minMax.min} ${minMax.max}`;
}

describe("solution", () => {
  test("1", () => {
    expect(solution("1 2 3 4")).toEqual(["1 4"]);
  });

  test("2", () => {
    expect(solution("-1 -2 -3 -4")).toEqual(["-4 -1"]);
  });

  test("3", () => {
    expect(solution("-1 -1")).toEqual(["-1 -1"]);
  });
});

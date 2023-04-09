/*
개미 군단
문제 설명
개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

제한사항
hp는 자연수입니다.
0 ≤ hp ≤ 1000
입출력 예
hp	result
23	5
24	6
999	201
입출력 예 설명
입출력 예 #1

hp가 23이므로, 장군개미 네마리와 병정개미 한마리로 사냥할 수 있습니다. 따라서 5를 return합니다.
입출력 예 #2

hp가 24이므로, 장군개미 네마리 병정개미 한마리 일개미 한마리로 사냥할 수 있습니다. 따라서 6을 return합니다.
입출력 예 #3

hp가 999이므로, 장군개미 199 마리 병정개미 한마리 일개미 한마리로 사냥할 수 있습니다. 따라서 201을 return합니다.
*/

function solution(hp) {
  const x = hp / 5;
  if (Number.isInteger(x)) {
    return x;
  } else {
    const y = (hp % 5) / 3;
    if (Number.isInteger(y)) {
      return Math.floor(x) + y;
    } else {
      return Math.floor(x) + Math.floor(y) + ((hp % 5) % 3);
    }
  }
}

describe("solution", () => {
  test("1", () => {
    expect(solution(23)).toEqual(5);
  });

  test("2", () => {
    expect(solution(24)).toEqual(6);
  });

  test("3", () => {
    expect(solution(999)).toEqual(201);
  });
});

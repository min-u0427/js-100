//16

//문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

const n = prompt('입력하세요');
const reverseString = n.split('').reverse().join('');
/*
* split() 메서드는 문자열을 배열로 만들어 반환하고,
* reverse() 메서드는 배열의 순서를 반전하며,
* join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
*/
console.log(reverseString);

//17

// 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.
// 입력으로 키가 주어지면
// 키가 150이 넘으면 **YES**를 틀리면 **NO**를 출력하는 프로그램을 작성하세요.

let n = prompt('키');
if(n >= 150) {
    console.log('YES');
} else {
    console.log('NO');
};

//18

// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.

function average (scores) {
    scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
    let sum = 0;

for (let i=0; i < scores.length; i++){
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
}

console.log(Math.floor(sum/scores.length)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다
};

//19

//공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

let n = prompt('수를 입력하세요.').split(' ');
console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));

//20

// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

let n = prompt('수를 입력하세요.').split(' ');// 배열로 바꿔주고 공백으로 나눔.
let result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10)); // 숫자여야 하니까 파스인트 0, 1
let left = parseInt([0], 10) % parseInt(n[1], 10); // 나머지 구한 것.
console.log(result, left);
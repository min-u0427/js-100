//21

다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();

let list = [1, 2, 2, 3, 4, 5, 5, 6, 6, 7];
let setVal = new Set(list);
console.log(setVal);

//setVal.add(); setVal.delete(); setVal.has();
//정답은 3, 5번
//Set이란 중복되지 않는 데이터를 저장하는 데이터 구조로 즉, 중복을 허용x. 
//유용한 메소드로 값을 추가, 삭제, 데이터가 있는지 여부를 확인하는 add, delete, has가 있다.

//22

다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

1)  i / 6 === 0
2)  i % 6 === 0
3)  i & 6 === 0
4)  i | 6 === 0
5)  i // 6 === 0

//정답은 2번 나머지가 0이면 배수를 찾을 수 있음.

//23

console.log(10/3)의 출력 결과는 3이다.

//정답은 x
// 3.33333...이 나오고 소수점을 버리고 정수를 사용 하려면 Math.floor()를 사용해야 함.

//24

민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 
참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.
민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.

function upper (str) {
    console.log(str.toUpperCase());
}


//25

원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.
입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

function circle (num) {
    num = num * num * 3.14;
    return num;
};

let r = prompt("원의 반지름을 입력하세요.");
console.log(circle(r));
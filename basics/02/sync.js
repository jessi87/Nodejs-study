// 순서대로 실행하기  (결과 비교: 02\results\sync.js)
function displayA(){
    console.log('A');
}
// 콜백함수를 사용해서 실행순서를 조절(비동기 처리)
function displayB(callback){
    // 2초후 실행(시간 지연)
    setTimeout(() => {
        console.log('B');
        callback();
    },2000);
}
function displayC(){
    console.log('C');
}

displayA();
displayB(displayC);
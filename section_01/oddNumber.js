function solution(arr){
    let answer;
    let sum = 0, min = Number.MAX_SAFE_INTEGER;
    let oddNumberArr = [];

    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2 != 0){
            oddNumberArr.push(arr[i]);
            sum += arr[i];
        } 
    }

    // 방법 1.
    oddNumberArr.sort(function(comp1, comp2) {
        return comp1 - comp2; 
    });
    min = oddNumberArr[0];
    // 방법 2 : 전개 연산자 사용
    min = Math.min(...oddNumberArr);
    min = Math.min.apply(null, oddNumberArr);

    answer = sum + '\n' + min;

    return answer;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
function solution(a, b, c) {
    // 길이가 서로 다른 A, B, C 세 개의 막대 길이
    let answer = "YES";
    let max;
    let sum = a + b + c;

    if(a>b)max = a;
    else max = b;
    if(max<c) max = c;
    
    // 가장 긴 변의 길이 < 나머지 두 변의 길이의 합
    // 삼각형을 만들 수 있으면 "YES", 만들 수 없으면 "NO"
    if((sum - max) <= max) answer = "NO"

    return answer;
}

console.log(solution(6, 7, 11));
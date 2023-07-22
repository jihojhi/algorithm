function solution(a){
    let answer = 0;

    for(i=0; i<a; i++){
        answer += (i+1);
    }

    return answer;
}
console.log(solution(10));
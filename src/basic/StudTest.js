import React from "react";  //리액트를 사용할거야

//조건절
function MyCom(){

    /*
    국어, 영어, 수학 점수 나오고
    총점, 평균 계산
    평균 수,우,미,양,가 출력
    */

    // 직접
    
    let res = ''
    let kor = 60
    let eng = 65
    let mat = 66
    
    let tot = kor+eng+mat
    let avg = tot/3
    
        if(avg<101){
            res = <div>수</div>
        } else if (avg<91){
            res = <div>우</div>
        } else if (avg<81){
            res = <div>미</div>
        } else if (avg<71){
            res = <div>양</div>
        } else {
            res = <div>가</div>
        }
    
    return res
}

export default MyCom
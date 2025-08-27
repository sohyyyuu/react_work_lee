import React from "react";  //리액트를 사용할거야

//조건절
function MyCom(){

    /*
    국어, 영어, 수학 점수 나오고
    총점, 평균 계산
    평균 수,우,미,양,가 출력
    */
    
    let res = ''
    let jum = 88
        if(jum>=80){
            res = <div>합격</div>
        } else {
            res = <div>불합격</div>
        }
    
    return res
}

export default MyCom
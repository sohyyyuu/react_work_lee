// 실제 data
const myState = {
    cnt : 10,
    posts : [
        {id:1, title:'첫제목', content: '첫번째 내용입니다.'},
        {id:2, title:'두제목', content: '두번째 내용입니다.'},
    ]
}




// 실제 data(myState)를 처리하는 함수(action) 연결
function MyReducer(state=myState, action) {
    
    switch(action.type){   //함수타입(이름)
        case 'INCREMENT': 
            return {...state, cnt:state.cnt + 1} // myState의 cnt를 1증가하여 리턴

        case 'ADD':   //action.nData 를 posts 배열에 추가
            return {...state, posts:[...state.posts, action.nData ]}

        case 'DEL':   //posts 배열에서 action.deId 가 같지 않은 것만 posts 배열로 저장
                      // 즉, posts 배열에서 action.deId 항목만 제거
            return {...state, posts:state.posts.filter(pp => pp.id != action.deId) }

        case "MODIFY":  

        console.log("MODIFY 진입", action.nData)
            return {
                ...state, 
                posts: state.posts.map(pp => pp.id == action.nData.id ? action.nData : pp  )}

        default:
            return state   // 기본값은 myState 리턴
    }
}

export default MyReducer;
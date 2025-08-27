import {useDispatch, useSelector} from 'react-redux';

function MyCounter(props) {

    //Provider --> store={MyStore}                 ; Provider의 store를 MyStore로 했고
    //              useSelector --> state로 결합    ;  그 MyStore의 cnt값을 선택해서 쓰겠다
    const cnt = useSelector(state => state.cnt)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>MyCounter 이지롱</h2>
            <div> cnt : {cnt} </div>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>증가</button>
        </div>
    );
}

export default MyCounter;
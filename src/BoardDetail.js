import {useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

function BoardDetail(props) {
    const {id} = useParams()   // http://localhost:3000/BoardDetail/1   : 1 가져오기

    const navigate = useNavigate()

    //MyStore.js에서 store 생성할 때 MyReducer를 기반으로 생성했기 때문에 ( const MyStore = createStore(MyReducer) ) 
    //                          ()안을 비워두면 MyReducer가 연결?되어있는 상태
    const dispatch = useDispatch()  
    
    const pp = useSelector(state => state.posts.find(post=> post.id == id))
    // posts 항목 중에 id가 1인 항목 가져오기

    
    if(!pp){
        return <></>
    }

    function delGo(){
        console.log(`del 실행 ${pp.id}`)

        // 리듀서의 항목 추가
        dispatch({ type:'DEL', deId:pp.id })

        // 제거후 목록으로 이동
        navigate('/')
    }

    return (
        <div>
            <h2>상세페이지</h2>
            <h3>{pp.title}</h3>
            <p>{pp.content}</p>
            <Link to="/">목록으로</Link>
            <Link to={`/BoardModify/${pp.id}`}>수정</Link>
            <button onClick={delGo}>삭제</button>
        </div>
    );
}

export default BoardDetail;
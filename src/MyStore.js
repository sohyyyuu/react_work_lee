import {createStore} from 'redux'
import MyReducer from './MyReducer'

// store 생성을 하는데 MyReducer를 기반으로 생성함
const MyStore = createStore(MyReducer)  

// 생성한 store 를 사용
export default MyStore
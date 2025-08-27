import {Provider} from 'react-redux'
import MyStore from './MyStore';
// import MyCounter from './MyCounter';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BoardList from './BoardList';
import BoardDetail from './BoardDetail';
import BoardWrite from './BoardWrite';
import BoardModify from './BoardModify';
// import BoardDelete from './BoardDelete';

// reducer : 저장소 접근하는 역할,  store : 데이터 저장소 역할,  --> 이것들을 처리할 액션  이 필요함

function App() {
  return (
    <>
      <h1>리덕스 프로젝트이지롱</h1>
      <Provider store = {MyStore}>
        {/* <MyCounter/> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<BoardList/>} />
            <Route path='/BoardDetail/:id' element={<BoardDetail/>} />
            <Route path='/BoardWrite' element={<BoardWrite/>} />
            <Route path='/BoardModify/:id' element={<BoardModify/>} />
          </Routes>
        </BrowserRouter>
        
      </Provider>
    </>
  );
}

export default App;

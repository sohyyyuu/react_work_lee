

import EffectClock from "./state_p/EffectClock";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HHHome from "./rrr/HHHome";
import TopMenu2 from "./rrr/TopMenu2";
import Member from "./rrr/Member";
import About from "./rrr/About";
import Gallery from "./rrr/Gallery";
import GallSub1 from "./rrr/GallSub1";
import GallSub2 from "./rrr/GallSub2";
import SubRoute from "./rrr/SubRoute";
import Notice from "./rrr/Notice";
import NoticeDetail from "./rrr/NoticeDetail";


function Product(){
  return (
      <div>
        <h2>난 제품이야</h2>
        <p>그놈품보단 낫지?</p>
      </div>
  )
}


function App() {
  
  return (

    //리턴 요소는 1개이어야 한다. ( <div></div> 또는 <></>로 감싸는 이유 )
    <BrowserRouter>

      <EffectClock />
        <TopMenu2 />

        <Routes>
         
            <Route path='/rc/' element={ <HHHome/> } />
            <Route path='/rc/pro' element={ <Product/> } />
            <Route path='/rc/mem/:mid' element={ <Member/> } />
            <Route path='/rc/About' element={ <About/> } />
            <Route path='/rc/Gallery' element={ <Gallery/> } >
                <Route path="s1/:gid" element={ <GallSub1/> } />
                <Route path="simg" element={ <GallSub2/> } />
            </Route>
            <Route path='/rc/Notice/Detail' element={ <NoticeDetail/> } />
            <Route path='/rc/Notice*' element={ <Notice/> } />
          
     
          
        </Routes>

        <SubRoute />
        {/* 라우트 되어 있는 하위 컴포넌트 결합 */}
    </BrowserRouter>
  );
}

export default App;

import {Link} from 'react-router-dom';

function TopMenu(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/rc/'>홈</Link>
                    <Link to='/rc/pro'>제품</Link>
                </li>
                <li>
                    <Link to='/rc/mem/aaa'>멤버/aaa</Link>
                    <Link to='/rc/mem/bbb'>멤버/bbb</Link>
                    <Link to='/rc/mem/123'>멤버/123</Link>
                    <Link to='/rc/mem/나는무너'>멤버/나는무너</Link>
                    
                </li>
                <li>
                    <Link to='/rc/About'>About</Link>
                    <Link to="/rc/About?pid=aaa&age=27&marraig=true">About2</Link>
                    <Link to="/rc/About?pid=bbb&age=38#qwer">About3</Link>
                    <Link to='/rc/About?age=27#asdf'>About4</Link>
                </li>
                <li>
                    <Link to='/rc/Gallery'>갤러리</Link>
                    {/* Gallery의 하위로 접근 x 
                    <Link to='/s1/poiu'>s1</Link>  */}
                    <Link to='/rc/Gallery/s1/hjkl'>갤러리/s1</Link>
                    <Link to='/rc/Gallery/simg'>갤러리/simg</Link>
                </li>
                <li>
                    <Link to='/rc/sr1'>서브1</Link>
                    <Link to='/rc/sr2'>서브2</Link>
                    <Link to='/rc/sr3'>서브3</Link>
                </li>   
                <li>
                    <Link to='/rc/Notice'>공지사항</Link>
                    <Link to='/rc/Noticeasdf'>공지사항asdf</Link>
                    <Link to='/rc/Notice/zzxx'>공지사항/zzxx</Link>
                    <Link to='/rc/Notice/Detail'>공지사항/상세보기</Link>
                </li>  
                <li>
                    <a href='/'>스프링홈</a>
                    <a href='/attend'>스프링attend</a>
                    
                </li>
            </ul>
            
            
        </div>
    );
}

export default TopMenu;
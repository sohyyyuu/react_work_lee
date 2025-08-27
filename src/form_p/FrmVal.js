import {useState, useRef} from 'react';

function FrmVal(props) {

    const[frmData, setFrmData] = useState({
        pid:'',
        gender:'f',
        hobby:['디버깅','프로그래밍'],
        email1:'abcd@nnnnn.com',
        email2:'nate.com',
        birth:'2010-06-08',
        content:'뿡야뿡야왕바우'
    })

    const myFrmFef = useRef()   // 객체 형태를 참조하는 방식 -> 폼에다 등록해서 사용

    const mySubmit=(e)=>{
        e.preventDefault() // 기본 폼 제출 막기
        
        if(window.confirm("유효성 통과?")) {
            //e.submit() 보낼 수 없음 (오류발생)
            
            //권장사항은 아님 -> 권장사항 : 비동기 방식으로 backEnd에 Data 전송
            myFrmFef.current.submit()   // 참조하는 객체의 현재형태에서 submit 실행
            
        }

    }

    const pidChange=(e)=>{
        console.log(`pidChange 실행 : ${e.target.name}, ${e.target.type}, ${e.target.checked} => ${e.target.value}`)
        /// 이벤트 주체의 이름을 속성명으로 하여 value 변경
        //setFrmData({...frmData, [e.target.name ]:e.target.value})
        setFrmData({...frmData, pid:e.target.value})
    }

    
    const genChange=(e)=>{

        const {name, value, type, checked} = e.target
        console.log(`genChange 실행 : ${name}, ${type}, ${checked} => ${value}`)
        
        setFrmData({...frmData, [name]:value})
    }

    const hobbyChange=(e)=>{

        const {name, value, type, checked} = e.target
        console.log(`hobbyChange 실행 : ${name}, ${type}, ${checked} => ${value}`)
        
        ///                  frmData.hobby (맨 위)
        ///checked 가 true 이면 추가해야함
        ///checked : false --> 삭제

        let hobby =  frmData.hobby
        console.log(`hobby 변경전: ${hobby}`)

        if(checked){   // 추가일 경우
            hobby.push(value)

        } else {       // 삭제일 경우
            // 원소중 value 가 아닌 것으로만 필터링하여 배열을 새로 만들어라 --> value를 삭제해라
            hobby = hobby.filter(ee => ee != value)
        }
        console.log(`hobby 변경후: ${hobby}`)
        setFrmData({...frmData, hobby : hobby})
    }

    const dataChange=(e)=>{

        const {name, value} = e.target
        
        setFrmData({...frmData, [name]:value})
    }

    

    return (
        <div>
            <h1>FrmVal 예제</h1>
            {/* ref={myFrmFef} 참조객체를 form 에 등록 */}
            <form ref={myFrmFef} onSubmit={mySubmit}>
                <legend>
                    {/* htmlFor = for */}
                    <label htmlFor="pid">아이디</label>
                    <input id="pid" name="mid" placeholder='아이디를 입력하세요' value={frmData.pid}
                        onChange={pidChange}
                    />
                    <input type='button' value="중복확인" />
                </legend>

                <legend>
                    성별
                    <label htmlFor="m">남</label>
                    <input type='radio' value="m" id="m" name="gender" checked={frmData.gender=='m'}
                    onChange={genChange}
                    />

                    <label>여
                        <input type='radio' value="f" id="f" name="gender" checked={frmData.gender=='f'}
                        onClick={genChange}></input>
                    </label>

                    <input type='radio' value="it" id="it" name="gender" checked={frmData.gender=='it'}
                    onChange={genChange}></input> 
                    {/* checked이 여러 개이면 마지막이 적용됨 */}
                    <label htmlFor="it">it인</label>
                    {/* radio 를 묶는게 name  , ex) name을 gender로 해서 묶어줌*/}
                </legend>

                <legend>
                    취미
                    <label htmlFor="coding">코딩</label>
                    <input type='checkbox' value="코딩" id="coding" name="hobby" checked={frmData.hobby.includes('코딩')}
                    onChange={hobbyChange}></input>

                    <label>디버깅
                        <input type='checkbox' value="디버깅"  name="hobby" checked={frmData.hobby.includes('디버깅')}
                        onChange={hobbyChange}></input>
                    </label>

                    <label>프로그래밍</label>
                    <input type='checkbox' value="프로그래밍" name="hobby" checked={frmData.hobby.includes('프로그래밍')}
                    onChange={hobbyChange}></input>
                </legend>

                <legend>
                    <label htmlFor="email1">이메일</label>
                    <input id="email1" name="email1" type='email' value={frmData.email1} onChange={dataChange} />@
                                                    {/* type='email' ; 모바일에서 이메일 키보드로 보여줌 */}
                    <select name="email2" value={frmData.email2} onChange={dataChange}>
                        <option>네이버</option>
                        <option value="google.com">구글</option>
                        <option value="nate.com">네이트</option>
                        <option value="daum.com">다음</option>
                    </select>
                </legend>

                <legend>
                    <label htmlFor="birth">생일</label>
                    <input id="birth" name="birth" type='date' value={frmData.birth} 
                    min='2000-07-08' max='2015-11-02' onChange={dataChange}/>
                </legend>

                <legend>
                    <label htmlFor="content">남기실 말</label>
                    <textarea id='content' name='content' rows={5} cols={50} 
                    onChange={dataChange}>{frmData.content}</textarea>
                </legend>

                <input type='reset' value='초기화' />
                <input type='submit' value='가입' />


            </form>
        </div>
    );
}

export default FrmVal;
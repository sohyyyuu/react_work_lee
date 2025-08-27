import React from 'react';

function Frm(props) {
    return (
        <div>
            <h1>Form 예제</h1>
            <form action='joinReg'>
                <legend>
                    {/* htmlFor = for */}
                    <label htmlFor="pid">아이디</label>
                    <input id="pid" name="mid" placeholder='아이디를 입력하세요'></input>
                    <input type='button' value="중복확인" />
                </legend>

                <legend>
                    <label>암호
                        <input name="pw" type='password'></input>
                    </label>
                </legend>

                <legend>
                    {/* defaultValue(React) = value(HTML) ;표기 차이 */}
                    <input id="pname" name="mname" defaultValue="불주먹" />
                    <label htmlFor="pname">이름</label>
                </legend>

                <legend>
                    성별
                    <label htmlFor="m">남</label>
                    <input type='radio' value="남자" id="m" name="gender"></input>

                    <label>여
                        <input type='radio' value="여자" id="f" name="gender" checked></input>
                    </label>

                    <input type='radio' value="it인" id="it" name="gender" checked></input> 
                    {/*  */}
                    <label htmlFor="it">it인</label>
                    {/* radio 를 묶는게 name  , ex) name을 gender로 해서 묶어줌*/}
                </legend>

                <legend>
                    취미
                    <label htmlFor="coding">코딩</label>
                    <input type='checkbox' value="코딩" id="coding" name="hobby"></input>

                    <label>디버깅
                        <input type='checkbox' value="디버깅"  name="hobby" checked></input>
                    </label>

                    <label>프로그래밍</label>
                    <input type='checkbox' value="프로그래밍" name="hobby" checked></input>
                </legend>

                <legend>
                    <label htmlFor="email1">이메일</label>
                    <input id="email1" name="email1" type='email' />@
                                                    {/* type='email' ; 모바일에서 이메일 키보드로 보여줌 */}
                    <select>
                        <option>네이버</option>
                        <option value="google.com">구글</option>
                        <option value="nate.come" selected>네이트</option>
                        <option value="daum.com">다음</option>
                    </select>
                </legend>

                <legend>
                    <label>전화번호</label>
                    
                    <select name="tell" defaultValue="016">
                                        {/* option 에 selected로도 가능하지만 select 에 defaultValue로도 가능 */}
                        <option>010</option>
                        <option>011</option>
                        <option>016</option>
                        <option>017</option>
                        <option>018</option>
                        <option>019</option>
                    </select>
                    -
                    <input type='tel' name='tel2' maxLength='4' size='5'></input>
                    -
                    <input type='tel' name='tel3' maxLength='4' size='5'></input>
                </legend>

                <legend>
                    <label htmlFor="birth">생일</label>
                    <input id="birth" name="birth" type='date' defaultValue='2002-06-02' min='2000-07-08' max='2015-11-02'/>
                </legend>

                <legend>
                    <label >기본주소</label>
                    <input name="addr1" defaultValue='창원집' readOnly /><button>우편번호 검색</button>
                                                    {/* button 은 submit과 같은 기능 (주소 보냄)*/}
                    <label >상세주소</label><input name="addr2" type='text'/>
                </legend>

                <legend>
                    <label htmlFor="upfile">파일</label>
                    <input id="upfile" name="upfile" type='file'/>
                </legend>

                <legend>
                    <label htmlFor="content">남기실 말</label>
                    <textarea id='content' name='content' rows={5} cols={50}>뿡야뿡야왕바우</textarea>
                </legend>

                <input type='reset' value='초기화' />
                <input type='submit' value='가입' />


            </form>
        </div>
    );
}

export default Frm;
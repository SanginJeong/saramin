import React from 'react'
import { useNavigate } from 'react-router'

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col pb-12'>
      <h1 className='text-[32px] mb-5'>회원가입</h1>
      <form className='flex flex-col gap-4'>
        <div>
          <p>아이디</p>
          <div className='flex gap-4 items-center'>
            <input type="text" className='input-base rounded-none w-[50%] px-2 py-1' />
            {/* 중복체크 시 비교해서 맞으면 체크표시 렌더링 오류있으면 에러문구 띄우기 */}
            <i className="text-green-400 fa-solid fa-check"></i>
            <button type='button' className='button-base bg-blue-600 text-white hover:bg-blue-400 transition'>중복체크</button>
          </div>
        </div>
        <div>
          <p>비밀번호</p>
          <div className='flex gap-4 items-center'>
            <input type="text" className='input-base rounded-none w-[50%] px-2 py-1' placeholder='특수문자, 숫자, 영어를 포함' />
            {/* onChage 시 비교해서 맞으면 체크표시 렌더링 오류있으면 에러문구 띄우기 */}
            <i className="text-green-400 fa-solid fa-check"></i>
          </div>
        </div>
        <div>
          <p>비밀번호 확인</p>
          <div className='flex gap-4 items-center'>
            <input type="text" className='input-base rounded-none w-[50%] px-2 py-1' />
            {/* onChage 시 비교해서 맞으면 체크표시 렌더링 오류있으면 에러문구 띄우기 */}
            <i className="text-green-400 fa-solid fa-check"></i>
          </div>
        </div>
        <div>
          <p>이메일</p>
          <div className='flex gap-4 items-center'>
            <input type="text" className='input-base rounded-none w-[50%] px-2 py-1' />
            <i className="text-green-400 fa-solid fa-check"></i>
          </div>
        </div>
        <div>
          <p>이름 / 나이 / 성별</p>
          <div className='flex gap-4 items-center'>
            <div className='flex gap-4 items-center w-[50%]'>
              <input type="text" className='input-base rounded-none px-2 py-1 flex-1' placeholder='이름'/>
              <select className='border-2 border-blue-600 p-1 flex-1'>
                {Array(42).fill(0).map((v,i)=>(
                  <option value={i+19}>{i+19}</option>
                ))}
              </select>
              <select className='border-2 border-blue-600 p-1 flex-1'>
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
            </div>
            <i className="text-green-400 fa-solid fa-check"></i>
          </div>
        </div>

        <div>
          <p>주소</p>
          <div className='input-base rounded-none px-2 py-1 w-[50%] cursor-pointer text-gray-600 mb-1'>주소검색</div>
          <input type="text" className='input-base rounded-none px-2 py-1 w-[50%]' placeholder='상세주소'/>
        </div>
        
        <div className='flex justify-center gap-4'>
          <button type='submit' className='button-base bg-blue-600 text-white hover:bg-blue-400 transition min-w-30'>완료</button>
          <button type='button' onClick={()=>navigate('/login')} className='button-base bg-blue-600 text-white hover:bg-blue-400 transition min-w-30'>돌아가기</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
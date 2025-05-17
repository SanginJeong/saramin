import React from 'react'
import { Link } from 'react-router'
const LoginPage = () => {
  return (
    <>
      <div className='flex'>
        <form className='flex flex-1 flex-col gap-4 '>
          <h1 className='self-center text-[32px]'>로그인</h1>
          <input type="text" className='input-base rounded-none p-2' placeholder='아이디'/>
          <input type="password" className='input-base rounded-none p-2' placeholder='비밀번호'/>
          <div className='flex justify-center gap-4 text-gray-400'>
            <Link>아이디 찾기</Link>
            <Link>비밀번호 찾기</Link>
          </div>
        </form>

        <div className='flex-1 flex justify-center items-center'>
          <Link to='/register' className='border-2 py-8 px-12 text-[24px] rounded-2xl bg-blue-600 text-white hover:bg-blue-400 transition'>회원가입</Link>
        </div>
      </div>

      {/* 에러바운더리 */}
    </>
  )
}

export default LoginPage
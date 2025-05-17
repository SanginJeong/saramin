import React, { useState } from 'react'
import { Link } from 'react-router'
import { useSearchStore } from '../../store/useSearchStore'
import SearchUI from '../../common/searchUI/SearchUI'

const NavTop = () => {
  const {setSearchUI, isOpenSearchUI} = useSearchStore();
  
  return (
    <div className='flex py-4 relative top-0'>
      <div className='flex gap-4 flex-[8] items-center'>
        <div className='flex-[2]'>
          <Link className='text-[24px] text-blue-800 font-bold' to='/'>Saramin</Link>
        </div>
        <form className='relative flex-[10]' onClick={setSearchUI}>
          <i className="fa-solid fa-magnifying-glass absolute cursor-pointer left-2 top-[15px] text-blue-600"/>
          <input className='input-base px-7 cursor-pointer py-2 w-[60%]' type="text" placeholder='채용 공고 검색'/>
        </form>
      </div>

      <div className='flex-[4] flex items-center gap-4 justify-end'>
        <Link to='login' className='hover:text-blue-600 text-gray-600'>로그인</Link>
        <Link to='register' className='hover:text-blue-600 text-gray-600'>회원가입</Link>
      </div>
      {isOpenSearchUI && <SearchUI/>}
    </div>
  )
}

export default NavTop
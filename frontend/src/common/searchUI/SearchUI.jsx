import React,{useState} from 'react'
import { useSearchStore } from '../../store/useSearchStore'

const SearchUI = () => {
  const setSearchUI = useSearchStore((state)=>state.setSearchUI);
  return (
    <>
      <div className='absolute top-0 z-[100] bg-white w-full h-full'>
        <form className='flex items-center h-full'>
          <input type="text" className='border-1 p-2 flex-1' placeholder="검색어를 입력하세요" />
          <div className='border-1 p-2 flex-1 flex items-center gap-2 cursor-pointer text-gray-400'><i class="fa-solid fa-location-dot"></i>지역을 선택해주세요</div>
          <div className='border-1 p-2 flex-1 flex items-center gap-2 cursor-pointer text-gray-400'><i class="fa-solid fa-address-card"></i>직업을 선택해주세요</div>
          <button className='button-base bg-blue-600 text-white py-2 px-4'>검색</button>
          <button className='button-base ml-3 px-4 py-2' onClick={setSearchUI}><i class="fa-solid fa-xmark"></i></button>
        </form>
      </div>
    </>
  )
}

export default SearchUI
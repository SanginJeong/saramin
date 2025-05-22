import React from 'react'
import ErrorBoundary from '../../../common/error/ErrorBoundary'

const OptionRow = ({onChange, isValid, errorMessage}) => {
  
  return (
    <div>
      <p>이름 / 나이 / 성별</p>
      <div className='flex gap-4 items-center'>
        <div className='flex gap-4 items-center w-[50%]'>
          <input onChange={(e)=>onChange(e,"name")}  type="text" className='input-base rounded-none px-2 py-1 flex-1' placeholder='이름'/>
          <select onChange={(e)=>onChange(e,"age")} className='border-2 border-blue-600 p-1 flex-1'>
            <option value="" disabled selected>나이</option>
            {Array(42).fill(0).map((v,i)=>(
              <option value={i+19}>{i+19}</option>
            ))}
          </select>
          <select onChange={(e)=>onChange(e,"gender")} className='border-2 border-blue-600 p-1 flex-1'>
            <option value="" disabled selected>성별</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
          </select>
        </div>
        {isValid ? <i className="text-green-400 fa-solid fa-check"></i> : <ErrorBoundary errorMessage={errorMessage}/>}
        
      </div>
    </div>
  )
}

export default OptionRow
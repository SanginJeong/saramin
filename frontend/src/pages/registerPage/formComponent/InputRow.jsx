import React from 'react'
import ErrorBoundary from '../../../common/error/ErrorBoundary';
const InputRow = ({title, placeholder, hasCheckButton = false, onCheck, onChange, isValid, type, errorMessage}) => {

  return (
    <div>
      <p>{title}</p>
      <div className='flex gap-4 items-center'>
        {/* onChange undefined 블로그 메모 */}
        <div className='flex-1 py-2'>
          <input onChange={onChange} type={type} className='input-base rounded-none w-full px-2 py-1' placeholder={placeholder} />
        </div>
        <div className='flex-1 flex items-center gap-4'>
          { hasCheckButton && <button onClick={onCheck} type='button' className='button-base bg-blue-600 text-white hover:bg-blue-400 transition'>중복체크</button> }
          {isValid ? <i className="text-green-400 fa-solid fa-check"></i> : <ErrorBoundary errorMessage={errorMessage}/>}
        </div>
      </div>
    </div>
  )
}

export default InputRow



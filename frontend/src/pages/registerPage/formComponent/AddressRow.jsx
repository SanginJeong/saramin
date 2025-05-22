import React, {useState,useEffect,useRef} from 'react'
import { useDaumPostCode } from '../../../hooks/daumPostCode/useDaumPostCode';

const AddressRow = ({formData,setFormData, isValid, handleAddress}) => {
  const openPostcode = useDaumPostCode(handleAddress);

  return (
    <div>
      <p>주소</p>
      <div className='flex gap-4 items-center'>
        <div className='flex-1'>
          <div className={`input-base rounded-none px-2 py-1 cursor-pointer ${formData.addr1 ? "text-black" : "text-gray-600"} mb-1`} onClick={openPostcode}>
            {formData.addr1 || "주소검색"}
          </div>
          <input type="text" className='input-base rounded-none px-2 py-1 w-full' placeholder='상세주소' value={formData.addr2} onChange={(e)=>setFormData((prev)=>({...prev, addr2: e.target.value}))}/>
        </div>
        <div className='flex-1'>
          {isValid && <i className="text-green-400 fa-solid fa-check"></i>}
        </div>
      </div>
    </div>
  )
}

export default AddressRow
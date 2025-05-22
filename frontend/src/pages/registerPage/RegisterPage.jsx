import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import InputRow from './formComponent/InputRow';
import AddressRow from './formComponent/addressRow';
import OptionRow from './formComponent/OptionRow';
import { useRegisterQuery } from '../../hooks/query/useRegisterQuery';
import { useCheckUserIdQuery } from '../../hooks/query/useCheckUserIdQuery';
const RegisterPage = () => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState({
    userId : false,
    password : false,
    checkPassword : false,
    email : false,
    name : false,
    age : false,
    gender : false,
    addr : false,
  })
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    checkPassword: "",
    email : "",
    name : "",
    age : "",
    gender : "",
    addr1: "",
    addr2: "",
  })
  const {mutate: register} = useRegisterQuery();
  const {mutate: checkUserId} = useCheckUserIdQuery(setIsValid);
  
  const handleCheckUserId = () => {
    checkUserId(formData.userId);
  }
  const handleUserId = (e) => {
    setFormData((prev)=>({...prev, userId: e.target.value}))
    setIsValid((prev)=>({...prev, userId: false}));
  }

  const handlePassword = (e) => {
    setFormData((prev)=>({...prev, password: e.target.value}))
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    passwordRegex.test(e.target.value) ? setIsValid((prev)=>({...prev, password: true})) : setIsValid((prev)=>({...prev, password: false}))
  }

  // formData 위치 블로그 메모
  const handleCheckPassword = (e) => {
    setFormData((prev)=>({...prev, checkPassword: e.target.value}));
    if(e.target.value === formData.password && e.target.value !=="") {
      setIsValid((prev)=>({...prev, checkPassword: true}))
    } else setIsValid((prev)=>({...prev, checkPassword: false}))
  }

  const handleCheckEmail = (e) => {
    setFormData((prev)=>({...prev, email: e.target.value}));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailRegex.test(e.target.value) ? setIsValid((prev)=>({...prev, email: true})) : setIsValid((prev)=>({...prev, email: false}))
  }
  const handleNameAgeGender = (e,key) => {
    setFormData((prev)=>({...prev, [key]: e.target.value}));
    
    // setState 비동기 때문에 e.target.value를 이용해야 하고 그를위해선 key를 구분
    if(key === "name") {
      e.target.value !== "" ? setIsValid((prev)=>({...prev, name: true})) : setIsValid((prev)=>({...prev, name:false}))
    } else if (key === "age") {
      e.target.value !== "" ? setIsValid((prev)=>({...prev, age: true})) : setIsValid((prev)=>({...prev, age:false}))  
    } else if (key === "gender") {
      e.target.value !== "" ? setIsValid((prev)=>({...prev, gender: true})) : setIsValid((prev)=>({...prev, gender:false})) 
    }
  }

  const handleAddress = (data) => {
    setFormData((prev)=>({...prev, addr1 : `(${data.zonecode}) ${data.roadAddress}`|| '' }));  
  };

  const submmitFormData = (e) => {
    e.preventDefault();
    register(formData);
  }

  useEffect(()=>{
    if(formData.addr1 && formData.addr2){
      setIsValid((prev)=>({...prev, addr: true}))
    } else setIsValid((prev)=>({...prev, addr: false}))
  },[formData.addr1, formData.addr2])

  return (
    <div className='flex flex-col pb-12'>
      <h1 className='text-[32px] mb-5'>회원가입</h1>
      <form className='flex flex-col gap-4' onSubmit={submmitFormData}>
        <InputRow title="아이디" type="text" onChange={handleUserId} onCheck={handleCheckUserId} hasCheckButton isValid={isValid.userId}/>
        <InputRow title="비밀번호" type="password" onChange={handlePassword} isValid={isValid.password} placeholder="특수문자, 숫자, 영어를 포함한 8자리 이상" errorMessage={formData.password && "특수문자, 숫자, 영어를 포함한 8자리 이상이어야 합니다"}/>  
        <InputRow title="비밀번호 확인" type="password" onChange={handleCheckPassword} isValid = {isValid.checkPassword} errorMessage={formData.checkPassword && "비밀번호를 확인해주세요"}/>  
        <InputRow title="이메일" type="text" onChange={handleCheckEmail} isValid={isValid.email} errorMessage={formData.email && "이메일 형식이 올바르지 않습니다."}/>
        <OptionRow onChange={handleNameAgeGender} isValid={(isValid.name && isValid.age && isValid.gender)} errorMessage={formData.name && "이름,성별,나이를 입력해주세요"}/>
        <AddressRow formData={formData} setFormData={setFormData} handleAddress={handleAddress} isValid={formData.addr1 && formData.addr2}/>
        <div className='flex justify-center gap-4'>
          <button disabled={!Object.values(isValid).every((value)=>value === true)} type='submit' className='button-base bg-blue-600 text-white hover:bg-blue-400 transition min-w-30  disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed'>완료</button>
          <button type='button' onClick={()=>navigate('/login')} className='button-base bg-blue-600 text-white hover:bg-blue-400 transition min-w-30'>돌아가기</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
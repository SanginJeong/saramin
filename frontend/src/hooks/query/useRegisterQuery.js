import {useMutation} from '@tanstack/react-query';
import api from '../../utils/api';
import { useNavigate } from 'react-router';
const register = async(formData) => {
  return await api.post('/user', {formData});
}

export const useRegisterQuery = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn : register,
    onSuccess : () => {
      alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      navigate('/login');
    },
    onError : (error) => console.log(error.message)
  })
}
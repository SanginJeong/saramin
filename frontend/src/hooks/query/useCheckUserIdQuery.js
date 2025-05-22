import { useMutation } from "@tanstack/react-query";
import api from "../../utils/api";

const checkUserId = async(userId) => {
  return api.post('/user/check', {userId});
}

export const useCheckUserIdQuery = (setIsValid) => {
  return useMutation({
    mutationFn : checkUserId,
    onSuccess : () => setIsValid((prev)=>({...prev, userId: true})),
    onError: (error) => console.log(error.messsage)
  })
}
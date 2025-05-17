import {create} from 'zustand';

export const useSearchStore = create((set)=>({
  isOpenSearchUI : false,
  searchTerm : "",
  region : "",
  job : "",
  setSearchTerm : (newTerm) => set(()=>({searchTerm : newTerm})),
  setSearchUI : () => set((state)=>({isOpenSearchUI : !state.isOpenSearchUI})),
}))
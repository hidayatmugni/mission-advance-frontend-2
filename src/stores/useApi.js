// useApi.js

import useApiStore from "./apiStore";

const useApi = () => {
  // Mengambil state dan actions dari Zustand store
  const { data, loading, error, fetchData, addData, updateData, deleteData } = useApiStore();

  
  // Mengembalikan semua state dan actions
  return {
    data,
    loading,
    error,
    fetchData,
    addData,
    updateData,
    deleteData,
  };
};

export default useApi;

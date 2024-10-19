import { create } from "zustand";
import axios from "axios";

const API_URL = "https://670026164da5bd2375535bbc.mockapi.io/api/movie/movie";

const useApiStore = create((set) => ({
  data: [],
  loading: false,
  error: null,
  // Method GET untuk mengambil data
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(API_URL);
      set({ data: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  // Method POST untuk menambahkan data baru
  addData: async (newData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(API_URL, newData);
      set((state) => ({ data: [...state.data, response.data], loading: false }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  // Method PUT untuk mengedit data berdasarkan id
  updateData: async (id, updatedData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      set((state) => ({
        data: state.data.map((item) => (item.id === id ? response.data : item)),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  // Method DELETE untuk menghapus data berdasarkan id
  deleteData: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${API_URL}/${id}`);
      set((state) => ({
        data: state.data.filter((item) => item.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useApiStore;

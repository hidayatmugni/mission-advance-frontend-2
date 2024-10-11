// import { create } from "zustand";

// const useAuthStore = create((set) => ({
//   // State untuk menyimpan user saat ini
//   user: null,

//   // Fungsi untuk register
//   register: (username, email, password) => {
//     const newUser = { username, email, password }; // Buat objek user baru
//     localStorage.setItem("user", JSON.stringify(newUser)); // Simpan user ke localStorage
//     set({ user: newUser }); // Update state user di Zustand
//   },

//   // Fungsi untuk login
//   login: (username, password, email) => {
//     const storedUser = JSON.parse(localStorage.getItem("user")); // Ambil user dari localStorage
//     if (storedUser && storedUser.username === username && storedUser.password === password && storedUser.email === email) {
//       set({ user: storedUser }); // Jika cocok, update state user
//       return true; // Berhasil login
//     }
//     return false; // Login gagal
//   },

//   // Fungsi untuk memuat data user dari localStorage (dipakai di halaman profil)
//   loadUserFromLocalStorage: () => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       set({ user: storedUser }); // Set state user jika ada di localStorage
//     }
//   },
// }));

// export default useAuthStore;

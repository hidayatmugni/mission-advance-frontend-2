// import { useShallow } from "/zustand/react/shallow";
import { create } from "zustand";

// const useStore = create((set) => ({
//   count: 0,
//   name: "kocok",
//   increment: () => set((state) => ({ count: state.count + 1 })),
// }));
const useLoginStore = create((set) => ({
  username: "",
  email: "",
  password: "",
  updateUserName: (userName) => set(() => ({ userName: userName })),
  updateEmail: (email) => set(() => ({ email: email })),
  updatePassword: (password) => set(() => ({ password: password })),
}));

export default useLoginStore;

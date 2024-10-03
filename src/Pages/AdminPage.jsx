import { useShallow } from "zustand/shallow";
import useStore from "../store/store";

const Counter = () => {
  console.log("counter render");
  // const { count, increment } = useStore();
  // const count = useStore((state) => state.count);
  // const increment = useStore((state) => state.increment);
  const { count, increment } = useStore(useShallow((state) => ({ count: state.count, increment: state.increment })));
  return (
    <div>
      <span>{count}</span>
      <button className="bg-red-500 text-white p-2 rounded-xl" onClick={increment}>
        one up
      </button>
    </div>
  );
};
const User = () => {
  console.log("user render");
  // const { user } = useStore();
  const user = useStore((state) => state.user);
  return (
    <div>
      <span>{user}</span>
    </div>
  );
};

const Admin = () => {
  // const user = useStore((state) => state.user);
  // const count = useStore((state) => state.count);
  // const increment = useStore((state) => state.increment);

  return (
    <>
      <Counter></Counter>
      <User></User>
    </>
  );
};

export default Admin;

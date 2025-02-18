import { useState } from "react";
import { useShopingCartContext } from "../ShopingCartContext/ShopingCartContext";

function LoginPage() {
  const { handleLogin } = useShopingCartContext();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="mt-32 bg-blue-300 w-80 rounded mx-auto space-y-6 py-20 px-10">
        <div className="flex items-center flex-col relative">
          <label htmlFor="userName" className="absolute flex left-3 -top-8">
            User Name:
          </label>
          <input
            type="text"
            onChange={handleChangeLogin}
            value={user.username}
            name="username"
            placeholder="username..."
            className="bg-white rounded px-4 py-1 outline-none"
          />
        </div>
        <div className="flex items-center flex-col relative mt-14">
          <label htmlFor="password" className="absolute left-3 -top-8">
            Password:
          </label>
          <input
            type="password"
            onChange={handleChangeLogin}
            value={user.password}
            name="password"
            placeholder="password..."
            className="bg-white rounded px-4 py-1 outline-none"
          />
        </div>
        <div className="relative">
          <button
            className="border px-8 py-2 rounded text-slate-700 cursor-pointer active:scale-95 hover:opacity-80 absolute left-4"
            onClick={() => handleLogin(user.username, user.password)}
          >
            login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

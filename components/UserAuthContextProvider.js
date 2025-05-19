import { useState } from "react";
import  { userAuthContext } from "../contexts/userAuthContext";
import { logIn  ,signUp, logOut,} from "../functionalities/authfunctions";
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut }}
    >
      {children}
    </userAuthContext.Provider>
  );
}
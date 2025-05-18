import { createContext } from "react";
import { useContext } from "react";
export const userAuthContext = createContext();
export function useUserAuth() {
  return useContext(userAuthContext);
}
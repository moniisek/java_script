import {createContext, useContext} from 'react'

export const AuthContext = createContext();


// useAuth is a custom hook
export function useAuth() {
  return useContext(AuthContext);
}

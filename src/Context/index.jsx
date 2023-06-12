import { createContext } from 'react';

const ShppingCartContext = createContext()

export const ShppingCartProvider = ({children}) => {
  return(
    <ShppingCartContext.Provider>
      {children}
    </ShppingCartContext.Provider>
  )
}

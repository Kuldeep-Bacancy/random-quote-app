import { createContext, useContext } from "react";

export const RandomQuoteContext = createContext();

export const RandomQuoteContextProvider = RandomQuoteContext.Provider;


export default function useRandom () {
  return useContext(RandomQuoteContext)
}
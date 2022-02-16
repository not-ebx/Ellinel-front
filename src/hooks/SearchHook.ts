import { useEffect, useState } from "react"

export type SearchInput = {
  str: string; // Search itself
  type: "mob" | "item" | undefined;
}

export const useSearchStatus = (initialValue: SearchInput | null) => {
  const [search, setSearch] = useState<SearchInput | null>(initialValue);
  
  const updateInput = (input : SearchInput | null) => setSearch(input);

  return [search, updateInput] as const;
  
}
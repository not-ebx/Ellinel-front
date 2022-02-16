import React, { ChangeEvent, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchInput, useSearchStatus } from '../hooks/SearchHook';

export const SearchBar = () => {
  const [search, setSearchInput] = useSearchStatus(null);
  
  const onSearchInputChange = (event: ChangeEvent) => {
    event.preventDefault();
    // TODO handle Mob:, Map: etc
    setSearchInput({
      str: (event.target as HTMLInputElement).value,
      type: undefined
    } as SearchInput);
    console.log(search);
  }

  return (
  <div className=''>
    <div className='bg-slate-400 border-2 border-black p-2 rounded-xl shadow-xl'>
      <div className='flex divide-x space-x-c2'>
        <div className='px-3 my-auto mx-auto'>
          <FaSearch size={'2rem'} />
        </div>
        <div className='px-3 w-full h-full'>
          <input 
            className='shadow appearance-none border rounded w-full h-full p-3 text-gray-700 leading-tight focus:outline focus:shadow-outline' 
            placeholder='Search Here...' 
            id='search'
            type='text'
            onChange={onSearchInputChange}
          />
        </div>
      </div>
    </div>
  </div>
  );
};

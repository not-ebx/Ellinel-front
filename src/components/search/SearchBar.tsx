import React, { ChangeEvent, KeyboardEvent, KeyboardEventHandler, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchInput, useSearchStatus } from '../../hooks/SearchHook';
import styles from "./SearchBar.module.scss";

export const SearchBar = () => {
  const [search, setSearchInput] = useSearchStatus({str: "", type: undefined});
  
  const onSearchInputChange = (event: ChangeEvent) => {
    event.preventDefault();
    // TODO handle Mob:, Map: etc
    setSearchInput({
      ...search,
      str: (event.target as HTMLInputElement).value,
    } as SearchInput);

    if(!search?.type && search?.str.startsWith("mob:")){
      setSearchInput(
        {
          str: "",
          type: "mob"
        }
      )
    }

  }

  const onDeleteKey = (event: KeyboardEvent) => {
    if(event.key === 'Backspace' && search){
      if (search.str.length === 0)
        setSearchInput({...search, type: undefined});
    }
  }


  return (
    <div className={styles.searchModule}>
      <div className={styles.searchBar}>
        <div className={styles.searchContents}>
          <div className={styles.searchIcon}>
            <FaSearch size={'2rem'} />
          </div>
          <label htmlFor='search' className={styles.searchChip}>
            {
              (search?.type && search?.type.length > 0) ? 
                <span>{search.type}:</span> : 
                <></>
            }
            <input 
              className={styles.searchInput} 
              placeholder={search?.type ? `Search for a ${search.type}` : 'Search Here...'}
              id='search'
              name='search'
              type='text'
              value={search?.str}
              onChange={onSearchInputChange}
              onKeyDown={onDeleteKey}
            />
          </label>
        </div>
      </div>
    </div>
  );
    /*
  return (
    <div className=''>
      <div className='search-bar'>
        <div className='flex divide-x space-x-c2'>
          <div className='px-3 my-auto mx-auto'>
            <FaSearch size={'2rem'} />
          </div>
          <div className='px-3 w-full h-full'>
            <label htmlFor="search" className=' border-black border padding-10 margin-20 block width-400 input:border-0 input:appareance-0'>
              <span>Sexo X</span>
              <input 
                className='shadow appearance-none border rounded w-full h-full p-3 text-gray-700 leading-tight focus:outline focus:shadow-outline' 
                placeholder='Search Here...' 
                id='search'
                name="search"
                type='text'
                onChange={onSearchInputChange}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );*/
};

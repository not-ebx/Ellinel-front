import React, { ChangeEvent, KeyboardEvent, KeyboardEventHandler, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchInput, useSearchStatus } from '../../hooks/SearchHook';
import styles from "../../styles/SearchBar.module.scss";

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
        <div className='flex'>
          <div className='mx-1'>
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
};

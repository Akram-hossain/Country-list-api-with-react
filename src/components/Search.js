import React, {useState,useEffect} from 'react';
import style from './countries.module.css';

const Search = (props) => {

    const [search,setSearch] = useState('');

    const searchHandler = (e) =>{
        setSearch(e.target.value);
    }

    useEffect(()=>{
        props.onSearchCountries(search);
    },[search]);

  return (
    <>
        <input type="text" placeholder='Search Country' value={search} onChange={searchHandler}/> 
    </>
  )
}

export default Search
import React from 'react';
import style from './countries.module.css';

const Country = (props) => {

  const {flags,name,capital,area} = props.country; 

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name)
  }

  return (
    <>
      <article className={style.articleBox}>
      <img src={flags.png} alt={name.common} title={name.common}/>
        <h4>{name.common}</h4>
        <h6>{capital}</h6>
        <h6>{area}</h6>
        <p>{name.official}</p>

        <button onClick={()=>{
          handleRemoveCountry(name.common);
        }}>Remove</button>
      </article>
        
    </>
  )
}

export default Country
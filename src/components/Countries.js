import React from 'react'
import style from './countries.module.css';
import Country from './Country';

const Countries = (props) => {

  return (
    <section>
        {props.countries && props.countries.map((country,index) => {
          return <Country key={index} country={country} onRemoveCountry={props.onRemoveCountry}/>
        })} 
    </section>
  )
}

export default Countries;
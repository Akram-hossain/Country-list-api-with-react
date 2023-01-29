import React,{useState,useEffect} from 'react'; 
import Countries from './components/Countries';
import Search from './components/Search';
import style from './components/countries.module.css';

const url = "https://restcountries.com/v3.1/all";

function App() {

  const [isLoading,setisLoading] = useState(true);
  const [error,setError] = useState(null);
  const [countries,setCountries] = useState([]);
  const [filteredCountries,setfilteredCountries] = useState(countries);

  const fetchData = async (url) => {
    setisLoading(true);

    try{
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setfilteredCountries(data);
      setisLoading(false);
      setError(null);
 
    }catch(error){
      setisLoading(false);
      setError(error);
    }
  };

  useEffect(()=>{
    fetchData(url);
  },[]);

  const removeHandler = (name) => {
     const filter = filteredCountries.filter((country) => country.name.common !== name);
     setfilteredCountries(filter);
  }

  const searchHandler = (searchText) => {
    let newTxtValue = searchText.toLowerCase();

    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(newTxtValue);
    });
    setfilteredCountries(newCountries);
  }

  return (
    <>
      {isLoading && <h4>Loading</h4>}
      {error && <h4>{error.message}</h4>}
      <div className={style.searchCard}>
        <h1>Countries List</h1>
        <Search onSearchCountries={searchHandler}/>
      </div>
      <Countries countries={filteredCountries} onRemoveCountry={removeHandler} />
    </>
  );
}

export default App;
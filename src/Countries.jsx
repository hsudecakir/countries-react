import useSWR from 'swr'

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const Swr = () => {
    const { data: countries } = useSWR('https://restcountries.com/v3.1/all', fetcher);
    console.log(countries)

    return(
      countries && countries.map((country) => 
        <div className="country">
          <img src={country.flags.png} alt="Flag" />
          <h2>{country.name.common}</h2>
          <div className="country-infos" >
            <p>Population: <span >{Number(country.population).toLocaleString('en-US')}</span></p>
            <p>Region: <span >{country.region}</span></p>
            <p>Capital: <span >{country.capital}</span></p>
          </div>
        </div>
      )
    )
  }

  export default Swr;
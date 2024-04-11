import { useEffect, useState } from "react"
import './Country.css'
import Country from "./Country"

export default function Countries() {
    const [countries, setCountries] = useState([])

    const[visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = country => {
        // setVisitedCountries();
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div className='country'>
            <h3>Countries: {countries.length}</h3>
            <div>
            <h5>Visited countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li
                            key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3} 
                        handleVisitedCountries = {handleVisitedCountries}
                        country={country}></Country>)
                }
            </div>
        </div>
    )
}
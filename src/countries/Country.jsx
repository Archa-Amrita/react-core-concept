import { useState } from "react";

export default function Country({country, handleVisitedCountries}){
    console.log(country);
    const{name, flags, population, area} = country;
    
    const[visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    // console.log(handleVisitedCountries);
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited' }`}>
            <h3 style={{color: visited? 'red':'white'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}kms^2</p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={handleVisited}>Visited</button>
            {
                visited ? 'I visited this country.' : '<3'
            }
        </div>
    )
}
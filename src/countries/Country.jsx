export default function Country({country}){
    console.log(country);
    const{name, flags} = country;
    return (
        <div className="country">
            <h3>Nmae: {name.common}</h3>
            <img src={flags.png} alt="" />
            
        </div>
    )
}
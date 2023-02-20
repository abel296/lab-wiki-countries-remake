import { Link, useParams } from "react-router-dom"
import './CountryDetails.css'

export const CountryDetails = ({ countriesList }) => {
    const reference = useParams().reference
    const [country] = countriesList.filter(elm => elm.cca3 === reference)

    return (
        <section className="details col-4">
            <h1>{ country.name.common }</h1>
            <table className="table">
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{ country.capital[0] }</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{ country.area } km²</td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            { (!country.borders || country.borders.length === 0) && <p>None</p> }
                            <ul>
                                { country.borders
                                    ?.map(borderCountry => countriesList
                                        .map(country => country.cca3 === borderCountry
                                            && <li key={country.cca3}><Link to={ `/country/${ country.cca3 }` }>{ country.name.common }</Link></li>)
                                    ) }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
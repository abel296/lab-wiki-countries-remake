import { NavLink } from "react-router-dom"
import './CountriesList.css'

export const CountriesList = ({ countriesList }) => {
    return (
        <>
            <section className="countries-list col-4">
                <ul className="list-group list-group-flush" >
                    { countriesList.map(elm =>
                        <NavLink className="list-group-item list-group-item-action" key={ elm.cca3 } to={ `/country/${ elm.cca3 }` } >
                            <li className={ "item" }> { elm.flag } { elm.name.common }</li>
                        </NavLink>
                    ) }
                </ul>
            </section>
        </>
    )
}
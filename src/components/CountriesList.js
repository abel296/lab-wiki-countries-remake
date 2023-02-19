import { NavLink } from "react-router-dom"
import './CountriesList.css'

export const CountriesList = ({ countriesList }) => {
    return (
        <>
            <section className="countries-list col-4">
                <ul className="list-group list-group-flush" >
                    { countriesList.map(elm =>
                        <NavLink className="text-decoration-none" key={ elm.ccn3 } to={ '#' } >
                            <li className={ "list-group-item list-group-item-action link" } >{ elm.flag } { elm.name.common }</li>
                        </NavLink>
                    ) }
                </ul>
            </section>
        </>
    )
}
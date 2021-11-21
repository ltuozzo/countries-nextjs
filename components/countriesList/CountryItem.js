import { useRouter } from "next/router";
import classes from './CountryItem.module.css'

function CountryItem(props) {
    const router = useRouter();

    function showDetailsHandler() {
        router.push('/' + props.name);
    }

    return(
        <li onClick={showDetailsHandler} className={classes.item}>
            <div className={classes.image}>
                <img src={props.flag} alt={props.name} />
            </div>
            <div className={classes.content}>
                <h3>{props.name}</h3>
                <p>Capital: {props.capital}</p>
                <p>Population: {props.population}</p>
            </div>
        </li>
    )
}

export default CountryItem;
import { useRouter } from "next/router";
import classes from './CountryItem.module.css'
import Card from "../card/Card";

function CountryItem(props) {
    const router = useRouter();

    function showDetailsHandler() {
        router.push('/' + props.name);
    }

    return(
        <li onClick={showDetailsHandler} className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.flag} alt={props.name} />
                </div>
                <div className={classes.content}>
                    <h3>{props.name}</h3>
                    <p><strong>Capital:</strong> {props.capital}</p>
                    <p><strong>Population:</strong> {props.population}</p>
                </div>
            </Card>
        </li>
    )
}

export default CountryItem;
import { useRouter } from "next/router";
import classes from './CountryItem.module.css'
import Card from "../card/Card";
import TweenMax from "gsap";

function CountryItem(props) {
    const router = useRouter();

    function showDetailsHandler(e) {
        TweenMax.to(e.currentTarget.parentNode, 3, {opacity: 0});

        router.push('/' + props.name);
    }

    return(
        <li onClick={e => showDetailsHandler(e)} className={classes.item}>
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
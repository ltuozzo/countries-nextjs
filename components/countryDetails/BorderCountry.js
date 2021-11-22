import Card from "../card/Card";
import classes from './BorderCountry.module.css';
import {useRouter} from "next/router";

function BorderCountry(props) {
    const router = useRouter();

    function switchCountryHandler() {
        router.push('/' + props.name);
    }

    return (
        <div className={classes.borderCountry} onClick={switchCountryHandler}>
            <Card>
                <img
                    src={props.flag}
                    alt={props.name}
                />
                <h2 className={classes.countryName}>{props.name}</h2>
                <div>
                    <p className={classes.countryDetails}><strong>Population:</strong> {props.population}</p>
                </div>
            </Card>
        </div>
    );
}

export default BorderCountry;
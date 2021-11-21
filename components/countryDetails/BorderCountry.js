import Card from "../card/Card";
import classes from './BorderCountry.module.css';

function BorderCountry(props) {
    return (
        <div className={classes.borderCountry}>
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
import classes from './CountryDetail.module.css';
import Card from "../card/Card";
import BorderCountry from "./BorderCountry";

function CountryDetail(props) {
    return (
        <section className={classes.detail}>
            <h2>Country</h2>
            <Card>
                <img
                    src={props.flag}
                    alt={props.name}
                />
                <h3>{props.name}</h3>
                <div className={classes.countryInformation}>
                    <p><strong>Capital:</strong> {props.capital}</p>
                    <p><strong>Population:</strong> {props.population}</p>
                    <p><strong>Currency:</strong> {props.currency}</p>
                    <p><strong>Languages:</strong> {props.languages.join(', ')}</p>
                </div>
            </Card>
            <h2>Bordering countries</h2>
            <div className={classes.borderContainer}>
                {props.borders.map(border => (
                    <BorderCountry
                        key={border.name}
                        name={border.name}
                        flag={border.flag}
                        population={border.population}
                    />
                ))}
            </div>
        </section>
    );
}

export default CountryDetail;
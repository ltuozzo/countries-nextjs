import classes from './CountryDetail.module.css';
import Card from "../card/Card";

function CountryDetail(props) {
    return (
        <section className={classes.detail}>
            <Card>
                <img
                    src={props.flag}
                    alt={props.name}
                />
                <h2>{props.name}</h2>
                <div className={classes.countryInformation}>
                    <p><strong>Capital:</strong> {props.capital}</p>
                    <p><strong>Population:</strong> {props.population}</p>
                    <p><strong>Currency:</strong> {props.currency}</p>
                    <p><strong>Languages:</strong> {props.languages.join(', ')}</p>
                </div>
            </Card>
        </section>
    );
}

export default CountryDetail;
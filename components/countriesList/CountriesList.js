import CountryItem from './CountryItem';
import classes from './CountriesList.module.css';

function CountriesList(props) {
    return (
        <ul className={classes.list}>
            {props.countries.map(country => (
                <CountryItem
                    key={country.name}
                    name={country.name}
                    flag={country.flag}
                    capital={country.capital}
                    population={country.population}
                />
            ))}
        </ul>
    );
}

export default CountriesList;
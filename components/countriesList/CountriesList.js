import CountryItem from './CountryItem';

function CountriesList(props) {
    return (
        <ul>
            {props.countries.map(country => (
                <CountryItem
                    key={country.name}
                    name={country.name}
                />
            ))}
        </ul>
    );
}

export default CountriesList;
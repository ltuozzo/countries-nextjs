import CountriesList from "../components/countriesList/CountriesList";

function CountriesApp(props) {
    return (
        <CountriesList countries={props.countries} />
    )
}

export async function getStaticProps() {
    const response = await fetch('https://restcountries.com/v3.1/all', {
        method: 'GET',
    })

    const countries = await response.json();

    return {
        props: {
            countries: countries.map(country => ({
                name: country.name.common,
                flag: country.flags.png,
                population: country.population,
                capital: country.capital ? country.capital : '',
            })),
        },
    };
}

export default CountriesApp;
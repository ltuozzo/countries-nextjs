import CountriesList from "../components/countriesList/CountriesList";

function CountriesApp(props) {
    // TODO Create component CountriesList
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
            // TODO Filter only necessary data
            countries: countries.map(country => ({
                name: country.name.common,
            })),
        },
    };
}

export default CountriesApp;
function CountriesApp(props) {
    // TODO Create component CountriesList
    return <h1>Countries App</h1>
}

export async function getStaticProps() {
    const response = await fetch('https://restcountries.com/v3.1/all', {
        method: 'GET',
    })

    const countries = await response.json();

    return {
        props: {
            // TODO Filter only necessary data
            countries: countries,
        }
    }
}

export default CountriesApp;
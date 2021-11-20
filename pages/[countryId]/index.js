function CountryPage() {
    // TODO Create component CountryDetails
    return <h1>Country Page</h1>
}

export async function getStaticPaths() {
    const response = await fetch('https://restcountries.com/v3.1/all', {
        method: 'GET',
    })

    const countries = await response.json();

    return {
        fallback: false,
        paths: countries.map(country => ({
            params: {
                countryId: country.name.common.toString()
            }
        })),
    }
}

export async function getStaticProps(context) {
    const countryId = context.params.countryId;

    const response = await fetch('https://restcountries.com/v3.1/name/' + countryId, {
        method: 'GET',
    })

    const data = await response.json();

    return {
        props: {
            // TODO Filter only necessary data
            country: data,
        }
    }
}

export default CountryPage;
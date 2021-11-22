import CountriesList from "../components/countriesList/CountriesList";
import {Fragment} from "react";
import Head from "next/head";

function CountriesApp(props) {
    return (
        <Fragment>
            <Head>
                <title>Countries App</title>
                <meta name='description' content='Explore all the countries of the world' />
            </Head>
            <CountriesList countries={props.countries} />
        </Fragment>
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
import CountryDetail from "../../components/countryDetails/CountryDetails";
import Head from "next/head";
import {Fragment} from "react";

function CountryPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.name}</title>
                <meta name='description' content={props.name} />
            </Head>
            <CountryDetail
                flag={props.flag}
                name={props.name}
                capital={props.capital}
                population={props.population}
                currency={props.currency}
                languages={props.languages}
                borders={props.borders}
            />
        </Fragment>
    )
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

    const response = await fetch('https://restcountries.com/v3.1/all', {
        method: 'GET',
    })

    const countries = await response.json();

    const country = countries.find(country => country.name.common === countryId);

    const borderCountries = [];

    if (country.borders) {
        country.borders.forEach(border => {
            const newBorder = countries.find(country => country.cioc === border);
            if(newBorder){
                borderCountries.push({
                    name: newBorder.name.common,
                    flag: newBorder.flags.png,
                    population: newBorder.population,
                })
            }
        })
    }

    return {
        props: {
            flag: country.flags.png,
            name: country.name.common,
            capital: country.capital ? country.capital : '',
            population: country.population,
            currency: country.currencies[Object.keys(country.currencies)[0]].name,
            languages: Object.values(country.languages),
            borders: borderCountries,
        }
    }
}

export default CountryPage;
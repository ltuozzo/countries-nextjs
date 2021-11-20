import { useRouter } from "next/router";

function CountryItem(props) {
    const router = useRouter();

    function showDetailsHandler() {
        router.push('/' + props.name);
    }

    return(
        <li>{props.name}</li>
    )
}

export default CountryItem;
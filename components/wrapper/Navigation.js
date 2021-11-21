import classes from './Navigation.module.css';
import { useRouter } from "next/router";

function Navigation() {
    const router = useRouter();

    function navigationHandler() {
        router.push('/');
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo} onClick={navigationHandler}>Countries App</div>
            <div className={router.pathname !== '/' ? classes.backButtonActive : classes.backButton} onClick={router.back}>Back</div>
        </header>
    );
}

export default Navigation;
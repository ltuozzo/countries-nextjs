import classes from './Navigation.module.css';
import { useRouter } from "next/router";

function Navigation() {
    const router = useRouter();

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Countries App</div>
            <div className={router.pathname !== '/' ? classes.backButtonActive : classes.backButton} onClick={router.back}>Back</div>
        </header>
    );
}

export default Navigation;
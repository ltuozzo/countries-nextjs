import Navigation from "./Navigation";
import classes from './ContentWrapper.module.css';

function ContentWrapper(props) {
    return (
        <div >
            <Navigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default ContentWrapper;
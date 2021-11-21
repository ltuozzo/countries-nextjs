import {Fragment} from "react";
import classes from './ContentWrapper.module.css';

function ContentWrapper(props) {
    return (
        <Fragment>
            <h1>Countries App</h1>
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    );
}

export default ContentWrapper;
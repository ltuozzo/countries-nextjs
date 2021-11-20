import {Fragment} from "react";

function ContentWrapper(props) {
    return (
        <Fragment>
            <h1>Countries App</h1>
            <main>{props.children}</main>
        </Fragment>
    );
}

export default ContentWrapper;
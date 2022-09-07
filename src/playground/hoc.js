// HOC - Higher Order Component. : A component that reneder another component.

import React from "react";
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This a private info. Don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view the info.</p>
            )}

        </div>
    )
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='Their are the deatils.' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Their are the deatils.' />, document.getElementById('app'));

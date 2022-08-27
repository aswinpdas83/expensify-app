import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div>
        <h1> 404!</h1>
        <h2>Page Not Found </h2>
        <Link to='/'>Go home</Link>
    </div >
);

export default NotFoundPage;

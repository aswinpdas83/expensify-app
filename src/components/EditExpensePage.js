import React from 'react';

const EditExpensePage = (props) => {
    return (
        <div>
            <h3>This is From my Edit Expense Page component {props.match.params.id}.</h3>
        </div>
    );
}


export default EditExpensePage;

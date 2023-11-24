import React from 'react';

const Summary = ({vybrane}) => {

    const listItems = vybrane.map((number) =>
        <li>{number}</li>
    );

    return (
        <div className="">
            Vybrané vstupenky:
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default Summary
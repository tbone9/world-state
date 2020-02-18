import React from 'react';

const DataCards = ({ data }) => {
    return(
        <div>
            
            {
                data.map((price, i) => {
                    return <h1 key={i}>{price['4. close']}</h1>
                })
            }
        </div>
    )
}

export default DataCards;
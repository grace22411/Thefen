import React from 'react';

type CountryProp = {
    classList:any
}

export const CountryList = ({classList}:CountryProp) => {
    return (
        <div className={`${classList}`}>
            <div className='text-header'><h3>Popular Stores</h3></div>
            <div className='image-list'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

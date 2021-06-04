import React from 'react';
import './spinner.scss';

type SpinnerProp = {
    start?:boolean
}
export const Spinner = ({start}:SpinnerProp) => {
    
    return (
        <div className="lds-ellipsis" style={{display:start?'inline-block':'none'}}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

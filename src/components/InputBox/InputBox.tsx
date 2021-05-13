import React,{FunctionComponent} from 'react'

type InputProps = {
    labelText?:string,
    inputType?:string
}

export const  InputBox:FunctionComponent<InputProps> = ({labelText,inputType}) => {
    return (
        <div className='input-box'>
            <label htmlFor="">{labelText}</label>
            <input type={inputType}/>
        </div>
    )
}

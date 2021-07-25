import React,{FunctionComponent} from 'react'

type InputProps = {
    labelText?:string,
    inputType?:string,
    inputName?:string,
    inputValue?:any
    handleChange:(e:any)=>void
}

export const  InputBox:FunctionComponent<InputProps> = ({inputName,handleChange,labelText,inputType, inputValue}) => {
    return (
        <div className='input-box'>
            <label htmlFor="">{labelText}</label>
            <input name={inputName} onChange={handleChange} type={inputType} value={inputValue}/>
        </div>
    )
}

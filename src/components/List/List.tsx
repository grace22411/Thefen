import React,{FunctionComponent} from 'react';
import './list.scss';

type ListProps = {
    headerText?:any;
    bodyText?:any;
}

export const List:FunctionComponent<ListProps>  = ({headerText,bodyText}) =>
    <div className='list-option'>
        <li>{headerText}</li>
        <p>{bodyText}</p>
    </div>

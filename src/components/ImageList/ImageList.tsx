import React,{FunctionComponent} from 'react'
import {flower} from '../../images/index'


type Prop = {
    headerText?:string,
    contentText?:string[]
}


export const ImageList:FunctionComponent<Prop> = ({headerText,contentText}) =>

    <section className='list-width-image'>
        <picture>
            <img alt='faq flower ' src={flower}/>
        </picture>
        <div className={`list-text-content`}>
            <h3>{headerText}</h3>
            {contentText && contentText.map((text:any)=><p>{text}</p>) }
        </div>
    </section>
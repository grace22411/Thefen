import styled from 'styled-components';
import  {Colors} from './index';

type buttonProps  = {
    fontColor?:string;
    bgColor?:string;
    borderRadius?:string;
    width?: any;
   
}

type imageProps = {
    position?:string
}

type textProps = {
    fontSize?:string,
    textAlign?:string,
    fontColor?:string,
    weight?:string
}

export const InputBox = styled.input ``;

export const CustomButton = styled.button<buttonProps>`
    background-color:${(props:any) => props.bgColor || Colors.lightGrey};
    color:${(props:any)=>props.fontColor || Colors.whiteColor};
    padding:10px;
    width:${(props:any) =>props.width || '98'}px;
    margin:5px;
    border-radius:${(props:any) =>props.borderRadius || '100px'};
    &:hover{
       
    }
`

export const ParagraphText = styled.p <textProps>`;
    color:${(props:any)=>props.fontColor || Colors.lighterWhite};
    font-weight:${(props:any)=>props.weight || 400};
    text-align:${(props:any)=>props.textAlign};
    font-size: ${(props:any)=>props.fontSize || '1.29rem'};
    line-height:24px;
    @media (max-width:1000px){
        font-size:.99rem
    }

`
export const Header1 = styled.h1``;

export const Header2 = styled.h2``;

export const Header3 = styled.h3<textProps>`
    font-family: 'Nunito', sans-serif;
    font-size:${(props:any)=>props.fontSize || '1.4rem'};
    color:${(props)=>props.color || Colors.whiteColor};
    text-align:${(props)=>props.textAlign};

    @media (max-width:1000px){
        font-size:2.64rem
    }
`

export const Image  = styled.img<imageProps>`
    position:${(props:any)=>props.position || 'relative'};
    width: ${(props:any)=>props.width || '50%'};
`
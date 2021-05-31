import styled from 'styled-components';

interface ContainerProps{
    background?:any;
    border?:any;
    display?:any;
    flexDirection?:any;
    justify?:any;
    padding?:any
}

export const FlexContainer = styled.div<ContainerProps>`
    background-color:${props=>props.background};
    border:${(props:any) =>props.border};
    display:flex;
    height: ${(props:any)=> props.height || 'auto'};
    padding:${(props:any) =>props.padding};
    flex-direction:${(props:any) => props.flexDirection};
    justify-content:${(props:any)=> props.justify}
`


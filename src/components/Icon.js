import styled from 'styled-components'

const IconWrapper = styled.div`
display: inline-flex;
flex-direction: column;
align-items: center;
width: 75px;
cursor: pointer;
color: #838aa0;
margin-bottom: 25px;
> span:first-child {
    transform: scale(1);
    transition: transform 0.3s ease;
    will-change: transform;
    img,
    svg {
        height: 48px;
        width: 48px;
    }
}
> span:last-child {
    font-size: 10px;
    text-align:center;
}

&:hover {
    > span:first-child {
        transform: scale(1.1);
    }
}
`

const Icon = props => {
    const picture = props.icon !== undefined ? props.icon : <img src={props.image} alt={props.text}/>

    return (
        <IconWrapper onClick={props.onClick}>
            <span>{picture}</span>
            <span>{props.text}</span>
        </IconWrapper>
    )
}
export default Icon

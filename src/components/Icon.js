import './../styles/Icon.scss'

const Icon = props => {
    const picture = props.icon !== undefined ? props.icon : <img src={props.image} alt={props.text}/>

    return (
        <div className='icon' onClick={props.onClick}>
            <span>{picture}</span>
            <span>{props.text}</span>
        </div>
    )
}
export default Icon

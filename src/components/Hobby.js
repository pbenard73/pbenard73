const Hobby = props => (
    <div>
        <div>
            {props.icon} <span>{props.title}</span>
        </div>
        <div>{props.content}</div>
    </div>
)

export default Hobby

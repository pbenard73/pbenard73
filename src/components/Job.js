import { Respo } from "react-respo"

const Job = props => (
    <div className='job' style={{ marginBottom: "50px" }}>
        <h2 style={{ marginTop: "0px" }}>{props.title}</h2>
        <Respo container md={600} lg={900}>
            <Respo md={8} lg={10}>
                <div dangerouslySetInnerHTML={{ __html: props.content }} style={{ marginBottom: "10px" }} />
            </Respo>
            <Respo md={4} lg={2}>
                <div style={{ textAlign: "right" }}>
                    {Object.keys(props.actions || {}).map(item => (
                        <a href={(props.actions || {})[item]} target='_blank' className='badge' key={item}>
                            {item}
                        </a>
                    ))}
                </div>
            </Respo>
        </Respo>
    </div>
)

export default Job

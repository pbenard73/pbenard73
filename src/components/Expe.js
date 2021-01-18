import { Respo } from "react-respo"

const Expe = props => (
    <div className='experience' style={{ marginBottom: "50px" }}>
        <h2 style={{ marginTop: "0px" }}>{props.society}</h2>
        <Respo container md={600} lg={900}>
            <Respo md={4} lg={3}>
		<p>{props.jobname}</p>
		<p>{props.date}</p>
		<p>{props.place}</p>
            </Respo>
            <Respo md={8} lg={9}>
                <div dangerouslySetInnerHTML={{ __html: props.content }} style={{ marginBottom: "10px" }} />
            </Respo>
        </Respo>
    </div>
)

export default Expe

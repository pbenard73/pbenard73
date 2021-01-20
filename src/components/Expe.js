import React from "react"
import { Respo } from "react-respo"

import hoc from "./../hocs/main"
import getPic from "./../helpers/stack"

class Expe extends React.Component {
    render() {
        return (
            <div className='experience' style={{ marginBottom: "50px" }}>
                <h2 style={{ marginTop: "0px" }}>{this.props.society}</h2>
                <Respo container md={600} lg={900}>
                    <Respo md={4} lg={3}>
                        <p>{this.props.jobname}</p>
                        <p>{this.props.date}</p>
                        <p>{this.props.place}</p>
                    </Respo>
                    <Respo md={8} lg={9}>
                        <div dangerouslySetInnerHTML={{ __html: this.props.content }} style={{ marginBottom: "10px" }} />
                    </Respo>
                </Respo>
                <div className='expe_stack'>
                    {this.props.stack.map(techno => {
                        const src = getPic(techno)
                        const label = this.trans(`techno_${techno}`)

                        return (
                            <div>
                                {src === null ? null : <img src={`/cv/techno/${src}`} alt={label} />}
                                <span>{this.trans(`techno_${techno}`)}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default hoc()(Expe)

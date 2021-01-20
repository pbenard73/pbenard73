import React from 'react'

import { Respo } from "react-respo"

import hoc from "./../hocs/main"

class Job extends React.Component {
    render() {
        return (
            <div className='job' style={{ marginBottom: "50px" }}>
                <h2 style={{ marginTop: "0px" }}>{this.props.title}</h2>
                <Respo container md={600} lg={900}>
                    <Respo md={8} lg={10}>
                        <div dangerouslySetInnerHTML={{ __html: this.props.content }} style={{ marginBottom: "10px" }} />
                    </Respo>
                    <Respo md={4} lg={2}>
                        <div style={{ textAlign: "right" }}>
                            {Object.keys(this.props.actions || {}).map(item => (
                                <a href={(this.props.actions || {})[item]} target='_blank' className='badge' key={item} rel="noreferrer">
                                    {this.trans(`job_link_${item}`)}
                                </a>
                            ))}
                        </div>
                    </Respo>
                </Respo>
            </div>
        )
    }
}

export default hoc()(Job)

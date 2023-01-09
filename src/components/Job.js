import React from 'react'
import { useIntl } from 'react-intl'

import { Respo } from "react-respo"

const Job = ({actions, content, title}) => {
    const intl = useIntl()

    const trans = (id, values = {}) => {
        return intl.formatMessage({ id }, values)
    }
    
        return (
            <div className='job' style={{ marginBottom: "50px" }}>
                <h2 style={{ marginTop: "0px" }}>{title}</h2>
                <Respo container md={600} lg={900}>
                    <Respo md={8} lg={10}>
                        <div dangerouslySetInnerHTML={{ __html: content }} style={{ marginBottom: "10px" }} />
                    </Respo>
                    <Respo md={4} lg={2}>
                        <div style={{ textAlign: "right" }}>
                            {Object.keys(actions || {}).map(item => (
                                <a href={(actions || {})[item]} target='_blank' className='badge' key={item} rel="noreferrer">
                                    {trans(`job_link_${item}`)}
                                </a>
                            ))}
                        </div>
                    </Respo>
                </Respo>
            </div>
        )
    
}

export default Job

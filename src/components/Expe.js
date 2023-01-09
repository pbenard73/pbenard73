import React from "react"
import { Respo } from "react-respo"

import getPic from "./../helpers/stack"
import styled from "styled-components"
import { useIntl } from "react-intl"

const ExpeStack = styled.div`
    display: flex;
    justify-content: flex-end;
	flex-wrap: wrap;
    > div {
        display: flex;
        flex-direction: column;
        padding: 5px;
        max-width: 60px;
	    align-items: center;

        img {
            margin-top: auto;
            height: auto;
            width: 100%;
            margin-bottom: 5px;
	    filter: drop-shadow(5px 5px 4px #131313);
        }
        span {
            font-size: 10px;
            margin-top: auto;
        }
    }
`

const Expe = ({content, ...props}) =>  {
    const intl = useIntl()

    const trans = (id, values = {}) => {
        return intl.formatMessage({ id }, values)
    }
    
        return (
            <div className='experience' style={{ marginBottom: "50px" }}>
                <h2 style={{ marginTop: "0px" }}>{props.society}</h2>
                <Respo container md={600} lg={900}>
                    <Respo md={4} lg={3}>
                        <p>{props.jobname}</p>
                        <p>{props.date}</p>
                        <p>{props.place}</p>
                    </Respo>
                    <Respo md={8} lg={9}>
                        <div dangerouslySetInnerHTML={{ __html: content }} style={{ marginBottom: "10px" }} />
                    </Respo>
                </Respo>
                <ExpeStack>
                    {props.stack.map(techno => {
                        const src = getPic(techno)
                        const label = trans(`techno_${techno}`)

                        return (
                            <div>
                                {src === null ? null : <img src={`/cv/techno/${src}`} alt={label} />}
                                <span>{trans(`techno_${techno}`)}</span>
                            </div>
                        )
                    })}
                </ExpeStack>
            </div>
        )
    
}
export default Expe

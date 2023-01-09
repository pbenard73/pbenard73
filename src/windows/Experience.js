import React from "react"

import Expe from "./../components/Expe"

import { useIntl } from "react-intl"

const Experience = () => { 
    const intl = useIntl()

    const trans = (id, values = {}) => {
        return intl.formatMessage({ id }, values)
    }
    
        return (
            <div>
                <Expe
                    society='BeSpoon / ST Micro Electronics'
                    jobname={trans("web_developper")}
                    date={trans("job_bespoon_period")}
                    place={"Le Bourget du Lac - France"}
                    content={trans("job_bespoon")}
                    stack={['node', 'react', 'express', 'sqlite', 'socket', 'docker', 'vim', 'sass']}
                />

                <Expe
                    society='Enigmatic'
                    jobname={trans("web_developper")}
                    date={trans("job_enigmatic_period")}
                    place={"Grenoble - France"}
                    content={trans("job_enigmatic")}
                    stack={['symfony', 'mysql', 'jquery', 'phpstorm', 'sass']}
                />

                <Expe
                    society='Eliberty Service'
                    jobname={trans("web_developper")}
                    date={trans("job_eliberty_period")}
                    place={"Le Bourget du Lac - France"}
                    content={trans("job_eliberty")}
                    stack={['symfony', 'pg', 'jquery', 'redis', 'phpstorm', 'less']}
                />

                <Expe
                    society='Accen Informatique - DRA Technologies'
                    jobname={trans("software_developper")}
                    date={trans("job_accen_period")}
                    place={"Lyon - Saint Priest - France"}
                    content={trans("job_accen")}
                    stack={['filemaker']}
                />
            </div>
        )
    
}

export default Experience

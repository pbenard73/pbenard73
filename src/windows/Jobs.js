import React from "react"


import Job from "./../components/Job"
import { useIntl } from "react-intl"

const Jobs = () => {
    const intl = useIntl()

    const trans = (id, values = {}) => {
        return intl.formatMessage({ id }, values)
    }
    
        return (
            <div>
                <Job
                    title={"Reactizy"}
                    content={trans("jobs_reactizy_intro")}
                    actions={{
                        npm: "https://www.npmjs.com/package/reactizy",
                        github: "https://github.com/pbenard73/reactizy",
                        home: "https://pbenard73.github.io/reactizy",
                    }}
                />
                <Job
                    title={"React Respo"}
                    content={trans("jobs_reactrespo_intro")}
                    actions={{
                        npm: "https://www.npmjs.com/package/react-respo",
                        github: "https://github.com/pbenard73/react-respo",
                        home: "https://pbenard73.github.io/react-respo/",
                    }}
                />
                <Job
                    title={"React Windows Dashboard"}
                    content={trans("jobs_reactwindowsdashboard_intro")}
                    actions={{
                        npm: "https://www.npmjs.com/package/react-windows-dashboard",
                        github: "https://github.com/pbenard73/react-windows-dashboard",
                        home: "https://pbenard73.github.io/react-windows-dashboard/",
                    }}
                />
            </div>
        )
    
}

export default Jobs

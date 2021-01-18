import React, { Fragment } from "react"
import hoc from "./../hocs/main"

import Job from "./../components/Job"

class Jobs extends React.Component {
    render() {
        return (
            <div>
                <Job title={"Reactizy"} content={this.trans("jobs_reactizy_intro")} actions={{ npm: "href", github: "" }} />
                <Job
                    title={"React Respo"}
                    content={this.trans("jobs_reactrespo_intro")}
                    actions={{ npm: "href", github: "" }}
                />
                <Job
                    title={"React Windows Dashboard"}
                    content={this.trans("jobs_reactwindowsdashboard_intro")}
                    actions={{ npm: "href", github: "" }}
                />
            </div>
        )
    }
}

export default hoc()(Jobs)

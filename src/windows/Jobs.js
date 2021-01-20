import React from "react"
import hoc from "./../hocs/main"

import Job from "./../components/Job"

class Jobs extends React.Component {
    render() {
        return (
            <div>
                <Job
                    title={"Reactizy"}
                    content={this.trans("jobs_reactizy_intro")}
                    actions={{
                        npm: "https://www.npmjs.com/package/reactizy",
                        github: "https://github.com/pbenard73/reactizy",
                        home: "https://pbenard73.github.io/reactizy",
                    }}
                />
                <Job
                    title={"React Respo"}
                    content={this.trans("jobs_reactrespo_intro")}
                    actions={{
                        npm: "https://www.npmjs.com/package/react-respo",
                        github: "https://github.com/pbenard73/react-respo",
                        home: "https://pbenard73.github.io/react-respo/",
                    }}
                />
                <Job
                    title={"React Windows Dashboard"}
                    content={this.trans("jobs_reactwindowsdashboard_intro")}
                    actions={{
                        npm: "https://www.npmjs.com/package/react-windows-dashboard",
                        github: "https://github.com/pbenard73/react-windows-dashboard",
                        home: "https://pbenard73.github.io/react-windows-dashboard/",
                    }}
                />
            </div>
        )
    }
}

export default hoc()(Jobs)

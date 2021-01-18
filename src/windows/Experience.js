import React from "react"

import hoc from "./../hocs/main"

import Expe from "./../components/Expe"

class Experience extends React.Component {
    render() {
        return (
            <div>
                <Expe
                    society='BeSpoon / ST Micro Electronics'
                    jobname={this.trans("web_developper")}
                    date={this.trans("job_bespoon_period")}
                    place={"Le Bourget du Lac - France"}
                    content={this.trans("job_bespoon")}
                />

                <Expe
                    society='Enigmatic'
                    jobname={this.trans("web_developper")}
                    date={this.trans("job_enigmatic_period")}
                    place={"Grenoble - France"}
                    content={this.trans("job_enigmatic")}
                />

                <Expe
                    society='Eliberty Service'
                    jobname={this.trans("web_developper")}
                    date={this.trans("job_eliberty_period")}
                    place={"Le Bourget du Lac - France"}
                    content={this.trans("job_eliberty")}
                />

                <Expe
                    society='Accen Informatique - DRA Technologies'
                    jobname={this.trans("software_developper")}
                    date={this.trans("job_accen_period")}
                    place={"Lyon - Saint Priest - France"}
                    content={this.trans("job_accen")}
                />
            </div>
        )
    }
}

export default hoc()(Experience)

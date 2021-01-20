import React from "react"
import hoc from "./../hocs/main"
import ExploreIcon from "@material-ui/icons/Explore"
import SportsEsportsIcon from "@material-ui/icons/SportsEsports"
import CodeIcon from "@material-ui/icons/Code"
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary"
import NaturePeopleIcon from "@material-ui/icons/NaturePeople"
import {ReactComponent as Gem} from './../svg/gem.svg';

import Hobby from "./../components/Hobby"

import './../styles/Hobby.scss'

class Hobbies extends React.Component {
    render() {
        const map = {
            rando: <NaturePeopleIcon />,
            explore: <ExploreIcon />,
            detector: <img src="/cv/hobby/detection.png" alt="detection" />,
            gaming: <SportsEsportsIcon />,
            coding: <CodeIcon />,
            reading: <LocalLibraryIcon />,
            jewelry: <Gem className="MuiSvgIcon-root"/>,
        }

        return (
            <div className="hobbies">
                {Object.keys(map).map(hobby => (
                    <Hobby
                        key={hobby}
                        icon={map[hobby]}
                        title={this.trans(`hobby_${hobby}`)}
                        content={this.trans(`hobby_${hobby}_content`)}
                    />
                ))}
            </div>
        )
    }
}

export default hoc()(Hobbies)

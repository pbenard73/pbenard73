import React from "react"
import ExploreIcon from "@material-ui/icons/Explore"
import SportsEsportsIcon from "@material-ui/icons/SportsEsports"
import CodeIcon from "@material-ui/icons/Code"
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary"
import NaturePeopleIcon from "@material-ui/icons/NaturePeople"
import { ReactComponent as Gem } from "./../svg/gem.svg"

import Hobby from "./../components/Hobby"

import styled from "styled-components"
import { useIntl } from "react-intl"

const HobbiesWrapper = styled.div`
    > div {
        padding: 15px;
        &:nth-child(even) {
            background: rgba(10, 9, 14, 0.3);
        }

        > div:first-child {
            display: flex;
            align-items: center;
            span {
                margin-left: 10px;
                font-weight: 400;
                font-size: 18px;
            }
        }
        > div:last-child {
            margin-top: 10px;
            font-size: 14px;
        }
    }
`

const Hobbies = () => {
    const intl = useIntl()

    const trans = (id, values = {}) => {
        return intl.formatMessage({ id }, values)
    }

    const map = {
        rando: <NaturePeopleIcon />,
        explore: <ExploreIcon />,
        detector: <img src='/cv/hobby/detection.png' alt='detection' />,
        gaming: <SportsEsportsIcon />,
        coding: <CodeIcon />,
        reading: <LocalLibraryIcon />,
        jewelry: <Gem className='MuiSvgIcon-root' />,
    }

    return (
        <HobbiesWrapper>
            {Object.keys(map).map(hobby => (
                <Hobby
                    key={hobby}
                    icon={map[hobby]}
                    title={trans(`hobby_${hobby}`)}
                    content={trans(`hobby_${hobby}_content`)}
                />
            ))}
        </HobbiesWrapper>
    )
}

export default Hobbies

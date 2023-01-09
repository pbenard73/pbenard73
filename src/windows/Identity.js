import React from "react"


import IconButton from "@material-ui/core/IconButton"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { icon } from "leaflet"
import dobToAge from 'dob-to-age'

import ContactMailIcon from "@material-ui/icons/ContactMail"

import PetsIcon from "@material-ui/icons/Pets"
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople"
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle"
import PeopleIcon from "@material-ui/icons/People"
import LanguageIcon from "@material-ui/icons/Language"

import styled from "styled-components"
import { useIntl } from "react-intl"
import useWindowManager from "../partials/WindowManager"

const IdentityWrapper = styled.div`
.top {
    display: flex;
    align-items: center;
    img {
        height: 80px;
    }
    h2 {
        margin: 0px;
        margin-left: 30px;
        font-size: 32px;
    }

    ~ div {
        margin-top: 10px;
        &:not(:last-child) {
            display: flex;
            align-items: center;
            > svg {
                margin-right: 15px;
            }
            > button {
                margin-left: -11px;
                svg {
                    color: #c3c3c3;
                    animation: anim 2s linear infinite alternate-reverse;
                }
            }
        }
    }
}

.position {
    height: 300px;
    .leaflet-tile-pane {
        filter: grayscale(1);
    }
}
`

const placeIcon = new icon({
    iconUrl: "/cv/marker.png",
    iconAnchor: [22.5, 45],
    iconSize: [45, 45],
})

const Identity = () => {
    const intl = useIntl()
    const app = useWindowManager()

    const trans = (id, values = {}) => {
        return intl.formatMessage({ id }, values)
    }
    
        return (
            <IdentityWrapper>
                <div className='top'>
                    <img src='/cv/photo.png' alt='BENARD Patrick' width='70px' height='auto' />
                    <h2>BENARD Patrick</h2>
                </div>

                <div>
                    <EmojiPeopleIcon /> {trans("identity_age", {age: dobToAge('1983-10-17')})}
                </div>

                <div>
                    <PersonPinCircleIcon /> {trans("identity_place")}
                </div>

                <div>
                    <LanguageIcon /> {trans("identity_locales")}
                </div>

                <div>
                    <PeopleIcon /> {trans("identity_family")}
                </div>

                <div>
                    <PetsIcon /> {trans("identity_pets")}
                </div>

                <div>
                    <IconButton onClick={app.openContact}>
                        <ContactMailIcon />
                    </IconButton>

                    {trans("title_contact")}
                </div>

                <div>
                    <MapContainer
                        className='position nodrag'
                        center={[45.70388095606664, 5.758261107579773]}
                        zoom={2}
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                        <Marker icon={placeIcon} position={[45.70388095606664, 5.758261107579773]}>

                        </Marker>
                    </MapContainer>
                </div>
            </IdentityWrapper>
        )
    
}

export default Identity
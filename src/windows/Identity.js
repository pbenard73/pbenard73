import React from "react"
import OpenContact from "./../partials/OpenContact"

import hoc from "./../hocs/main"

import IconButton from "@material-ui/core/IconButton"
import { MapContainer, Icon, TileLayer, Marker, Popup } from "react-leaflet"
import { icon } from "leaflet"

import ContactMailIcon from "@material-ui/icons/ContactMail"

import PetsIcon from "@material-ui/icons/Pets"
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople"
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle"
import PeopleIcon from "@material-ui/icons/People"
import LanguageIcon from "@material-ui/icons/Language"

import "./../styles/Identity.scss"

class Identity extends React.Component {
    render() {
        const placeIcon = new icon({
            iconUrl: "/marker.png",
            iconAnchor: [22.5, 45],
            iconSize: [45, 45],
        })

        return (
            <div className='identity'>
                <div className='top'>
                    <img src='/photo.png' alt='BENARD Patrick photo' width='70px' height='auto' />
                    <h2>BENARD Patrick</h2>
                </div>

                <div>
                    <EmojiPeopleIcon /> {this.trans("identity_age")}
                </div>

                <div>
                    <PersonPinCircleIcon /> {this.trans("identity_place")}
                </div>

                <div>
                    <LanguageIcon /> {this.trans("identity_locales")}
                </div>

                <div>
                    <PeopleIcon /> {this.trans("identity_family")}
                </div>

                <div>
                    <PetsIcon /> {this.trans("identity_pets")}
                </div>

                <div>
                    <IconButton onClick={this.openContact}>
                        <ContactMailIcon />
                    </IconButton>

                    {this.trans("title_contact")}
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
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        )
    }
}

export default hoc()(Identity, OpenContact)

import React from "react"

import hoc from "./../hocs/main"
import Manager from "./../partials/WindowManager"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar"
import ContactMailIcon from "@material-ui/icons/ContactMail"
import WorkIcon from "@material-ui/icons/Work"
import AdbIcon from "@material-ui/icons/Adb"
import FavoriteIcon from "@material-ui/icons/Favorite"
import StarsIcon from "@material-ui/icons/Stars"
import Icon from "./../components/Icon"
import GitHubIcon from "@material-ui/icons/GitHub"

import "./../styles/Dashboard.scss"

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuLocale: null,
        }
    }

    getLocale(locale) {
        const map = {
            fr: "🇫🇷",
            en: "🇬🇧",
	    it: "🇮🇹",
        }

        return map[locale] || locale
    }

    setLocaleBindThis(locale) {
        this.props.setLocale(locale)
        this.setState({ menuLocale: null })
    }

    renderMenuLocale() {
        if (this.state.menuLocale === null) {
            return null
        }

        return (
            <Menu onClose={() => this.setState({ menuLocale: null })} open={true} anchorEl={this.state.menuLocale}>
                {["fr", "en", "it"].map(locale => {
                    if (locale === this.props.locale) {
                        return null
                    }

                    return (
                        <MenuItem key={locale} onClick={() => this.setLocale(locale)}>
                            {this.getLocale(locale)}
                        </MenuItem>
                    )
                })}
            </Menu>
        )
    }

    render() {
        const isMobile = window.orientation !== undefined

        return (
            <div className='dashboard'>
                <AppBar position='fixed'>
                    <Toolbar id='topbar'>
                        <Typography className='top_title' variant='h6'>
                            BENARD Patrick <span>Web dev</span>
                        </Typography>
                        <div style={{ marginLeft: "auto" }}>
                            <Button onClick={e => this.setState({ menuLocale: e.target })}>
                                {this.getLocale(this.props.locale)}
                            </Button>
                            <IconButton component='a' target='_blank' href='https://github.com/pbenard73/cv'>
                                <GitHubIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <div className='panel'>
                    <Icon
                        onClick={this.openIdentity}
                        icon={<PermContactCalendarIcon />}
                        text={this.trans("title_identity")}
                    />
                    <Icon onClick={this.openContact} icon={<ContactMailIcon />} text={this.trans("title_contact")} />
                    <Icon onClick={this.openExperience} icon={<WorkIcon />} text={this.trans("title_experience")} />
                    <Icon onClick={this.openJobs} icon={<AdbIcon />} text={this.trans("title_jobs")} />

                    <Icon onClick={this.openStack} icon={<StarsIcon />} text={this.trans("title_stack")} />
                    <Icon onClick={this.openHobby} icon={<FavoriteIcon />} text={this.trans("title_hobby")} />

                    {isMobile === false ? null : <div className='desktop_better'>{this.trans("better_on_desktop")}</div>}
                </div>
                {this.renderMenuLocale()}
            </div>
        )
    }
}

export default hoc()(Dashboard, Manager)

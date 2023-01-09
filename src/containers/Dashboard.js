import React from "react"

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

import styled from "styled-components"
import { useApp } from "../redux/appSlice"
import { useSelector } from "react-redux"
import { useIntl } from "react-intl"
import { useState } from "react"
import useWindowManager from "../partials/WindowManager"

const DashboardWrapper = styled.div`
    height: 100vh;
    .panel {
        padding: 15px;
        padding-top: 65px;
        height: calc(100vh - 80px);
        display: flex;
        flex-direction: column;
        align-items: baseline;
    }
`

const TopBar = styled(Toolbar)`
    background: #0f0f17;
    box-shadow: 0 1px 4px #8c7972;
    min-height: 50px;
    svg {
        fill: #dcc9c2;
    }

    .top_title {
        font-weight: 600;
        color: #dcc9c2;
        span {
            transform: rotate(-14deg) translateY(8px) translateX(-34px);
            display: inline-block;
            text-shadow: 0px 0px 16px #cdbdb6, 0px 0px 2px #424860;
            font-size: 20px;
            color: #0b0a0f;
        }
    }
`
const getLocale = (locale) => {
    const map = {
        fr: "🇫🇷",
        en: "🇬🇧",
        it: "🇮🇹",
    }

    return map[locale] || locale
}

const Dashboard = () => {
    const [menuLocale, setMenuLocale] = useState(null)
    const locale = useSelector(state => state.locale)
    const app = useApp()
    const windowManager = useWindowManager()
    const intl = useIntl()

    const trans = (id, values = {}) => {
        return intl.formatMessage({ id }, values)
    }

    const renderMenuLocale = menuLocale &&  (
            <Menu onClose={() => setMenuLocale(null)} open={true} anchorEl={menuLocale}>
                {["fr", "en", "it"].map(aLocale => {
                    if (aLocale === locale) {
                        return null
                    }

                    return (
                        <MenuItem key={aLocale} onClick={() => {
                            app.setLocale(aLocale)
                            setMenuLocale(null)
                        }}>
                            {getLocale(aLocale)}
                        </MenuItem>
                    )
                })}
            </Menu>
    )

    const isMobile = window.orientation !== undefined
    
        return (
            <DashboardWrapper className='dashboard'>
                <AppBar position='fixed'>
                    <TopBar id="topbar">
                        <Typography className='top_title' variant='h6'>
                            BENARD Patrick <span>Web dev</span>
                        </Typography>
                        <div style={{ marginLeft: "auto" }}>
                            <Button onClick={e => setMenuLocale(e.target)}>
                                {getLocale(locale)}
                            </Button>
                            <IconButton component='a' target='_blank' href='https://github.com/pbenard73/cv'>
                                <GitHubIcon />
                            </IconButton>
                        </div>
                    </TopBar>
                </AppBar>
                <div className='panel'>
                    <Icon
                        onClick={windowManager.openIdentity}
                        icon={<PermContactCalendarIcon />}
                        text={trans("title_identity")}
                    />
                    <Icon onClick={windowManager.openContact} icon={<ContactMailIcon />} text={trans("title_contact")} />
                    <Icon onClick={windowManager.openExperience} icon={<WorkIcon />} text={trans("title_experience")} />
                    <Icon onClick={windowManager.openJobs} icon={<AdbIcon />} text={trans("title_jobs")} />

                    <Icon onClick={windowManager.openStack} icon={<StarsIcon />} text={trans("title_stack")} />
                    <Icon onClick={windowManager.openHobby} icon={<FavoriteIcon />} text={trans("title_hobby")} />

                    {isMobile === false ? null : <div className='desktop_better'>{trans("better_on_desktop")}</div>}
                </div>
                {renderMenuLocale}
            </DashboardWrapper>
        )
    
}

export default Dashboard

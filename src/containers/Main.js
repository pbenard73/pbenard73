import React from "react"

import {Windows} from 'react-windows-dashboard'
import Dashboard from "./Dashboard"
import { useApp } from "../redux/appSlice"
import { useSelector } from "react-redux"
import { useIntl } from "react-intl"

const Main = () => {
    const intl = useIntl()

    const trans = (id, values = {}) => {
        return intl.formatMessage({ id }, values)
    }
    const app= useApp()
    const {windows, active} = useSelector(state => ({active: state.active, windows: state.windows}))

        const dashboard = <Dashboard />

        const mobileClass = window.orientation !== undefined ? "nodrag" : ""

        const Decorator = props => (
            <div className={`window ${mobileClass}`} style={props.style}>
                <div className='decorator'>
                    <span className='title' style={{marginRight:'auto'}}>{trans(props.data.title)}</span>
                    {props.actions}
                    <span className='decorator_minimize nodrag' onClick={() => props.minimize(props.data.uuid)} />
                    {props.resizable === false ? null : (
                        <span className='decorator_toggle nodrag' onClick={props.toggle}></span>
                    )}
                    <span className='decorator_close nodrag' onClick={props.onClose}></span>
                </div>
                <div className='window_content'>{props.children}</div>
            </div>
        )

        return (
            <Windows
                decorator={Decorator}
                dashboard={dashboard}
                windows={windows}
                onClose={app.removeWindow}
                active={active}
                setActive={app.setActive}
            />
        )
    
}

export default Main

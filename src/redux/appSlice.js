import fr from "./../translations/fr"
import en from "./../translations/en"
import it from "./../translations/it"
import common from "./../translations/common"
import { createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

const appSlice = createSlice({
    name: 'app',
    initialState: {
        active: null,
        windows: {},
        order: [],
        locale: "fr",
        messages: { fr: { ...common, ...fr }, en: { ...common, ...en }, it: {...common, ...it} },
    },
    reducers: {
        setActive: (state, {payload}) => {
            state.active = payload
        },
        setWindows: (state, {payload}) => {
            state.windows = payload
        },
        setOrder: (state, {payload}) => {
            state.order = payload
        },
        setLocale: (state, {payload}) => {
            state.locale = payload
        } 
    }
})

export const {setActive, setWindows, setOrder, setLocale} = appSlice.actions

export default appSlice.reducer

const addWindow = windowData =>  (dispatch, getState) => {
        const state = getState()
        const windows = { ...state.windows }
        const order = [...state.order]
        const uuid = windowData.uuid
        //const index = order.indexOf(uuid)

        console.log('coucou', windows, windowData)
        if (windows[uuid] !== undefined) {
            dispatch(setActive(uuid))
            return
        }

        windows[uuid] = windowData
        order.push(uuid)

        dispatch(setWindows(windows))
        dispatch(setOrder(order))
        dispatch(setActive(uuid))
    }

const removeWindow = uuid =>  (dispatch, getState) => {
        const state = getState()
        const windows = { ...state.windows }
        const order = [...state.order]

        if (windows[uuid] === undefined) {
            return
        }

        const index = order.indexOf(uuid)

        delete windows[uuid]

        dispatch(setWindows(windows))

        if (index !== -1) {
            order.splice(index, 1)

            dispatch(setOrder(order))
        }

        if (order.length > 0) {
            dispatch(setActive(order[order.length - 1]))
        }
    }


export const useApp = () => {
    const dispatch = useDispatch()

    return {
        setActive: uuid => dispatch(setActive(uuid)),
        setWindows: windows => dispatch(setWindows(windows)),
        setOrder: order => dispatch(setOrder(order)),
        setLocale: locale => dispatch(setLocale(locale)),
        addWindow: windowData => dispatch(addWindow(windowData)),
        removeWindow: uuid => dispatch(removeWindow(uuid))
    }
}
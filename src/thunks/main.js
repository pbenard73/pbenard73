const thunks = {
    addWindow: windowData => {
        return (dispatch, getState, windowData) => {
            const state = getState()
            const windows = { ...state.windows }
            const order = [...state.order]
            const uuid = windowData.uuid
            //const index = order.indexOf(uuid)

            if (windows[uuid] !== undefined) {
                dispatch("setActive", uuid)
                return
            }

            windows[uuid] = windowData
            order.push(uuid)

            dispatch("setWindows", windows)
            dispatch("setOrder", order)
            dispatch("setActive", uuid)
        }
    },
    removeWindow: uuid => {
        return (dispatch, getState, uuid) => {
            const state = getState()
            const windows = { ...state.windows }
            const order = [...state.order]

            console.log("uuid", uuid)
            if (windows[uuid] === undefined) {
                return
            }

            const index = order.indexOf(uuid)

            windows[uuid] = undefined
            delete windows[uuid]

            console.log(windows)
            dispatch("setWindows", windows)

            if (index !== -1) {
                order.splice(index, 1)

                dispatch("setOrder", order)
            }
        }
    },
}

export default thunks

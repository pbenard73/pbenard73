import { hocBuilder } from "reactizy"

import mainReduxer from "./../reduxers/main"

const hoc = hocBuilder({
    reduxers: [mainReduxer],
    options: {
        bindAll: true,
    },
})

export default hoc

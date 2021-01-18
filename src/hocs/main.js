import { hocBuilder } from "reactizy"
import { injectIntl } from "react-intl"

import mainReduxer from "./../reduxers/main"
import thunks from "./../thunks/main"
import translator from "./../partials/Trans"

const hoc = hocBuilder({
    reduxers: [mainReduxer],
    thunks,
    hocs: {
        intl: injectIntl,
    },
    fusion: [{ uses: ["intl"], component: () => translator }],
    options: {
        bindAll: true,
    },
})

export default hoc

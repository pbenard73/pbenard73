import React from "react"

import { IntlProvider } from "react-intl"
import Main from "./Main"

import simple from "./../hocs/simple"

const Translator = props => (
    <IntlProvider messages={props.messages[props.locale]} locale={props.locale}>
        <Main />
    </IntlProvider>
)

export default simple()(Translator)

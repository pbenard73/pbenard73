import React from "react"

import { IntlProvider } from "react-intl"
import Main from "./Main"

import { useSelector } from "react-redux"

const Translator = () => {
    const messages = useSelector(state => state.messages)
    const locale = useSelector(state => state.locale)

    return (
    <IntlProvider messages={messages[locale]} locale={locale}>
        <Main />
    </IntlProvider>
)
    }

export default Translator

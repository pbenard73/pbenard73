import React from "react"
import { Store } from "reactizy"

import Translator from "./containers/Translator"
import hoc from "./hocs/main"

import "./styles/App.scss"

function App() {
    return (
        <Store hocs={[hoc, true]}>
            <Translator />
        </Store>
    )
}

export default App

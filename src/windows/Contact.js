import React from "react"

import hoc from "./../hocs/main"

class Contact extends React.Component {
    render() {
        return (
            <div>
		<p>Linked In</p>
		<p>Stack overflow </p>
		<p>Github </p>
            </div>
        )
    }
}

export default hoc()(Contact)

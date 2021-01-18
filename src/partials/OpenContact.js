import Contact from "./../windows/Contact"

const manager =  {
    openContactBindThis() {
        const data = {
            uuid: "contact",
            title: "title_contact",
            component: <Contact />,
        }

        this.props.addWindow(data)
    },
}

export default manager

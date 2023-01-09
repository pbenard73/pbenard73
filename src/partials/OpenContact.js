import Contact from "./../windows/Contact"

const manager = {
    openContact() {
        const data = {
            uuid: "contact",
            title: "title_contact",
            component: <Contact />,
            options: {
                resizable: false,
                size: [300, 241],
            },
        }

        this.props.addWindow(data)
    },
}

export default manager

import fr from "./../translations/fr"
import en from "./../translations/en"

const mainReduxer = new (class {
    state = {
        active: null,
        windows: {},
        order: [],
        locale: "fr",
        messages: { fr, en },
    }

    actions = {
        setActive: (state, active) => ({ ...state, active }),
        setWindows: (state, windows) => ({ ...state, windows }),
        setOrder: (state, order) => ({ ...state, order }),
        setLocale: (state, locale) => ({ ...state, locale }),
    }
})()

export default mainReduxer

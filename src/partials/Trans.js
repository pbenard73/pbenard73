const translator = new (class {
    trans(id, values = {}) {
        return this.props.intl.formatMessage({ id }, values)
    }
})()

export default translator

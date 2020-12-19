import React from 'react'
import Title from './Header/title'

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = { title: "Welcome" }
    }
    changeTitle(title) {
        this.setState({title})
    }
    handleChange(t) {
        const title = t
        this.changeTitle(title)
    }
    render() {
        console.log(this.props)
        return (
            <header>
                <Title title={this.state.title}/>
                <input value={this.state.title} onChange={e => this.handleChange(e.target.value)} />
            </header>
        )
    }
}
import React, { Component } from 'react'

export default class TestSetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }
    render() {
        return (
            <div>
                {this.state.isShow}
            </div>
        )
    }
}

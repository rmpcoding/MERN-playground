import React, { Component } from 'react';

class ClassH1 extends Component {
    constructor() {
        super();
        this.state = {
            originalText: 'Original Text',
            textStuff: 'Toggled!',
        };
    }

    get val() {
        return this.state.textStuff === 'Toggled!'
            ? 'Original Text'
            : 'Toggled!';
    }

    render() {
        return (
            <>
                <h1
                    onClick={() => {
                        this.setState({ textStuff: this.val });
                    }}
                >
                    {this.val}
                </h1>
            </>
        );
    }
}

export default ClassH1;

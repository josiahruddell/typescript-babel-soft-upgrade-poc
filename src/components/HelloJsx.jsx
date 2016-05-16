import React from 'react';

export default class HelloTsx extends React.Component {
    render() {
        return <div>
            <h1>Hello I am a <code>.jsx</code> file</h1>
            <abbr>Compiled with {this.props.compiler} and {this.props.framework}</abbr>
        </div>
    }
}

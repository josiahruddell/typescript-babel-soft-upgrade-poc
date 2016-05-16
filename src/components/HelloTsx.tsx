import * as React from 'react';

export interface HelloProps { 
    compiler: string; 
    framework: string; 
}

export default class HelloTsx extends React.Component<HelloProps, {}> {
    render() {
        return <div>
            <h1>Hello I am a <code>.tsx</code> file</h1>
            <abbr>Compiled with {this.props.compiler} and {this.props.framework}</abbr>
        </div>
    }
}
import React, { PureComponent } from 'react'
 class PureComp extends PureComponent {
    render() {
        console.log("**********Purecomp***************");
        return (
            <div>
               Pure component {this.props.name}
            </div>
        )
    }
}

export default PureComp
import React, {Component} from 'react';

class keypadRow extends Component {
    render() {
        return (
            <div className="keypad_row">
                {this.props.children}
            </div>
        );
    }
}

export default keypadRow;


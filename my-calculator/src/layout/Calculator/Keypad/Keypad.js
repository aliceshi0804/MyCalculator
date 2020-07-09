import React, {Component} from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';
import LargeButton from '../../../components/Button/LargeButton/LargeButton';

class keypad extends Component {
    render() {
        return (
            <section className="keypad">
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress}>AC</Button>
                    <Button onButtonPress={this.props.onButtonPress}>DEL</Button>
                    <Button onButtonPress={this.props.onButtonPress}>^</Button>
                    <Button onButtonPress={this.props.onButtonPress}>÷</Button>
                </KeypadRow>

                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress}>7</Button>
                    <Button onButtonPress={this.props.onButtonPress}>8</Button>
                    <Button onButtonPress={this.props.onButtonPress}>9</Button>
                    <Button onButtonPress={this.props.onButtonPress}>×</Button>
                </KeypadRow>

                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress}>4</Button>
                    <Button onButtonPress={this.props.onButtonPress}>5</Button>
                    <Button onButtonPress={this.props.onButtonPress}>6</Button>
                    <Button onButtonPress={this.props.onButtonPress}>-</Button>
                </KeypadRow>

                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress}>1</Button>
                    <Button onButtonPress={this.props.onButtonPress}>2</Button>
                    <Button onButtonPress={this.props.onButtonPress}>3</Button>
                    <Button onButtonPress={this.props.onButtonPress}>+</Button>
                </KeypadRow>

                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress}>0</Button>
                    <Button onButtonPress={this.props.onButtonPress}>.</Button>
                    <LargeButton onButtonPress={this.props.onButtonPress}>=</LargeButton>
                </KeypadRow>  
            </section>
        );
    }
}

export default keypad;
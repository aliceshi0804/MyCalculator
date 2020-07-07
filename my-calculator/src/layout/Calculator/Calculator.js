import React from 'react';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

class Calculator extends React.Component {
    state = {
        equation: '',
        result: 0,
    }
    
    onButtonPress = event => {
        let equation = this.state.equation;
        const pressedButton = event.target.innerHTML;
        if (pressedButton === 'AC') return this.clear();
        // else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') equation += pressedButton;
        // else if (['+', '-', '×', '÷', '^'].indexOf(pressedButton) !== -1) equation += ' ' + pressedButton + ' ';
        else if (['+', '-', '×', '÷', '^', '1', '2' ,'3', '4', '5', '6', '7', '8', '9', '0', '.'].indexOf(pressedButton) !== -1) {
            equation += pressedButton
        }
        else if (pressedButton === '=') {
            try {
                const evalResult = this.calculate(this.parseCalculationString(equation));
                const result = Number.isInteger(evalResult)? evalResult : parseFloat(evalResult.toFixed(4));
                this.setState({result});
            } catch (error) {
                alert('Invalid Mathematical Equation');
            }
        }
        else {
            // equation = equation.trim();
            equation = equation.substr(0, equation.length - 1);
        }
        this.setState({equation: equation});
    }

    parseCalculationString(s) {
        var calculation = [],
            current = '';
        for (var i = 0, ch; ch = s.charAt(i); i++) {
            if ('^×÷+-'.indexOf(ch) > -1) {
                if (current === '' && ch === '-') {
                    current = '-';
                } else {
                    calculation.push(parseFloat(current), ch);
                    current = '';
                }
            } else {
                current += s.charAt(i);
            }
        }
        if (current !== '') {
            calculation.push(parseFloat(current));
        }
        return calculation;
    }

    calculate(calc) {
    // --- Perform a calculation expressed as an array of operators and numbers
        var ops = [{'^': (a, b) => Math.pow(a, b)},
                {'×': (a, b) => a * b, '÷': (a, b) => a / b},
                {'+': (a, b) => a + b, '-': (a, b) => a - b}],
            newCalc = [],
            currentOp;
        for (var i = 0; i < ops.length; i++) {
            for (var j = 0; j < calc.length; j++) {
                if (ops[i][calc[j]]) {
                    currentOp = ops[i][calc[j]];
                } else if (currentOp) {
                    newCalc[newCalc.length - 1] = 
                        currentOp(newCalc[newCalc.length - 1], calc[j]);
                    currentOp = null;
                } else {
                    newCalc.push(calc[j]);
                }
                console.log(newCalc);
            }
            calc = newCalc;
            newCalc = [];
        }
        return calc[0];
    }   

    clear() {
        this.setState({equation: '', result: 0});
    }

    render() {
        return (
            <main className="calculator">
                <Screen equation={this.state.equation} result={this.state.result} />
                <Keypad onButtonPress={this.onButtonPress}/>
            </main>
        );
    }
}

export default Calculator;
import React, { Component } from 'react';
import Currency from './Currency';
import CurrencyError from './CurrencyError';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Here are some currency values</h1>
                <CurrencyError>
                Germany: <Currency value={21} locale="de-DE" currency="US" />
                </CurrencyError>
                <br/>
                <CurrencyError>
                USA: <Currency value={21} locale="en-Us" currency="USD" />
                </CurrencyError>
                <br/>
                <CurrencyError>
                Korea: <Currency value={21000} locale="ko-KR" currency="KRW"/>
                </CurrencyError>
                <br/>
                <CurrencyError>
                Japan: <Currency value={2100} locale="ja-JP" currency="JPY"/>
                </CurrencyError>
                <h2>The currency values displayed are subject to change without notice.</h2>
            </div>
        );
    }
}

export default App;
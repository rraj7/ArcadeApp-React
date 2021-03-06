import React from 'react';
import logo from '../img.png'


export default class Sell extends React.Component{
    constructor(prop) {
        super(prop);
        this.state = {error:null};
        this.handleClick = this.handleClick.bind(this)
      }
    
    handleClick(){
            try {
                if(this.state.number === ''){
                alert("Text cannot be blank.");
                return;
                }

            this.props.withdraw(parseInt(this.state.number, 10));
            }

            catch (error) {
                this.setState({error})
            }
      }
    
    transactionHistory = (
        <div>
            {this.props.transactionHistory.map((log) => { return <li>{log.transactionType} ${log.amount} | Token Left: ${log.newBalance} | {log.date} </li> })} 
        </div>
    );
    render() {
        
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />  
                    <h1>Arcade Game</h1>
                    
                </header>

                <h1>Balance: {this.props.balance}</h1>
                {/* <ErrorBoundary> */}
                <div className="atm">    
                    <h2>Buy from Dealer</h2>
                    <label>
            
                    <br />
                    <input
                        type="number"
                        className="textfield" 
                        defaultValue="0"
                        onChange={e => this.setState({ number: e.target.value })}/> 
                    </label>
                    {/* <button className="mainbtn" onClick={() => this.props.withdraw(parseInt(this.state.number, 10))}> Buy Tokens </button> */}
                    <button className="mainbtn" onClick={this.handleClick.bind(this)}
                                                        > Buy Tokens </button>
                </div> 
                <div>
                    <h2>Transaction History</h2>
                    {this.transactionHistory}
                </div>
            </div>

        );

        
    }

}


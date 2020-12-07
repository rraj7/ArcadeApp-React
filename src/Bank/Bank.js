import React from 'react';
import { connect } from 'react-redux';

class Bank extends React.Component {

//we are using state in his component hold the input deposit amount until the user
//clicks confrm.

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

  render() {
  return (

    <div className="bank">    
        <h2>Sell</h2>

  {/* Deposit Input */}
      <label>
      Sell to dealer:
        <br />
        <input
         type="number"
         className="textfield"
         defaultValue="0"
         onChange={e => this.setState({ number: e.target.value })}/>
      </label>
    
    <button 
        className="mainbtn"
        onClick={this.handleClick.bind(this)}> Confirm
      </button>
    </div>
    );
   }
  }

const mapStateToProps = state => {
  return { 
    balance: state.balance,
    transactionHistory: state.transactionHistory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deposit: (amount) => dispatch({type:'deposit', value: amount}),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Bank);


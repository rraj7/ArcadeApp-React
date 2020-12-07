//Reducer! We apply a method based on the action that has been dispatched.
const FixedBalance = 1000

const initialState = {
	balance: FixedBalance,  //The arcade has a fixed amount to begn the game with. 
	transactionHistory: []
};

const reducer = (state = initialState, action) => {
  const newState = {...state};

  let date = new Date().toLocaleString()

//using a switch statement instead of if/else  
//receiving and using a payload
  switch (action.type) {
	
  	case "withdraw":
		return { 
			...state,
			balance: state.balance - action.value,
			transactionHistory: state.transactionHistory.concat({ date: date, transactionType: 'withdrawl', amount: action.value, newBalance: state.balance - action.value })
		};
		
	case "deposit":
		return { 
			...state,
			balance: state.balance + action.value,
			transactionHistory: state.transactionHistory.concat({ date: date, transactionType: 'deposit', amount: action.value, newBalance: state.balance + action.value })
		};
	default:
		return newState
 	}
}

const balanceValidator = (evaluatedBalance, maxAccountBalance) => {
	if (evaluatedBalance < 0 || evaluatedBalance > maxAccountBalance) {
		return false
	}
	return true
}

export default reducer;

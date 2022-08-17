function Deposit() {
  const ctx = React.useContext(UserContext);
  // for now, assume we are working on the first user's account
  const user = ctx.users[0];
  const [status, setStatus] = React.useState(EMPTY_STATUS);
  const [balance, setBalance] = React.useState(user.balance);
  const [validTransaction, setValidTransaction] = React.useState(false);

  const isDepositValid = (amount) => {
    return amount > 0;
  };

  const resetForm = () => {
    setAmount("");
    setValidTransaction(false);
  };

  const updateBalance = (amount) => {
    user.balance = user.balance + amount;
    setBalance(user.balance);
  };

  const handleSuccess = (amount) => {
    updateBalance(amount);
    flashStatus("success", "Success: Deposited $ " + amount, setStatus);
    resetForm();
    return true;
  };

  const handleError = (message) => {
    flashStatus("error", "Error: " + message, setStatus);
    setValidTransaction(false);
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = Number(getAmount());
    console.log(`depositing ${amount}`);
    if (isDepositValid(amount)) {
      handleSuccess(amount);
    } else {
      handleError("Please enter a valid amount to deposit.");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const amount = Number(getAmount());
    if (isDepositValid(amount)) {
      setValidTransaction(true);
    } else {
      handleError("Please enter a valid amount to deposit.");
    }
  };

  return (
    <Card
      bgcolor=""
      header="Deposit"
      status={status}
      body={
        <>
          {/* Balance */}
          <div className="key-value-row d-flex bd-highlight">
            <div className="flex-grow-1 bd-highlight card-label">Balance</div>
            <div className="bd-highlight">$ {balance}</div>
          </div>
          {/* Deposit Amount */}
          <label className="atm-controls label huge">
            <div className="card-label">Deposit Amount</div>
            <input
              id="number-input"
              className="number-input"
              width="200"
              onChange={handleChange}
            ></input>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={!validTransaction}
            >
              Deposit
            </button>
          </label>
        </>
      }
    />
  );
}

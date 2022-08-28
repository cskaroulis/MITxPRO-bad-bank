function Withdraw() {
  const ctx = React.useContext(UserContext);
  // for now, assume we are working on the first user's account
  const user = ctx.users[0];
  const [status, setStatus] = React.useState(EMPTY_STATUS);
  const [balance, setBalance] = React.useState(user.balance);
  const [validTransaction, setValidTransaction] = React.useState(false);

  const flashStatus = (type, message) => {
    setStatus({ type, message });
    setTimeout(() => setStatus(EMPTY_STATUS), 3000);
    return false;
  };

  const isWithdrawalValid = (amount) => {
    return amount > 0 && amount <= balance;
  };

  const resetForm = () => {
    setAmount("");
    setValidTransaction(false);
  };

  const updateBalance = (amount) => {
    user.balance = user.balance - amount;
    setBalance(user.balance);
  };

  const handleSuccess = (amount) => {
    updateBalance(amount);
    flashStatus("success", "Success: Withdrew $ " + amount, setStatus);
    resetForm();
    return false;
  };

  const handleError = (message) => {
    flashStatus("error", "Error: " + message, setStatus);
    setValidTransaction(false);
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = Number(getAmount());
    if (isWithdrawalValid(amount)) {
      handleSuccess(amount);
    } else {
      handleError("Please enter a valid amount to withdraw.");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const amount = Number(getAmount());
    if (isWithdrawalValid(amount)) {
      setValidTransaction(true);
    } else {
      handleError("Please enter a valid amount to withdraw.");
    }
  };

  return (
    <Card
      bgcolor=""
      header="Withdraw"
      status={status}
      body={
        <>
          {/* Balance */}
          <div className="key-value-row d-flex bd-highlight">
            <div className="flex-grow-1 bd-highlight card-label">Balance</div>
            <div className="bd-highlight">$ {balance}</div>
          </div>
          {/* Withdraw Amount */}
          <label className="atm-controls label huge">
            <div className="card-label">Withdraw Amount</div>
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
              Withdraw
            </button>
          </label>
        </>
      }
    />
  );
}

function Deposit() {
  const ctx = React.useContext(UserContext);
  const user = ctx.users[0];
  const [status, setStatus] = React.useState("");
  const [balance, setBalance] = React.useState(user.balance);
  const [validTransaction, setValidTransaction] = React.useState(false);

  const validate = (field, label) => {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  };

  const getAmount = () => {
    return document.getElementById("number-input").value;
  };

  const setAmount = (amount) => {
    document.getElementById("number-input").value = amount;
  };

  const resetAmount = () => {
    setAmount(0);
    setValidTransaction(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const depositAmount = Number(getAmount());
    console.log(`depositing ${depositAmount}`);
    if (depositAmount <= 0) {
      setValidTransaction(false);
      return false;
    }
    user.balance = user.balance + depositAmount;
    setBalance(user.balance);
    resetAmount();
  };

  const handleChange = (event) => {
    event.preventDefault();
    const depositAmount = Number(getAmount());
    setValidTransaction(depositAmount > 0);
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

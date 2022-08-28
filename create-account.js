function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [formCompleted, setFormCompleted] = React.useState(false);
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setFormCompleted(false);
    setShow(true);
  }

  function inspectFormStatus() {
    setFormCompleted(name && email && password);
  }

  return (
    <Card
      bgcolor=""
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            <div className="card-label">Name</div>
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
                inspectFormStatus();
              }}
              onBlur={(e) => inspectFormStatus()}
            />
            <div className="card-label">Email address</div>
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                inspectFormStatus();
              }}
              onBlur={(e) => inspectFormStatus()}
            />
            <div className="card-label">Password</div>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
                inspectFormStatus();
              }}
              onBlur={(e) => inspectFormStatus()}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleCreate}
              disabled={!formCompleted}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={clearForm}
            >
              Add another account
            </button>
          </>
        )
      }
    />
  );
}

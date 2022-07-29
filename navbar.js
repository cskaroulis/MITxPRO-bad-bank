function NavBar() {
  const [activePage, setActivePage] = React.useState();

  const applyActiveClass = (pageId) => {
    return activePage === pageId ? "my-active" : "";
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-custom">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => setActivePage("home")}
        >
          BadBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${applyActiveClass("create-account")}`}
                href="#/CreateAccount/"
                onClick={() => setActivePage("create-account")}
              >
                Create Account
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${applyActiveClass("deposit")}`}
                href="#/deposit/"
                onClick={() => setActivePage("deposit")}
              >
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${applyActiveClass("withdraw")}`}
                href="#/withdraw/"
                onClick={() => setActivePage("withdraw")}
              >
                Withdraw
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${applyActiveClass("all-data")}`}
                href="#/alldata/"
                onClick={() => setActivePage("all-data")}
              >
                AllData
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

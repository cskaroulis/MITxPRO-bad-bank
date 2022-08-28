function NavBar() {
  const [currentPage, setCurrentPage] = React.useState();

  const currentPageClass = (pageId) => {
    return currentPage === pageId ? "current-page-link" : "";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-custom">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => setCurrentPage("home")}
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
                className={`nav-link ${currentPageClass("create-account")} tip`}
                href="#/create-account/"
                onClick={() => setCurrentPage("create-account")}
                id="tip-create-account"
              >
                Create Account
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${currentPageClass("deposit")} tip`}
                href="#/deposit/"
                onClick={() => setCurrentPage("deposit")}
                id="tip-deposit"
              >
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentPageClass("withdraw")} tip`}
                href="#/withdraw/"
                onClick={() => setCurrentPage("withdraw")}
                id="tip-withdraw"
              >
                Withdraw
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${currentPageClass("all-data")} tip`}
                href="#/all-data/"
                onClick={() => setCurrentPage("all-data")}
                id="tip-all-data"
              >
                All Data
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

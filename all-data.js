function AllData() {
  const ctx = React.useContext(UserContext);

  const User = ({ data: { email, name, password } }) => (
    <tr>
      <td>{email}</td>
      <td>{name}</td>
      <td>{password}</td>
    </tr>
  );

  return (
    <>
      <h1>All Data</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {React.Children.toArray(
            ctx.users.map((user) => <User data={user} />)
          )}
        </tbody>
      </table>
    </>
  );
}

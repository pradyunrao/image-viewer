function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand " href="">
            View Image
          </a>
          <div>
            <button className="btn btn-primary me-2">Login</button>
            <button className="btn btn-outline-light">Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

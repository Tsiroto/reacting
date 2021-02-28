const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>A Site to React to</h1>
      <div className="links">
        <a href="/" style={{
          border: '1px solid rgb(241, 53, 109)',
        }}>Home</a>
        <a href="/" style={{
          border: '1px solid rgb(241, 53, 109)',
          padding: "6px 15px"
        }}>Blog</a>
        <a href="/wizard" style={{
          color: "#fff",
          background: '#f1356d',
        }}>Wizard</a>
      </div>
    </nav>
   );
}
 
export default Navbar;
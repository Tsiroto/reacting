import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>A Site to React to</h1>
      <div className="links">
        <Link to="/" style={{
          border: '1px solid rgb(241, 53, 109)',
        }}>Home</Link>
        <Link to="/comments" style={{
          border: '1px solid rgb(241, 53, 109)',
          padding: "6px 15px"
        }}>Comments</Link>
        <Link to="/wizard" style={{
          color: "#fff",
          background: '#f1356d',
        }}>Wizard</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;
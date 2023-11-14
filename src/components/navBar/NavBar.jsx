import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
      <div style={{
        display: 'flex',
        gap: '20px',
        padding: '30px'
      }}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
    );
}
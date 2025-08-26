import { Link, Outlet } from 'react-router-dom';
import './App.css'

export default function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: 12, padding: 12 }}>
        <Link to="/">Dashboard</Link>
        <Link to="/article001">Article001</Link>
        <Link to="/article002">Article002</Link>
        <Link to="/article003">Article003</Link>
        <Link to="/article004">Article004</Link> 
        <Link to="/article005">Article005</Link>
        <Link to="/article006">Article006</Link>
        <Link to="/chat">Chat</Link>
      </nav>
      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  )
}

import './App.css'

export default function App() {
  return (
    <div >
      <div className="nav-background">
        <div className="nav-container">
          <header className="nav_header">
              <h1><a href="#" className="nav_logo">Dbera</a></h1>
          </header>
          <nav>
            <ul className="nav-ul">
              <li><a className="nav-link active-link" href="#">Home</a></li> 
              <li><a className="nav-link" href="#">News</a></li> 
              <li><a className="nav-link" href="#">Contact</a></li> 
              <li><a className="nav-link" href="#">About</a></li> 
            </ul>
          </nav>
        </div> 
      </div> 
    </div>
    
  );
}

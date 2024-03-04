

function Header(){

    return (
        <header className="navigation"style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ marginRight: '100px' }}>Restauro</h1>
          <nav>
            <ul style={{ listStyleType: 'none', display: 'flex', margin: 0, padding: 0 }}>
              <li style={{ marginRight: '10px' }}>Home</li>
              <li style={{ marginRight: '10px' }}>About</li>
              <li style={{ marginRight: '10px' }}>Services</li>
              <li>Contact</li>
            </ul>
          </nav>
          <hr style={{ margin: '0' }} />
        </header>
      );
    }

export default Header
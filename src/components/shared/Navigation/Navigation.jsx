import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const {user} = useSelector((state) => state.auth)
  return (
    <nav className={styles.navbar}>
      <div className={styles.navleft}>
        <div className={styles.logo}>
          <img src='/images/logo.png' alt='logo'/>
        </div>
        <div className={styles.navlinks}>
          <Link className={styles.links} to="/">Home</Link>
          <Link className={styles.links} to="/blogs">Blogs</Link>
          <Link className={styles.links} to="/about">About</Link>
          <Link className={styles.links} to="/dashboard">Dashboard</Link>
        </div>
      </div>
      <div className={styles.navright}>
        <img className={styles.search} src='/images/search.png' alt='search' />
        {
            user ? (user.avatar ?  (<img className={styles.user} src={user.avatar} alt='logo' />)  : (<Link to='/authenticate'><button>Login</button></Link>)) : 
            (<Link to='/authenticate'><button>Login</button></Link>)
                // <Link to='/authenticate'><button>Login</button></Link>
        }
        
      </div>
    </nav>
  )
}

export default Navigation;
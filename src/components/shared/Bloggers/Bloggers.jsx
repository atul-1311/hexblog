import React from 'react';
import styles from './Bloggers.module.css';

const Bloggers = (props) => {
  const { blogger } = props;
  console.log(blogger);
  return (
    <>
       <div className={styles.pbgg}>
          <img src={`http://localhost:5500${blogger.avatar}`} alt="pbg" />
          <div className={styles.pbgg2}>
            <h3>{blogger.name}</h3>
          </div>
       </div>
    </>
  )
}

export default Bloggers;
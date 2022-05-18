import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = (props) => {
    const { blog } = props;
    // console.log(blog);
  return (
    <Link to={`/singleBlog/${blog._id}`} style={{textDecoration:'none'}}>
    <div className={styles.pbgg}>
            <div className={styles.pbgg1}>
                <img src="/images/popblog.png" alt="pbg" />
            </div>
            <div className={styles.pbgg2}>
                <button>{blog.category}</button>
                <h4>{blog.title} : </h4>
                <h5>{blog.bloghex}</h5>
            </div>
    </div>
    </Link>
  )
}

export default Card;
import React, { useEffect, useState } from 'react';
import styles from './SingleBlog.module.css';
import { useParams } from 'react-router-dom';
import { singleBlog } from '../../http';

const SingleBlog = () => {
    window.scrollTo(0,0);
    const [blog,setBlogs] = useState({});
    const params = useParams();
    const blogid = params._id; 
    async function fetchblog(){
        try{
            const { data } = await singleBlog({blogid});
            setBlogs(...data.blog);
            console.log(blog);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchblog();
    },[])
  return (
    <>
        <div className={styles.content}>
            <div className={styles.title}>
                <h2 className={styles.titlehead}>{blog.title} - </h2>
                <h2 className={styles.titlesubhead}>"{blog.subtitle}"</h2>
            </div>
            <div className={styles.subhead}>
                <div className={styles.read}>
                    <h4>Read Time : {blog.readTime} min</h4>
                </div>
                <div className={styles.name}>
                    <h4>- {blog.name}</h4>
                </div>
            </div>
            <div className={styles.blog}>
                <p className={styles.bloghex}>
                 {blog.bloghex}
                </p>
            </div>
        </div>
    </>
  )
}

export default SingleBlog
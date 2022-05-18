import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allBlogs } from '../../../http';
import styles from './allblogs.module.css';
import Card from '../../shared/card/Card';

const Allblogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { phone } = useSelector((state)=> state.auth.otp);
  async function fetchBlog(){
    try{
      const {data} = await allBlogs({phone});
      setBlogs((data.blogs));
      // console.log(blogs);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchBlog();
  },[])
  return (
    <>
      <div className={styles.popblogrid}>
          <div className={styles.pbg}>
              {
                blogs.length>0 && blogs.map(blog => <Card key={blog._id} blog={blog} />)
              }
          </div>
      </div>
    </>
  )
}

export default Allblogs
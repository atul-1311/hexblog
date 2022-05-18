import React, { useEffect, useState } from 'react';
import { guestBlogs } from '../../http';
import { guestBloggers } from '../../http';
import _ from 'lodash'; 
import Card from '../../components/shared/card/Card';
import Bloggers from '../../components/shared/Bloggers/Bloggers';
// import { useSelector } from 'react-redux';
import styles from './Blogs.module.css';

const Blogs = () => {
    const [recentblogs,setrecentBlogs] = useState([]);
    const [popularblogs, setpopularBlogs] = useState([]);
    const [bloggers, setBloggers] = useState([]);
    // cosnt [popularblogs, setpopularblogs] = useState([]);
    // const { phone } = useSelector((state)=> state.auth.otp);
    let dataBlogs;
    async function fetchBlogs(){
        try{
            const { data } = await guestBlogs();
            // setBlogs((data.blogs));
            dataBlogs = _.orderBy(data.blogs,"createdAt","desc")
            setrecentBlogs(dataBlogs)
            dataBlogs = _.orderBy(data.blogs,"likes","desc")
            setpopularBlogs(dataBlogs);
            // console.log(dataBlogs);
        }catch(err){
            console.log(err);
        }
    }
    async function fetchBloggers(){
        try{
            const { data } = await guestBloggers();
            data.bloggers = _.orderBy(data.bloggers, ["likes","growth","shares"], ["asc","asc","asc"]);
            setBloggers(data.bloggers)
            console.log(data.bloggers);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchBlogs();
        fetchBloggers();
    },[])
    return (
        <>
            <div className={styles.popularBlog1}>
                <h2>Recently Added</h2>
            </div>
            <div className={styles.popblogrid}>
                <div className={styles.pbg}>
                    {
                    recentblogs.length>0 && recentblogs.map(blog => <Card key={blog._id} blog={blog} />)
                    }
                </div>
            </div>
            <div className={styles.space}><div></div></div>
            <div className={styles.popularBlog}>
                <h2>Most Popular</h2>
            </div>
            <div className={styles.popblogrid}>
                <div className={styles.pbg}>
                    {
                    popularblogs.length>0 && popularblogs.map(blog => <Card key={blog._id} blog={blog} />)
                    }
                </div>
            </div>
            <div className={styles.space}><div></div></div>
            <div className={styles.popularBlog}>
                <h2>Most Popular Bloggers</h2>
            </div>
            <div className={styles.popbloggergrid}>
                <div className={styles.pblgrid}>
                    {
                    bloggers.length>0 && bloggers.map(blogger => <Bloggers key={blogger._id} blogger={blogger} />)
                    }
                </div>
            </div>
        </>
  )
}

export default Blogs
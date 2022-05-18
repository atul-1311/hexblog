import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './writeBlog.module.css';
import { blogPost } from '../../../http';

const WriteBlog = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [bloghex, setBloghex] = useState('');
    const [success, setSuccess] = useState(false)

    // const dispatch = useDispatch();
    const { phone } = useSelector((state) => state.auth.otp)
    const { name } = useSelector((state) => state.auth.user)
    // console.log(name);
    async function submit(){
        try{
            const { data } = await blogPost({phone, title, category, subtitle, bloghex, name});
            
            // dispatch(setAuth(data));
            setSuccess(true);
            setTitle('');
            setCategory('');
            setSubtitle('');
            setBloghex('');
            setTimeout(()=>{
                setSuccess(false)
            }, 3000);
        }catch(err){
            console.log(err);
        }
    }

  return(
    <>
        <div className={styles.mainHeader}>
        <div className={styles.header}>
            <div className={styles.leftHeader}>
                <img src="/images/writeblog.png" alt="writeblog" />
                <h3>Write A Blog</h3>
            </div>
            {
                success && 
                <div className={styles.success}>
                    <img src="/images/success.png" alt="success" />
                    <h4>Your Blog has been posted !</h4>
                </div>
            }
            <div className={styles.rightHeader}>
                <button onClick={submit}>Post</button>
            </div>
        </div>
        </div>
        <div>
        <div className={styles.blogContent}>
            <form action="" id="blogform">
                <div className={styles.title}>
                    <div className={styles.titleInput}>
                        <input name='title' id='category' type="text" placeholder='Title of The Blog'
                            value={title} onChange={(e)=> setTitle(e.target.value)} />
                    </div>
                    <div className={styles.category}>
                        <input name='category' type="text" placeholder='Choose Category' 
                            value={category} onChange={(e)=> setCategory(e.target.value)}/>
                    </div>
                </div>
                <div className={styles.subtitle}>
                    <input name='subtitle' type="text" placeholder='Subtitle Of The Blog' size='100' 
                        value={subtitle} onChange={(e)=> setSubtitle(e.target.value)}/>
                </div>
                <div className={styles.blogArea}>
                    {/* <input type="text" placeholder='Write the content here ........ ' size='5000' /> */}
                    <textarea name="blog" id="blog" form="blogform" cols="2000" rows="50" placeholder='Write Your Content Here............'
                        value={bloghex} onChange={(e)=> setBloghex(e.target.value)}></textarea>
                </div>
            </form>
        </div>
        </div>
    </>
  )
}

export default WriteBlog;
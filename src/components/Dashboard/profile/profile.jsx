import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './profile.module.css';

const Profile = () => {
  const [insta, setInsta] = useState("instagram");
  const [tweet, setTweet] = useState("twitter");
  const [face, setFace] = useState("facebook");

  const  { name, avatar, earning, facebook, followers, frequency, growth,
     instagram, likes, maxView, readTime, shares, twitter } = useSelector((state) => state.auth.user);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.basicInfo}>
          <div className={styles.nameTar}>
            <div className={styles.avatar}>
              <img src={avatar} alt="avatar" />
            </div>
            <div className={styles.name}>
              <h3>{name}</h3>
            </div>
            <div className={styles.about}>
              <h4>If you don't build your dream, someone will hire you to build theirs. If you don't build your dream, someone will hire you to build theirs.</h4>
            </div>
          </div>
          <div className={styles.socialMeadia}>
            <div className={styles.social}>
              <img src="/images/instagram.png" alt="insta" />
              <input type="text" value={insta} onChange={(e)=> setInsta(e.target.value)}  />
            </div>
            <div className={styles.social}>
              <img src="/images/twitter.png" alt="insta" />
              <input type="text" value={tweet} onChange={(e)=> setTweet(e.target.value)}  />
            </div>
            <div className={styles.social}>
              <img src="/images/facebook.png" alt="insta" />
              <input type="text" value={face} onChange={(e)=> setFace(e.target.value)}  />
            </div>
          </div>
        </div>
        <div className={styles.moreInfo}>
          <div className={styles.stats}>
            <div className={styles.actions}>
              <img src="/images/read.png" alt="read" />
              <h4>Read Time : {readTime}hrs</h4>
            </div>
            <div className={styles.actions}>
              <img src="/images/likes.png" alt="likes" />
              <h4>{likes>1000 ? (Math.floor(likes/1000)+'k') : likes} ❤️</h4>
            </div>
            <div className={styles.actions}>
              <img src="/images/followers.png" alt="read" />
              <h4>{followers>1000 ? (Math.floor(followers/1000)+'k'):followers} 🙊</h4>
            </div>
            <div className={styles.actions}>
              <img src="/images/earn.png" alt="read" />
              <h4>Earning : ${earning}</h4>
            </div>
            <div className={styles.actions}>
              <img src="/images/share.png" alt="read" />
              <h4>{shares>1000 ? (Math.floor(shares/1000)+'k') : shares} 🤞</h4>
            </div>
            <div className={styles.actions}>
              <img src="/images/growth.png" alt="read" />
              <h4>Growth : {growth}%</h4>
            </div>
            <div className={styles.actions}>
              <img src="/images/freq.png" alt="read" />
              <h4>{frequency}/month</h4>
            </div>
            <div className={styles.actions}>
              <img src="/images/noofblogs.png" alt="read" />
              <h4>Total : 68</h4>
            </div>
            <div className={styles.actions}>
              <img src="/images/viewers.png" alt="read" />
              <h4>Max view : {maxView}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
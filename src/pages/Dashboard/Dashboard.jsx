import React, { useEffect, useRef, useState } from 'react';
import styles from './Dashboard.module.css';
import classNames from 'classnames';
import WriteBlog from '../../components/Dashboard/writeBlog/writeBlog';
import DashboardComp from '../../components/Dashboard/dashboard/dashboard';
import Profile from '../../components/Dashboard/profile/profile';
import AllBlogs from '../../components/Dashboard/allblogs/allblogs';
import Settings from '../../components/Dashboard/settings/settings';

const steps = {
    1: DashboardComp,
    2: Profile,
    3: WriteBlog,
    4: AllBlogs,
    5: Settings
};
// let Step;
// Step = steps[3];

const Dashboard = () => {
  const [step, setStep] = useState(3);
  const [active,setActive] = useState(false);
  const Step=steps[step]

  return (
    <>
      <div className={styles.main}>
      <div className={styles.panel}>
        <div onClick={()=>{setStep(1);setActive(true)}} className={active? classNames(styles.dashPanel,styles.active) : styles.dashPanel}>
          <img src="/images/dashboard.png" alt="dashboard" />
          <h1>Dashboard</h1>
        </div>
        <div onClick={()=>{setStep(2);setActive(true)}} className={active? classNames(styles.profilePanel,styles.active) : styles.profilePanel}>
          <img src="/images/profile.png" alt="profile" />
          <h1>Profile</h1>
        </div>
        <div onClick={()=>{setStep(3);setActive(true)}} className={active? classNames(styles.writePanel,styles.active) : styles.writePanel} >
          <img src="/images/writeblog.png" alt="write" />
          <h1>Write A Blog</h1>
        </div>
        <div onClick={()=>{setStep(4);setActive(true)}} className={active? classNames(styles.allpostsPanel,styles.active) : styles.allpostsPanel} >
          <img src="/images/allposts.png" alt="posts" />
          <h1>All Posts</h1>
        </div>
        <div onClick={()=>{setStep(5);setActive(true)}} className={active? classNames(styles.settingsPanel,styles.active) : styles.settingsPanel} >
          <img src="/images/settings.png" alt="settings" />
          <h1>Settings</h1>
        </div>
      </div>
      <div className={styles.hiddenPanel}></div>
      <div className={styles.content}>
        <Step />
      </div>
      </div>
    </>
  )
}

export default Dashboard;
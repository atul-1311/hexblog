import React, { useState } from 'react';
import styles from './StepName.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../../store/activateSlice';

const StepName = ({ onNext }) => {
  const { name } = useSelector((state) => state.activate)
  const [ fullName, setFullName ] = useState(name);
  const dispatch = useDispatch();

  function nextStep(){
    if(!fullName){
      return;
    }
    console.log(fullName);
    dispatch(setName(fullName));
    onNext();
  }
  return (
    <>
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.otpcard}>
          <div className={styles.headtext}>
            <h1>Welcome Back !</h1>
            <h3>Activate to experience more of the HexBlog</h3>
          </div>
          <div className={styles.userPic}>
            <div className={styles.userPicDiv}>
              <div>
                <img src="/images/user.png" alt="user" />
              </div>
            </div>
          </div>
          <div className={styles.otpform}>
            <div className={styles.input}>
              <input type='text' placeholder='Enter Your Name Here' className={styles.otp} 
                value={fullName} onChange={(e)=> setFullName(e.target.value)} />
              <img src="/images/otp.png" alt="otp" />
            </div>
            <button onClick={nextStep} className={styles.proceed}>Proceed →</button>
            {/* <div className={styles.dclr}>
            <p>By continuing, you agree to Hexblog's Conditions of Use and Privacy Notice.</p>
            <h5>© 2022-2022, Hexblog.com</h5>
            </div> */}
            <h3>By continuing, you agree to Hexblog's Conditions </h3> 
            <h4> of Use and Privacy Notice.</h4>
            <h5>© 2022-2022, Hexblog.com</h5>
          </div>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default StepName
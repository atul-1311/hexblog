import React, { useState } from 'react';
import styles from './StepOtp.module.css';
import { verifyOtp } from '../../../http';
import { useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';                   

const StepOtp = ({onNext}) => {
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp)
  async function submit(){
    try{
      const { data } = await verifyOtp({otp, phone, hash});
      console.log(data);
      dispatch(setAuth(data));
      // onNext();  // no need to call becoz global state is updated and in semi-protected route it is automatically changed
    }catch(err){
      console.log(err);
    }
    // onNext();
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.otpcard}>
            <div className={styles.headtext}>
              <h1>Welcome Back !</h1>
              <h3>Sign in to experience more of the HexBlog</h3>
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
                <input type='text' placeholder='Enter the 4 digit code' className={styles.otp} 
                  value={otp} onChange={(e)=> setOtp(e.target.value)} />
                <img src="/images/otp.png" alt="otp" />
              </div>
              <button onClick={submit} className={styles.proceed}>Proceed →</button>
              {/* <div className={styles.dclr}>
              <p>By continuing, you agree to Hexblog's Conditions of Use and Privacy Notice.</p>
              <h5>© 2022-2022, Hexblog.com</h5>
              </div> */}
              <h3>By continuing, you agree to Hexblog's Conditions </h3> 
              <h4> of Use and Privacy Notice.</h4>
              <h5>© 2022-2022, Bloghex.com</h5>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default StepOtp
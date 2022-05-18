import React, { useState } from 'react';
import styles from './StepPhone.module.css';
import { sendOtp } from '../../../http/index';
import { useDispatch } from 'react-redux';          // used to dispatch data to the global store
import { setOtp } from '../../../store/authSlice';

const StepPhone = ({onNext}) => {
  const [phoneNumber,setphoneNumber] = useState('');
  const dispatch = useDispatch();

  async function submit(){
    // server request
    const {data} = await sendOtp({ phone: phoneNumber });
    console.log(data);
    dispatch(setOtp({phone:data.phone, hash:data.hash}))            // setOtp global store
    onNext();
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.emailcard}>
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
            <div className={styles.emailform}>
              <div className={styles.input}>
                <input type="text" placeholder='Phone Number' className={styles.email} 
                  value={phoneNumber} onChange={(e)=> setphoneNumber(e.target.value)} />
                <img src="/images/email.png" alt="email" />
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

{/* <button onClick={onNext}>Next</button>  */}

export default StepPhone;
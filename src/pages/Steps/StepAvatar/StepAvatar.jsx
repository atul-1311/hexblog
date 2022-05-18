import React, { useState } from 'react';
import styles from './StepAvatar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAvatar } from '../../../store/activateSlice';
import { activate } from '../../../http';
import { setAuth } from '../../../store/authSlice'

const StepName = ({ onNext }) => {
  const { name, avatar } = useSelector((state) => state.activate)
  const [ image, setImage ] = useState('/images/user.png');
  const dispatch = useDispatch();
  function captureImage(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function(){
      console.log(reader.result);
      setImage(reader.result);
      dispatch(setAvatar(reader.result))
    }
    console.log(e);
  }
  // const dispatch = useDispatch();

  async function submit(){
    try{
      const { data } = await activate({ name, avatar });
      if(data.auth){
        dispatch(setAuth(data))
      }
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.otpcard}>
          <div className={styles.headtext}>
            <h1>Welcome Back !</h1>
            <h3>{`Okay ${name},`} How's this picture ?</h3>
          </div>
          <div className={styles.userPic}>
            <div className={styles.userPicDiv}>
              <div>
                <img src={image} alt="user" />
              </div>
            </div>
          </div>
          <div className={styles.otpform}>
            <div className={styles.input}>
              <input id="avatarInput" type='file' onChange={captureImage}/>
              <label htmlFor="avatarInput">Choose your photo</label>
              {/* <img src="/images/otp.png" alt="otp" /> */}
            </div>
            <button onClick={submit} className={styles.proceed}>Proceed →</button>
            {/* <div className={styles.dclr}>
            <p>By continuing, you agree to Hexblog's Conditions of Use and Privacy Notice.</p>
            <h5>© 2022-2022, Hexblog.com</h5>
            </div> */}
            {/* <h3>By continuing, you agree to Hexblog's Conditions </h3> 
            <h4> of Use and Privacy Notice.</h4> */}
            <h5>© 2022-2022, Hexblog.com</h5>
          </div>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default StepName
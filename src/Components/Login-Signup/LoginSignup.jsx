import React, { useState } from 'react';
import './LoginSignup.css';

import lock_icon from '../Assests/password-icon.png';
import user_icon from '../Assests/user-icon.png';
import email_icon from '../Assests/email-icon.png';

export const LoginSignup = () => {
  const [action, setAction] = useState('Login');
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Kòsmòs Shādes</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === 'LOGIN' ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Username" />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="text" placeholder="Email ID" />
          </div>

          <div className="input">
            <img src={lock_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === 'SIGN UP' ? (
          <div></div>
        ) : (
          <div className="forgetpass">forgetten password?</div>
        )}

        <div className="submit-container">
          <div
            className={action === 'LOGIN' ? 'submit gray' : 'submit'}
            onClick={() => {
              setAction('SIGN UP');
            }}
          >
            SIGN UP
          </div>
          <div
            className={action === 'SIGN UP' ? 'submit gray' : 'submit'}
            onClick={() => setAction('LOGIN')}
          >
            LOGIN
          </div>
        </div>
      </div>
    </div>
  );
};

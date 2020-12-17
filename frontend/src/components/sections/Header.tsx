import React,{FC, useContext} from 'react'
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {ThemeContext} from '../theme/Theme';
// import {Button} from '../UI/Button';
import { RootState } from '../../store';
import { logout } from '../../store/actions/authActions';
import { motion } from 'framer-motion';
// import { motion } from 'framer-motion';

export const Header: FC = ()  => {
  const { toggle } = useContext(ThemeContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(logout());
  }
  
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
      <li className="logo">
        <div className="nav-link">
            <span className="link-text logo-text ">
              <Link className="title" to={!authenticated ? "/" : "/dashboard"}>StockFolio</Link>
            </span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              />
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              />
            </g>
          </svg>
        </div>
      </li>

      {!authenticated ?
        <>
          <li className="nav-item ">
              <div className="nav-link"  onClick={ () => history.push('/signup')}>
                <motion.svg
                  width='24px'
                  height='24px'
                  viewBox="0 0 24 24"
                  animate={{scale: '1.5'}}
                >
                  <path
                    className="register"
                    fill="currentColor"
                    d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"
                  />
                </motion.svg>
                <span className="link-text">Register</span>
            </div>
            </li>
            
            <li className="nav-item ">
              <div className="nav-link" onClick={ () => history.push('/signin')}>
              <motion.svg
                  width='24px'
                  height='24px'
                  viewBox="0 0 24 24"
                  animate={{scale: '1.5'}}
                >
                  <path
                    className="register"
                    fill="currentColor"
                    d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" 
                  />
                </motion.svg>
                <span className="link-text">Log-In</span>
            </div>
            </li>
          </>
          :        
            <li className="nav-item">
              <div className="nav-link logout" onClick={ logoutClickHandler }>
              <motion.svg
                  width='24px'
                  height='24px'
                  viewBox="0 0 24 24"
                  animate={{scale: '1.5'}}
                >
                  <path
                    className="register "
                    fill="currentColor"
                    d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"  
                  />
                </motion.svg>
                <span className="link-text">Log-Out</span>
              </div>
            </li>
        }
        
      <li className="nav-item">
          <div className="nav-link logout"
            onClick={toggle}
          >
           <motion.svg
                  width='24px'
                  height='24px'
                  viewBox="0 0 24 24"
                  animate={{scale: '1.5'}}
                >
              <path
                className="register "
                fill="currentColor"
                d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"   
              />
            </motion.svg>
            <span className="link-text">Theme</span>
        </div>
      </li>   
        
        {/* <svg src={a} alt="Register" className="register"/> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1" 
              viewBox="0 0 64 64"
            >
              <path fill="currentColor" stroke="#000" 
                className="register"
                stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" 
                d="M35,56H29a2,2,0,0,1-2-2h0a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2h0A2,2,0,0,1,35,56Z"
              />
              <rect width="36" height="5" x="14" y="42" fill="currentColor" 
              stroke="#000" stroke-linecap="round"
              stroke-linejoin="round" 
              stroke-width="2"
              />
              <rect width="36" height="5" x="14" y="33" 
              fill="currentColor" stroke="#000"
              stroke-linecap="round" 
              stroke-linejoin="round"
                stroke-width="2"
                className="register"
              />
              <path fill="currentColor" 
              stroke="#000" stroke-linecap="round"
              stroke-linejoin="round" 
              stroke-width="2"
              d="M26.39,28V25.8A3.81,3.81,0,0,1,30.2,22h2.
              39a3.8,3.8,0,0,1,3.8,3.8V28"
              />
              <circle cx="31.39" cy="15" r="3" 
              fill="currentColor" stroke="#000"
              stroke-linecap="round" 
              stroke-linejoin="round"
              stroke-width="2"
              />
              <line x1="23.39" x2="39.39" y1="28"
              y2="28" fill="white" 
              stroke="#000" stroke-linecap="round"
              stroke-linejoin="round" 
              stroke-width="2"
              />
              <path fill="none" stroke="#fff" 
              stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2"
                className="register"
              d="M56,16V56a4,4,0,0,1-4,4H12a4,4,0,0,1-4-4V11a4,4,0,0,1,4-4H47"
              />
              <line x1="51" x2="61"
              y1="7" y2="7" fill="currentColor" stroke="#000" 
              stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2"
              />
              <line x1="56" x2="56" y1="2"
                y2="12" fill="currentColor" stroke="#000" 
              stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2"
              />
            </svg> */}
        

      
   
      </ul>
 

    </nav>
  );
}

import React,{FC, useContext} from 'react'
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {ThemeContext} from '../theme/Theme';
// import {Button} from '../UI/Button';
import { RootState } from '../../store';
import { logout } from '../../store/actions/authActions';
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
                <svg
                  width='24px'
                  height='24px'
                  viewBox="0 0 24 24">
                  <path
                    className="register"
                    fill="currentColor"
                    d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"
                  />
                </svg>
                <span className="link-text">Register</span>
            </div>
            </li>
            
            <li className="nav-item ">
              <div className="nav-link" onClick={ () => history.push('/signin')}>
                <svg
                  width='24px'
                  height='24px'
                  viewBox="0 0 24 24">
                  <path
                    className="register"
                    fill="currentColor"
                    d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" 
                  />
                </svg>
                <span className="link-text">Log-In</span>
            </div>
            </li>
          </>
          :        
            <li className="nav-item">
              <div className="nav-link logout" onClick={ logoutClickHandler }>
                <svg
                  width='24px'
                  height='24px'
                  viewBox="0 0 24 24">
                  <path
                    className="register "
                    fill="currentColor"
                    d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"  
                  />
                </svg>
                <span className="link-text">Log-Out</span>
              </div>
            </li>
        }
        
      <li className="nav-item">
          <div className="nav-link logout"
            onClick={toggle}
          >
            <svg
              width='24px'
              height='24px'
              viewBox="0 0 24 24">
              <path
                className="register "
                fill="currentColor"
                d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"   
              />
            </svg>
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

     {/* <div className="container">
        <div className="navbar-brand">
          <Link style={{color: 'red'}} className="navbar-item" to={ !authenticated ? "/" : "/dashboard"}>AppName</Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-items">
          {!authenticated ? <div className="buttons">
              <Button text="Sign Up" onClick={ () => history.push('/signup')} className="is-primary"/>
              <Button text="Sign In" onClick={ () => history.push('/signin')} className="is-primary"/>
            </div>
            :
            <Button text="Sign Out" onClick={ logoutClickHandler } />
        }
        </div>
      </div> */}

      // <li className="nav-item">
      //   <a href="#" className="nav-link">
      //     <svg
      //       aria-hidden="true"
      //       focusable="false"
      //       data-prefix="fad"
      //       data-icon="alien-monster"
      //       role="img"
      //       xmlns="http://www.w3.org/2000/svg"
      //       viewBox="0 0 576 512"
      //       className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
      //     >
      //       <g className="fa-group">
      //         <path
      //           fill="currentColor"
      //           d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
      //           className="fa-secondary"
      //         />
      //         <path
      //           fill="currentColor"
      //           d="M160,320h64V224H160Zm192-96v96h64V224Z"
      //           className="fa-primary"
      //         />
      //       </g>
      //     </svg>
      //     <span className="link-text">Aliens</span>
      //   </a>
      // </li>

      // <li className="nav-item">
      //   <a href="#" className="nav-link">
      //     <svg
      //       aria-hidden="true"
      //       focusable="false"
      //       data-prefix="fad"
      //       data-icon="space-station-moon-alt"
      //       role="img"
      //       xmlns="http://www.w3.org/2000/svg"
      //       viewBox="0 0 512 512"
      //       className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
      //     >
      //       <g className="fa-group">
      //         <path
      //           fill="currentColor"
      //           d="M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z"
      //           className="fa-secondary"
      //         />
      //         <path
      //           fill="currentColor"
      //           d="M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z"
      //           className="fa-primary"
      //         />
      //       </g>
      //     </svg>
      //     <span className="link-text">Space</span>
      //   </a>
      // </li>

      // <li className="nav-item">
      //   <a href="#" className="nav-link">
      //     <svg
      //       aria-hidden="true"
      //       focusable="false"
      //       data-prefix="fad"
      //       data-icon="space-shuttle"
      //       role="img"
      //       xmlns="http://www.w3.org/2000/svg"
      //       viewBox="0 0 640 512"
      //       className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
      //     >
      //       <g className="fa-group">
      //         <path
      //           fill="currentColor"
      //           d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
      //           className="fa-secondary"
      //         />
      //         <path
      //           fill="currentColor"
      //           d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
      //           className="fa-primary"
      //         />
      //       </g>
      //     </svg>
      //     <span className="link-text">Shuttle</span>
      //   </a>
      //   </li>

    //   <li className="nav-item" id="themeButton">
    //   <a href="#" className="nav-link">
    //     <svg
    //       className="theme-icon svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
    //       id="lightIcon"
    //       aria-hidden="true"
    //       focusable="false"
    //       data-prefix="fad"
    //       data-icon="moon-stars"
    //       role="img"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 512 512"
    //       // className="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
    //     >
    //       <g className="fa-group">
    //         <path
    //           fill="currentColor"
    //           d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
    //           className="fa-secondary"
    //         />
    //         <path
    //           fill="currentColor"
    //           d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
    //           className="fa-primary"
    //         />
    //       </g>
    //     </svg>
    //     <svg
    //       className="theme-icon svg-inline--fa fa-sun fa-w-16 fa-7x"
    //       id="solarIcon"
    //       aria-hidden="true"
    //       focusable="false"
    //       data-prefix="fad"
    //       data-icon="sun"
    //       role="img"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 512 512"
    //       // className="svg-inline--fa fa-sun fa-w-16 fa-7x"
    //     >
    //       <g className="fa-group">
    //         <path
    //           fill="currentColor"
    //           d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
    //           className="fa-secondary"
    //         />
    //         <path
    //           fill="currentColor"
    //           d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
    //           className="fa-primary"
    //         />
    //       </g>
    //     </svg>
    //     <svg
    //       className="theme-icon svg-inline--fa fa-sunglasses fa-w-18 fa-7x"
    //       id="darkIcon"
    //       aria-hidden="true"
    //       focusable="false"
    //       data-prefix="fad"
    //       data-icon="sunglasses"
    //       role="img"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 576 512"
    //       // className="svg-inline--fa fa-sunglasses fa-w-18 fa-7x"
    //     >
    //       <g className="fa-group">
    //         <path
    //           fill="currentColor"
    //           d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z"
    //           className="fa-secondary"
    //         />
    //         <path
    //           fill="currentColor"
    //           d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z"
    //           className="fa-primary"
    //         />
    //       </g>
    //     </svg>
    //     <span className="link-text">Themify</span>
    //   </a>
    // </li>


  //    const getMode = () => {
  //   const initialMode = window.localStorage.getItem("mode")
  //   if (initialMode == null) {
  //     if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
  //       return true
  //     }
  //     else {
  //       return false
  //     }
  //   }
  //   else {
  //     return JSON.parse(initialMode);
  //   }
  //   // return item ? JSON.parse(item) : false
  // }
  // const [dark, setMode] = useState(getMode());

  // useEffect(() => {
  //   localStorage.setItem("mode", JSON.stringify(dark));
  // }, [dark])
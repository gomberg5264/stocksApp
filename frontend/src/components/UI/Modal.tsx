import React,{FC,useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import {IUsers} from '../types/type';

interface ISignInModalProps {
  showModal: boolean;
  setShowModal: any;
}

interface INiftyModalProps {
  showModal: boolean;
  setShowModal: any;
  users: IUsers;
  
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0}
}

const modal = {
  visible: {
    y: "200px",
    opacity: 1,
    transition: {delay: 0.5}
  },
  hidden: {
    y: "-100vh",
    opacity: 0
   }
}

export const SignInModal: FC<ISignInModalProps> = ({ showModal }) => {
  
  const { user, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return (
  <>
    {showModal && (
      <motion.div className="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div className="modal-1"
          variants={modal}
        >
          <p className="modal-1__text">
            {user?.firstName}, you need to verify your email address! <br />
              If verified please refresh.
            </p>
        </motion.div>
      </motion.div>
    )}    
    </>
  );
}


export const NiftyModal: FC<INiftyModalProps> = ({ showModal, setShowModal, users }) => {
  
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div className="modal-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{opacity: 0}}
        >
          <motion.div
            className="modal-2__cont"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{y: 15}}
          >
            <motion.div   
              onClick={() => setShowModal(false)}
              className="modal-2__cont__btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="modal-2__cont__btn-x"
              >
                <defs>
                  <filter id="id-of-your-filter">
                    <feColorMatrix
                      color-interpolation-filters="sRGB"
                      type="matrix"
                      values="0 0 0 0 0
                              0 0.50 0 0 0
                              0 0 0.50 0 0
                              0 0 0 1 0 "/>
                  </filter>
                  ...
                </defs>
                <path
                  fill="#fff"
                  d="M0 0h24v24H0V0z"
                />
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                />
              </svg>
            </motion.div>
            <motion.div className="modal-2__cont__info">
              <p className="item">
                Advances : {users.advances}
              </p>
              <p className="item">
                Declines : {users.declines}
              </p>
              <p className="item">
                Year High : {users.latestData[0].yHigh}
              </p>
              <p className="item">
                Year Low : {users.latestData[0].yLow}
              </p>
              <p className="item">
                Day High : {users.latestData[0].high}
              </p>
              <p className="item">
                Day Low : {users.latestData[0].low}
              </p>
              <p className="item">
                Year Returns : {users.latestData[0].yCls}
              </p>
              <p className="item">
                Open : {users.latestData[0].open}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}    
    </AnimatePresence>
  );
}
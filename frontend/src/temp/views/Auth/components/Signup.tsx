import React, { useContext,useState} from 'react'
import { useHistory } from "react-router-dom";
import firebase from "../../../firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../../../contexts/AuthProvider";
import Snackbar from '@material-ui/core/Snackbar'
import Slide,{ SlideProps } from '@material-ui/core/Slide';

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}
type TransitionProps = Omit<SlideProps, 'direction'>;

interface IFormItems {
  username: string;
  password: string;
 
}

export const Signup: React.FC = ({ }) => {

  const authContext = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);
  const [values, setValues] = useState({
    username: "",
    password: "",
  
  } as IFormItems);
  const [cpass, setPass] = useState<any>('');
  const history = useHistory();
    const handleClick = () => {
      history.push("/auth/login")
      console.log(cpass);
      console.log(values);
   }

   const handlePassChange = (event: any) => {
    setPass(event.target.value);
   }
   const snackUp = (Transition: React.ComponentType<TransitionProps>) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
   const handleChange = (event: any) => {
     event.persist();
     const value = event.target.value;
    setValues({
      ...values,
      [event.target.name]:value
    }); 
    console.log(values);
   }
  
   const handleSubmit = (event: any) => {
    event?.preventDefault();
     console.log(values, 'values');
     console.log(cpass);
     console.log(values.password);
     if (cpass !== values.password) {
       snackUp(TransitionUp);
     }
     else {
       firebase
         .auth()
         .createUserWithEmailAndPassword(values.username, values.password)
         .then((userCredential: firebase.auth.UserCredential) => {
           authContext.setUser(userCredential);
           const db = firebase.firestore();
           db.collection("Users")
             .doc(userCredential.user!.uid)
             .set({
              username: values.username,
             })
             .then(() => {
               console.log('ok');
               history.push("/dashboard");
             })
             .catch(error => {
               console.log(error.message);
               alert(error.message);
             });
         })
    }
} 
  
  // const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  // const passwordRef = useRef()as React.MutableRefObject<HTMLInputElement>;
  // const passwordCOnfirmRef = useRef()as React.MutableRefObject<HTMLInputElement>;
  
  return (
    <div className="signup__container">
      <form className='form' onSubmit={handleSubmit}>
        <div className='control'>
          <h1>
            Sign In
          </h1>
        </div>
        <div className='control block-cube block-input'>
          <input name='username' onChange={handleChange} placeholder='Email' type='text'  required={ true} />
          <div className='bg-top'>
            <div className='bg-inner'/>
          </div>
          <div className='bg-right'>
            <div className='bg-inner'/>
          </div>
          <div className='bg'>
            <div className='bg-inner'/>
          </div>
        </div>
        <div className='control block-cube block-input'>
          <input name='password' onChange={handlePassChange} placeholder='Password' type='password'  required={ true} />
          <div className='bg-top'>
            <div className='bg-inner'/>
          </div>
          <div className='bg-right'>
            <div className='bg-inner'/>
          </div>
          <div className='bg'>
            <div className='bg-inner'/>
          </div>
        </div>
        <div className='control block-cube block-input'>
          <input name='passwordConfirm' onChange={handleChange}  placeholder='Password Confirmation' type='password'  required={ true} />
          <div className='bg-top'>
            <div className='bg-inner'/>
          </div>
          <div className='bg-right'>
            <div className='bg-inner'/>
          </div>
          <div className='bg'>
            <div className='bg-inner'/>
          </div>
        </div>
        <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message=" Both passwords do not match!"
        key={transition ? transition.name : ''}
      />
        <button className='btn block-cube block-cube-hover' onClick={handleClick}  type='button'>
          <div className='bg-top'>
            <div className='bg-inner'/>
          </div>
          <div className='bg-right'>
            <div className='bg-inner'/>
          </div>
          <div className='bg'>
            <div className='bg-inner'/>
          </div>
          <div className='text'>
            Sign Up
          </div>
        </button>
        <div className='control logHere'>
          <h1>
          Already have an account? 
          </h1>
        </div>
      </form>
  </div>
      
     
  
    );
}

export default Signup;
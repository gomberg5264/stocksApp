import React,{FC, useState, FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../UI/Input';
import { Button } from '../UI/Button';
import { Message } from '../UI/Message';
import { sendPasswordResetEmail,setError, setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';

export const ForgotPassword: FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error, success } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
      if (success) {
        dispatch(setSuccess(''));
      }
    }
  }, [error, success, dispatch]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(sendPasswordResetEmail(email, "Email Sent!"));
    setLoading(false);
  }

  return (
    <div className="signup__cont">
        <h2 className="">Reset Password</h2>
        <form className="signup__cont__form" onSubmit={submitHandler}>
          {error && <Message type="danger" msg={error} />}
          {success && <Message type="success" msg={success}/>}
           <Input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email address"
            label="Email address"
            type="text"
          />
          <Button text={loading ? "Loading..." : "Send password reset email"} className="btn" disabled={loading} />
        </form>
      </div>
    );
}
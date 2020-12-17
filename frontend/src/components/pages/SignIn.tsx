import React,{FC, useState, FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input } from '../UI/Input';
import { Button } from '../UI/Button';
import { Message } from '../UI/Message';
import { signin,setError } from '../../store/actions/authActions';
import { RootState } from '../../store';

export const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
    }
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    dispatch(signin({ email, password }, () => setLoading(false)));
  }

  return (
    <div className="signup__cont">
    <section className="signup__cont__section">
      <div className="signup__cont__body">
        <h2 className="has-text-centered is-size-2 mb-3">Sign In</h2>
        <form className="signup__cont__form" onSubmit={submitHandler}>
          {error && <Message type="danger" msg={error}/>}
           <Input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email address"
            label="Email address"
            type="text"
          />
           <Input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            label="Password"
            type="password"
          />
          <p ><Link className="signup__cont__fpass" to="/forgot-password">Forgot Password ?</Link></p><br/><br/><br/><br/>
          <Button text={loading ? "Loading..." : "Sign In"} className="btn" disabled={loading} />
        </form>
      </div>
      </section>
      </div>
    );
}
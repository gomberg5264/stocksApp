import React, { FC, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
}

export const Input: FC<IInputProps> = ({ type, placeholder, value, name, onChange, label }) => {
  return (
      <div className='control block-cube block-input'>
        <label htmlFor={name}>{label}</label>
        <input 
          className="input"
          color="red"
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          id={name}
          onChange={onChange}
          required={true}
          autoComplete="off"
        />
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
  );
}



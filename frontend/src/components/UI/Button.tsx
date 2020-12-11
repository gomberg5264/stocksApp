import React, { FC,ButtonHTMLAttributes} from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  classname?: string;
}

export const Button: FC<IButtonProps> = ({text,className,onClick,type,disabled}) => {
  return (
    <button type={type} className="btn" onClick={onClick} disabled={disabled}>
      {text}
      {/* <div className='bg-top'>
            <div className='bg-inner'/>
          </div>
          <div className='bg-right'>
            <div className='bg-inner'/>
          </div>
          <div className='bg'>
            <div className='bg-inner'/>
          </div>
          <div className='text'>
          </div> */}
    </button>
    );
}
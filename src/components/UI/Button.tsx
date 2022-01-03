import React, { FC,ButtonHTMLAttributes} from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  classname?: string;
}

export const Button: FC<IButtonProps> = ({text,className,onClick,type,disabled}) => {
  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
    );
}
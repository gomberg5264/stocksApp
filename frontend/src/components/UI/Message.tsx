import React, { FC} from 'react'

interface IMessageProps {
  msg: string;
  type: 'danger' | 'success';
}

export const Message: FC<IMessageProps> = ({msg,type}) => {
  let typeClass = '';
  
  if (type === 'danger') {
    typeClass = 'is-danger';
  }

  if (type === 'success') {
    typeClass = 'is-success';
  }
  
  return (
    <article className={ `message ${typeClass}`} >
      <div className="message-body">{msg}</div>
    </article>
  );  
}

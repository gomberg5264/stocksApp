import React, { FC} from 'react'

interface IMessageProps {
  msg: string;
  type: 'danger' | 'success';
}

export const Message: FC<IMessageProps> = ({msg,type}) => {
  let typeClass = '';
  
  if (type === 'danger') {
    typeClass = 'msg__cont';
  }

  if (type === 'success') {
    typeClass = 'success';
  }
  
  return (
    <article className={typeClass}>
      <div className="msg__cont__body">{msg}</div>
    </article>
  );  
}

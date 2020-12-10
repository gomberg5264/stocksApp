import React,{FC} from 'react'
import { motion } from 'framer-motion';

export const Homepage: FC = () => {
  return (
    <div className="hp__cont"> 
      <motion.h2 className="hp__cont__title-1"
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        transition={{type: 'spring', stiffness: 60, delay: 0.5}}
      >
        StockFolio
      </motion.h2>
      <motion.h5 className="hp__cont__title-2"
         initial={{ y: '100vh' }}
         animate={{ y: 0 }}
         transition={{type: 'spring', stiffness: 70, delay: 0.8}}
      >
        Welcome to the stockfolio <br/>
        where you can build your very own <br />
        stock market (mock)  portfolio!
      </motion.h5>
    </div>
    );
}
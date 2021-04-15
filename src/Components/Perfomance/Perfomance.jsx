import React from 'react';
import classes from './Perfomance.module.css';
import Image from './Image/Image';
import Productivity from './Productivity/Productivity'
import Recommendation from './Recommendation/Recommendation'
import Meet from './Meet/Meet'
import News from './News/News'

const Perfomance = () => {
     return <div className={classes.perfomance}>
          <div className={classes.title}>
               Кабинет личной эффективности
          </div>
          <div className={classes.flex}>
               <Image />
               <div className={classes.tableContainer}>
                    <div>
                         <Productivity />
                         <Recommendation />
                    </div>
                    <div className={classes.meetNews}>
                         <Meet />
                         <News />
                    </div>
               </div>
          </div>
     </div>
}

export default Perfomance;


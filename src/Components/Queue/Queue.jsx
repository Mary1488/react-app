import React from 'react';
import classes from './Queue.module.css';

const Queue = () => {
     return <div className={classes.queue}>
          <div className={classes.queueTitle}>
               <div className={classes.title}>
                    Очередь
          </div>
               <div className={classes.console}>
                    <a>Пульт оператора</a>
               </div>
          </div>
          <div className={classes.message}>
               Никого нет
          </div>
     </div>
}

export default Queue;
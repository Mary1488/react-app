import React from 'react';
import classes from './Search.module.css';
import Loupe from './loupe.svg';


const Search = () => {
     return <div className={classes.search}>
          <div className={classes.searchTitle}>
               <div className={classes.title}>
                    Поиск клиента
          </div>
               <div className={classes.extended}>
                    <a>Расширенный поиск</a>
               </div>
          </div>

          <div className={classes.searchInput}>
               <input type="text" placeholder="Серия и номер документа" />
               <img src={Loupe}/>
          </div>
     </div>
}

export default Search;


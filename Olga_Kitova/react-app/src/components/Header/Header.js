import React, { useContext } from 'react'
import {Context} from '../../context/Context'

export default function Header() {
   //Context data
  const {theme, toggleTheme} = useContext(Context);


  return (
    <header>
       <button className={"header__btn header__btn--" + theme} onClick={toggleTheme}>Изменить тему</button>
    </header>
  )
}

import React, { useState } from 'react'
import './styles/menu.css'
import { Button } from '@nextui-org/react'
export default function Menu(props:any) {
  const [menuFlag, setMenuFlag] = useState(false)
  const triggerMenu = () => {
    setMenuFlag(!menuFlag)
    props.toggleMenu(menuFlag)
  }
  return (
    <Button radius="full" className="p-0 min-w-0 w-12 h-12 bg-transparent hover:bg-gray-300/40 dark:hover:bg-gray-400/20">
      <div className='h-full'>
        <input hidden={true} checked={menuFlag} onChange={() => triggerMenu()} className="check-icon" id="check-icon" name="check-icon" type="checkbox" />
        <label className="icon-menu dark:text-gray-50" htmlFor="check-icon">
          <div className="bar bar--1 dark:bg-gray-50"></div>
          <div className="bar bar--2 dark:bg-gray-50"></div>
          <div className="bar bar--3 dark:bg-gray-50"></div>
        </label>
      </div>
    </Button>
  )
}

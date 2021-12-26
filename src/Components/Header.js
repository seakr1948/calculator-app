import React from 'react'
import ThemeToggle from './ThemeToggle'

const Header = ({setTheme, currentTheme, themes}) => {
    return (
        <div className="header flex">
          <h1>
            calc
          </h1>
          <ThemeToggle setTheme={setTheme} currentTheme={currentTheme} themes={themes}/>
        </div>
    )
}

export default Header

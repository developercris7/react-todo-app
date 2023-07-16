import React from 'react'


const Header = ({title}) => {
    
  return (
  <header className='header-style'>
    <h1>{title}</h1>
  </header>
  )
}
Header.default = {
  title:"To-do List"
}
export default Header
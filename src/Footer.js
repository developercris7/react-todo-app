import React from 'react'

const Footer = () =>{
    const year= new Date();
  return(
     <footer>
        <p>Copyright &copy; {year.getFullYear()}</p>
     </footer>
  )
}

export default Footer
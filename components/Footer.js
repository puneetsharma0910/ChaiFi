import React from 'react'

const Footer = () => {
<<<<<<< HEAD
  return (
    <footer className='bg-slate-900 flex text-white justify-center items-center h-[26.5px]'>
      <p>Copyright &copy; GetMeChai! -  All rights Reserved</p>

=======
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white flex items-center justify-center px-4 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai - All rights reserved!</p>
>>>>>>> main
    </footer>
  )
}

export default Footer

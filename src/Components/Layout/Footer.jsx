import React from 'react'

const Footer = () => {
    const footerYear = new Date().getFullYear()
  return (
    <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
        <div>
            <p>
                Copyright &copy; {footerYear} All rights Reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer

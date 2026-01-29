import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="text-2xl mb-4 font-light">
        A React App to search github profiles  and see profile details.
        This project is part of the <a href="https://www.github.com/mayank-garg7/github-finder"> React-Projects </a>
        developed by <strong> <a href="http://www.mayankgarg.ac.in">Mayank Garg</a> </strong>
      </p>
      <p className="text-lg text-gray-400">
        Version: <span className='text-white'>1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout by:  
        <a href="http://www.mayank.ac.in" className="text-white"> Mayank Garg</a>
      </p>
    </div>
  )
}

export default About

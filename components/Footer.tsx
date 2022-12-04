import React from 'react'

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     <img src="https://cdn.sanity.io/images/9zrn54i9/events/1f344e7217d51300bb19eb7acbcadaf975dc8fb8-200x200.jpg" alt="" className='h-24' />
      <span className="ml-3 text-xl">PEC ACM</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 PECACM —
      <a href="https://github.com/harshjohar" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@harshjohar</a>
    </p>
  </div>
</footer>
  )
}

export default Footer
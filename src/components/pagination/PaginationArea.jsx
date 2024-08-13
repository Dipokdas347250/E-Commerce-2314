import React from 'react'

const PaginationArea = ({ pageNumber, paginate, currentPages, next, prev, mobileview }) => {
  console.log(mobileview);


  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm lg:px-0 px-[100px]">
          {pageNumber.length > 0 &&
            <li onClick={prev} className='cursor-pointer'>
              <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
          }
          {mobileview &&
            <>
              {pageNumber.map((item, i) => (

                <li onClick={() => paginate(item)} className={currentPages == i + 1 ? " flex items-center justify-center px-3 h-8 leading-tight text-[#fff]  border border-gray-300 bg-[#262626] cursor-pointer" : " flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 bg-[#FFF] cursor-pointer"}>

                  {item + 1}

                </li>
              ))}
            </>
          }
          {pageNumber.length > 0 &&
            <li onClick={next} className='cursor-pointer' >
              <a className="flex items-center justify-center ml-3 lg:ml-0  px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          }


        </ul>
      </nav>

    </>

  )
}

export default PaginationArea

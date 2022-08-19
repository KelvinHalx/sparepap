import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopBar.css';
import { BsGrid, BsList } from "react-icons/bs";

function TopBar() {
  return (
    <div>
        <div className='container mt-2 mb-2'>
            <div className='row mt-2 mb-2'>
                <div className='col-md-1 mt-2 mb-2'></div>
                <div className='col-md-10 mt-2 mb-2'>
                    <div className='container mt-2 mb-2'>
                        <div className='row mt-2 mb-2'>
                            <div className='col-md-12 mt-2 mb-2'>
                                <div>
                                    <p className='tp-title'>
                                    Showing 10,000 results for"brake disks honda"
                                    </p>
                                </div>
                                <div>
                                {/* search bar */}
                                <input className="form-control tsearch" id="listSearch" type="text" placeholder="brake disk bosch" />
                                </div>
                                <div className='tags'>
                                <p className='text-sm tp'>Tags
                                    </p>
                                    {/* tags */}
                                    <button  className='btn btn-sm tagbtn'>Bosch 
                                        <span className='tagspan'>X</span>
                                        </button>
                                    <button className='btn btn-sm tagbtn'>Brakes 
                                        <span className='tagspan'>X</span>
                                        </button>
                                </div>
                                <div>
                                    <div className='container mt-2'>
                                        <div className='row'>
                                            <div className='col-md-3'></div>
                                            <div className='col-md-9'>
                                                <div className='container '>
                                            <div className='row toptt'>
                                                <div className='col-md-3 toptt'>
                                                
                                                <p className='topp-title'>
                                                Showing 1-25 of 7,405
                                                </p>

                                                </div>
                                                <div className='col-md-9 toptt'>
                                                    {/* numbers */}
                                                    {/* <div className=''>
                                                        <ul className='pagination'></ul>
                                                    </div> */}
                                                    <div className='pages toptt'>
                                                    <div className=''>
                                                        <ul className="paggination">
                                                            <li className="">
                                                            {/* <a className="page-link" href="#" aria-label="Previous">
                                                                <span aria-hidden="true">&laquo;</span>
                                                            </a> */}
                                                            </li>
                                                            <li className="aa aactive">1</li>
                                                            <li className=" aa">2</li>
                                                            <li className=" aa">3</li>
                                                            <li className=" aa">4</li>
                                                            <li className="aa">5</li>
                                                            <li className=" aa">
                                                                <span aria-hidden="true">&gt;</span>
                                                            </li>
                                                            <li className="page-item aa">
                                                                <span aria-hidden="true">&raquo;</span>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                    {/* icons */}
                                                    <div className=''>
                                                        <ul className='iconstop'>
                                                            
                                                            <li className="iconn aaa">
                                                                <BsGrid color="palevioletred" margin="2px"/>
                                                            Grid
                                                            </li>
                                                            <li className="iconn aaa">
                                                                <BsList color="palevioletred"/> 
                                                            List
                                                            </li>
                                                            
                                                        </ul>
                                                        </div>
                                                        </div>

                                                    {/* grid and list */}
                                                    <div className=''></div>


                                                </div>
                                            </div>
                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>

            </div>
        </div>
      
    </div>
  )
}

export default TopBar

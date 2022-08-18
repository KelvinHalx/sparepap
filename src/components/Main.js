import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';

function Main() {
  return (
    <div className='container mt-2 mb-2'>
        <div className='row mt-2 mb-2'>
            <div className='col-md-1 mt-2 mb-2'></div>
            <div className='col-md-10 mt-2 mb-2'>
                <div className='container mt-2 mb-2 '>
                    <div className='row mt-2 mb-2'>
                        <div className='col-md-3 mt-2 mb-2'>
                            <div className=''>
                                <div className='card shadow-md'>
                                    <div className='card-body'>
                                        sidebar

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-9 mt-2 mb-2'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                    <div className='card shadow-lg'>
                                        <img src='https://picsum.photos/200/300' className='prod-img card-img-top img-fluid' 
                                        width={100} height={30} alt='...' />
                                    <div className='card-body'>
                                        Products

                                    </div>
                                </div>
                                    </div>
                                    <div className='col-md-4'>
                                    <div className='card shadow-lg'>
                                    <img src='https://picsum.photos/200/300' className='prod-img card-img-top img-fluid' 
                                        width={100} height={30} alt='...' />
                                    <div className='card-body'>
                                        <div>
                                            <p className='card-title'>Special title treatment</p>
                                            <p className='card-text'>Condition: Brand new</p>
                                            <p className='card-text'>Manufacturer: Bosch</p>
                                            <p className='card-text'>Merchant: Toyota</p>
                                            <h5>KSH 300</h5>
                                        </div>

                                    </div>
                                </div>
                                    </div>

                                    <div className='col-md-4'>
                                    <div className='card shadow-lg'>
                                        <div className='prod-img-wrapper'>
                                    <img src='https://picsum.photos/200/300' className='prod-img card-img-top img-fluid' alt='...' />
                                    </div>
                                    <div className='card-body'>
                                        Products

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
        {/* sidebar */}
        {/* Products */}
      
    </div>
  )
}

export default Main

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
                                        <div className='prod-img-wrapper'>
                                    <img src='https://picsum.photos/200/300' className='prod-img card-img-top img-fluid' alt='...' />
                                    </div>
                                    <div className='card-body'>
                                        <div className='text-wrapper'>
                                            <p className='card-text p-title'>Bosch Front Disc Brake Rotor For Mitsubishi ASX 2014-2015</p>
                                            <p className='card-text text-muted p-text'>Condition : Brand New</p>
                                            <p className='card-text text-muted p-text'>Merchant : Brand New</p>
                                            <p className='card-text text-muted p-text'>Manufacturer : Brand New</p>
                                            <p className='card-text p-title'>Ksh. 1159.00
                                                <span className='card-text text-muted p-span'>incl.VAT</span>
                                            </p>
                                        </div>
                                        <div className='btn-wrapper'>
                                            <button type='button' className='btn btn-secondary mt-2 mb-2 btn-block'>Add to Cart</button>
                                            <button type='button' className='btn btn-secondary mt-2 mb-2 btn-block'>Add to Favorites</button>
                                        </div>
                                        <div className=''>
                                        <p className='card-text f-text text-success'>In stock.
                                                <span className='card-text text-muted f-span'>Low stock</span>
                                            </p>
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

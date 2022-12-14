import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import prod from '../images/prod.png';
import xps from '../images/autoxpresslogo.png';
import sham from '../images/shamaslogo.png';
import promo from '../images/promo_image.png';


import { MdOutlineAddShoppingCart, MdFavoriteBorder } from "react-icons/md";

function Main() {
  return (
    <div className='container mt-2 mb-2'>
        <div className='row mt-2 mb-2'>
            <div className='col-md-1 mt-2 mb-2'></div>
            <div className='col-md-10 mt-2 mb-2'>
                <div className='container mt-2 mb-2 '>
                    <div className='row mt-2 mb-2'>
                        <div className='col-md-3 mt-2 mb-2'>
                                <div className='card shadow-lg mt-2 mb-2 search-card'>
                                    <div className='card-body'>
                                        <p className='card-text p-title searh-title'>Select vehicle to view compatible parts</p>
                                        <input className='search-inp' type="text" placeholder='Audi'/>
                                        <input className='mt-2 mb-2 search-inp' type="text" placeholder='A7'/>
                                        <input className='search-inp' type="text" placeholder='Year'/>
                                        <button type='button' className='btn bbbbtn mt-2 btn-block text-white'>Find compatible parts</button>
                                        

                                    </div>
                                </div>
                                <div className='card shadow-lg mt-2 mb-2'>
                                    <div className='card-body'>
                                        <p className='card-text p-title searh-title'>Merchants</p>


                                        <button type='button' className='btn search-btn btn-block'>Search merchants</button>
                                        <p className='card-text p-text search-p searh-title'>Featured
                                        <span className='search-span text-muted'>Recent</span>
                                        </p>
                                        <div className='radio-btns'>
                                        <div className='label-radio'>
                                        <img
                                            src={xps}
                                            width="20"
                                            height="20"
                                            alt="..."
                                            />

                                        <label className='label-txt' for="auto">AutoXpress</label>
                                        <input type="radio" id="auto" name="fav_language" value="AutoXpress"/>
                                        <br></br>
                                        </div>
                                        <div className='label-radio'>
                                        <img
                                            src={sham}
                                            width="20"
                                            height="20"
                                            alt="..."
                                            />
                                        <label className='label-txt' for="sham">Shamas</label>
                                        <input type="radio" id="sham" name="fav_language" value="Shamas"/>
                                        <br></br>
                                        </div>
                                        </div>
                                        <button type='button' className='btn search-btn mt-2 btn-block text-white'>Find compatible parts</button>
                                        

                                    </div>
                                </div>
                                <div className='card shadow-lg mt-2 mb-2'>
                                    <div className='card-body'>
                                        <p className='card-text p-title searh-title'>Price range</p>
                                        <div className='search-price-wrapper'>
                                        <input className='search-price' type="text" placeholder='Min'/>
                                        <input className='search-price' type="text" placeholder='Max'/>
                                        </div>
                                        <button type='button' className='btn search-btn mt-2 btn-block text-white'>Find compatible parts</button>
                                        

                                    </div>
                                </div>
                                <div className='card shadow-lg mt-2 mb-2'>
                                    <div className='card-body'>
                                        <p className='card-text p-title searh-title'>Part types</p>
                                        <div className='radio-btns'>
                                        <div className='label-radio'>
                                        <label className='label-txt' for="auto">Brand new</label>
                                        <input type="checkbox" id="new" name="fav_language" value="new"/>
                                        <br></br>
                                        </div>
                                        <div className='label-radio'>
                                        <label className='label-txt' for="sham">Factory Refurbished</label>
                                        <input type="checkbox" id="refurbished" name="fav_language" value="refurbished"/>
                                        <br></br>
                                        </div>
                                        <div className='label-radio'>
                                        <label className='label-txt' for="sham">Used/second hand</label>
                                        <input type="checkbox" id="refurbished" name="fav_language" value="refurbished"/>
                                        <br></br>
                                        </div>
                                        </div>
                                        <button type='button' className='btn bbbbtn mt-2 btn-block text-white'>Find compatible parts</button>
                                        

                                    </div>
                                </div>

                        </div>
                        <div className='col-md-9 mt-2 mb-2'>
                            <div className='container'>
                                <div className='row'>
                                <div className='col-md-4 mt-2 mb-2'>
                                    <div className='card shadow-lg'>
                                        <div className='prod-img-wrapper'>
                                    <img src={prod} className='prod-img card-img-top img-fluid' alt='...' />
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
                                            <button type='button' className='btn bbbtn mt-2 mb-2 btn-block'>Add to Cart</button>
                                            <button type='button' className='btn bbtn mt-2 mb-2 btn-block'>Add to Favorites</button>
                                        </div>
                                        <div className=''>
                                        <p className='card-text f-text text-success'>In stock.
                                                <span className='card-text text-muted f-span'>Low stock</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                    </div>
                                    <div className='col-md-4 mt-2 mb-2'>
                                    <div className='card shadow-lg'>
                                        <div className='prod-img-wrapper'>
                                    <img src={prod} className='prod-img card-img-top img-fluid' alt='...' />
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
                                            <button type='button' className='btn bbbtn mt-2 mb-2 btn-block'>Add to Cart</button>
                                            <button type='button' className='btn bbtn mt-2 mb-2 btn-block'>Add to Favorites</button>
                                        </div>
                                        <div className=''>
                                        <p className='card-text f-text text-success'>In stock.
                                                <span className='card-text text-muted f-span'>Low stock</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                    </div>
                                    <div className='col-md-4 mt-2 mb-2'>
                                    <div className='card shadow-lg'>
                                    <img src={promo} className=' promo-img card-img-top img-fluid' alt='...' />
                                </div>
                                    </div>
                                    <div className='col-md-4 mt-2 mb-2'>
                                    <div className='card shadow-lg'>
                                    <img src={prod} className='prod-img card-img-top img-fluid' alt='...' />
                                    
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
                                            <button type='button' className='btn bbbtn mt-2 mb-2 btn-block'>Add to Cart</button>
                                            <button type='button' className='btn bbtn mt-2 mb-2 btn-block'>Add to Favorites</button>
                                        </div>
                                        <div className=''>
                                        <p className='card-text f-text text-success'>In stock.
                                                <span className='card-text text-muted f-span'>Low stock</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                    </div>
                                    <div className='col-md-4 mt-2 mb-2'>
                                    <div className='card shadow-lg'>
                                        <div className='prod-img-wrapper'>
                                    <img src={prod} className='prod-img card-img-top img-fluid' alt='...' />
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
                                            <button type='button' className='btn bbbtn mt-2 mb-2 btn-block'>Add to Cart</button>
                                            <button type='button' className='btn bbtn mt-2 mb-2 btn-block'>Add to Favorites</button>
                                        </div>
                                        <div className=''>
                                        <p className='card-text f-text text-success'>In stock.
                                                <span className='card-text text-muted f-span'>Low stock</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                    </div>
                                    <div className='col-md-4 mt-2 mb-2'>
                                    <div className='card shadow-lg'>
                                        <div className='prod-img-wrapper'>
                                    <img src={prod} className='prod-img card-img-top img-fluid' alt='...' />
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
                                            <button type='button' className='btn bbbtn mt-2 mb-2 btn-block'>Add to Cart</button>
                                            <button type='button' className='btn bbtn mt-2 mb-2 btn-block'>Add to Favorites</button>
                                        </div>
                                        <div className=''>
                                        <p className='card-text f-text text-success'>In stock.
                                                <span className='card-text text-muted f-span'>Low stock</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                    </div>
                                    <div className='col-md-4 mt-2 mb-2'>
                                    <div className='card shadow-lg'>
                                        <div className='prod-img-wrapper'>
                                    <img src={prod} className='prod-img card-img-top img-fluid' alt='...' />
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
                                            <button type='button' className='btn bbbtn mt-2 mb-2 btn-block'>Add to Cart</button>
                                            <button type='button' className='btn bbtn mt-2 mb-2 btn-block'>Add to Favorites</button>
                                        </div>
                                        <div className=''>
                                        <p className='card-text f-text text-success'>In stock.
                                                <span className='card-text text-muted f-span'>Low stock</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                    </div>
                                    <div className='col-md-4 mt-2 mb-2'>
                                    <div className='card shadow-lg'>
                                        <div className='prod-img-wrapper'>
                                    <img src={prod} className='prod-img card-img-top img-fluid' alt='...' />
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
                                            <button type='button' className='btn bbbtn mt-2 mb-2 btn-block'>Add to Cart</button>
                                            <button type='button' className='btn bbtn mt-2 mb-2 btn-block'>Add to Favorites</button>
                                        </div>
                                        <div className=''>
                                        <p className='card-text f-text text-success'>In stock.
                                                <span className='card-text text-muted f-span'>Low stock</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                    </div>
                                    <div className='col-md-4 mt-2 mb-2'>
                                    <div className='card shadow-lg'>
                                        <div className='prod-img-wrapper'>
                                    <img src={prod} className='prod-img card-img-top img-fluid' alt='...' />
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
                                            <button type='button' className='btn bbbtn mt-2 mb-2 btn-block'>Add to Cart</button>
                                            <button type='button' className='btn bbtn mt-2 mb-2 btn-block'>Add to Favorites</button>
                                        </div>
                                        <div className=''>
                                        <p className='card-text f-text text-success'>In stock.
                                                <span className='card-text text-muted f-span'>Low stock</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                    </div>
                                    <p className='pp-title'>People also searched</p>
                                    <div className='col-md-3 mt-2 mb-2'> 
                                    <div className='card shadow-lg'>
                                        <div className='sprod-img-wrapper'>
                                    <img src={prod} className='sprod-img card-img-top img-fluid' alt='...' />
                                    </div>
                                    <div className=''>
                                        <div className='stext-wrapper'>
                                            <p className='card-text text-sm sp-title'>Bosch Front Disc Brake Rotor For Mitsubishi ASX 2014-2015</p>
                                            <p className='card-text text-sm text-muted sp-text'>Bosch</p>
                                            <p className='card-text sp-title mb-2'>Ksh. 1159.00
                                            </p>
  
                                        </div>
  
                                        <div className='sbtn-wrapper'>
                                            <button type='button' className='btn sbbbtn btn-sm'>
                                            <MdOutlineAddShoppingCart />

                                            </button>
                                            <button type='button' className='btn sbbtn btn-sm'>
                                            <MdFavoriteBorder />
                                            </button>
                                        </div>
  
                                    </div>
                                </div>
                                    </div>
                                    <div className='col-md-3 mt-2 mb-2'> 
                                    <div className='card shadow-lg'>
                                        <div className='sprod-img-wrapper'>
                                    <img src={prod} className='sprod-img card-img-top img-fluid' alt='...' />
                                    </div>
                                    <div className=''>
                                        <div className='stext-wrapper'>
                                            <p className='card-text text-sm sp-title'>Bosch Front Disc Brake Rotor For Mitsubishi ASX 2014-2015</p>
                                            <p className='card-text text-sm text-muted sp-text'>Bosch</p>
                                        <p className='card-text sp-title mb-2'>Ksh. 1159.00
                                            </p>
                                        </div>
  
                                        <div className='sbtn-wrapper'>
                                            <button type='button' className='btn sbbbtn btn-sm'>
                                            <MdOutlineAddShoppingCart />

                                            </button>
                                            <button type='button' className='btn sbbtn btn-sm'>
                                                <MdFavoriteBorder />
                                            </button>
                                        </div>
  
                                    </div>
                                </div>
                                    </div>
                                    <div className='col-md-3 mt-2 mb-2'> 
                                    <div className='card shadow-lg'>
                                        <div className='sprod-img-wrapper'>
                                    <img src={prod} className='sprod-img card-img-top img-fluid' alt='...' />
                                    </div>
                                    <div className=''>
                                        <div className='stext-wrapper'>
                                            <p className='card-text text-sm sp-title'>Bosch Front Disc Brake Rotor For Mitsubishi ASX 2014-2015</p>
                                            <p className='card-text text-sm text-muted sp-text'>Bosch</p>
                                            <p className='card-text sp-title mb-2'>Ksh. 1159.00
                                            </p>
  
                                        </div>
                                        <div className='sbtn-wrapper'>
                                            <button type='button' className='btn sbbbtn btn-sm'>
                                            <MdOutlineAddShoppingCart />

                                            </button>
                                            <button type='button' className='btn sbbtn btn-sm'>
                                            <MdFavoriteBorder />
                                            </button>
                                        </div>
  
                                    </div>
                                </div>
                                    </div>
                                    <div className='col-md-3 mt-2 mb-2'> 
                                    <div className='card shadow-lg'>
                                        <div className='sprod-img-wrapper'>
                                    <img src={prod} className='sprod-img card-img-top img-fluid' alt='...' />
                                    </div>
                                    <div className=''>
                                        <div className='stext-wrapper'>
                                            <p className='card-text text-sm sp-title'>Bosch Front Disc Brake Rotor For Mitsubishi ASX 2014-2015</p>
                                            <p className='card-text text-sm text-muted sp-text'>Bosch</p>
                                            <p className='card-text sp-title mb-2'>Ksh. 1159.00
                                            </p>
  
                                        </div>
                                        <div className='sbtn-wrapper'>
                                            <button type='button' className='btn sbbbtn btn-sm'>
                                                <MdOutlineAddShoppingCart />
                                            </button>
                                            <button type='button' className='btn sbbtn btn-sm'>
                                            <MdFavoriteBorder />
                                            </button>
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
        {/* sidebar */}
        {/* Products */}
      
    </div>
  )
}

export default Main

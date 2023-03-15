import React from 'react';
import logo from "../images/logo.jpeg";

const about = () => {
  return (
    <>
      <div className='container emp-profile'>
        <form method=''>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='profile-img'>
                    <img src={logo} alt='logo'/>

                    </div>
                    {/* <img src={logo} alt='logo'/> */}
                </div>

                <div className='col-md-6'>
                    <div className='profile-head'>
                        <h5> SR TUTORIALS</h5>
                        <h6>HOME TUTORIALS</h6>
                        <p className='profile-rating mt-3 mb-5 '> RANKINGS: <span> 1/10 </span></p>
                    
                        <ul className="nav nav-tabs" role='tablist'>
                          <li className="nav-item">
                            <a className="nav-link active" id ='home-tab' data-toggle='tab' href="#home" role='tab'>About</a>
                          </li>

                          <li className="nav-item">
                          <a className="nav-link active" id ='profile-tab' data-toggle='tab' href="#profile" role='tab'>Timeline</a>
                          </li>
                          
                        </ul>


                    </div>
                </div>

                <div className='col-md-2'>
                    <input type='submit' className='profile-edit-btn' name value='Edit Profile'/>
                </div>


            </div>

            <div className='row'>
                {/* {/left side url/} */}
                <div className='col_md_4'>
                 <div className='profile-work'>
                   <p> WORK LINK</p>
                   {/* <a href='https;//www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA' target='_thapa'>YouTube</a> */}
                 </div>
                </div>
                {/* right side data toggle */}

                <div className='col-ms-8 pl-5 about-info'>
                    <div className='tab-content profile-tab ' id='myTabContent'>
                    <div className='tab-pane fade show active ' id='home' role='tabpanel' aria-labelledby='home-tab' >
                        
                        <div className='row'>
                            {/* <div className='col-md-6'>
                                <label> User ID</label>
                            </div> */}

                            <div className='col-md-6'>
                                <p> 12345468672212 </p>
                            </div>
                         </div>


                         <div className='row mt-3'>
                            
{/*                             
                            <div className='col-md-6'>
                                <label>NAME</label>
                            </div> */}

                            <div className='col-md-6'>
                                <p> SR TUTORIALS </p>
                            </div>
                         </div>




                    </div>

                    </div>

                </div>
            </div>



        </form>
      </div>
    </>
  );
}

export default about;
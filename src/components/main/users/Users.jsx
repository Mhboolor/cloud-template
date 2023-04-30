import React from 'react';
import './Users.css';

function Users() {
  return (
    <div className='users'>
        <div className='users-container container'>    
            <div>
                <h2 className='title-md user-title'>
                    We Always Try To Understand Users Expectation
                </h2>
            </div>
            <div className='user-info-container'>
                <div>
                    <p className='title-lg user-number'>12,000</p>
                    <span className='text-md user-download'>Download</span>
                </div>
                <div>
                    <p className='title-lg user-number'>100</p>
                    <span className='text-md user-download'>Awards Won</span>
                </div>
                <div>
                    <p className='title-lg user-number'>4,050</p>
                    <span className='text-md user-download'>Contributors</span>
                </div>
                <div>
                    <p className='title-lg user-number'>9,000</p>
                    <span className='text-md user-download'>Satisfied Customers</span>
                </div>
            </div>
            <div className='user-card'>
                <div className='user-card-container'>
                    <h2 className='title-md user-card-title'>Have any question about us?</h2>
                    <p className='text-md user-card-text'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                </div>
                <button className='btn-pink-lg user-card-btn'>Get in tuch</button>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Users
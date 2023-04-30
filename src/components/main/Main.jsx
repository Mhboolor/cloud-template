import React from 'react';
import './Main.css';
import Company from './companies/Company';
import Services from './services/Services';
import Software from './software/Software';
import Users from './users/Users';
import Pricing from './pricing/Pricing';
import Blog from './blog/Blog';
import Questions from './questions/Questions';

function Main() {
  return (
    <main className='main'>
        <Company/>
        <Services/>
        <Software/>
        <Users/>
        <Questions/>
        <Pricing/>
        <Blog/>
    </main>
  )
}

export default Main
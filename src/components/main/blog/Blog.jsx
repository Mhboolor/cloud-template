import React from 'react'
import './Blog.css'
import BlogBox from './box/BlogBox'

function Blog() {
  return (
    <div className='blog'>
        <div className='blog-container container'>
            <div className='blog-title-container'>
                <h2 className='title-lg blog-title'>Recent Blog</h2>
                <p className='text-md blog-text'>Far far away, behind the word mountains, far from the countries Vokalia and</p>
                <p className='text-md blog-text'> Consonantia, there live the blind texts. Separated they live in</p>
            </div>
            <div className='blog-container-box'>
                <BlogBox/>
                <BlogBox/>
                <BlogBox/>
            </div>
        </div>
    </div>
  )
}

export default Blog
import React, { useState } from 'react'
import './Questions.css'

function Questions() {

let data = [
    {
        title : 'How To Make An Account ?',
        text1 : 'Far far away, behind the word mountains',
        text2 : 'Consonantia, there live the blind texts',
        text3 : 'When she reached the first hills of the Italic Mountains',
        text4 : 'Bookmarksgrove, the headline of Alphabet Village',
        text5 : 'Separated they live in Bookmarksgrove right',
    },
    {
        title : 'How to manage your Dashboard ?',
        text1 : 'Far far away, behind the word mountains',
        text2 : 'Consonantia, there live the blind texts',
        text3 : 'When she reached the first hills of the Italic Mountains',
        text4 : 'Bookmarksgrove, the headline of Alphabet Village',
        text5 : 'Separated they live in Bookmarksgrove right',
    },
    {
        title : 'How to grow your investments funds ?',
        text1 : 'Far far away, behind the word mountains',
        text2 : 'Consonantia, there live the blind texts',
        text3 : 'When she reached the first hills of the Italic Mountains',
        text4 : 'Bookmarksgrove, the headline of Alphabet Village',
        text5 : 'Separated they live in Bookmarksgrove right',
    },
    {
        title : 'What are those requirements for businesses ?',
        text1 : 'Far far away, behind the word mountains',
        text2 : 'Consonantia, there live the blind texts',
        text3 : 'When she reached the first hills of the Italic Mountains',
        text4 : 'Bookmarksgrove, the headline of Alphabet Village',
        text5 : 'Separated they live in Bookmarksgrove right',
    },
]

let [selected , setSelected] = useState(null);


let toggle = (index) => {
    if(selected == index){
        return(null)
    }
    setSelected(index)
}

  return (
    <div className='questions'>
        <div className='questions-container container'>
            <div className='questions-img-container'>
                <img src="./assets/images/about-2.jpg.webp" alt="Questions-Image" className='questions-img'/>
            </div>
            <div className='questions-title-container'>
                <h2 className='title-md questions-title'>Frequently Asks Questions</h2>
                <p className='text-md questions-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                
                    {
                        data.map((item , index) => {
                            return <div className='accordion text-lg' onClick={() => toggle(index)}>
                                <div className='accordion-title-container'>
                                    {item.title}
                                    <i class={`fa-solid ${selected == index ? 'fa-angle-up' : 'fa-angle-down'}`} ></i>
                                </div>
                                <div className={`accordion-content ${selected == index ? 'accordion-active' : ''}`}>
                                    <ol className='accordion-list text-md'>
                                        <li className='accordion-item text-md'>{item.text1}</li>
                                        <li className='accordion-item text-md'>{item.text2}</li>
                                        <li className='accordion-item text-md'>{item.text3}</li>
                                        <li className='accordion-item text-md'>{item.text4}</li>
                                        <li className='accordion-item text-md'>{item.text5}</li>
                                    </ol>
                                </div>
                            </div>
                        })
                    }
                
            </div>
        </div>
    </div>
  )
}

export default Questions
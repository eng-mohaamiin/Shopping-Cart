import React, { useRef } from 'react'
import nextIcon from "../assets/next-icon.png"
import backIcon from "../assets/back-icon.png"
import user_1 from "../assets/user-1.png"
import user_2 from "../assets/user-2.png"
import user_3 from "../assets/user-3.png"
import user_4 from "../assets/user-4.png"

const Testimonials = () => {
    let slider = useRef()
    let tx = 0
    let slideForwad  = ()=>{
        if(tx > -50){
            // 25 waxa weeye in hal mar lasoo bandhigo 2 images 
            tx-=25
            console.log(tx)
        }
        slider.current.style.transform = `translate(${tx}%)`       
    }
    // slideBacward
    let slideBacward = ()=>{
        if(tx < 0){
            tx+=25
        }
        slider.current.style.transform =  `translate(${tx}%)`
    }
    



  return (
   <div className='max-w-6xl mx-auto mt-8 p-16'>
    <div class="text-center ">
        <h2 className='text-[18px]  font-semibold text-pink-600'>What Student Says</h2>
        <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
    </div>
     <div className='testimonials' id='testimonials'>
      <img src={nextIcon} alt="" className='next-btn bg-pink-600' onClick={slideForwad}/>
      <img src={backIcon} alt="" className='back-btn  bg-pink-600' onClick={slideBacward} />
      <div class="slider">
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div class="user-info">
                        <img className="border-4 border-pink-600" src={user_1} alt="" />

                        <div>
                            <h3  className='text-pink-600'>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div class="user-info">
                        <img className='border-4 border-pink-600' src={user_2} alt=""/>
                        <div>
                            <h3 className='text-pink-600'>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div class="user-info">
                        <img className='border-4 border-pink-600' src={user_3} alt=""/>
                        <div>
                            <h3 className='text-pink-600'>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div class="user-info">
                        <img className='border-4 border-pink-600' src={user_4} alt=""/>
                        <div>
                            <h className='text-pink-600'>William Jackson</h> <br/>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
   </div>
  )
}

export default Testimonials

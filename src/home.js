import React from 'react';


function Home() {
    return(
        <div>
            <div className='flex-container'>

<div className='item1' >
  <h1  data-aos ='zoom-out'>
    Hi There,<br />
    I am Ashish
  </h1>
  <h4 >web developer</h4>
  <div className='btns'>
    <h5 className='btn1'><a href="#projects" style={{textDecoration:'none',color:'inherit'}}>VIEW MY WORK</a></h5>
    <h5 className='btn2'><a href='https://drive.google.com/file/d/1GzZQiiJSH2etbmhxqYBhXsBgMXt67PAh/view?usp=sharing'  style={{textDecoration:'none',color:'inherit'}}>DOWNLOAD MY CV</a></h5>
  </div>

</div>
<div className='item2' >
  {/* <img src="pp.jpg" alt="my_pic" /> */}
</div>

</div>


        </div>
    )
}

export default Home;
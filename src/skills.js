import React from 'react';


function Skills() {
    return(
        <div>
            <div className='Skills ' style={{ backgroundColor: '#2A3D66', color: 'white' }}>

<h1>Skills</h1><br /><br />

<div   className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
  HTML:  <div className=" progress skill-bar">

  </div>


  <div    className="progress-bar first " role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" >
    80%
  </div> </div>





<br /><br />
<div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
  CSS:       <div className=" progress"> </div>
  <div className="progress-bar second " role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" >
    80%

  </div>
</div>

<br /><br />
<div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
  JAVASCRIPT:   <div className=" progress"></div>
  <div className="progress-bar third " role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
    70%

  </div>
</div>



<br /><br />
<div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
  BOOTSTRAP:           <div className=" progress"> </div>
  <div className="progress-bar fourth" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" >
    90%

  </div>

</div>

<br /><br />
<div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
  PYTHON:            <div className=" progress"></div>
  <div className="progress-bar fifth " role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" >
    80%

  </div>

</div>

<br /><br />
<div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
  PHP:           <div className=" progress"></div>
  <div className="progress-bar sixth " role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
    80%


  </div>

</div>





</div>

        </div>
    )
}

export default Skills;
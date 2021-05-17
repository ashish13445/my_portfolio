import React from 'react';
import { Card } from 'react-bootstrap';



function Projects() {
    return(
        <div>
            <div className='projects' id='projects' >
        <h1 >Projects</h1>
        <div className='container-fluid projects1' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
         
         <a style={{textDecoration: 'none',color: 'inherit'}} href="https://cyberworldorganization.netlify.app/" target='_blank'  rel="noreferrer">

         <Card  data-aos ='fade-right'style={{height:'35rem', width: '30rem', margin: '40px' }}>
            <Card.Img variant="top" src="https://www.designbombs.com/wp-content/uploads/2017/02/make-a-website-1280x720.jpg"
            />
            <Card.Body>
              <Card.Title>CyberWorld Organization</Card.Title>
              <Card.Text>
                This Is an Non-Profit Organisation, Started by Sumit Oneness & Piyush Kaushik.

              </Card.Text>

            </Card.Body>
          </Card>



         </a>
          

          <a  data-aos ='fade-left'style={{textDecoration: 'none',color: 'inherit'}} href=" https://www.github.com/ashish13445/banking_system/"  target='_blank'  rel="noreferrer">

          <Card style={{height:'35rem', width: '30rem', margin: '40px' }}>
            <Card.Img variant="top" src="https://www.totaltrainingsolutions.com/wp-content/uploads/2015/10/bank-processing-eLearning_Fotolia_88416727_Subscription_Monthly_M.jpg" />
            <Card.Body>
              <Card.Title>Banking System</Card.Title>
              <Card.Text>
                Front-end : HTML, CSS, Bootstrap & Javascript Back-end : PHP Database : MySQL

                Database contains two Tables- Users Table & Transaction
              </Card.Text>

            </Card.Body>
          </Card>


          </a>

         

          <a  data-aos ='fade-right' style={{textDecoration: 'none',color: 'inherit'}} href="https://tasksadd.netlify.app/"  target='_blank'  rel="noreferrer">
          <Card style={{height:'35rem', width: '30rem', margin: '40px' }}>
            <Card.Img variant="top" src="https://media.wired.com/photos/5f46e666f7889e749ac05577/master/w_2560%2Cc_limit/security-firefox-andriod-app.jpgs" />
            <Card.Body>
              <Card.Title>To-DO app</Card.Title>
              <Card.Text>
                You can add daily routine and utilize your time through this app.

              </Card.Text>

            </Card.Body>
          </Card>
          </a>


          <a  data-aos ='fade-left' style={{textDecoration: 'none',color: 'inherit'}} href="https://ashish13445.github.io/portfolio/js-documentation.html"  target='_blank'  rel="noreferrer">
          <Card style={{height:'35rem', width: '30rem', margin: '40px' }}>
            <Card.Img variant="top" src="https://d35fo82fjcw0y8.cloudfront.net/2020/02/05081844/technical-documentation-post-header1.jpg" />
            <Card.Body>
              <Card.Title>JS Documentation</Card.Title>
              <Card.Text>
              Documentation Page  designed while learning web-page responsiveness.


              </Card.Text>

            </Card.Body>
          </Card>
          </a>


          <a  data-aos ='fade-right' style={{textDecoration: 'none',color: 'inherit'}} href=" https://ashish13445.github.io/portfolio/tribute.html"  target='_blank'  rel="noreferrer">
          <Card style={{height:'35rem', width: '30rem', margin: '40px' }}>
            <Card.Img variant="top" src="https://devpractical.com/public/2020/html-css-project-tribute-page.png" />
            <Card.Body>
              <Card.Title>Tribute Page</Card.Title>
              <Card.Text>
                Tribute page designed while learning web-page responsiveness.

              </Card.Text>

            </Card.Body>
          </Card>
          </a>

          <a  data-aos ='fade-left' style={{textDecoration: 'none',color: 'inherit'}} href="https://ashish13445.github.io/portfolio/survey-form"  target='_blank'  rel="noreferrer">
          <Card style={{height:'35rem', width: '30rem', margin: '40px' }}>
            <Card.Img variant="top" src="https://aws1.discourse-cdn.com/freecodecamp/original/3X/a/e/ae785e69012d59eff4916f7576637c212611159f.jpg" />
            <Card.Body>
              <Card.Title>Survey Form</Card.Title>
              <Card.Text>
              Survey Form designed while learning web-page responsiveness.


              </Card.Text>

            </Card.Body>
          </Card>
            </a>

           





        </div>

      </div>


        </div>
    )
}

export default Projects;
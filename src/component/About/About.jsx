import React,{useState,useEffect, memo} from 'react'

import './About.css'
 function About() {
  const [count, setCount] = useState(0);
  const [qualifiedExperts,setQualifiedExperts]= useState(0)
  useEffect(() => {
   
    const satisfiedClients = () => {
      if (count < 270) {
        setCount(prevCount => prevCount + 1);
      }
    };
const qualifiedExpert=()=>{
  if(qualifiedExperts<18){
    setQualifiedExperts(prevCount => prevCount + 1);

  }
}
    
    const intervalId = setInterval(satisfiedClients, 5);
  const intervalId2 = setInterval(qualifiedExpert, 50);
  
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, [count,qualifiedExperts]);

  return (
    
   <section className="py-3 py-md-5 py-xl-8">
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 className="mb-4 primary-size text-center">About Us</h2>
        <p className=" mb-5 text-center  fs-3">We believe in the power of teamwork and collaboration. Our diverse experts work tirelessly to deliver innovative solutions tailored to our clients' needs.</p>
        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row gy-4 gy-lg-0 d-flex flex-wrap align-items-lg-center">
      <div className="col-lg-6">
        <img className="img-fluid rounded border w-100 border-dark" src={"https://res.cloudinary.com/drzc94rvk/image/upload/v1734947443/About_image_h3fswk.jpg"} alt="About Us" />
      </div>


      <div className="col-lg-6 ">
        <div className="row justify-content-lg-end">
          <div className="col-12 col-lg-11">
            <div className="about-wrapper">
              <p className=" fs-4 mb-4 mb-md-5">As a socially responsible entity, we are deeply committed to positively impacting the communities we serve and the world at large. Through various initiatives and partnerships, we actively contribute to environmental sustainability, social welfare, and educational advancement.</p>
              <div className="row gy-4
              d-flex flex-wrap mb-4 mb-md-5">
                <div className=" col-lg-6">
                  <div className="card border border-dark">
                    <div className="card-body p-4">
                      <h3 className="display-5 fw-bold text-primary text-center mb-2">{`${qualifiedExperts}+`}</h3>
                      <p className="fw-bold fs-5 text-center m-0">Qualified Experts</p>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-6">
                  <div className="card border border-dark">
                    <div className="card-body p-4">
                      <h3 className="display-5 fw-bold text-primary text-center mb-2">{` ${count}+`}</h3>
                      <p className="fw-bold fs-5 text-center m-0">Satisfied Clients</p>
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
</section>
  );
}
export default memo(About)
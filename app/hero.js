 
import Image from 'next/image'

import hero1 from "./Products/hero1.png"
import hero2 from "./Products/hero2.jpg"
import hero3 from "./Products/hero3.jpg"

import hero4 from "./Products/hero4.png"
import hero5 from "./Products/hero5.png"
import hero6 from "./Products/hero6.png"
import hero7 from "./Products/hero7.png"

 
 
function hero() {
    return (  
        <>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
 
    <Image src={hero1} className="d-block w-100" style={{height:"500px"}} alt="..."/>
    </div>
    <div className="carousel-item">
       <Image  src= {hero2} className="d-block w-100" style={{height:"500px"}} alt="..."/>
    </div>
    <div className="carousel-item">
    <Image  src={hero3} className="d-block w-100" style={{height:"500px"}} alt="..."/>
    </div>

    <div className="carousel-item">
    <Image  src={hero4} className="d-block w-100" style={{height:"500px"}} alt="..."/>
    </div>
    <div className="carousel-item">
    <Image  src={hero5} className="d-block w-100" style={{height:"500px"}} alt="..."/>
    </div>
 
    <div className="carousel-item">
    <Image  src={hero6} className="d-block w-100" style={{height:"500px"}} alt="..."/>
    </div>

    <div className="carousel-item">
    <Image  src={hero7} className="d-block w-100" style={{height:"500px"}} alt="..."/>
    </div>
 
 
 
 
 
       
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  
      
        </>
    );
}

export default hero;
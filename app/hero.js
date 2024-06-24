 
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
   <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image src={hero1} class="d-block w-100" alt="..."style={{height:"500px"}}/>
    </div>
    <div class="carousel-item">
      <Image src={hero2} class="d-block w-100" alt="..."style={{height:"500px"}}/>
    </div>
    <div class="carousel-item">
      <Image src={hero3} class="d-block w-100" alt="..."style={{height:"500px"}}/>
    </div>

    <div class="carousel-item">
      <Image src={hero4} class="d-block w-100" alt="..."style={{height:"500px"}}/>
    </div>

    <div class="carousel-item">
      <Image src={hero5} class="d-block w-100" alt="..."style={{height:"500px"}}/>
    </div>

    <div class="carousel-item">
      <Image src={hero6} class="d-block w-100" alt="..."style={{height:"500px"}}/>
    </div>

    <div class="carousel-item">
      <Image src={hero7} class="d-block w-100" alt="..."style={{height:"500px"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  
      
        </>
    );
}

export default hero;
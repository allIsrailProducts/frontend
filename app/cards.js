import Image from 'next/image'


import data from './data'
function Cards(props) {
    return (
      <>
        <div className="container mt-4 pl-10">
          <div className="row">
            {data.map((card) => (
                  <div class="card" style={{width:"18rem"}} >
                  <Image  src={card.img} class="card-img-top" alt="..." style={{marginTop:"6px",height:"200px"}} />
                  {/* <Image src={imgg} alt="this is actual image" /> */}
                  <div class="card-body">
                    
                   
                  </div>
                </div>
       
            ))}
             </div>
                </div>
            
          


        
      </>
    );
  }
  
  export default Cards;
  
import Image from 'next/image'


import data from './data'
function Cards(props) {
    return (
      <>
        <div className="container mt-4 pl-10">
          <div className="row">
            {data.map((card, index) => (
                  <div className="card" key={index} style={{width:"18rem"}} >
                  <Image  src={card.img} className="card-img-top" alt="..." style={{marginTop:"6px",height:"200px"}} />
                  {/* <Image src={imgg} alt="this is actual image" /> */}
                  <div className="card-body">
                    <h3><div className='card-title'>{card.product}</div></h3>
                    
                   
                  </div>
                </div>
       
            ))}
             </div>
                </div>
            
          


        
      </>
    );
  }
  
  export default Cards;
  
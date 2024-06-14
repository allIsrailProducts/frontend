import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import data from '../data'
import Image from 'next/image'
function Searchbar() {
    const [search , setsearch]=useState('')
  return (
    <>
      {/* <div className="herobar">
        <Form className="d-flex ">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            id="searchbar"
            aria-label="Search"
            onChange={(e) => {
                
                setsearch(e.target.value)
              console.log(e.target.value);
            }}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div> */}
 <form className="container mt-6 mb-3 d-flex" role="search"    onChange={(e) => {
                
                setsearch(e.target.value)
              console.log(e.target.value);
            }}>
        <input className="form-control me-2" type="search" placeholder="Search for product here" aria-label="Search"/>
        {/* <button ="btn btn-outline-success" type="submit">Search</button> */}
      </form>

      {/* cards goes here */}
      <div className="container" id="container">
          <div className="row">
            {data.filter((item)=>{
                return search.toLowerCase()===''?item:
                item.product.toLowerCase().includes(search);
            }).map((card,index) => (
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

export default Searchbar;
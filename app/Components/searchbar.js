import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import data from '../data';
import Image from 'next/image';

function Searchbar() {
    const [search, setSearch] = useState('');

    return (
        <>
            <form className="d-flex justify-content-center mt-6 mb-3 ml-4" role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search for product here"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        console.log(e.target.value);
                    }}
                />
                {/* <Button variant="outline-success" type="submit">Search</Button> */}
            </form>

            <div className="container" id="container">
                <div className="row">
                    {data.filter((item) => {
                        return search.toLowerCase() === '' ? item : item.product.toLowerCase().includes(search);
                    }).map((card, index) => (
                        <div className="col-md-3 col-sm-6 col-12" key={index}>
                            <div className="card" style={{ width: "18rem" }}>
                                <Image src={card.img} className="card-img-top" alt="..." style={{ marginTop: "6px", height: "200px" }} />
                                <div className="card-body">
                                    <h3><div className='card-title'>{card.product}</div></h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Searchbar;
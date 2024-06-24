import { useState } from "react";
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
            </form>
            <div className="flex flex-wrap justify-center items-center">
                {data.filter((item) => {
                    return search.toLowerCase() === '' ? item : item.product.includes(search);
                }).map((card, index) => (
                    <div key={index} className="card bg-white rounded-lg shadow-md w-80 h-80 mt-4">
                        <Image
                            src={card.img}
                            className="w-full h-60 object-fill rounded-t-lg sm:mx-auto sm:h-64 "
                            alt={card.product}
                        />
                        <div className="p-4">
                            <h5 className="text-gray-900 font-bold text-2xl">{card.product}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Searchbar;
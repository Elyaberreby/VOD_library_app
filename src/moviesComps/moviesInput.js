import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const MoviesInput = (props) => {
    let inputRef = useRef();
    let sortRef = useRef();
    let navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("")
    const [searchType, setSearchType] = useState("Title")

    return (
        <div className="container-fluid bg-dark text-white p-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Cinema</h2>
                    </div>
                    <div className="co-lg-8 d-flex align-items-center justify-content-end">
                        {searchType === "Title" ? <input  placeholder="Search movie..."
                            type="search" onChange={(e) => setSearchInput(e.target.value)} className="form-control w-25"
                             /> : <select defaultValue="" onChange={(e) => setSearchInput(e.target.value)} className="form-select w-25">
                             <option value="">Select a year</option>
                             <option value="2020">2020</option>
                             <option value="2021">2021</option>
                             <option value="2004">2004</option>
                             <option value="2000">2000</option>
                             <option value="1995">1995</option>
                             <option value="1989">1989</option>
                         </select>}
                        <button onClick={() => 
                        document.location.href = (searchType === "Title" ? `/search/${searchInput}` : `/year/${searchInput}`)
                        } className="btn btn-dark">Search</button>
                        <div className="mx-2">sort: </div>
                        <select onChange={(e) => setSearchType(e.target.value)} ref={sortRef} className="form-select w-25">
                            <option value="Title">Name</option>
                            <option value="Year">Year</option>
                        </select>
                    </div>
                </div>
            </div>
        </div >
    )
}

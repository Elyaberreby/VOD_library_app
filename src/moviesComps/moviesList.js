import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const MoviesList = (props) => {

    const {year, searchQ} = useParams()
    const [filteredMovies, setFilteredMovies] = useState(props.movies_ar)

    if(searchQ) setFilteredMovies(filteredMovies.filter(mov => mov.title.toLowerCase().includes(searchQ.toLowerCase()) ))
    if(year) setFilteredMovies(filteredMovies.filter(mov => parseInt(mov.Year) == parseInt(year)))

    return ( 
        <div className="container">
            <h2>Movies:</h2>
            {!props.loading ?
            <div className="row">
            
                {filteredMovies.map(item => {
                    return (
                        <div key={item.imdbID} className="col-lg-6 border p-3">
                            <div className="p-2 shadow overflow-hidden">
                                <img src={item.Poster} className="float-start me-2" height="140" />
                                <h2>{item.Title}</h2>
                                <div>Year: {item.Year}</div>
                                <Link className="btn btn-dark" to={"/info/" + item.imdbID }>More info</Link>
                            </div>
                        </div>
                    )
                })}
            </div> :<h2>Loading...</h2>}
        </div>
    )
}

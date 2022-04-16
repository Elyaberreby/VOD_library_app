import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const MovieInfo = (props) => {
    let movId = props.match.params.id;
    let [item, setItem] = useState({})
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        doApiInfo();

    }, [])

    const doApiInfo = async () => {
        setLoading(true)
        let id = props.match.params.id;
        let url = `http://www.omdbapi.com/?i=${id}&tt3896198&apikey=fc9b3d5c`
        let resp = await axios.get(url);
        console.log(resp.data);
        setItem(resp.data);
        setLoading(false)
    }

    return (
        <React.Fragment>
        
        <div className=" container col-lg-8 shadow p-5 mx-auto overflow-hidden">
        {!loading ?
            <div>
            <img src={item.Poster} className="w-25 float-start me-2" />
            <h2>{item.Title}</h2>
            <div>Info : {item.Plot}</div>
            <div>Actors :{item.Actors}</div>
            <div>Score: {item.imdbRating}</div>
            <div>Votes count: {item.imdbVotes}</div>
            <div>Year: {item.Year}</div>
            <Link className="btn btn-dark mt-7" to="/">Back to movies list</Link>
            </div>
            :<h2>Loading...</h2>}
        </div>
                 
        </React.Fragment>

    )
}


import React from 'react'
import './display.css'

function Display(props) {
    let current = props.data.find((item, index) => index === props.current)

    let movies = current.favoriteMovies.map((movie, index) => {
        return <li key={`movie-${index}`}>{movie}</li>
    })
    
    return (
        <div className='display'>
            <p className='index'>{current.id}/{props.data.length}</p>
            <div className='info-container'>
                <p className='name'>{`${current.name.first} ${current.name.last}`}</p>
                <br></br>
                <div className='description'>
                    From: 
                    <p className='value'>{`${current.city}, ${current.country}`} </p>
                </div>
                <div className='description'>
                    Job Title:
                <p className='value'>{current.title}</p>
                </div>
                <div className='description'>
                    Employer:
                <p className='value'>{current.employer}</p>
                </div>
                <br></br>
                <div className='description'>
                    Favorite Movies:
                <ol className='movie-list'>
                        {movies}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Display
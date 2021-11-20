import React from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends React.Component {
    state={
        movies:getMovies()
    }

    handleDelete = (movie)=>{
        this.setState({movies:this.state.movies.filter(m=>m._id!==movie._id)})
    };
    render() { 
        const {length:count} = this.state.movies;
        if(count ===0){
            return <p>There are no movies currently there</p>;
        }
        return (
            <React.Fragment>
                <p>Showing {count} movies in database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={()=> this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;
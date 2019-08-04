import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = {
    loading: true,
    movie: null,
    movies: null
  };
  async componentDidMount() {
    const url = "http://demo9595712.mockable.io/getTopFiveMovies";
    const response = await fetch(url);
    const data = await response.json();
    
    var movies_arr = [];
    for(var i=0; i<5; i++){
      var movie = data.components[1].items[i];
      movies_arr.push({
          title: movie.title, 
          content: movie.synopsis,
          image: movie.imageUrl, 
          rank: movie.rank, 
          realeasedate: movie.releaseDate});
    }
    this.setState({movie: "movie", loading: false, movies: movies_arr});
    }

  render() { 
    if (this.state.movies != null){
      var v = [];
      
      for(var i=0 ; i<5; i++){
        var t = this.state.movies[i];
     
        v.push(<div class="container">
        <div></div>
        <br/>
        <br/>
        <div class="col-sm">
          <div class="card">
            <img class="card-img-top" src= {t.image}></img> 
              <div class="card-body">
                <h5 class="card-title">{t.title}</h5>
                <p class="card-text">{t.content}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Date Released: {t.realeasedate}</li>
                <li class="list-group-item">Rank: {t.rank}</li>
              </ul>
            </div>
          </div>
          <br/>
          <br/>
        </div>
        );
      }
      return v;
     
    } else 
   return(
     <div>LOADING...</div> 
   )
  //  if (1==2)
  //   return (
  //     <div>
  //       {this.state.loading || !this.state.movie ? (
  //         <div>loading...</div>
  //       ) : (
          
  //           <div class="container">
  //           <nav class="navbar navbar-light bg-light">
  //             <a class="navbar-brand" href="#">Movies</a>
  //           </nav>
  //           <br/>

  //           <div class="card-columns">
  //             <div class="card">
  //               <img class="card-img-top" src= {s.image}></img> 
  //                 <div class="card-body">
  //                   <h5 class="card-title">{s.title}</h5>
  //                   <p class="card-text">{s.content}</p>
  //                 </div>
  //                 <ul class="list-group list-group-flush">
  //                   <li class="list-group-item">Release date: {s.realeasedate}</li>
  //                   <li class="list-group-item">Rank: {s.rank}</li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //       )}
  //     </div>
  //   );
  }
}

export default App;
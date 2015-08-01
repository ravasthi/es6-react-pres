var React = require('react');
var RatingStars = require('./RatingStars');

class MovieListLayout extends React.Component {

  render() {
    let img = (this.props.Poster && this.props.Poster !== 'N/A') ? this.props.Poster : `public/img/fake${Math.floor(Math.random()*5) + 1}.jpg`;

    let fiveStarRating = this.props.imdbRating / 2;

    return (
      <div className="movie-row">
        <div className="movie-row__img-container">
          <div className="movie-row__img" style={{'backgroundImage': `url(${img})`}} />
        </div>
        <div className="movie-row__info">
          <h1 className="movie-row__title">{this.props.Title}</h1>
          <h2 className="movie-row__year">({this.props.Year})</h2>
        </div>
        <div className="movie-row__desc">
          {this.props.Plot}
        </div>
        <RatingStars
          max={5}
          score={fiveStarRating}
        />
      </div>
    );
  }

}

module.exports = MovieListLayout;

const React       = require('react');
const RatingStars = require('./RatingStars');

class MovieTileLayout extends React.Component {
  render() {
    return (
      <div className="movie-tile">
        <div className="movie-tile__img-container">
          <div className="movie-tile__img" style={ { backgroundImage: `url(${this.props.Poster})` }} />
        </div>

        <div className="movie-tile__info">
          <h1 className="movie-tile__title">{this.props.Title}</h1>
          <h2 className="movie-tile__year">{this.props.Year}</h2>
          <div className="movie-tile__stars">
            <RatingStars
              max={5}
              score={this.props.imdbRating/2}
            />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = MovieTileLayout;

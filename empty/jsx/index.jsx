const React   = require('react');
const _       = require('lodash');
const omdb    = require('omdb-client');
const preload = require('./netflix');

const MovieContainer  = require('./MovieContainer');
const MovieTileLayout = require('./MovieTileLayout');
const MovieListLayout = require('./MovieListLayout');
const Header          = require('./Header');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results:   _.clone(preload.Search),
      layout:    'tile',
      queryTerm: ''
    };
  }

  search(term) {
    this.setState({ queryTerm: term });
    omdb.search({ query: term }, (err, data) => {
      this.setState({ results: data.Search });
    });
  }

  clearTerm() {
    this.setState({
      queryTerm: '',
      results:   _.clone(preload.Search, true)
    });
  }

  changeLayout(layout) {
    this.setState({layout});
  }

  render() {
    let layout;

    if (this.state.layout === 'tile') {
      layout = MovieTileLayout;
    } else {
      layout = MovieListLayout;
    }

    return (
      <div className="app-container">
        <Header
          layout={this.state.layout}
          changeLayout={this.changeLayout.bind(this)}
          search={this.search.bind(this)}
          queryTerm={this.state.queryTerm}
          clearTerm={this.clearTerm.bind(this)}
        />
        <div className="movies-list">
          {this.state.results.map( el => {
            return (
              <MovieContainer
                id={el.imdbID}
                key={el.imdbID}
                layout={layout}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

module.exports = App;

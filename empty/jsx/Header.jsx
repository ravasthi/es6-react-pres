const React = require('react');

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  handleLayoutEvent(e) {
    this.props.changeLayout(e.target.value);
  }

  handleTermEvent(e) {
    this.setState({ term: e.target.value });
  }

  handleTermSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.term);
    this.setState({ term: '' });
  }

  handleClearEvent() {
    this.props.clearTerm();
  }

  render() {
    let searchBox;

    if (this.props.queryTerm) {
      searchBox = (
        <h3 className="app-header__term">
          {this.props.queryTerm}
          <a href="#" onClick={this.handleClearEvent.bind(this)}><i className='fa fa-times' /></a>
        </h3>
      );
    } else {
      searchBox = (
        <form onSubmit={this.handleTermSubmit.bind(this)}>
        <input onChange={this.handleTermEvent.bind(this)} value={this.state.term} className="app-header__search" type="text" placeholder="Search" />
        </form>
      );
    }

    return (
      <header className="app-header">
        <div class="app-header__inner">
          <h1 className="app-header__title">Forwardflix</h1>
          <select onChange={this.handleLayoutEvent.bind(this)} value="{this.props.layout}" className="app-header__display-select">
            <option value="tile">Tile</option>
            <option value="list">List</option>
          </select>
          {searchBox}
        </div>
      </header>
    );
  }
}

module.exports = Header;

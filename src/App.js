import React, {Component} from 'react';
import CardList from './components/CardList/CardList.component';
import SearchBox from './components/Search/SearchBox.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      origin: [],
      searchKey: ''
    };
  }

  handleChange = element => {
    this.setState({
      [element.name]: element.value
    });
  };

  handleSubmit = e => {
    const users = this.state.origin;
    const filteredData = users.filter(u => {
      return u.name.toLowerCase().includes(this.state.searchKey.toLocaleLowerCase());
    });

    this.setState({
      users: filteredData
    });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users =>
        this.setState({
          users,
          origin: users
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchKey !== this.state.searchKey) {
      const users = this.state.origin;
      const filteredData = users.filter(u => {
        return u.name.toLowerCase().includes(this.state.searchKey.toLocaleLowerCase());
      });

      this.setState({
        users: filteredData
      });
    }
  }

  render() {
    const {searchKey, users} = this.state;
    return (
      <div>
        <h1 className="page-title">Monster Roldex</h1>
        <SearchBox onChange={this.handleChange} value={searchKey} onSubmit={this.handleSubmit} />
        <CardList data={users} />
      </div>
    );
  }
}

export default App;

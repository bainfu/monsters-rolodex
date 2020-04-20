import React, { ChangeEvent } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { Monster } from './models/models';
import { SearchBox } from './components/search-box/search-box.components';


type AppState = {
  monsters: Monster[],
  searchField: string
}

class App extends React.Component<{}, AppState> {
  constructor() {
    super({} );

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchField: event.target.value}, () => {
      console.log(this.state);
    });
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase()); 
    });

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monsters' handleChange={ this.handleChange } />
        <CardList monsters={filteredMonsters} />
      </div>
    ); 
  }
}

export default App;

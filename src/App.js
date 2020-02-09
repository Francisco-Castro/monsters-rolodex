import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            searchField: ''
        };

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {

        const { monsters, searchField } = this.state;
        const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));

        return (
            <div className="App">
                <h1> Emi's Monster </h1>
                <SearchBox
                    placeholder={'search monster'}
                    handleChange={this.handleChange}>
                </SearchBox>
                <CardList monsters={filterMonster}> </CardList>
            </div>
        );

  }


}

export default App;

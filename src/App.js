// import { logDOM } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Search from './search/Search';
import getData from './url/Url';

class App extends Component {

 constructor(props) {
    super(props);
    this.state = {
      data: '',
      value: "",
    };
  }
  getApi = (user) => {
    getData(`https://api.github.com/users/${user}`).then((inf) => {
      if (inf.message != "Not Found") {
        return this.setState({ data: inf, value: "" });
      }
      this.setState({ value: "No result" });
    });
    console.log(this.state.data)
  };


  render(){
    return(
      <div>
        <Header></Header>
        <Search getApi={this.getApi}></Search>
        <Main data={this.state.data}></Main>
      </div>
    )
  }
}

export default App;

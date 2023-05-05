import { Component } from "react";

import "./Search.scss"
import Searchch from '../images/search.png'


class Search extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }
    onChange = (e) => {
        this.setState({name:e.target.value})
        console.log(e.target.value)
    }
    onClick = () => {
        this.props.getApi(this.state.name)
    }
    render(){
        return(
            <div className="search container">
                <div className="img"><img src={Searchch} alt="poisk" /></div>
                <input type="text" onChange={this.onChange} value={this.state.value} />
                <div className="result">No results</div>
                <button onClick={this.onClick}>Search</button>
            </div>
        )
    }
}

export default Search;
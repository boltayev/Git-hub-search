import { Component } from "react";
import "./Main.scss"

import Cat from '../images/cat.png'
import Locatsy from '../images/locatsiy.png'
import Url from '../images/url.png'
import Twitter from '../images/twitter.png'
import GitHub from '../images/git-hub.png'

class Main extends Component{
    render(){
        return(
            <div className="block container">
                <div className="ii"><img src= {this.props.data.avatar_url}alt="cat" /></div>
                <div className="text-block">
                    <div className="name">
                        <div className="octacat">{this.props.data.name}</div>
                        <div className="data">Joined 25 Jan 2011</div>
                    </div>
                    <div className="span">@octocat</div>
                    <p>Lorem ipsum dolor sit amet,
                         consectetuer adipiscing elit.
                          Donec odio. Quisque volutpat 
                          mattis eros.
                    </p>

                    <div className="follo">
                        <div className="repos">
                            <div className="podpis">Repos</div>
                            <p className="p">{this.props.data.repos}</p>
                        </div>

                        <div className="followers">
                            <div className="podpis">Followers</div>
                            <p className="p">{this.props.data.followers}</p>
                        </div>

                        <div className="following">
                            <div className="podpis">Following</div>
                            <p className="p">{this.props.data.following}</p>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="one">
                            <div className="left-top">
                                <div><img src={Locatsy} alt="locatsiy" /></div>
                                <p>San Francisco</p>
                            </div>
                            <div className="left-bottom">
                                <div><img src={Url} alt="url" /></div>
                                <p className="url">https://github.blog</p>
                            </div>
                        </div>

                        <div className="two">
                            <div className="right-top">
                                <div><img src={Twitter} alt="twitter" /></div>
                                <p>Not Available</p>
                            </div>
                            <div className="right-bottom">
                                <div><img src={GitHub} alt="git-hub" /></div>
                                <p>@github</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Main
import './App.css';
import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import CatsList from './catsList';
import CatDetails from './catDetails';
import Navbar from "./navbar"


class App extends Component{
  static defaultProps = {
    cats: [
      {
        name: "Tuku",
        age: 1,
        src: "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg",
        facts: [
          "He loves eating chicken",
          "He is too cute",
          "He loves to fight with other cats"
        ]
      },
      {
        name: "Melon lord",
        age: 3,
        src: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg",
        facts: [
          "She will throw flaming melons at you",
          "She is strong",
          "She loves to break rules"
        ]
      },
      {
        name: "Noakhailla",
        age: 1,
        src: "https://images.ctfassets.net/440y9b545yd9/7jnBjgsgS8KFPqMZ9KW2lG/3ec550bbe9bbc1010b022c869b537074/cat-banner.png",
        facts: [
          "She speaks an unknows language",
          "She cries often",
          "She loves to hang out with friends"
        ]
      }
    ]
  };

  render(){
    const getCat = props => {
      let name = props.match.params.name;
      let currentCat = this.props.cats.find(
        cat => cat.name.toLowerCase() === name.toLowerCase()
      )
      return <CatDetails {...props} cat={currentCat}/>
    }

    return(
      <div>
        <Navbar cats={this.props.cats}/>
        <Switch>
          <Route exact path = '/cats'
            render={() => <CatsList cats={this.props.cats}/>}
          />
          <Route exact path = '/cats/:name' render={getCat}/>
          <Redirect to="/cats" />
        </Switch>
      </div>
    )
  }
}

export default App;

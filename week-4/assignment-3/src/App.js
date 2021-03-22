import React from 'react';
import './App.css';
import Header from './Header'
import MainContent from './MainContent'

class App extends React.Component {

  state = {
    newMessage: '',
    showMenu: false,
    displayHiddenPost: false,
    navigation: [
      {
        title: "Home",
        link: "#"
      },
      {
        title: "About",
        link: "#"
      },
      {
        title: "Getting Started",
        link: "#"
      },
      {
        title: "Contact",
        link: "#"
      }
    ]
  }

  //A method that takes an array of objects and assigns each item a unique ID
  lastId = 0;
  getNewId = () => {
    const id = this.lastId;
    this.lastId++;
    return id;
  }

  assignId = (arr) => arr.map(item => {
    const id = this.getNewId();
    return ({ ...item, id });
  })

  //a function to toggle the value of a state
  toggleState = (prop) => this.setState(prevState => ({ [prop]: !prevState[prop] }));

  //change the 'Welcome to NightGram!' to 'Have a Good Time!' when clicked
  changeMessage = () => this.setState({ newMessage: "Have a Good Time!" });

  //toggle menu when clicking on hamburger
  toggleMenu = () => this.toggleState("showMenu");
  //exit menu when clicking the exit button
  exitMenu = () => this.setState(({ showMenu: false }));

  //toggle the display of hidden posts
  toggleHiddenPosts = () => this.toggleState("displayHiddenPost")

  render() {

    return (
      <div className="App" >

        <Header
          navigation={this.state.navigation}
          toggleMenu={this.toggleMenu}
          showMenu={this.state.showMenu}
          exitMenu={this.exitMenu} />

        <MainContent
          assignId={this.assignId}
          changeMessage={this.changeMessage}
          newMessage={this.state.newMessage}
          toggleHiddenPosts={this.toggleHiddenPosts}
          displayHiddenPost={this.state.displayHiddenPost} />

      </div>
    );
  }
}

export default App;

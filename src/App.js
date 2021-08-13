import './App.css';
import {Switch, Route} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'
import { Component } from 'react';


class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentDidUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path = '/' component={HomePage} />
          <Route path = '/shop' component={ShopPage} />
          <Route path = '/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App;

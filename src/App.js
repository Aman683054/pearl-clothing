import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckOutPage from './components/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from "./redux/user/user.selector";
// import {selectCollectionForPreview} from "./redux/shop/shop.selector";
// import {addCollectionsAndDocuments} from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
    
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser } =  this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
         setCurrentUser({
            
              id: snapshot.id,
              ...snapshot.data()
            
          }
          // , () => {
          //   console.log(this.state);
          // }
          );
        });
      }
      
    setCurrentUser(userAuth);
    // addCollectionsAndDocuments('collections', collectionArray.map(({title, items}) => ({title, items})))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/signin' render={() => (this.props.currentUser ?
          <Redirect to="/" /> :
          <SignInAndSignUpPage />
          )} />


          
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  // collectionArray: selectCollectionForPreview(state)

})

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import logo from "../../asset/pearl.jpg";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const Header = ({currentUser, hidden}) => {
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <img className="logo" alt="" src={logo} />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> 
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }   
                <CartIcon />
            </div>
            {
            hidden?
            null:
            <CartDropDown />
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})

export default connect(mapStateToProps, null)(Header);
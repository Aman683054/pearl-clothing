import React from 'react';
import logo from "../../asset/pearl.jpg";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectHiddenFromCart} from '../../redux/cart/cart.selector';

import {HeaderContainer, OptionLink, OptionDiv, OptionsContainer, LogoContainer, ImgContainer} from './header.styles';

const Header = ({currentUser, hidden}) => {
    return(
        <HeaderContainer>
            <LogoContainer to="/">
                <ImgContainer alt="" src={logo} />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/shop">CONTACT</OptionLink>
                {
                    currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> 
                    :
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                }   
                <CartIcon />
            </OptionsContainer>
            {
            hidden?
            null:
            <CartDropDown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectHiddenFromCart(state)
})

export default connect(mapStateToProps, null)(Header);
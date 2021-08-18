import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import {auth} from './../../firebase/firebase.utils'

//import './header.styles.scss'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionsDiv, OptionsLink } from './header.styles'


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionsLink to='/shop'>
                SHOP
            </OptionsLink>
            <OptionsLink to='/shop'>
                CONTACT
            </OptionsLink>
            {currentUser ? (
                <OptionsDiv onClick={() => auth.signOut()}>
                SIGN OUT
                </OptionsDiv>
            ) : (
                <Link className='option' to='/signin'>
                SIGN IN
                </Link>
            )}
            <CartIcon/>
        </OptionsContainer>  
        { hidden ? null : <CartDropdown/>}        
    </HeaderContainer>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
  });

export default connect(mapStateToProps)(Header)
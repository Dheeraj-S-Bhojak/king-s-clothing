import { ReactComponent as Logo } from '../../assets/images/crown.svg'
import { Link, Outlet} from 'react-router-dom';

import "./Navigation.styles.scss"

const NavigationBar = () => {
    return (
        <>
            <div className="navigation">
               <Link className='logo-container' to='/'>
                    <Logo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/all/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
       
        </>
        
        
    );
}
export default NavigationBar;
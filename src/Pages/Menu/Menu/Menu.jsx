import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Delhi Restaurant | Menu</title>
            </Helmet>
            <Cover img={menuImg}></Cover>
            <h3>Men Menu Menu</h3>
        </div>
    );
};

export default Menu;
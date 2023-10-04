import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Delhi Restaurant | Menu</title>
            </Helmet>
            <Cover></Cover>
            <h3>Men Menu Menuu</h3>
        </div>
    );
};

export default Menu;
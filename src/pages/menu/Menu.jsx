import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../../components/PopularMenu';
import MenuShared from './MenuShared';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="OUR MENU"></Cover>
            <PopularMenu></PopularMenu>
            <MenuShared></MenuShared>
        </div>
    );
};

export default Menu;
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertsImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../shared/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const salad = menu.filter(item => item.category === 'salad');

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="OUR MENU" subTitle="Would You Like To Try a Dish"></Cover>
            {/* Main cover */}
            <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}></SectionTitle>
            {/* Offered Menu Items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Desserts Menu Items */}
            <MenuCategory items={desserts} title="Desserts" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={dessertsImg} ></MenuCategory>
            {/* Fizza Menu Items */}
            <MenuCategory items={pizza} title="Pizza" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={pizzaImg} ></MenuCategory>
            {/* Salad Menu Items */}
            <MenuCategory items={salad} title="Salad" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={saladImg} ></MenuCategory>
            {/* Soup Menu Items */}
            <MenuCategory items={soup} title="Soup" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." img={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;
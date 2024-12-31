import { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg';
import Cover from '../../shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tebIndex, setTebIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    const salad = menu.filter(item => item.category === 'salad');

    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <Cover img={orderCover} title="Order Food" subTitle="Would You Like To Try Dish"></Cover>
            <Tabs defaultIndex={tebIndex} onSelect={(index) => setTebIndex(index)}>
                <TabList className="uppercase text-center mt-10">
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
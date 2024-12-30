import { useState } from 'react';
import orderCover from '../../assets/shop/banner2.jpg';
import Cover from '../../shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {

    const [tebIndex, setTebIndex] = useState(0);

    return (
        <div>
            <Cover img={orderCover} title="Order Food" subTitle="Would You Like To Try Dish"></Cover>
            <Tabs defaultIndex={tebIndex} onSelect={(index) => setTebIndex(index)}>
                <TabList className="uppercase text-center">
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
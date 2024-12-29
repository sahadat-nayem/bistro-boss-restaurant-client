import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import MenuItem from "../shared/MenuItem";


const PopulerMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular')
                setMenu(popularItem)})
    }, [])

    return (
        <section className="mb-12">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-md mx-auto">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopulerMenu;
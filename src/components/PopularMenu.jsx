import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import MenuItem from "../shared/MenuItem";


const PopularMenu = () => {

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-md mx-auto mb-12">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center my-8">
                <button className="btn btn-link text-black">View Full  Menu</button>
            </div>
            <div className="max-w-screen-md mx-auto">
                <p className="bg-black text-white text-center py-10 font-semibold">Call Us: +88 01612844066</p>
            </div>
        </section>
    );
};

export default PopularMenu;
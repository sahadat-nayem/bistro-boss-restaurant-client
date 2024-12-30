import SectionTitle from "../shared/SectionTitle";
import MenuItem from "../shared/MenuItem";
import useMenu from "../hooks/useMenu";


const PopularMenu = () => {
    
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');


    return (
        <section className="mb-12">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-md mx-auto mb-12">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center my-8">
                <button className="btn btn-link text-black">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;
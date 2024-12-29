import SectionTitle from "../shared/SectionTitle";
import featuredImg from "../assets/home/featured.jpg";
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-7 bg-blend-overlay bg-[#15151598]">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className="md:flex max-w-screen-md mx-auto pb-8 pt-10 px-10 bg-slate-500 bg-opacity-10">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md: ml-10">
                    <p className="font-semibold">March 20, 2023</p>
                    <p className="uppercase font-semibold">WHERE CAN I GET SOME?</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-link text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
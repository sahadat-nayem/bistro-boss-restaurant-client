import SectionTitle from "../shared/SectionTitle";
import titleImg from "../assets/menu/salad-bg.jpg"


const ChefRecommends = () => {

    return (
        <section className="mb-10 max-w-screen-md mx-auto">
            <div className="max-w-screen-md mx-auto">
                <p className="bg-black text-white text-center py-10 font-semibold">Call Us: +88 01612844066</p>
            </div>
            <SectionTitle
                heading={"CHEF RECOMMENDS"}
                subHeading={"---Should Try---"}
            ></SectionTitle>
            <div className="md:flex gap-4">
                <div className="card  shadow-xl rounded-none bg-gray-100">
                    <figure>
                        <img
                        src={titleImg}
                        alt="Shoes"
                        className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-outline text-[#BB8506] border border-b-2 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-gray-100 shadow-xl rounded-none">
                    <figure>
                        <img
                        src={titleImg}
                        alt="Shoes"
                        className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-outline text-[#BB8506] border border-b-2 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-gray-100 shadow-xl rounded-none">
                    <figure>
                        <img
                        src={titleImg}
                        alt="Shoes"
                        className="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-outline text-[#BB8506] border border-b-2 uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;
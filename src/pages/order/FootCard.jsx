

const FootCard = ({item}) => {

    const {name, recipe, image, price} = item;

    return (
        <div className="mt-10">
             <div className="card shadow-xl rounded-none bg-gray-100 max-h-[460px]">
                    <figure>
                        <img
                        src={image}
                        className="w-full" />
                    </figure>
                    <p className="absolute right-0 bg-slate-900 text-white px-2 py-1 mr-3 mt-3">${price}</p>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions">
                        <button className="btn btn-outline text-[#BB8506] bg-gray-200 border border-b-2 uppercase">add to cart</button>
                        </div>
                    </div>
            </div>   
        </div>
    );
};

export default FootCard;
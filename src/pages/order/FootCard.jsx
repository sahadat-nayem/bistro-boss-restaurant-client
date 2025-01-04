import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



const FootCard = ({item}) => {

    const {_id, name, recipe, image, price} = item;
    const {user} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = food => {
        if(user && user.emil){
            // TODO: Sand cart item to database
            const cartItem = {
                menuId : _id,
                email : user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                
            })
        }
        else{
            Swal.fire({
                title: "You are not logged in!",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                // Send user to login page
                navigate("/login", {state: location.pathname});
                }
              });
        }
    }

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
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline text-[#BB8506] bg-gray-200 border border-b-2 uppercase">add to cart</button>
                        </div>
                    </div>
            </div>   
        </div>
    );
};

export default FootCard;
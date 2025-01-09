import { FcGoogle } from "react-icons/fc";
import UseAuth from "../hooks/UseAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleSignIn } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn text-white bg-[#d19f54ce] hover:bg-[#D1A054] w-full"><span className="text-xl"><FcGoogle /></span> Continue with Google</button>
        </div>
    );
};

export default SocialLogin;
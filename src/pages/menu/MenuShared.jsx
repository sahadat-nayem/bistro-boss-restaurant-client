import Bistro from '../../assets/home/chef-service.jpg';

const MenuShared = () => {
    return (
        <div className=' mb-24 relative'>
          <img src={Bistro} alt="" />
            <div className='text-center mx-auto px-2 py-4 md:px-10 md:py-20 text-white bg-[#1111116e] max-w-[763px] absolute -top-1 md:top-24 md:right-64 right-17'>
                <h3 className='text-xl md:text-2xl'>Bistro Boss</h3>
                <p className='text-sm'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>                                                        
    );
};

export default MenuShared;
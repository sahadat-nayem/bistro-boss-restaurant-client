import Bistro from '../assets/home/chef-service.jpg';

const BistroBoss = () => {
    return (
        <div className='max-w-screen-md mx-auto mb-24 relative'>
            <img src={Bistro} alt="" />
            <div className='text-center mx-auto px-5 py-5 md:px-10 md:py-10 bg-white max-w-[563px] absolute top-8 md:right-24 right-12'>
                <h3 className='text-2xl'>Bistro Boss</h3>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BistroBoss;
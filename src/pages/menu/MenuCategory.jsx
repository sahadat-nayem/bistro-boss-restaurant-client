import { Link } from 'react-router-dom';
import MenuItem from '../../shared/MenuItem';
import MenuShared from './MenuShared';

const MenuCategory = ({items, title, img, subTitle}) => {
    return (
        <div>
            {title && <MenuShared img={img} title={title} subTitle={subTitle}></MenuShared>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-md mx-auto mb-12">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <div className="text-center my-8">
                <button className="btn btn-link text-black">ORDER YOUR FAVOURITE FOOD</button>
            </div>
            </Link>
        </div>
    );
};

export default MenuCategory;
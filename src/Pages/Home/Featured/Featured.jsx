import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>October 27, 2023</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt minus quaerat id, amet ut reprehenderit beatae odio nostrum corporis ipsum repudiandae inventore provident atque est nisi delectus rem dolorem perspiciatis minima suscipit vel dolores aliquam quos voluptatibus. Mollitia architecto quia sequi consequuntur quas non, cupiditate, velit itaque excepturi perspiciatis debitis.\</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;
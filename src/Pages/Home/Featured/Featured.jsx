import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-10">
            <SectionTitle subHeading={"Check It Out"} heading={"Featured Item"} />
            <div className="md:flex justify-center gap-10 items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img className="" src={featuredImg} alt="" />
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <h1 className="uppercase">WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam enim reprehenderit perferendis. Non quis iste saepe sapiente dolores, id voluptates facere facilis aperiam, neque soluta numquam rem. Reprehenderit modi quas sint odio autem aspernatur, vel iste quam dolore. Laboriosam, nemo temporibus! Est aperiam culpa deleniti consequuntur omnis corrupti totam!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
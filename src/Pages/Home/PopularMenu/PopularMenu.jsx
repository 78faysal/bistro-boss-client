import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const populerItem = data.filter(item => item.category === 'popular');
    //             setMenu(populerItem)
    //         })
    // }, [])
    return (
        <section className="my-20">
            <SectionTitle subHeading={"Popular Items"} heading={"From Our Menu"} />
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 mt-2">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;
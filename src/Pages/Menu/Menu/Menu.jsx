import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        className="mb-10"
        img={menuImg}
        title={"Our Menu"}
      />
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's offer"} />
      <MenuCategory items={offered} />
      <MenuCategory items={desserts} img={dessertImg} title={"dessert"} />
      <MenuCategory items={pizza} img={pizzaImg} title={"pizza"} />
      <MenuCategory items={salad} img={saladImg} title={"salat"} />
      <MenuCategory items={soup} img={pizzaImg} title={"soup"} />
    </div>
  );
};

export default Menu;

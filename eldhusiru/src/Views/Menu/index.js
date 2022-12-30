import Navigation from '../../components/Navigation';
import MainMenu from '../../components/MainMenu';
import AboutUs from '../../components/AboutUs';
import HoursLocation from "../../components/HoursLocation";
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';

const MenuView = () => {

	return (
		<>
			<Navigation/>
            <MainMenu/>
            <AboutUs/>
            <HoursLocation/>
			<ContactUs/>
			<Footer/>
		</>
	);
}

export default MenuView;
import {useRef} from 'react';
import Navigation from '../../components/Navigation';
import MainMenu from '../../components/MainMenu';
import AboutUs from '../../components/AboutUs';
import HoursLocation from "../../components/HoursLocation";
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';

const MenuView = () => {

	const mainMenuRef = useRef(null);
	const aboutUsRef = useRef(null);
	const hoursLocationRef = useRef(null);
	const contactUsRef = useRef(null);

	return (
		<>
			<div className='relative'>
				<Navigation />
				<MainMenu myRef={mainMenuRef}/>
				<AboutUs myRef={aboutUsRef}/>
				<HoursLocation myRef={hoursLocationRef}/>
				<ContactUs myRef={contactUsRef}/>
				<Footer/>
			</div>
		</>
	);
}

export default MenuView;
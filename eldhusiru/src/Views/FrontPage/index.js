import {useRef} from 'react';
import Navigation from '../../components/Navigation';
import MainMenu from '../../components/MainMenu';
import AboutUs from '../../components/AboutUs';
import HoursLocation from "../../components/HoursLocation";
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/Footer';

const FrontPageView = () => {

	return (
		<>
			<div className='relative md:px-6 px-1 mb-32'>
				<Navigation />
				<div className='px-6 md:px-0 pt-2 md:pt-48 space-y-24'>
					<MainMenu/>
					<AboutUs/>
					<HoursLocation/>
					<ContactUs/>
				</div>
			</div>
			<Footer/>
		</>
	);
}

export default FrontPageView;
import {useRef, useEffect} from 'react';
import Navigation from '../../components/Navigation';
import FoodMenuHeader from '../../components/FoodMenuHeader';
import FoodMenuItems from '../../components/FoodMenuItems';
import Footer from '../../components/Footer';

const FrontPageView = () => {

	const mainMenuRef = useRef(null);
	const aboutUsRef = useRef(null);
	const hoursLocationRef = useRef(null);
	const contactUsRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<div className='relative mb-32'>
				<Navigation />
                <FoodMenuHeader />
                <FoodMenuItems />
			</div>
            <Footer/>
		</>
	);
}

export default FrontPageView;
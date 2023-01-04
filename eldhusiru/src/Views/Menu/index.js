import {useEffect} from 'react';
import Navigation from '../../components/Navigation';
import FoodMenuHeader from '../../components/FoodMenuHeader';
import FoodMenuItems from '../../components/FoodMenuItems';
import Footer from '../../components/Footer';

const FrontPageView = () => {

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
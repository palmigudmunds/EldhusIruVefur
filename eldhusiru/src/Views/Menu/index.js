import {useEffect, Suspense} from 'react';
import Navigation from '../../components/Navigation';
import FoodMenuHeader from '../../components/FoodMenuHeader';
import FoodMenuItems from '../../components/FoodMenuItems';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';


const FrontPageView = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Suspense fallback={<Loading/>}>
				<div className='relative md:px-6 px-1 mb-32'>
					<Navigation />
					<div className='px-3 md:px-0 pt-32 md:pt-48 space-y-24'>
						<FoodMenuHeader />
						<FoodMenuItems />
					</div>
				</div>
				<Footer/>
			</Suspense>
		</>
	);
}

export default FrontPageView;
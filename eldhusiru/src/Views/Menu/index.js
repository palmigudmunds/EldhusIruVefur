import {useEffect, Suspense} from 'react';
import Navigation from '../../components/Navigation';
import FoodMenuHeader from '../../components/FoodMenuHeader';
import FoodMenuItems from '../../components/FoodMenuItems';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';


const MenuView = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Suspense fallback={<Loading/>}>
				<div className='relative'>
					<Navigation />
					<div className='md:px-0 pt-9 md:pt-32 space-y-16 md:space-y-24'>
						<FoodMenuHeader />
						<FoodMenuItems />
					</div>
				</div>
				<Footer/>
			</Suspense>
		</>
	);
}

export default MenuView;
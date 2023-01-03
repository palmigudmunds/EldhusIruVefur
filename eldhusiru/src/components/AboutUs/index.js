import React from 'react';

const AboutUs = () => {
    
    return (
        <div id="UmOkkur" className="flex flex-col-reverse md:flex-row justify-start max-w-none md:max-w-screen-xl mx-auto">
            <div className="flex flex-col justify-center items-center md:w-1/2 pt-5 md:pt-0">
                <div className='w-full md:w-11/12 border-2 border-black-500 rounded-3xl h-56 mb-6'>

                </div>
                <div className='w-full md:w-11/12 border-2 border-black-500 rounded-3xl h-56'>

                </div>
            </div>
            <div className="md:w-1/2 flex flex-col items-center">
                <h3 className="opn-sta-text text-5xl font-bold red-text text-center">Um okkur</h3>
                <h5 className="text-base md:font-normal pt-5 md:w-8/12">Á Eldhús Iru er okkar umhugað um gæði og varð staðurinn til úr hreinni ástríðu fyrir góðum ....<br></br><br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan tellus vitae tellus mattis, quis rhoncus orci tincidunt. Vivamus consequat arcu nec diam luctus, eu placerat ante ullamcorper. Aenean a euismod ipsum, non faucibus massa. Etiam quam arcu, fermentum ut eros vitae, molestie pulvinar magna. Curabitur tristique vitae metus sit amet tincidunt.
                    <br></br><br></br>
                    Cras rutrum efficitur erat vel dapibus. Nunc tempor porta enim vitae lobortis. Nullam consectetur fringilla mi quis malesuada. Nam volutpat lectus in venenatis tincidunt. Morbi sit amet risus turpis. Nullam vel arcu mauris.
                    Donec arcu dui, volutpat ac tellus convallis, hendrerit consequat libero. Orci 
                    <br></br><br></br>
                    Verði ykkur að góðu.</h5>
            </div>
        </div>
    );
};

export default AboutUs;

import sofa from "../../../public/assets/sofa.jpg";
import Image from 'next/image';

const Why_Choose = () => {
    return (
        <div className="text-center ">
            <div className="relative pb-10 md:px-10 w-full md:h-[80vh] h-[50vh] mx-auto">
                <Image src={sofa} alt="images" className='w-full h-full object-cover' />
            </div>
            <div className="w-full md:max-w-[80%] mx-auto relative rounded-xl -mt-40 md:-mt-80 bg-white p-10 border-t-2 border-r-2 border-l-2 border-blue-400 border-b-4 text-left">
                <h1 className="font-medium md:font-bold md:text-4xl text-xl  mb-5 text-center">Why Choose Deal Acres?</h1>
                <p className=" text-sm md:text-lg mb-2">
                    Deal Acres is the only place where you can sell your property easily and quickly. If you are looking for one of the top free property listing sites in India, Deal Acres came first. When it comes to the free property listing, it becomes difficult to pick one that will actually help you rent or sell your residential or commercial property, then Deal Acres is one of the friendliest and fastest-growing real estate websites in India today, with some of the simple and easy facilities for uploading your property.
                </p>

                <p className="text-sm md:text-lg mb-2">Property listing is the best way to reach out to potential customers who need to buy a home or home for rent. Homebuyers or tenants can shortlist the best among the pool of the real estate listing.</p>

                <p className="text-sm md:text-lg mb-2">So, a builder, an owner, or an agent does need not spend hours selling the house online or trying a hand at the online rental. Listing property is a process of a few minutes and you are done. Deal Acres has traffic and thousands of prospective homebuyers and tenants who visit the website every day. Sell your property quickly with Deal Acres.
                </p>
            </div>
            <button className="bg-blue-600 rounded-lg font-semibold text-white tet-lg py-3 px-6 mt-8">List Your Property for FREE NOW!</button>
        </div>
    );
};

export default Why_Choose;

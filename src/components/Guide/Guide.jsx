
import house from "../../../public/assets/house_pricing.png"
import video from "../../../public/assets/videos.png"
import Details from '../../../public/assets/details.png'

import Card from '../Card/Card'

const Guide = () => {
    return (
        <section className='mx-auto container py-24 h-full lg:w-4/5'>
            <h1 className='font-heading text-center'>Step by Step Guide for Free Property Listing</h1>

            <div className='flex flex-col md:flex-row mt-16 items-center justify-center gap-8 md:gap-20 px-10'>
               <Card src={Details} heading='Step 1 : Add proper detail' description='Start filling the form with a few basic details like type of property, Area, Location, etc.' />
               <Card src={video} heading='Step 2 : Add Images & Videos' description='Upload your property images or videos either from your Mobile or Desktop.' />
               <Card src={house} heading='Step 3 : Add Pricing' description='Upload the expected price of your property, and now it is ready to post..'/>
            
            </div>
        </section>
    )
}

export default Guide
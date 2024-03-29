'use client';
import NavigationBroker from '@/components/Navigation/NavigationBroker';
import Image from 'next/image';
import Link from 'next/link';

import FileDropzone from '@/components/FileDropZone';
const Page = () => {

    const handleFilesDrop = (acceptedFiles) => {
        console.log('Dropped files:', acceptedFiles);
      };
    

  return (
    <section className='mt-12 container mx-auto lg:w-4/5'>
    
    <NavigationBroker />
 
     <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-20 container mx-auto my-10 overflow-auto'>
     
     <div className='h-full w-[400px] rounded-xl bg-[#c9e2f3] p-4 flex flex-col items-center'>
         
             <h1 className="text-xl text-center mt-20">
             Click Perfact picture of your property so the renter or buyer see the best image of your property.</h1>
        
         <Image src={'/assets/camera.png'} alt='camera' height={150} width={150} className='my-16' /> 
         <h1 className='font-bold text-xl'>Need Help?</h1>
         <p className='text-lg'>You Can Email Us</p>
         <p className='text-lg text-blue-600 mb-20'>Contact@dealacres.com</p>
     </div>
     <div className='h-full md:w-[400px] md:mt-20 rounded-xl p-5 border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4'>
         <h1 className="font-medium md:font-bold md:text-2xl text-xl  my-2">
         Add Media</h1>
         <FileDropzone onFilesDrop={handleFilesDrop} description={'Uploaded photo is maximum is of 2MB'}/>
        <p className='text-sm mb-5'>At least add 3 images of your property for good visibility and high response.</p>
         <Link href={'pricing'}>
         <button className='w-full bg-blue-600 rounded-md px-8 py-3 font-bold text-white my-3 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600'>Continue</button>  
         </Link>
     </div>
 </div>
 </section>
  );
};

export default Page;

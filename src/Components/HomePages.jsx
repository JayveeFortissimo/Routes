import Image from '../assets/Chows.jpg'

const HomePages = () => {
  return (
    <section className='text-[#D8D1C2] min-h-section flex justify-center items-center lg:gap-10 flex-wrap px-20 py-10 '>
            <img src={Image} alt="" className='h-96' style={{borderRadius:'50%'}}/>
              {/*/Palagyan ng lie Height to/////*/}
            <div>
              <h1 className='xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-center'>Chows of Santa Maria Bulacan</h1>
            <h1 className='xs:text-xl md:text-2xl text-center'>Band from Sta cruz Santa Maria Bulacan</h1>
               <h1 className='sm:text-xl text-center'>Since 2014</h1>
              
              <div className='text-center mt-5 w-full'>
              <button className='faith w-full h-10 bg-[#D8D1C2] rounded text-[#272343]  hover:bg-[#EEE8DA] ease-out duration-300 hover:text-black'>Explore</button>
              </div>
               
            </div>
             
    </section>
  )
}

export default HomePages
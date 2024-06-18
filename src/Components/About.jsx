import Image from '../assets/Chows.jpg'

const About = () => {
  return (
    <section className="text-[#D8D1C2] min-h-screen flex justify-center items-center py-5  xs:px-5 md:px-10">
        <div>
          <div className="max-w-about flex flex-col gap-6 ">
          <h1 className='text-2xl xs:text-center  md:text-left'>About Us</h1>
          <p className="xs:text-center  md:text-left text-xl" >Welcome to the official website of the Sta. Cruz Marching and Concert Band, a distinguished musical group located in Brgy. Sta. Cruz, Santa Maria, Bulacan. Established in 2014 by the talented Miss Millet Cristobal, our band has become a beacon of musical excellence and community spirit.</p>
            <p className="xs:text-center  md:text-left text-xl">Miss Cristobal, with her exceptional talent and deep passion for music, brought together groups of children from our community. Through her dedicated efforts, she has nurtured and developed the musical talents of countless young individuals, including myself. Her commitment to music education has not only enriched our lives but also strengthened the cultural fabric of our community.</p>
         <p className="xs:text-center  md:text-left text-xl">Our band, now proudly celebrating its 10th anniversary in 2024, has grown tremendously over the years. From humble beginnings, we have evolved into a well-respected ensemble, performing at various local and regional events. Our journey has been marked by numerous achievements and memorable performances, each one a testament to the hard work and dedication of our members.</p>
       <p className="xs:text-center  md:text-left text-xl">This website serves multiple purposes. It is a tribute to our band's rich history and achievements, a platform to share our upcoming events and performances, and a space for community engagement. I also created this site to practice and enhance my skills in web development, specifically using React and React Routes. By combining my passion for music and technology, I aim to create an interactive and informative experience for our visitors.</p>
         <p className="xs:text-center  md:text-left text-xl">We invite you to explore our site and learn more about our band. Whether you are a fellow musician, a supporter of the arts, or simply curious about our activities, we hope you find inspiration in our story. Thank you for visiting, and we look forward to your continued support as we embark on the next decade of our musical journey.</p>
          </div>
         
        </div>
    </section>
  )
}

export default About
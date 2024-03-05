import bannerImage from '../assets/My pic 4.1.jpeg';
import bannerBackground from '../assets/banner_wallpaper.svg';
import Typed from 'typed.js';
import { useRef } from "react";
import { useEffect } from "react";


const Banner = ()=>{

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Developer", "Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const openLinkedInProfile = () => {
    window.location.href='https://www.linkedin.com/in/rohit-pandey-7292162aa/';
  };

  const sendEmail = () => {
    window.location.href = 'mailto:rohitpandey92311@gmail.com';
  };

    return (

         <div style={{
               backgroundImage:`url(${bannerBackground})`,
               backgroundSize: "cover",
          }} 
         className="main-container flex items-center">


             {/* First Banner */}
            <div className="w-full flex items-center justify-center text-white">
          
          {/*text*/}

          <div className="w-2/3 space-y-2 ms-10">     
          <h3 className="mt-10 text-2xl font-semibold">Hi , I am</h3>
          <h1 className="text-4xl font-bold">Rohit Kumar Pandey</h1>
          <h2 className="text-2xl">I am  <span className="font-bold underline" ref={el}></span></h2>
           <p className=" ">Dedicated Java developer in building robust and scalable applications
            using Spring Boot, Restful web services, and JPA/Hibernate. Proficient in various 
            technologies including Java, Spring MVC, Spring Security ,Git, MySQL,
             and JavaScript..</p>

        <div className="icon-container flex space-x-5">
        <a className="hover:bg-orange-600 border cursor-pointer 
         px-3 py-4  w-14 h-14 rounded-full flex justify-center items-center
          bg-gray-800">
             <i class="fa-brands text-4xl fa-facebook"></i>
             </a>

             <a className="hover:bg-orange-600 border cursor-pointer 
              px-3 py-4  w-14 h-14 rounded-full flex justify-center
               items-center bg-gray-800">
             <i class="fa-brands text-4xl fa-instagram"></i>
             </a>

             <a 
              href="#"
              onClick={openLinkedInProfile}
             className="hover:bg-orange-600 border cursor-pointer
              px-3 py-4  w-14 h-14 rounded-full flex justify-center 
              items-center bg-gray-800">
              
             <i class="fa-brands text-4xl fa-linkedin"></i>
             </a>
                 
             <a 
              href="#"
              onClick={sendEmail}
             className="hover:bg-orange-600 border cursor-pointer 
              px-3 py-4  w-14 h-14 rounded-full flex justify-center 
              items-center bg-gray-800">
               <i class="fa-solid fa-envelope text-4xl"></i>             
               </a>

             </div>

             <br/>

             <a className="px-3 py-2 bg-orange-500 rounded-full 
                   shadow-lg inline-block "  style={{ marginBottom: '5rem' }}      
               href="/contact">Contact Me</a>

              </div>

            </div>

                {/* Second */}
            <div className="w-full flex justify-center">
             
             {/*image*/}

             <img className="rounded-full my-2 shadow-lg w-fit ml-60" src= {bannerImage} />

            </div>


         </div>

    );
};

export default Banner;
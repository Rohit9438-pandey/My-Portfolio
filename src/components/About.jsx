import { useState } from "react";
import bannerImage from '../assets/My pic 3.1.jpeg';



const About = ()=>{
    const [data, setData] = useState({
        image: bannerImage,
        title: "Java Developer",
        desc1: `Greetings! I'm Rohit Kumar Pandey, a passionate Java developer with a penchant
         for turning lines of code into innovative solutions. My journey into the world of 
         software development began with a fascination for problem-solving and a commitment
          to creating impactful applications.`,

        desc2: ` 💡 Why Java?
        Java, to me, is more than just a programming language; it's a tool that empowers me to
         build robust, scalable, and efficient applications. From crafting elegant algorithms
          to diving deep into the intricacies of backend development, Java has been my trusted
           companion throughout my career. `,

           desc3: `🌐 Tech Explorer
           Beyond Java, I am an enthusiastic explorer of various technologies and frameworks.
            Whether it's diving into the intricacies of Spring Boot, embracing the versatility
             of Hibernate, or keeping an eye on the latest trends in the tech world, I'm always
              eager to expand my knowledge and skills.`,

              desc4:`🛠️ Problem Solver & Innovator
              I thrive on challenges and see each project as an opportunity to innovate. 
              From optimizing database queries to architecting scalable solutions, 
              I take pride in delivering code that not only meets requirements but exceeds 
              expectations. My approach is rooted in a combination of creativity and 
              precision.`,

         
        actionButton: {
            title: "Read More..",
            link: "/readmore",
          },
        });


    return ( <>
    
    <div className="my-conatiner bg-gray-100 py-16">

        <h1 className="text-center pb-16 text-5xl underline font-bold">About Me</h1>

        <div className="flex items-center">
            {/* image container */}
            <div className="w-full flex justify-center">
                <img className="w-fit rounded-full my-2 shadow-lg" src={data.image}
                 alt='Rohit Kumar Pandey'/>
            </div>

             {/* text-container */}
            <div className="w-full flex justify-center">
              
              <div className="space-y-5 w-2/3">
                       
             <h1 className="text-5xl  font-semibold ">{data.title}</h1>

             <p>{data.desc1}</p>
             <p>{data.desc2}</p>
             <p>{data.desc3}</p>
             <p>{data.desc4}</p>

              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
              {data.actionButton.title}</button>

              </div>

            </div>




        </div>




    </div>
    
    
    </>
     );
};

export default About ;
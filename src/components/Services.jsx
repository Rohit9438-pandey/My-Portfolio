const Services = ()=>{
    return (
      
        <>
        
        <div className="my-container py-14">
            <h1 className="text-5xl font-bold text-center underline">My Services</h1>
          
          <div className="services-container space-x-5 px-10 flex mt-12">
            <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            <i class="text-5xl ml-10 fa-brands fa-html5"></i> 
            <i class="text-5xl ml-10 fa-brands fa-css3"></i>            
            <i class="text-5xl ml-10  fa-brands fa-js"></i> 
            <h1 className="text-4xl">Web Development</h1>
                <p>I'm a web developer who loves playing with HTML, CSS, and JavaScript. 
                  I specialize in Angular to create awesome websites. Let's make the web more exciting
                   together! Currently Learning React..</p>
                 <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">Check</button>
            </div>


            <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class=" text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">Android Development</h1>
            <p>
             Currently I'm Learning Andriod Development...
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>

            </div>



            <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i class="text-5xl fa-brands fa-java"></i>            
            <h1 className="text-4xl">Backend Development</h1>
            <p>
             As a Backend Developer My Specialization in Java And Framework like: - Spring , Spring Boot 
             Hibernate/JPA , Restful Webservices(Rest Api's) ,JWT Authentication , Spring Security,
             Microservices.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>

            </div>
          </div>




            </div>
          

       
        
        
        
        
        </>




    );
};

export default Services;
//Header.js
const Header = () => {
    return (
      <header className=" h-40  ">
           
           <div className="flex  top-0 items-center mt-0 justify-between h-full w-full inset-0">
              <div className="relative bg-blue-400 w-1/4  ">
              
              <section className="m-4">
            <img
                  src="/france-logo.png"
                  alt="France Éducation International"
                  className=""
                  width={400} 
                  height={300}
                  
                  layout="fill" 
                  objectFit="cover" 
                />
                </section>
                </div>
              <div className="relative text-right w-3/4">
              <section>
                
                <img src="/tcf-logo.png" alt="TCF Logo" 
                
                width={800} 
                height={600}
                layout="fill" 
                objectFit="cover" />
                </section>
              </div>
            </div>
      </header>
    );
  };
  
  export default Header;
  
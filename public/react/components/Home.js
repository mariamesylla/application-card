import React from 'react';
import { useParams, useNavigate, Link} from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate("/Form");
  };
  return (
    <div className="bg-white-300 md:max-h-[30%]">
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-10"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#30A5FA] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Apply for a credit card 
            </h2>
           </div> 
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center">
          <div className='flex flex-wrap justify-center'>

            <div className="mt-0 flex items-center justify-center gap-x-6">

               <div>
                      <div class="col-md-4 col-md-6 pad">
                          <p class=" margin-b text-align-center"><strong>CoBrand</strong></p>
                              <div class="hover:animate-bounce " >
                              <a href='/cards'>
                                <img src="https://www.aexp-static.com/cdaas/one/statics/@americanexpress/static-assets/2.28.0/package/dist/img/cards/delta_gold_bus_chip_480x304.png" />
                              </a>
                              </div>                
                      </div>
                      <div className='inset-x-0 top-0'>
                          <button
                          onClick={handleClick}
                          className='mt-2 px-10 py-2 bg-blue-500 text-white rounded-md hover:bg-indigo-500'
                          >
                              Apply
                          </button>
                          </div>
  
              </div>
                      <div >
                          <p class=" margin-b text-align-center"><strong>Corporate</strong></p>
                              <div class="hover:animate-bounce" >
                              <a href='/cards'>
                                <img src="https://www.aexp-static.com/cdaas/one/statics/@americanexpress/static-assets/2.28.0/package/dist/img/cards/corp_plat_chip_480x304.png" />
                             </a>
                              </div>
                          <div className='inset-x-0 top-0'>
                          <button
                          onClick={handleClick}
                          className='mt-2 px-10 py-2 bg-blue-500 text-white rounded-md hover:bg-indigo-500'
                          >
                              Apply
                          </button>
                          </div>
                      </div>
                      <div >
                          <p class=" margin-b text-align-center"><strong>Generic</strong></p>
                              <div class="hover:animate-bounce">
                              <a href='/cards'>
                                <img src="https://www.aexp-static.com/cdaas/one/statics/@americanexpress/static-assets/2.28.0/package/dist/img/cards/amex_generic_chip_480x304.png" />
                              </a>
                              </div>
                              <div className='inset-x-0 top-0'>
                          <button
                          onClick={handleClick}
                          className='mt-2 px-10 py-2 bg-blue-500 text-white rounded-md hover:bg-indigo-500'
                          >
                              Apply
                          </button>
                         
                          </div>
                          
                      </div>
                      <div >
                          <p class=" margin-b text-align-center"><strong>Prepaid</strong></p>
                              <div class="hover:animate-bounce">
                                <a href='/cards'>
                                <img src="https://www.aexp-static.com/cdaas/one/statics/@americanexpress/static-assets/2.28.0/package/dist/img/cards/serve_free_reloads_perm_480x304.png" />
                              </a>
                              </div>
                          <div className='inset-x-0 top-0'>
                          <button
                          onClick={handleClick}
                          className='mt-2 px-10 py-2 bg-blue-500 text-white rounded-md hover:bg-indigo-500'
                          >
                              Apply
                          </button>
                          </div>
                      </div>
            </div>
            
          </div>
        </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#60A5FA] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
  </div>
  )
} 


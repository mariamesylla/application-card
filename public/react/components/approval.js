import { React, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export const Approval = () => {
  const firstName = localStorage.getItem("firstName");
  const totalIncome = parseFloat(localStorage.getItem("totalIncome"));

  const navigate = useNavigate();

  const handleClick = async () => {
    navigate("/Form");
  };
  return (
    <div className="bg-sky-300 md:max-h-[30%]">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-10"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#30A5FA] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="text-center pt-6 pb-8">
          <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {totalIncome >= 50000
              ? `Congratulations ${firstName} ! , You qualify for this
              credit card.`
              : `Sorry ${firstName}, You don't qualify for this credit card. Try applying for another card`}
          </h3>

          <hr class="mx-auto my-8 h-1 w-500 border-0 bg-gray-100 " />
        
        <div>
        <div  className="mx-auto max-w-5xl py-30  ">

          <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">            
          <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          <blockquote class="text-center text-lg font-semibold leading-8 text-gray-900 sm:text-lg sm:leading-9">

            <p class="text-2xl font-bold...">What's Next ?</p>
            </blockquote>
            <hr class="mx-auto my-8 h-1 w-70 border-0 bg-gray-100 " />

              <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <h5>
                  We'll process your application as soon as possible and send
                  you a decision within 14 days.
                </h5>
                </blockquote>

                <blockquote class="text-center text-lg  text-gray-900 sm:text-lg sm:leading-9">
                <p>
                  There has been no impact to your credit score at this time.
                  You are approved and choose to accept the Card, the
                  information we provide to credit bureau(s) may impact your
                  credit score. While we're reviewing your application, please
                  don't submit another application for the American Express®
                  Gold Card.
                </p>
              
              </blockquote>

             
          </div>
          <button
                          onClick={handleClick}
                          className='mt-2 px-10 py-2 bg-blue-500 text-white rounded-md hover:bg-indigo-500'
                          >
                              REAPPLY
                          </button>
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
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

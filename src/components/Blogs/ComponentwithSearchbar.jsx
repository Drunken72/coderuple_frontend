import React from 'react';
import Image from 'next/image';
import company from '../../Images/company.jpg';
import icon from '../../Images/search.svg';

const ComponentWithSearchbar = () => {
  return (
    <div className="relative">

      <div className="relative flex justify-center z-0 bg-[#D9D9D9]">
        <div className="responsive-container flex justify-start items-start py-20">

          <div>
            <div className="flex flex-row gap-14">
              <div className="flex flex-col w-1/2 gap-12">
                <h1 className="capitalize text-5xl font-medium">Mobile Development</h1>
                <div className="flex flex-col gap-5">
                  <Image src={company} className="rounded-2xl" />
                  <span className="font-semibold"><li>January 21, 2021</li></span>
                  <p className="font-light text-lg">Our passion and drive to deliver quality solutions have taken us to the boardroom of a 200-year-old company and coffee shop meetings in Orlando, Washington, Singapore, Tokyo, Beijing, and Kathmandu. We love the challenge to deliver the best possible solution using the latest and future technologies.</p>
                </div>

              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-col w-1/2 gap-12">
                <h1 className="capitalize text-5xl font-medium">Web Development</h1>
                <div className="flex flex-col gap-5">
                  <Image src={company} className="rounded-2xl" />
                  <span className="font-semibold"><li>January 21, 2021</li></span>
                  <p className="font-light text-lg">Our passion and drive to deliver quality solutions have taken us to the boardroom of a 200-year-old company and coffee shop meetings in Orlando, Washington, Singapore, Tokyo, Beijing, and Kathmandu. We love the challenge to deliver the best possible solution using the latest and future technologies.</p>
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>
          <div className="sticky right-24 z-50 w-[500px] flex flex-col gap-8">
          <div className="bg-[#E7E9F0] flex justify-between rounded-full py-2 px-6">
            <span className="font-normal text-lg">Search...</span>
            <Image src={icon} className="h-6 w-6 rounded-2xl" />
          </div>
          <div className="bg-[#E4E6EB] flex flex-col justify-between rounded-2xl px-7 py-5 gap-5">
            <span className="font-normal text-lg">Recent Posts</span>
            <div className="flex gap-7">
              <Image src={company} className="h-28 w-32 rounded-2xl" />
              <div className="flex flex-col">
                <p>Our passion and drive to deliver quality solutions have taken us to the boardroom of a 200-year-old company</p>
                <span className="font-semibold"><li>January 21, 2021</li></span>
              </div>
            </div>
            <div className="flex gap-7">
              <Image src={company} className="h-28 w-32 rounded-2xl" />
              <div className="flex flex-col">
                <p>Our passion and drive to deliver quality solutions have taken us to the boardroom of a 200-year-old company</p>
                <span className="font-semibold"><li>January 21, 2021</li></span>
              </div>
            </div>
            <div className="flex gap-7">
              <Image src={company} className="h-28 w-32 rounded-2xl" />
              <div className="flex flex-col">
                <p>Our passion and drive to deliver quality solutions have taken us to the boardroom of a 200-year-old company</p>
                <span className="font-semibold"><li>January 21, 2021</li></span>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>
      {/* <div className="relative bg-[#FFFFFF] flex justify-center"> */}
      {/* <div className="responsive-container flex flex-col py-20"> */}

    </div>
    // </div>
    // </div>
  );
};

export default ComponentWithSearchbar;

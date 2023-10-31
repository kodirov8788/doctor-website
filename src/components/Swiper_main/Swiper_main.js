import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import swiper1_img from "../Swiper_main_img/swiper1.webp"
import swiper2_img from "../Swiper_main_img/swiper2.webp"
import swiper3_img from "../Swiper_main_img/swiper3.webp"
import swiper4_img from "../Swiper_main_img/swiper4.webp"
import swiper5_img from "../Swiper_main_img/swiper5.jpg"
import swiper6_img from "../Swiper_main_img/swiper6.jfif"
import swiper7_img from "../Swiper_main_img/swiper7.webp"
import swiper8_img from "../Swiper_main_img/swiper8.webp"
import swiper9_img from "../Swiper_main_img/swiper9.webp"
import swiper10_img from "../Swiper_main_img/swiper10.webp"

import 'swiper/css';
import 'swiper/css/pagination';
function Swiper_main() {
    const getScreensize = () => {
        return window.screen.width
    }


    return (
        <div className="bg- pl-5 pr-5 md:pl-7 md:pr-7">
            {/*  1-qismi main */}
            <div className="w-full sm:h-[80px] md:h-[120px]  flex items-center justify-center">
                <h1 className='text-[28px] md:text-[40px] font-normal'>The Latest</h1>
            </div>
            <div className="w-full sm:h-[320px] md:h-[148px]  gap-[27px] md:flex  ">
                <div className="sm:w-full h-[148px] md:w-[49%]  bg-white flex items-center justify-between group">
                    <div className="w-[60px] h-[120px] group-hover:h-[140px] transition-[1s] group-hover:w-[68px] bg-[#EBAB21] rounded-r-[100px]"></div>
                    <h1 className='text-[18px] text-[#181818] font-semibold '>Recovery Month: Join our fight against addiction.</h1>
                  
                    <div className="w-[60px] ">
                        <BsArrowRight className='text-[20px] text-[#00857a]  group-hover:ml-5 duration-200 group-hover:text-[#0f4e49] group-hover:text-[30px]' />
                    </div>
                </div>
                <div className="sm:w-full h-[148px] mt-4 md:w-[49%] md:mt-0  bg-white flex items-center justify-between group">
                    <div className="w-[60px] h-[120px]  group-hover:h-[140px] transition-[1s] group-hover:w-[68px] bg-[#EBAB21] rounded-r-[100px]"></div>
                    <h1 className='text-[18px] text-[#181818] font-semibold '>EQTY 2023: A Summit for Health Justice</h1>
              
                    <div className="w-[60px] ">
                        <BsArrowRight className='text-[20px] text-[#00857a]  group-hover:ml-5 duration-200 group-hover:text-[#0f4e49] group-hover:text-[30px]' />
                    </div>

                </div>
            </div>



            {/*  2-qismi  Swiper  */}
            <div className=" w-full h-[380px] sm:h-[400px] md:h-[570px] mt-10 ">
                <Swiper
                    slidesPerView={getScreensize() < 640 ? 1 : 3}
                    spaceBetween={15}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}

                    modules={[Pagination, Autoplay]}
                    className="h-full w-full"
                >
                    <SwiperSlide className=' bg-white'>
                        <div className="w-full h-[240px] "><img className='w-full h-full object-cover' src={swiper1_img} alt="" /></div>
                        <div className="w-full flex items-center justify-between p-5"><h1 className='text-[5px] sm:text-[12px] md:text-[17px] w-[300px]  font-semibold'>Boston Medical Center Health System Hosts EQTY 2023: A Summit for Health Justice</h1><BsArrowRight className='text-[20px] text-[#00857a]' /></div>
                        <h1 className='ml-5 text-[5px] sm:text-[10px] md:text-[17px]'>Sep 14,2023</h1>
                    </SwiperSlide>
                    <SwiperSlide className=' bg-white'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover' src={swiper2_img} alt="" /></div>
                        <div className="w-full flex items-center justify-between p-5"><h1 className='text-[5px] sm:text-[12px] md:text-[17px] w-[300px]  font-semibold'>Addressing Social Determinants of Health in Post-Overdose Outreach Associated with Greater Reduction in Fatal Opioid Overdoses</h1><BsArrowRight className='text-[8px] sm:text-[20px] text-[#00857a]' /></div>
                        <h1 className='ml-5 text-[5px] sm:text-[10px] md:text-[17px]'>Sep 14,2023</h1>
                    </SwiperSlide>
                    <SwiperSlide className=' bg-white'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover' src={swiper3_img} alt="" /></div>
                        <div className="w-full flex items-center justify-between p-5"><h1 className='text-[5px] sm:text-[12px] md:text-[17px] w-[300px]  font-semibold'>Use of Injectable Extended-Release Buprenorphine Limited by Cost and Treatment Retention</h1><BsArrowRight className='text-[20px] text-[#00857a]' /></div>
                        <h1 className='ml-5 text-[5px] sm:text-[10px] md:text-[17px]'>Sep 13,2023</h1>
                    </SwiperSlide>
                    <SwiperSlide className=' bg-white'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover' src={swiper4_img} alt="" /></div>
                        <div className="w-full flex items-center justify-between p-5"><h1 className='text-[5px] sm:text-[12px] md:text-[17px] w-[300px]  font-semibold'>Linking Infectious and Narcology Care is Effective in Suppressing HIV in People who Inject Drugs in Russia</h1><BsArrowRight className='text-[20px] text-[#00857a]' /></div>
                        <h1 className='ml-5 text-[5px] sm:text-[10px] md:text-[17px]'>Sep 1,2023</h1>
                    </SwiperSlide>
                    <SwiperSlide className=' bg-white'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover' src={swiper5_img} alt="" /></div>
                        <div className="w-full flex items-center justify-between p-5"><h1 className='text-[5px] sm:text-[12px] md:text-[17px] w-[300px]  font-semibold'>Helping Healthcare Providers Process Grief After Overdose Deaths</h1><BsArrowRight className='text-[20px] text-[#00857a]' /></div>
                        <h1 className='ml-5 text-[5px] sm:text-[10px] md:text-[17px]'>Losing patients to overdose can present special grief challenges for healthcare providers. Peer and employer support can help.</h1>
                        <h1 className='ml-5 md:mt-14 text-[5px] sm:text-[10px] md:text-[17px]'>Aug 31,2023</h1>

                    </SwiperSlide>
                    <SwiperSlide className=' bg-white'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover' src={swiper6_img} alt="" /></div>
                        <div className="w-full flex items-center justify-between p-5"><h1 className='text-[5px] sm:text-[12px] md:text-[17px] w-[300px]  font-semibold'>Boston Medical Center Recognizes Overdose Awareness Day and National Recovery Month</h1><BsArrowRight className='text-[20px] text-[#00857a]' /></div>
                        <h1 className='ml-5 text-[5px] sm:text-[10px] md:text-[17px]'>Aug 31,2023</h1>
                    </SwiperSlide>
                    <SwiperSlide className=' bg-white'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover' src={swiper7_img} alt="" /></div>
                        <div className="w-full flex items-center justify-between p-5"><h1 className='text-[5px] sm:text-[10px] md:text-[17px] w-[300px]  font-semibold'>CHEER Receives $6,000,000 Cooperative Agreement from the Centers for Disease Control and Prevention (CDC)</h1><BsArrowRight className='text-[20px] text-[#00857a]' /></div>
                        <h1 className='ml-5 text-[5px] sm:text-[10px] md:text-[17px]'>Aug 28,2023</h1>
                    </SwiperSlide>
                    <SwiperSlide className=' bg-white'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover' src={swiper8_img} alt="" /></div>
                        <div className="w-full flex items-center justify-between p-5"><h1 className='text-[5px] sm:text-[10px] md:text-[17px] w-[300px]  font-semibold'>People of Color With Disabilities Face Double Discrimination</h1><BsArrowRight className='text-[20px] text-[#00857a]' /></div>
                        <h1 className='ml-5 text-[5px] sm:text-[10px] md:text-[17px]'>Racism and ableism together create greater health disparities and call for stronger practices that increase access, reduce costs, and promote equity.</h1>
                        <h1 className='ml-5 md:mt-14 text-[5px] sm:text-[10px] md:text-[17px]'>Aug 24,2023</h1>

                    </SwiperSlide>
                    <SwiperSlide className=' bg-white group'>
                        <div className="w-full h-[240px] "><img className='w-full h-full object-cover object-center' src={swiper1_img} alt="" /></div>
                        <div className="w-full  flex items-center  p-5 "><h1 className='text-[10px] sm:text-[12px] md:text-[17px] w-[300px]  font-semibold'>Boston Medical Center Health System Hosts EQTY 2023: A Summit for Health Justice</h1><BsArrowRight className='text-[20px] text-[#00857a] ml-4  md:group-hover:ml-[40px] md:group-hover:text-[30px] md:group-hover:text-[#0f4e49] duration-200' /></div>
                        <h1 className='ml-5  sm:text-[10px] md:text-[17px]'>Sep 14,2023</h1>
                    </SwiperSlide>
                    <SwiperSlide className=' bg-white group'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover object-center' src={swiper2_img} alt="" /></div>
                        <div className="w-full flex items-center  p-5"><h1 className='text-[10px] sm:text-[12px] md:text-[17px] w-[300px]  font-semibold'>Addressing Social Determinants of Health in Post-Overdose Outreach Associated with Greater Reduction in Fatal Opioid Overdoses</h1><BsArrowRight className='text-[20px] sm:text-[20px] text-[#00857a]  ml-4  md:group-hover:ml-[40px] md:group-hover:text-[30px] md:group-hover:text-[#0f4e49] duration-200' /></div>
                        <h1 className='ml-5   sm:text-[10px] md:text-[17px]'>Sep 14,2023</h1>
                    </SwiperSlide>
                    <SwiperSlide className=' bg-white group'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover object-center' src={swiper3_img} alt="" /></div>
                        <div className="w-full flex items-center  p-5"><h1 className='text-[10px] sm:text-[12px] md:text-[17px] w-[300px]  font-semibold'>Use of Injectable Extended-Release Buprenorphine Limited by Cost and Treatment Retention</h1><BsArrowRight className='text-[20px] text-[#00857a]  ml-4  md:group-hover:ml-[40px] md:group-hover:text-[30px] md:group-hover:text-[#0f4e49] duration-200' /></div>
                        <h1 className='ml-5 text-[10px] sm:text-[10px] md:text-[17px]'>Sep 13,2023</h1>
                    </SwiperSlide>
                    <SwiperSlide className=' bg-white group'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover object-center' src={swiper4_img} alt="" /></div>
                        <div className="w-full flex items-center p-5"><h1 className='text-[10px] sm:text-[12px] md:text-[17px] w-[300px]  font-semibold'>Linking Infectious and Narcology Care is Effective in Suppressing HIV in People who Inject Drugs in Russia</h1><BsArrowRight className='text-[20px] text-[#00857a]  ml-4  md:group-hover:ml-[40px] md:group-hover:text-[30px] md:group-hover:text-[#0f4e49] duration-200' /></div>
                        <h1 className='ml-5 text-[10px] sm:text-[10px] md:text-[17px]'>Sep 1,2023</h1>
                    </SwiperSlide>
                    <SwiperSlide className=' bg-white group'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover object-center' src={swiper5_img} alt="" /></div>
                        <div className="w-full flex items-center  p-5"><h1 className='text-[10px] sm:text-[12px] md:text-[17px] w-[300px]  font-semibold'>Helping Healthcare Providers Process Grief After Overdose Deaths</h1><BsArrowRight className='text-[20px] text-[#00857a]  ml-4  md:group-hover:ml-[40px] md:group-hover:text-[30px] md:group-hover:text-[#0f4e49] duration-200' /></div>
                        <h1 className='ml-5 text-[10px] sm:text-[10px] md:text-[17px]'>Losing patients to overdose can present special grief challenges for healthcare providers. Peer and employer support can help.</h1>
                        <h1 className='ml-5  text-[10px] sm:text-[10px] md:text-[17px] md:mt-14'>Aug 31,2023</h1>

                    </SwiperSlide>
                    <SwiperSlide className=' bg-white group'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover object-center' src={swiper6_img} alt="" /></div>
                        <div className="w-full flex items-center  p-5"><h1 className='text-[10px] sm:text-[12px] md:text-[17px] w-[300px]  font-semibold'>Boston Medical Center Recognizes Overdose Awareness Day and National Recovery Month</h1><BsArrowRight className='text-[20px] text-[#00857a]  ml-4  md:group-hover:ml-[40px] md:group-hover:text-[30px] md:group-hover:text-[#0f4e49] duration-200' /></div>
                        <h1 className='ml-5 text-[10px] sm:text-[10px] md:text-[17px]'>Aug 31,2023</h1>
                    </SwiperSlide>
                    <SwiperSlide className=' bg-white group'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover object-center' src={swiper7_img} alt="" /></div>
                        <div className="w-full flex items-center  p-5"><h1 className='text-[10px] sm:text-[10px] md:text-[17px] w-[300px]  font-semibold'>CHEER Receives $6,000,000 Cooperative Agreement from the Centers for Disease Control and Prevention (CDC)</h1><BsArrowRight className='text-[20px] text-[#00857a]  ml-4  md:group-hover:ml-[40px] md:group-hover:text-[30px] md:group-hover:text-[#0f4e49] duration-200' /></div>
                        <h1 className='ml-5 text-[10px] sm:text-[10px] md:text-[17px]'>Aug 28,2023</h1>
                    </SwiperSlide>
                    <SwiperSlide className=' bg-white group'><div className="w-full h-[240px] "> <img className='w-full h-full object-cover object-center' src={swiper8_img} alt="" /></div>
                        <div className="w-full flex items-center  p-5"><h1 className='text-[10px] sm:text-[10px] md:text-[17px] w-[300px]  font-semibold'>People of Color With Disabilities Face Double Discrimination</h1><BsArrowRight className='text-[20px] text-[#00857a]  ml-4  md:group-hover:ml-[40px] md:group-hover:text-[30px] md:group-hover:text-[#0f4e49] duration-200' /></div>
                        <h1 className='ml-5 text-[10px] sm:text-[10px] md:text-[17px]'>Racism and ableism together create greater health disparities and call for stronger practices that increase access, reduce costs, and promote equity.</h1>
                        <h1 className='ml-5 md:mt-14 text-[10px] sm:text-[10px] md:text-[17px]'>Aug 24.2023</h1>
                    </SwiperSlide>
                </Swiper>

            </div>
            {/*  2-qismi  Swiper  */}



            {/* 3-qismi */}
            <div className="w-full h-[246px] bg-[#D9EDEB] mt-20 rounded-br-[20px] rounded-tl-[20px] lg:flex lg:h-[172px]">
                <div className="w-full h-[50%]  flex items-center justify-center lg:w-[57%]  lg:h-full lg:justify-end ">
                    <h1 className='text-[24px] text-center'><span className='font-semibold'>HealthCity.</span>  Where the next ideas in healthcare live.</h1>
                </div>
                <div className="w-full h-[50%]  flex items-center justify-center lg:w-[43%] lg:h-full lg:justify-start lg:pl-7">
                    <button className='w-[320px] h-[46px] rounded-md bg-[#00857A] hover:bg-[#00857abc] text-white text-[18px] flex items-center justify-between p-6 hover:p-3 ease-in duration-300'> Learn more about HealthCity   <BsArrowRight /></button>

                </div>
            </div>
            {/* 3-qismi */}


            {/* 4-qismi */}
            <div className="w-full  h-[550px] sm:h-[650px] md:h-[360px] md:flex  mt-20">
                <div className="w-full md:w-[50%] h-[225px] sm:h-[360px] "> <img className='object-cover w-full h-full' src={swiper9_img} alt="" /></div>
                <div className="w-full md:w-[50%] h-[325px] sm:pl-5 md:pl-10  ">
                    <h1 className='text-[24px] md:text-[36px] mt-5'>Support BMC’s Mission</h1>
                    <h1 className='text-[16px] leading-6 mt-6 md:text-[11px] md:leading-4 lg:text-[16px] lg:leading-6'>Philanthropic support is essential to helping Boston Medical Center provide exceptional care, without exception to the people of Greater Boston. Whether you are an individual, a corporation or a community organization, there are many ways you can support BMC.</h1>
                    <button className='w-full sm:w-[180px] h-[46px] mt-[25px]  rounded-md bg-[#00857A] hover:bg-[#00857abc] text-white text-[18px] flex items-center justify-center gap-5 hover:gap-8 ease-in duration-300'> Learn More  <BsArrowRight /></button>
                </div>
            </div>


            <div className="w-full h-[650px]  sm:h-[720px] md:h-[430px] md:flex ">
                <div className="w-full md:hidden  md:w-[50%] h-[225px] sm:h-[360px] md:h-[430px]"> <img className='object-cover w-full h-full' src={swiper10_img} alt="" /></div>
                <div className="w-full  md:w-[50%] h-[325px] sm:pl-5 md:pl-10  ">
                    <h1 className='text-[24px]  md:text-[36px] mt-5'>BMC Careers - Join Our Team!</h1>
                    <h1 className='text-[16px]  leading-6 mt-6 md:text-[11px] md:leading-4 lg:text-[16px] lg:leading-6'>Working at Boston Medical Center means you're part of a mission to provide exceptional and equitable care. And our dedication to providing an exceptional experience extends to our employees too.</h1>
                    <h1 className='text-[16px] leading-6 mt-6 '>We're hiring for all positions, including nurses, radiology technologists, medical assistants, pharmacy techs, and more. Check out our exciting opportunities and apply to join our team today!</h1>
                    <button className='w-full sm:w-[180px] h-[46px] mt-[25px] lg:mt-[17px] xl:mt-10 rounded-md bg-[#00857A] hover:bg-[#00857abc] text-white text-[18px] flex items-center justify-center gap-5 hover:gap-8 ease-in duration-300'> Learn More  <BsArrowRight /></button>
                </div>
                <div className="w-full hidden  h-[225px] sm:h-[360px] md:flex md:w-[50%] md:h-[430px]"> <img className='object-cover w-full h-full' src={swiper10_img} alt="" /></div>

            </div>
            {/* 4-qismi */}
        </div>

    )
}

export default Swiper_main
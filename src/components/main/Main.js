import React from 'react'
import Img from "../../img/img.webp"
import Icon from "../../img/icon.svg"
import Search from "../../img/search.png"
import Img1 from "../../img/img1.png"
import Img2 from "../../img/img2.png"
import Img3 from "../../img/img3.png"
import Img4 from "../../img/img4.webp"
import Img5 from "../../img/img5.webp"
import Img6 from "../../img/img6.webp"




function Main() {
    return (
        <div className='w-[100%] h-[300vh]  sm:h-[300vh] lg:h-[230vh] bg-[#F1F1F1] xl:h-[200vh] '>
            <div className="w-[100%] h-[300vh]   bg-[#71717100] sm:h-[300vh] md:relative md:flex lg:h-[230vh] xl:h-[180vh]">
                <div className="w-[100%] h-[200px]  rounded-br-[80px] truncate sm:h-[320px] md:relative  md:h-[550px] md:rounded-br-[100px] lg:h-[600px]">
                    <img className='w-[100%] h-[100%] md:absolute ' src={Img} alt="" />
                </div>
                <div className="w-[100%] p-[15px] h-[270vh] rounded-br-[100px]  sm:h-[240vh]  md:absolute md:bg-[#0000004e] md:h-[97vh] md:pt-[70px] lg:rounded-br-[100px] lg:h-[600px] lg:pt-[130px]">
                    <div className="w-[100%] h-[130px]   flex  items-center sm:h-[90px] md:w-[45%] md:h-[200px] lg:h-[220px]">
                        <h1 className='text-[30px] font-bold md:text-white md:text-[45px] lg:text-[50px] '>Award-winning clinical care for everyone</h1>
                    </div>
                    <div className="w-[100%] h-[200px]  flex  items-center sm:h-[100px] md:w-[60%] md:h-[180px] lg:h-[150px]">
                        <p className='text-[20px] md:text-white md:text-[22px]'>Extraordinary healthcare means having expert doctors and groundbreaking research—but it also means ensuring care is accessible for anyone who needs it. At BMC, we do both.</p>
                    </div>
                    <div className="w-[100%] h-[120px]   flex flex-col justify-around  items-center sm:h-[90px] sm:flex-row sm:justify-start md:justify-between  md:w-[100%] md:h-[200px] lg:w-[80%] lg:ml-[150px] xl:w-[70%] xl:ml-[200px]">





                        <button className='bg-[#553178]  group flex w-[320px] h-[45px] justify-center  items-center rounded-[5px] sm:w-[290px] md:w-[320px] md:h-[70px] md:rounded-[0px] md:rounded-br-[25px] md:rounded-tl-[25px]  lg:w-[50%] lg:h-[80px] xl:w-[50%] xl:h-[90px]'> <div className="text-white mr-[10px] duration-300 group-hover:mr-[20px] xl:text-[22px]">Make an Appointment</div> <div className="ml-[10px]"><img className='w-[16px] xl:w-[16px]' src={Icon} alt="" /></div></button>

                        <button className='bg-[#553178] group flex w-[320px] h-[45px] justify-center  items-center rounded-[5px] sm:w-[260px] sm:ml-[10px] md:ml-[85px] md:w-[320px] md:h-[70px] md:rounded-[0px] md:rounded-br-[25px] md:rounded-tl-[25px] lg:w-[50%] lg:h-[80px] xl:w-[50%] xl:h-[90px]'> <div className="text-white mr-[10px] duration-300  group-hover:mr-[20px] xl:text-[22px]">Refer a Patient</div> <div className="ml-[10px]"><img className='w-[16px] xl:w-[16px]' src={Icon} alt="" /></div></button>


                    </div>

                    <div className="w-[100%] h-[430px]  flex flex-col items-center sm:h-[585px]   md:h-[280px] ">

                        <div className="w-full  sm:flex sm:justify-center sm:items-center"> <h1 className='text-[27px] lg:text-[30px] lg:font-medium xl:text-[35px] xl:font-medium'>Patient & Visitor Resources</h1> </div>
                        <div className="w-[100%] h-[100%]  grid grid-cols-2 sm:h-[100%] sm:grid sm:grid-cols-1 md:grid-cols-2 md:pt-[20px] lg:grid-cols-3">
                            <div className="w-[100%] h-[180px] group   flex flex-col justify-center  items-center md:h-[100px]">
                                <div className="w-[90%] h-[160px] bg-white  sm:h-[90px] sm:flex sm:justify-center sm:items-center md:h-[80px] xl:h-[95px] xl:w-[82%]">
                                    <div className="w-[100%] h-[12px] xl:w-[15px]   sm:h-[100%] sm:w-[13px] md:w-[10px]">
                                        <div className="w-[100%] h-[12px] group-hover:w-[15px] duration-200 group-hover:bg-[#015b54]  bg-[#00857A] sm:h-[100%] sm:w-[13px] md:w-[10px]"></div>
                                    </div>
                                    <div className="w-[100%] h-[53px]  flex items-center justify-center sm:w-[12%] sm:flex sm:justify-end md:w-[15%]">
                                        <img className='w-[30x] h-[30px] md:w-[25px] md:h-[25px] xl:w-[30px] xl:h-[30px]' src={Search} alt="" />
                                    </div>
                                    <div className="w-[100%] h-[41px]  flex items-center justify-center sm:w-[33%] md:w-[45%]">
                                        <h2 className='text-[18px] font-bold sm:text-[22px] md:text-[18px] xl:text-[18px]'>Find a Doctor</h2>
                                    </div>
                                    <div className="w-[100%] h-[52px]  flex items-center justify-center sm:w-[55%] sm:pr-[50px] sm:flex sm:justify-end md:pr-[10px] md:w-[37%] xl:pr-[25px]">
                                        <img className='w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]' src={Img1} alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="w-[100%] h-[180px] group   flex flex-col justify-center  items-center  md:h-[100px]">
                                <div className="w-[90%] h-[160px] bg-white  sm:h-[90px] sm:flex sm:justify-center sm:items-center md:h-[80px] xl:h-[90px] xl:w-[82%]">

                                    <div className="w-[100%] h-[12px] xl:w-[16px]  sm:h-[100%] sm:w-[13px] md:w-[10px]">
                                        <div className="w-[100%] h-[12px] group-hover:w-[15px] duration-200 group-hover:bg-[#015b54]  bg-[#00857A] sm:h-[100%] sm:w-[13px] md:w-[10px]"></div>
                                    </div>
                                    <div className="w-[100%] h-[53px]  flex items-center justify-center sm:w-[12%] sm:flex sm:justify-end md:w-[15%]">
                                        <img className='w-[30x] h-[30px] md:w-[25px] md:h-[25px] xl:w-[35px] xl:h-[35px]' src={Img2} alt="" />
                                    </div>
                                    <div className="w-[100%] h-[41px]  flex items-center justify-center sm:w-[33%] md:w-[40%]">
                                        <h2 className='text-[18px] font-bold sm:text-[22px] md:text-[18px] xl:text-[20px]'>  Visitor Info</h2>
                                    </div>
                                    <div className="w-[100%] h-[52px]  flex items-center justify-center sm:w-[55%] sm:pr-[50px] sm:flex sm:justify-end md:pr-[10px] md:w-[42%]">
                                        <img className='w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]' src={Img1} alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="w-[100%] h-[180px] group  flex flex-col justify-center  items-center md:h-[100px]">
                                <div className="w-[90%] h-[160px] bg-white  sm:h-[90px] sm:flex sm:justify-center sm:items-center md:h-[80px] xl:h-[90px] xl:w-[82%]">
                                    <div className="w-[100%] h-[12px] xl:w-[15px]  sm:h-[100%] sm:w-[13px] md:w-[10px]">
                                        <div className="w-[100%] h-[12px] group-hover:w-[15px] duration-200 group-hover:bg-[#015b54]  bg-[#00857A] sm:h-[100%] sm:w-[13px] md:w-[10px]"></div>
                                    </div>
                                    <div className="w-[100%] h-[53px] flex items-center justify-center sm:w-[12%] sm:flex sm:justify-end md:w-[15%]">
                                        <img className='w-[30x] h-[30px] md:w-[25px] md:h-[25px] xl:w-[35px] xl:h-[35px]' src={Img3} alt="" />
                                    </div>
                                    <div className="w-[100%] h-[41px]  flex items-center justify-center sm:w-[33%] md:w-[40%]">
                                        <h2 className='text-[18px] font-bold sm:text-[22px] md:text-[18px] xl:text-[20px]'>Contact Us</h2>
                                    </div>
                                    <div className="w-[100%] h-[52px]  flex items-center justify-center sm:w-[55%] sm:pr-[50px] sm:flex sm:justify-end md:pr-[10px] md:w-[42%]">
                                        <img className='w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]' src={Img1} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="w-[100%] h-[550px] p-[10px] bg-white  sm:h-[450px] lg:h-[300px] xl:m-auto xl:pr-[50px] xl:w-[95%]">
                        <div className="w-[80%] h-[90px]  pl-[15px] sm:w-[100%] sm:h-[70px] sm:flex sm:justify-center  sm:items-center">
                            <h1 className='text-[25px]'>We are rewriting healthcare, together</h1>
                        </div>
                        <div className="w-[100%] h-[450px]   sm:h-[370px] lg:flex lg:h-[240px]">
                            <div className="w-[100%]  h-[175px]  flex  sm:flex sm:justify-center  sm:items-center     ">
                                <div className="w-[120px] h-[175px]  xl:w-[140px]">
                                    <div className="w-[100%] h-[70%]  flex justify-center  items-center">
                                        <img className='w-[70px] h-[90px]' src={Img4} alt="" />
                                    </div>
                                    
                                    <div className=" w-[100%] h-[25%] b flex justify-center  items-center pl-[18px] xl:pl-[25px] xl:h-[30%]">
                                    <p className='text-[16px] font-bold xl:text-[18px]'>Clinical Excellence</p>
                                    </div>

                                </div>
                                <div className="w-[120px] h-[175px]  xl:w-[140px]">
                                    <div className="w-[100%] h-[70%]  flex justify-center  items-center">
                                        <img className='w-[70px] h-[90px]' src={Img5} alt="" />
                                    </div>
                                    <div className=" w-[100%] h-[25%]  flex justify-center  items-center pl-[18px] xl:h-[30%] xl:pl-[25px]">
                                        <p className='text-[16px] font-bold xl:text-[18px]'>Research & Innovation</p>
                                    </div>

                                </div>
                                <div className="w-[120px] h-[175px]  xl:w-[140px]">
                                    <div className="w-[100%] h-[70%]  flex justify-center  items-center">
                                        <img className='w-[70px] h-[90px]' src={Img6} alt="" />
                                    </div>
                                    <div className=" w-[100%] h-[25%]  flex justify-center  items-center pl-[18px]  xl:h-[30%] xl:pl-[25px]">
                                        <p className='text-[16px] font-bold xl:text-[18px]'>Equitable Care</p>
                                    </div>

                                </div>
                            </div>
                            <div className="w-[100%] h-[ 250px]  ">
                                <div className="w-[100%] h-[200px]  sm:h-[130px] ">
                                    <p className='font-medium mt-[10px]'>At BMC, we’re modeling a new kind of excellence in healthcare. We are dedicated to delivering innovative
                                        care that bridges our expertise and your individual needs, so you can be your healthiest self. Together,
                                        we’re making an impact and building a healthier, more equitable, and thriving Boston.</p>
                                </div>
                                <div className="w-[100%] h-[70px]  flex justify-center  items-center sm:flex-start">
                                    <button className='w-[95%] h-[45px] bg-[#0b7970] group rounded-[6px] flex justify-center hover:bg-[#015b54] items-center sm:w-[60%]'><p className=' text-[19px] text-white mr-[10px] duration-100 group-hover:mr-[20px]'>Learn more about us</p> <img className='w-[15px] h-[15px] ml-[10px]' src={Icon} alt="" /> </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Main
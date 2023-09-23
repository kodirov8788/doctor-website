import React from 'react'
import Img from "../../img/img.webp"
import Icon from "../../img/icon.svg"


function Main() {
    return (
        <div className='w-[100%] h-[200vh] border border-black lg:h-[150vh]'>
            <div className="w-[100%] h-[200vh] border border-black  bg-[#71717100] md:relative md:flex lg:h-[150vh]">
                <div className="w-[100%] h-[200px] border border-black rounded-br-[80px] truncate sm:h-[320px] md:relative  md:h-[550px] md:rounded-br-[100px] lg:h-[600px]">
                    <img className='w-[100%] h-[100%] md:absolute ' src={Img} alt="" />
                </div>
                <div className="w-[100%] p-[15px] h-[200vh] border border-black  md:absolute md:bg-[#0000004e] md:h-[97vh] md:pt-[70px] lg:h-[600px] lg:pt-[130px]">
                    <div className="w-[100%] h-[130px] border border-black  flex  items-center sm:h-[90px] md:w-[45%] md:h-[200px] lg:h-[220px]">
                        <h1 className='text-[30px] font-bold md:text-white md:text-[45px] lg:text-[50px] '>Award-winning clinical care for everyone</h1>
                    </div>
                    <div className="w-[100%] h-[200px] border border-black flex  items-center sm:h-[100px] md:w-[60%] md:h-[180px] lg:h-[150px]">
                        <p className='text-[20px] md:text-white md:text-[22px]'>Extraordinary healthcare means having expert doctors and groundbreaking research—but it also means ensuring care is accessible for anyone who needs it. At BMC, we do both.</p>
                    </div>
                    <div className="w-[100%] h-[120px] border border-black  flex flex-col justify-around  items-center sm:h-[90px] sm:flex-row sm:justify-start md:justify-between  md:w-[100%] md:h-[200px] lg:w-[80%] lg:ml-[150px]">
                        <button className='bg-[#553178] flex w-[320px] h-[45px] justify-center  items-center rounded-[5px] sm:w-[290px] md:w-[320px] md:h-[70px] md:rounded-[0px] md:rounded-br-[25px] md:rounded-tl-[25px] lg:w-[350px] lg:w-[360px] lg:h-[80px]'> <div className="text-white mr-[10px] text-[20px] ">Make an Appointment</div> <div className="ml-[10px]"><img className='w-[16px]' src={Icon} alt="" /></div></button>
                        <button className='bg-[#553178] flex w-[320px] h-[45px] justify-center  items-center rounded-[5px] sm:w-[260px] sm:ml-[10px] md:ml-[85px] md:w-[320px] md:h-[70px] md:rounded-[0px] md:rounded-br-[25px] md:rounded-tl-[25px] lg:w-[360px] lg:h-[80px]'> <div className="text-white mr-[10px] text-[20px]">Refer a Patient</div> <div className="ml-[10px]"><img className='w-[16px]' src={Icon} alt="" /></div></button>
                    </div>
                    <div className="w-[100%] h-[500px] border border-black  flex flex-col items-center sm:h-[90px] sm:flex-row sm:justify-start md:justify-between  md:w-[100%] md:h-[200px] ">
                        <div className="w-full border border-black"> <h1 className='text-[27px]'>Patient & Visitor Resources</h1> </div>
                        <div className="w-[100%] h-[100%] border border-red-600 grid-cols-2 ">
                            <div className="w-[50%] h-[160px] border border-red-600  flex flex-col justify-center  items-center">
                                <div className="w-[98%] h-[150px] border border-black">
                                    <div className=""></div>
                                    <div className=""></div>
                                    <div className=""></div>
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
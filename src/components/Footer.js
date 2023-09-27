import React from 'react'
import Img1 from "./images/icon.svg"
import Img2 from "./images/1.svg"
import Img3 from "./images/2.svg"
import F from "./images/f.svg"
import I from "./images/i.svg"
import L from "./images/l.svg"
import T from "./images/t.svg"
import Y from "./images/y.svg"
import A from "./images/11.png"
import B from "./images/22.webp"
import C from "./images/33.png"
import D from "./images/44.png"


function Footer() {
  return (
    <div>




      <div className="2xl:pl-[100px]">

        <img className='p-[20px]' src={Img2} alt="" />

        <div className=""><p className='text-[14px] pl-[20px] lg:w-[260px]'>Boston Medical Center (BMC) is a 514-bed academic medical center located in Boston's historic South End, providing medical care for infants, children, teens and adults.</p></div>
        <img className='p-[20px]' src={Img3} alt="" />
        <div className=""><p className='text-[13px] w-[240px] pl-[20px] ' >One Boston Medical Center Place Boston, MA 02118</p>
          <div className=" w-[85px] ml-[20px] border-b-2 border-[#06887D]">
            <a className=' text-[14px] text-[#06887D]' href="">617.638.8000</a></div>
        </div>
        <div className=""><p className='text-[14px] font-bold pl-[20px] pt-[30px]'>24 Hour Emergency Department</p>
          <div className="w-[130px] pl-[20px]">
            <span className='text-[13px]'>725 Albany Street Boston, MA 02118</span>
          </div>
          <div className=" w-[85px] ml-[20px] border-b-2 border-[#06887D]">
            <a className='text-[14px]   text-[#06887D]' href="">617.414.4075</a></div>
        </div>
        <div className="w-[250px] h-[60px] flex justify-between pl-[20px] pt-[20px]" >
          <img src={F} alt="" />
          <img src={I} alt="" />
          <img src={L} alt="" />
          <img src={T} alt="" />
          <img src={Y} alt="" />
        </div>

      </div>


      <div className="2xl:mt-[100px] 2xl:ml-[100px] ">
        <div className="pl-[20px] pt-[20px] w-[200px] h-[400px] flex flex-col justify-between md:w-[100%] md:h-[170px] lg:mt-[-43%] lg:pl-[320px] lg:absolute xl:pt-[130px] xl:pl-[400px] xl:w-[90%]">
          <div className=" gap-[50px] md:flex">
            <div className="">
              <p>Awards</p>
              <p>Accreditation Regulatory Compliance</p>
              <p>Careers</p>
              <p>Donate</p>
            </div>

            <div className="">
              <p>Find A Doctor</p>
              <p>ICU Nurse Ratios</p>
              <p>Institutional Master Plan</p>
              <p>Insurance Plans Accepted</p>
              <p>Medical Records</p>
              <p>Pricing and Estimates</p>
            </div>

            <div className="">
              <p>Media Relations</p>
              <p>Residency</p>
              <p>Vendor Access</p>
              <p>Volunteer</p>
            </div>
          </div>
        </div>
      </div>


      <div className="w-[100%] flex justify-center xl:w-[95%] xl:pl-[100px] 2xl:w-[80%]  mt-[50px]">
        <div className="w-[200px] h-[350px] flex flex-col justify-between md:w-[85%] md:h-[100px] lg:pl-[20px] 2xl:w-[100%]">
          <div className="flex flex-col items-center justify-between md:flex-row-reverse md:h-[100px]">
            <img className='h-[110px]' src={A} alt="" />
            <img className='h-[60px]' src={B} alt="" />
            <img className='h-[60px]' src={C} alt="" />
            <img className='h-[60px]' src={D} alt="" />
          </div>
        </div>

      </div>
      <div className="lg:w-[100%] lg:h-[50px] lg:flex justify-between 2xl:w-[85%] 2xl:ml-[100px] 2xl:mt-[50px]">
        <div className="pl-[20px] text-[14px] pt-[20px] lg:w-[600px] 2xl:w-[70%]">
          <p>BMC Privacy Policy and Terms of Use |
            Code of Conduct |
            Manage My Cookie Preferences|
            Nondiscrimination Statement|
            Patient Privacy/HIPAA</p>
        </div>

        <div className="text-[14px] flex justify-center pt-[20px] 2xl:mr-[50px]">
          <p>© 2023 Boston Medical Center. All rights reserved.</p>
        </div>

      </div>

    </div>
  )
}

export default Footer
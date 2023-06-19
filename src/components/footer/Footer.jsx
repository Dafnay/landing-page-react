import "./footer.css";
import map from "../../assets/map.png";
import envelope from "../../assets/envelope.png";
import phone from "../../assets/phone.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import pinterest from "../../assets/pinterest.png";
import instagram from "../../assets/instagram.png";
import copy from "../../assets/copy.png";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-5 w-full pt-35px sm: w-400px flex-wrap">
        <div className="flex justify-evenly w-full ">
          <div className="mr-40  w-200px">
            <h5 className="flex font-semibold text-200">Contact Info</h5>
            <p className="flex flex-row justify-start items-center">
              <img className="footer-icon" src={map} /> 22 Innovation Street,
              CA, US
            </p>
            <p className="flex flex-row justify-start items-center">
              <img className="footer-icon" src={envelope} />
              office@cyncmobile.com
            </p>
            
            <p className="flex flex-row justify-start items-center">
              <img className="footer-icon" src={phone} /> +44 376 945 23
            </p>
          </div>
          <div className="mr-40 w-800px">
            <h5 className="flex font-semibold text-200">Value Links</h5>
            <p className=""> Terms % Conditions</p>
            <p className=""> Privacy Policy</p>
            <p className=""> Article Details</p>
          </div>
          <div className="mr-40 w-200px">
            <h5 className="flex font-semibold text-200">Other Apps</h5>
            <p className=""> Scientifics Calculator</p>
            <p className=""> office@cyncmobile.com</p>
            <p className=""> Music Store</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center flex-col">
            <div className="flex justify-center flex-row w-50px h-50px">
              <img className="footer-icon" src={facebook} />
              <img className="footer-icon" src={twitter} />
              <img className="footer-icon" src={pinterest} />
              <img className="footer-icon" src={instagram} />
            </div>

            <div className="flex justify-center flex-row flexw-50px h-50px">
              <p className="flex mt-10">
                Copyright <img src={copy} /> 2020 inovatik - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

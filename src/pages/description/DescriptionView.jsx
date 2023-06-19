import React from "react";
import Phone from "../../assets/header-iphone.png"
import "./descriptionView.css";
import Button from "../../components/buttons/Button";

const DescriptionView = () => {
  return (
    <>
      <div className="text-7xl flex justify-center items-center flex-col pt-40 text-center max-sm:text-5xl pt-20">
        Mobile App Landing Page
      
      <p className="text-2xl pt-10 text-slate-400 m-10 max-sm:text-2xl pt-1">
        Start focusing on your goals and get more things done with Sync mobile
        application.It ´ s the first app to harness the power of social
        connections to help you stay focused and get organized
      </p>

      <div className="flex justify-center items-center gap-3 max-sm:gap-0">
        <Button style='download-red' button_text='DOWNLOAD' className="download-red shadow-pink-500/50 px-5" />
        <Button style='download-red' button_text='DOWNLOAD' className="download-red shadow-pink-500/50 px-5" /> 
      </div>
      <img className="iphone mt-10" src={ Phone}/>
      </div>
    </>
  );
};

export default DescriptionView;

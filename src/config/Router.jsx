import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//pages
import DescriptionView from "../pages/description/DescriptionView";
import FeaturesView  from "../pages/features/FeaturesView";

const Router =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/description' element={<DescriptionView />}></Route>
                <Route path='/features' element={<FeaturesView />}></Route>



            </Routes>    
        </BrowserRouter>
    );
};

export default Router
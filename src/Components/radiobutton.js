import React from 'react';
const RadioButton = ({Name,Options})=>(
    
         <span className="" >
      {Name}
         { Options.map((planet) =>
               <span><input type='radio' key={planet.Value} value={planet.DisplayValue} /> 
                <label>{ planet.DisplayValue}</label></span>
       
               )
          }
           
        
    </span>
    
);
export default RadioButton;
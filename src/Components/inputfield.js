import React from 'react';
const input =({Name,Size,_handleChange})=>(
    <div>
        <label className="bigblue">{Name}</label>
        <input type="text" name={Name} size={Size} onChange={_handleChange}/>
    </div>
);
export default input;


// https://react-tailwindcss-datepicker.vercel.app/install#npm-install

export default CalenderTailwind

import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";

const App = () => { 
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    return (
        <Datepicker 
            value={value} 
            onChange={newValue => setValue(newValue)}
        /> 
    );
};



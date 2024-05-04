import React, { useState } from "react";

// function MyFunctionComponent(){
//     return(
//         <div>
//             <h3>
//                 This My functional Component
//             </h3>
//         </div>
//     )
// }

const MyFunctionComponent = (props) =>{
    const [count, setCount] = useState(0);
    const [student, setStudent] = useState({
        name: "Swathi",
        age: 27,
        gender: "Female"
    });

    const increment = () => {
        setCount(count + 1);
        setStudent({...student, name: "SwathiN"});
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return(
        <div>
            <h3>
                This My functional Component Arrow
            </h3>
            <p>Count: {count}</p>
            <p>{student.name}</p>
            <p>Calling Props: {props.name}, {props.age}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default MyFunctionComponent;
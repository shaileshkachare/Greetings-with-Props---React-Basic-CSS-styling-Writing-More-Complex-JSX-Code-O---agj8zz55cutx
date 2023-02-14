// write code for Welcome component here
// import Welcome from './Welcome';
// class Welcome extends React.Component{
//     render(){

//         return {
          
            
//            <h1>{Hey !}</h1>
//             <h2>Welcome to Newton School.</h2>

            
//         }
//     }
// }


import React from 'react';
const Welcome = ({name}) => {
    let sayHi = `Hey ${name}!`;
    let greetMessage = `Welcome to Newton School.`;
    return (
        <div>
            <h1>{sayHi}</h1>
            <h2>{greetMessage}</h2>
        </div>
    );
};


export default Welcome;
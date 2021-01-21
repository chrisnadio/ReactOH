// // import React from 'react';      //state cara ketiga
// import React, {useState} from 'react';   //state cara pertama & kedua
// // import '../../assets/css/button.css';   //relative path
// // import {} from 'assets/css/button.css';  //absolute path

// // cara pertama:
// // const Button = () => {
// //     return(
// //     <div>
// //         <p>Ini Tes Button cara 1</p>
// //     </div>
// //     )
// // }

// // // cara kedua:
// // function Button() {
// //     return(
// //         <div>
// //             <p>Ini Tes Button cara 2</p>
// //         </div>
// //     )
// // }


// // cara ketiga:
// // class Button extends React.Component {
// //     render() {
// //         return(
// //             <div className='button'>
// //                 <p>Ini Tes Button cara 3</p>
// //             </div>
// //             )
// //     }
// // }

// // state cara functional:
// const Button = () => {
//     const [title, setTitle] = useState('Bisa');
//     // const [a, b] = c;   //destructure variable
//     const gantiJudul = () => {
//         if (title === "Bisa" ) {
//             setTitle('Tidak');
//         } else {
//             setTitle('Bisa');
//         };
//     };
//     // const gantiJudul = (judul) => {
//     //     return setTitle(judul)
//     // };
   
    
//     return (
//         <div>
//             <p onClick={() => gantiJudul()}>{title}</p>
//         </div>
//     )

// };


// // state cara OOP:
// // class Button extends React.Component {
// //     constructor(){
// //         super();
// //         this.state = {
// //             title: 'Ini judul pertama',
// //         }
// //     }

// //     gantiJudul = (judul) => {
// //         this.setState({
// //             title: judul,
// //         })
// //     }

// //     render() {
// //         return (
// //             <div className='button'>
// //                 {/* <p>Ini tes button Cara Ketiga</p> */}
// //                 <p onClick={() => this.gantiJudul('Ini judul ketiga class')}>{this.state.title}</p>
// //             </div>
// //         )
// //     }
// // }

// export default Button;
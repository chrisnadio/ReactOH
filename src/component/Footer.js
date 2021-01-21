import React from 'react';

//cara pertama
const Footer = (props) => {
    return (
        <>  
            <p>{props.copyright}</p>
        </>
    )
}

//cara kedua
// const Footer = ({ copyright }) => {
//     return (
//         <>  
//             <p>{copyright}</p>
//         </>
//     )
// }

//cara ketiga
// class Footer extends React.Component {
//     render() {
//       return (<p>{this.props.copyright}</p>);
//     }
//   }

export default Footer;
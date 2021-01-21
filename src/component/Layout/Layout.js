import React from 'react';
import Footer from '../Footer';

//cara Functional
const Layout = () => {
    const copyFromLayout = '@Copyright All Reserved';
    return (
        <>
            <Footer copyright={copyFromLayout} />
        </>
    )
}

//cara Class
// class Layout extends React.Component{
//     render() {
//         const copyFromLayout = 'Copyright@ Dio 2021';
//         return (
//             <>
//                 <Footer copyright={copyFromLayout} />
//             </>
//         )
//     }
// }

export default Layout;
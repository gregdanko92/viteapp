import React, { Component } from "react";


function PdfResume(){
    return(
        <div className='resume-image'>
            <iframe onClick="window.open('path', '_blank', 'fullscreen=yes'); return false;"
 width='800' height='800' src="https://docs.google.com/document/d/e/2PACX-1vSWz9mblXoObYCN-4PfE-6MXQyprqocw3Ff3BBh_IW9pwxgVgPWeLVCGNEf1BDXerz3Hp0_csHGeN5R/pub"></iframe>
</div>
    )
}

export default PdfResume
// import { Document, Page } from "react-pdf";

// export default class PdfResume extends Component {
//   state = { numPages: null, pageNumber: 1 };

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   goToPrevPage = () =>
//     this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
//   goToNextPage = () =>
//     this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

//   render() {
//     const { pageNumber, numPages } = this.state;

//     return (
//       <div>
//         <nav>
//           <button onClick={this.goToPrevPage}>Prev</button>
//           <button onClick={this.goToNextPage}>Next</button>
//         </nav>

//         <div style={{ width: 600 }}>
//           <Document
//             file="../public/CV.jpg"
//             onLoadSuccess={this.onDocumentLoadSuccess}
//           >
//             <Page pageNumber={pageNumber} width={600} />
//           </Document>
//         </div>

//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     );
//   }
// }


import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";

interface PdfDownlaodProp {
  rootElementId: string;
}
const PdfDownload: React.FC<PdfDownlaodProp> = ({ rootElementId }) => {
  const downloadPdfDocument = () => {
    const input: any = document.getElementById(rootElementId);
    console.log(input.offsetWidth-100, "input.offsetWidth");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      // const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight,undefined,'FAST');
      pdf.save("download.pdf");
    });
  };
  return <button onClick={downloadPdfDocument}>Download Pdf</button>;
};

export default PdfDownload;

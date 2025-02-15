import React, { useState, useEffect } from "react";
import pdf from "../assets/Resume.pdf"; 
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Import the PDF.js worker
import { GlobalWorkerOptions } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';

GlobalWorkerOptions.workerSrc = pdfWorker;

const Resume = () => {
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setScale(0.6);
      } else if (width < 1000) {
        setScale(1);
      } else {
        setScale(1.5);
      }
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="mt-10 md:pt-10 md:mt-6 bg-primary flex flex-col items-center">
      <div className="pdf-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Document file={pdf} className="flex justify-center">
          <Page pageNumber={1} scale={scale} />
        </Document>
      </div>
      <div className="text-center mt-6 sm:mt-0">
        <a href={pdf} download>
          <button className="px-4 py-2 bg-purple-600 text-white border border-purple-600 rounded hover:bg-purple-700">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;

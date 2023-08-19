// components/PdfViewer.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PdfDocument from '../components/PDFGenerator';

const PdfViewer = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <PdfDocument />
        </div>
    );
};

export default PdfViewer;

import React from 'react';
import { Page, Document, Text, View, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';
import Header from './Header';
import TestingPage from './ContentSection';
import { content } from '../constant/data';
import LastFooterSection from "./LastFooterSection";

Font.register({
    family: 'Times-Bold',
    fontWeight: 'bold',
});

const styles = StyleSheet.create({
    Family: {
        fontFamily: 'Times-Bold',
    },
    boldText: {
        fontWeight: 'bold',
    },
    page: {
        fontFamily: 'Helvetica',
        paddingTop: 20,
        paddingBottom: 50,
        paddingHorizontal: 30,
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 10,
        color: 'blue',
    },
    content: {
        marginBottom: 8,
    },
});

// JS + react-pdf/render section
const PdfDocument = () => {
   

    let currentPageContent = []; // Track the content of the current page
    const pages = []; // Store all pages
    let firstPage = 1; // Flag to track the first page

   

    for (let i = 0; i < content.length; i++) {
        const data = content[i];

        if (data.NewPage) {
            // Create a new page with the accumulated content
            if (currentPageContent.length > 0) {
                pages.push(
                    <Page key={i} size="A4" style={styles.page}>
                        {currentPageContent}
                        
                        <View style={styles.footer} render={({ pageNumber, totalPages }) => (
                            <Text style={{ fontSize: 8, marginBottom: '10px' }}> Page {pageNumber} of {totalPages}</Text>
                        )} fixed />
                    </Page>
                );
            }
            currentPageContent = []; // Clear the current content
        }

        currentPageContent.push(
            <React.Fragment key={i}>
                {data.NewPage && (
                    <React.Fragment>
                        <Header />
                        {/* NSE View */}
                        
                        {firstPage == 1 && ( // Only display the content below Header on the first page
                            <View style={{ backgroundColor: "#C6C6C5", width: "100%", padding: "4px", textAlign: "center", marginTop: "-15px" }}>
                                <Text style={[styles.Family, { fontSize: "8px" }]}>NSE</Text>
                            </View>
                        )}
                        {firstPage += 1}
                    </React.Fragment>
                )}
                <View>
                    <TestingPage data={data} />
                </View>
            </React.Fragment>
        );

        // If it's the last iteration, add the last accumulated content as a page
        if (i === content.length - 1) {
            pages.push(
                <Page key={i} size="A4" style={styles.page}>
                    {currentPageContent}
                    <View style={styles.footer} render={({ pageNumber, totalPages }) => (
                        <Text style={{ fontSize: 8, marginBottom: '10px' }}> Page {pageNumber} of {totalPages}</Text>
                    )} fixed />
                    {/* Add the LastFooterSection component after the last data */}
                    <LastFooterSection />
                </Page>
            );

           

        }
    }

    return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <Document>
                {pages}
            </Document>
        </PDFViewer>
    );
};

export default PdfDocument;








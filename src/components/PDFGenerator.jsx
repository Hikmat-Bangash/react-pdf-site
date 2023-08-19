import { Page, Document, Text, View, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';
import Header from './Header';
import TestingPage from './TestingPage';
import { content } from '../constant/data';
// import { useState } from 'react';

Font.register({
    family: 'Times-Bold',
    fontWeight: 'bold',
});

const styles = StyleSheet.create({
    Family: {
        fontFamily: 'Times-Bold'
    },
    boldText: {
        fontWeight: 'bold'
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
        color: "blue"
    },
    content: {
        marginBottom: 8,
    },
});

const PdfDocument = () => {
    const dataArray = [];

    for (let i = 1; i <= 3; i++) {
        dataArray.push({
            title: `Item ${i}`,
            description: `Description for Item ${i}`,
        });
    }
    
    return (
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <Header />
                {/* ----- NSE VIEW --------------- */}
                    <View style={{ backgroundColor: "#C6C6C5", width: "100%", padding: "4px", textAlign: "center",marginTop: "-15px"}}>
                        <Text style={[ styles.Family, {fontSize: "8px"}]}>NSE</Text>
</View>
                    

                {content.map((data, index) => (
                        <View key={index}>
                        <TestingPage data={data} />
                           </View>
                ))}
                    <View style={styles.footer} render={({ pageNumber, totalPages }) => (
                        <Text style={{ fontSize: 8, marginBottom: '10px' }}> Page {pageNumber} of {totalPages}</Text>
                    )} fixed />
                    </Page>
                
            </Document>
        </PDFViewer>
    );
};

export default PdfDocument;

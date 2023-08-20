/* eslint-disable react/prop-types */
import { Font, Text, View, StyleSheet } from '@react-pdf/renderer';

Font.register({
    family: 'Times-Bold',
    fontWeight: 'bold',
});


const styles = StyleSheet.create({
    Family: {
        fontFamily: 'Times-Bold'
    },
    container: {
        width: "100%",
        padding: "2px",
        marginTop: "8px",
        borderBottom: "2px",
        borderColor: 'black',
        paddingBottom: "5px",
    },
    heading: {
        width: "42%",
        backgroundColor: "#C6C6C5",
        fontSize: "10px",
        marginBottom: "2px",
        padding: "3px",
    },
    SecondView: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "10px",
        alignItems: "baseline",
    },
    SecondViewLeftParent: {
        width: "53%",
        flexDirection: "column",
        justifyContent: "center",
        gap: "6px"
    },
    SecondViewLeft: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        fontSize: "9px",

    },
    SecondViewRightParent: {
        width: "46%",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "flex-end",
        gap: "6px",
       
    },
    SecondViewRight: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        fontSize: "9px",
    },
    TotalViewParent: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "15px",
        borderTop: "1px",
        borderBottom: "2px",
        borderColor: "black",
        padding: "2px",
        textAlign: "left"
    },
    TotalViewLeft: {
        width: "51%",
        flexDirection: "row",
        justifyContent: "space-around",
        fontSize: "9px",
        textAlign: "left"
    },
    TotalViewRight: {
        width: "46%",
        flexDirection: "row",
        justifyContent: "space-around",
        fontSize: "9px",
    },
    LastViewParent: {
        width: "90%",
        marginTop: "8px",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    LastVeiwWrapper: {
        width: "35%",
        flexDirection: "column",
        gap: "8px",

    },

    resultView: {
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "9px",
       
    }

});

// ------ JSX SECTION ---------
const TestingPage = ({data}) => {

    console.log(data.NewPage)


    return (
        <>
            <View  style={styles.container}>
                {/* ----- heading ------ */}
                <View style={styles.heading}>
                    <Text style={[styles.Family]}>
                        {data.heading}
                    </Text>
                </View>
                {/* second View */}
                <View style={styles.SecondView}>
                    {/* ---- left Purchase section  -----*/}
                    <View style={styles.SecondViewLeftParent}>

                    
                    {data.purchase.map((data, index) => (
                        <View key={index} style={styles.SecondViewLeft}>

                            {data?.Date == "Opening" || data?.Date == "Closing" ? <Text style={[styles.Family, { width: "17%", }]}>{data.Date}</Text> :
                                <Text style={{ width: "17%",  }}>{data.Date}</Text>
                            }

                            <Text style={{ width: "17%",  }}>{data?.Unit}</Text>

                            {data?.Date == "Opening" || data?.Date == "Closing" ? <Text style={[styles.Family, { width: "17%",  }]}>{data?.Rate}</Text> :
                                <Text style={{ width: "17%",  }}>{data?.Rate}</Text>
                            }

                            {data?.Date == "Opening" || data?.Date == "Closing" ? <Text style={[styles.Family, { width: "17%",  }]}>{data?.amount}</Text> :
                                <Text style={{ width: "17%",  }}>{data?.amount}</Text>
                            }


                        </View>
                    ))}
                    </View>
                    {/* ------ right Sale section --- */}
                    <View style={styles.SecondViewRightParent}>
                    {data.sale.map((data, index) => (
                         
                     
                    <View key={index} style={styles.SecondViewRight}>
                            {data?.Date == "Closing" || data?.Date == "Opening" ? <Text style={[styles.Family, { width: "15%", }]}>{data.Date}</Text> :
                                <Text style={{ width: "15%", }}>{data.Date}</Text>
                        }
                            
                            <Text style={{ width: "15%", }}>{data?.Unit}</Text>
                    
                            {data?.Date == "Closing" || data?.Date == "Opening" ? <Text style={[styles.Family, { width: "15%", }]}>{data?.Rate}</Text> :
                                <Text style={{ width: "15%", }}>{data?.Rate}</Text>
                        }
                        
                        
                            <Text style={{ width: "15%", }}>{data?.amount}</Text>
                        </View>
                    ))}
                    </View>
                    {/* below view is the ending tag of SecondView */}
                </View>

                {/* ----- Total View tag opening ----- */}
                <View style={styles.TotalViewParent}>
                    {/* leftOne View  */}
                    <View style={styles.TotalViewLeft}>
                        <Text style={{ width: "14%",  }}>
                                {data?.Total?.total}
                            {/* below is the dummy Text tag just for indentation */}
                            <Text style={{ color: "white", width: "14%",  }}></Text>
                        </Text>
                        <Text style={{ width: "14%",  }}>{data?.Total?.PurchaseUnit}</Text>
                        <Text style={{ color: "white", width: "14%",   }}> </Text>
                        <Text style={{ width: "14%",  }}>{data?.Total?.Purchaseamount} </Text>
                    </View>
                    {/* RightOne View  */}
                    <View style={styles.TotalViewRight}>
                        <Text style={{ color: "white", width: "14%",  }}>
                            
                        </Text>
                        <Text style={{ width: "14%",  }}>{data?.Total?.SaleUnit}</Text>
                        <Text style={{ color: "white", width: "14%",  }}> </Text>
                        <Text style={{ width: "14%",  }}>{data?.Total?.SaleAmount} </Text>
                    </View>
                    {/* -----Below is total View closing tag ----- */}
                </View>

                {/* ----- below is the Last View Tag opening ---- */}
                <View style={styles.LastViewParent}>
                    {/* nested View tag */}
                    <View style={styles.LastVeiwWrapper}>

                        <View style={styles.resultView}>
                            <Text>Gross Amount</Text>
                                <Text style={[styles.boldText, { color: "red" }]}>{data?.result?.grossAmount}</Text>
                        </View>

                        <View style={styles.resultView}>
                            <Text style={styles.boldText}>Brokerage</Text>
                                <Text style={{ color: "red", fontWeight: "bold" }}>{ data?.result?.Brokerage }</Text>
                        </View>

                        <View style={[styles.resultView, styles.Family]}>
                            <Text >Sauda Net Amt</Text>
                                <Text style={{ color: "red" }}>{data?.result?.netAmount}</Text>
                        </View>

                    </View>

                    {/* ---- below is the Last View closing Tag -------  */}
                </View>

                {/* ----- below is the container closing View Tag ----- */}
                </View>
        
        </>
    )
};

export default TestingPage;
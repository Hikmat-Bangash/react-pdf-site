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
        marginTop: "15px",
    },
    Boxwrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0px 15px 0px 15px",
        borderBottom: "2px",
        borderColor: "black"

    },
    Box: {
        width: "31%",
        flexDirection: "column",
        marginBottom: "5px"

    },
    resultContent: {
        flexDirection: "column",
        justifyContent: "space-between",
        fontSize: "10px",

    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "10px"
    },

    LastSectionContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    },

    LastSection: {
        width: "98%",
        marginTop:"10px",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    RightLastSection: {
        width: "40%",
        flexDirection: "column",
        gap: "9px",
    },
    rightContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "9px"
    }
});

// ------ JSX SECTION ---------
const Header = () => (

    <View style={styles.container}>
        {/* box wrapper */}
        <View style={styles.Boxwrapper}>
            {/* MCX SECTION */}
            <View style={styles.Box}>
                <Text style={{ padding: "3px 0px 3px 0px", backgroundColor: "#C6C6C5", fontSize: "12px", textAlign: "center" }}>MCX</Text>
                {/* gross, brok, net Amt */}

                <View style={styles.resultContent}>

                    <View style={styles.content}>
                        <Text>Gross</Text>
                        <Text>31,080.00 Cr</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>Brok</Text>
                        <Text>0.00 Dr</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>Net Amt</Text>
                        <Text>31,080.00 Cr</Text>
                    </View>

                </View>

            </View>

            {/* NSE SECTION */}
            <View style={styles.Box}>
                <Text style={{ padding: "3px 0px 3px 0px", backgroundColor: "#C6C6C5", fontSize: "12px", textAlign: "center" }}>NSE</Text>
                {/* gross, brok, net Amt */}

                <View style={styles.resultContent}>

                    <View style={styles.content}>
                        <Text>Gross</Text>
                        <Text>0.00 Dr</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>Brok</Text>
                        <Text>0.00 Dr</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>Net Amt</Text>
                        <Text>0.00 Dr</Text>
                    </View>

                </View>

            </View>


            {/* NCDEX SECTION */}
            <View style={styles.Box}>
                <Text style={{ padding: "3px 0px 3px 0px", backgroundColor: "#C6C6C5", fontSize: "12px", textAlign: "center" }}>NCDEX</Text>
                {/* gross, brok, net Amt */}

                <View style={styles.resultContent}>

                    <View style={styles.content}>
                        <Text>Gross</Text>
                        <Text>0.00 Dr</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>Brok</Text>
                        <Text>0.00 Dr</Text>
                    </View>
                    <View style={styles.content}>
                        <Text>Net Amt</Text>
                        <Text>0.00 Dr</Text>
                    </View>

                </View>

            </View>


        </View>

        {/* LAST SECTION */}
        <View style={styles.LastSectionContainer}>
        
        <View style={styles.LastSection}>
            {/* left side */}
            <Text style={{width: "10%", fontSize: "8px", marginTop: "40px"}}>E.&.O.E</Text>
            
            <View style={styles.RightLastSection}>
                
                <View style={styles.rightContent}>
                        <Text>Gross Amount</Text>
                        <View style={{ flexDirection: "row", gap: "15px" }}>
                            <Text>31,080.00  </Text>
                            <Text >Cr</Text>
                        </View>
                </View>

                <View style={styles.rightContent}>
                        <Text>Brokeraget</Text>
                        <View style={{ flexDirection: "row", gap: "15px" }}>
                            <Text>0.00 </Text>
                            <Text style={{color: "white"}}>Dr</Text>
                        </View>
                </View>

                <View style={styles.rightContent}>
                        <Text style={{ fontFamily: "Times-Bold", }}>Net Bill Amt</Text>
                        <View style={{flexDirection: "row", gap: "15px"}}>
                            <Text>31,080.00 </Text>
                            <Text style={{ fontFamily: "Times-Bold", }}>Cr</Text>
                        </View>
                </View>

                    <View style={styles.rightContent}>
                        
                        <Text>Previous Balance</Text>
                        <View style={{ flexDirection: "row", gap: "15px" }}>
                            <Text>0.00 </Text>
                            <Text style={{color: "white"}}>Dr</Text>
                        </View>
                </View>

                <View style={styles.rightContent}>
                        <Text style={{ fontFamily: "Times-Bold", }}>Party Net Amt</Text>
                        <View style={{ flexDirection: "row", gap: "15px" }}>
                            <Text>31,080.00</Text>
                            <Text style={{ fontFamily: "Times-Bold", }}> Cr</Text>
                        </View>
                </View>

                    <View style={{ flexDirection: "row", gap: "17px", marginTop: "5px", }}>
                        <Text style={{fontSize :"7px", }}>For</Text>
                    <Text style={{ fontSize: "12", fontFamily: "Times-Bold" }}>SOFT</Text>
                    </View>
            </View>

        </View>

        </View>   

        {/* container ending tag */}
    </View>
);

export default Header
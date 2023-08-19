import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    header: {
        textAlign: 'center',
        marginBottom: 20,
        // backgroundColor: 'yellow', // Change header background color
        flexDirection: 'column', // Arrange content horizontally
    },
    headingText1: {
        borderBottom: "2px",
        borderBottomColor: "black",

    },
    subHeading: {
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "10px",

    },
    subHeading2: {
        marginTop: "3px",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "10px",
    },
    TagContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "10px",
        width: "100%",
        marginTop: "5px",
        borderBottom: "2px",
        borderBottomColor: "black",
    },
    HeaderTagLeft: {
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "10px",
        width: "50%",
        marginBottom: "5px",
        textDecoration: "underline"
    },
    HeaderTagRight: {
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "10px",
        width: "45%",
        textDecoration: "underline"
    }
});

// ------ JSX SECTION ---------
const Header = () => (
    <View style={styles.header}>
        <View style={styles.headingText1}><Text style={{
            fontSize: 12,
            fontWeight: "bold",
            marginBottom: "8px",
        }}>SOFT</Text></View>
        {/* second sub-heading */}
        <View style={styles.subHeading}>
            <Text style={{ fontWeight: "bold", width: "30%", backgroundColor: "#C6C6C5", padding: "4px", textAlign: "left", fontSize: "9px", }}>RICKY</Text>

            <Text style={{ fontWeight: "bold", width: "45%", backgroundColor: "#C6C6C5", padding: "4px", textAlign: "right", fontSize: "8px" }}>Account Statement From 19/03/2023 To 25/03/2023</Text>
        </View>
        {/* Third Sub-Heading */}
        <View style={styles.subHeading2}>
            <Text style={{ fontWeight: "bold", width: "50%", backgroundColor: "#C6C6C5", padding: "4px", textAlign: "center", }}>Purchase</Text>
            <Text style={{ fontWeight: "bold", width: "45%", backgroundColor: "#C6C6C5", padding: "4px", textAlign: "center" }}>Sale</Text>
        </View>
        {/*------ TAGS View --------  */}

        <View style={styles.TagContainer}>
        {/* ---- left side ------ */}
        <View style={styles.HeaderTagLeft}>
            <Text style={{fontWeight: 'bold'}}>
                Date
            </Text>
          
                <Text style={{marginRight: "8px"}}> Unit</Text>
                <Text>Rate</Text>
        
            <Text>Amount</Text>
        </View>

        {/* ------------ RIGHT SIDE ------------- */}
    <View style={styles.HeaderTagRight}>
            <Text style={{fontWeight: 'bold'}}>
                Date
            </Text>
            
                <Text style={{marginRight: "8px"}}> Unit</Text>
                <Text>Rate</Text>
            
            <Text>Amount</Text>
            </View>
            
        </View>

    </View>
);

export default Header
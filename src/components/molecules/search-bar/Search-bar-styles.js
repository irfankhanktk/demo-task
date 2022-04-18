import { StyleSheet } from "react-native";
import colors from "../../../services/colors";
import { mvs } from "../../../services/metrices";

export const styles = StyleSheet.create({
    container:{
        marginTop:mvs(30),
        marginHorizontal:mvs(15),
        borderRadius:mvs(10),
        paddingHorizontal:mvs(10),
        flexDirection:'row',
        alignItems:'center',
        borderRadius:mvs(10),
        backgroundColor:colors.secondary
    },
    input:{
        width:'90%',
        color:colors.text,
        paddingLeft:mvs(12),
        paddingVertical:mvs(7),
    }
});
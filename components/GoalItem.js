import {StyleSheet, View, Text} from 'react-native';

function GoalItem(props){
    return(
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>
                {/* Data Binding From Props  */}
                {props.htext}
            </Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8, 
        borderRadius: 6,    
        backgroundColor: '#5e0acc',
    }, 
    goalText:{
        color: 'white',
    },
});
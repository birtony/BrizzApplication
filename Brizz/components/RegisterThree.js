import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/FontAwesome';

class RegisterTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false
        };
    }
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backgroundCircle}></View>
                <View style={styles.roundedRectangle}></View>
                <Text style={{ color: 'black', fontFamily: 'Optima-Bold', fontSize: 30, position: 'absolute', top: 300 }}>Account Setup Two</Text>
                <Text h3 style={{ position: 'absolute', top: 350, left: 60, fontFamily: 'Optima-Bold', color: '#F28E00' }}>First Name</Text>
                <Input
                    placeholder='First Name'
                    inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
                    containerStyle={{ borderWidth: 2, borderRadius: 50, borderColor: '#F28E00', height: 70, position: 'absolute', top: 385, width: 350 }}
                />
                <Text h3 style={{ position: 'absolute', top: 475, left: 60, fontFamily: 'Optima-Bold', color: '#F28E00' }}>Last Name</Text>
                <Input
                    placeholder='Last Name'
                    inputContainerStyle={{ borderBottomWidth: 0, top: 13 }}
                    containerStyle={{ borderWidth: 2, borderRadius: 50, borderColor: '#F28E00', height: 70, position: 'absolute', top: 510, width: 350 }}
                />
                <Text h3 style={{ position: 'absolute', top: 600, left: 60, fontFamily: 'Optima-Bold', color: '#F28E00' }}>Date of Birth</Text>
                <Button title="Pick Date of Birth" onPress={this.showDateTimePicker} buttonStyle={{ left: -140, top: 200, position: 'absolute', backgroundColor: '#F28E00' }} />
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('RegisterFour')}>
                    <Icon
                        type='font-awesome'
                        name='check'
                        size={50}
                        style={{position:'absolute', top: 750, right: 20}}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('RegisterTwo')}>
                    <Icon
                        type='font-awesome'
                        name='arrow-left'
                        size={50}
                        style={{position:'absolute', top: 750, left: 20}}
                    />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
export default RegisterTwo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F28E00',
        alignItems: 'center',
        justifyContent: 'center',
    },
    roundedRectangle: {
        width: 390,
        height: 525,
        borderRadius: 100 / 5,
        backgroundColor: 'white',
        position: 'absolute',
        top: 300,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5
    },
    backgroundCircle: {
        width: 425,
        height: 600,
        borderRadius: 100 / 2,
        backgroundColor: 'white',
        position: 'absolute',
        top: 350
    },
})
import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Platform, TouchableOpacity } from 'react-native'
import DateTimePicker from "@react-native-community/datetimepicker"
import moment from "moment"
import "moment/locale/pt-br"
import database from "../config"

export default class NewTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            desc: "",
            date: new Date(),
            showDatePicker: true
        }
    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker
            value={this.state.date}
            onChange={(_, date) => {
                this.setState({
                    date: date,
                    showDatePicker: false
                })
            }}
            mode="date" />
        const dateString = moment(this.state.date).format("ddd,D[de]MMMM[de]YYYY")
        if (Platform.OS === "android") {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            )
        }
        return datePicker
    }

    addTask = () => {
        database.collection("Task").add({
            description: this.state.desc,
            status: false,
            date: this.state.date
        })
        this.props.navigation.navigate("Task")
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>
                    description
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="ex: Fazer projetos"
                    onChangeText={(desc) => this.setState({ desc: desc })}
                    value={this.state.desc} />
                {this.getDatePicker()}
                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => {
                        this.addTask()
                    }}
                >
                    <Text style={styles.iconButton}>
                        Salvar
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    label: {
        width: "90%",
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
        color: "#F92E6A"
    },
    input: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#F92E6A",
        marginLeft: "auto",
        marginRight: "auto"
    },
    iconButton: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    date: {
        fontSize: 20,
        marginLeft: 15
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#F92E6A",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})
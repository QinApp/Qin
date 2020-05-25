/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,
    Image,ScrollView, View,Switch,TouchableOpacity,Button} from 'react-native';


let id = 0;

export default class Second extends Component {


    constructor() {
        super();

        this.state = {
            todo: [],
        };
    }

    render() {

        return (

            <View style={{
                flexDirection: 'column',
                margin: 50
            }}>
                {/*<Text style={styles.proper}*/}
                {/*onPress={this.change}>{this.state.data}</Text>*/}

                {/*<Text style={styles.proper}>Attendance made easy!</Text>*/}
                {/*<Text style={styles.proper}>{instructions}</Text>*/}

                <TouchableOpacity
                    style={{backgroundColor : '#DDF567'}}
                    onPress={() => this.addData()}>
                    <Text
                        style={{alignContent:'centre'}}
                    >ADD</Text>
                </TouchableOpacity>

                <ScrollView>
                    {this.state.todo.map(todo =>(
                        <Todo
                            onChange={() => this.checkChange(todo.id)}
                            onRemove={() => this.removeData(todo.id)}
                            todo = {todo}/>
                    ))}
                </ScrollView>
            </View>
        )
    }


    checkChange(id) {

        this.setState({todo : this.state.todo.map(
                todo =>
                {

                    if(todo.id!==id)
                        return todo;

                    return{
                        text: "Open",
                        id: todo.id,
                        checked: !todo.checked,
                    };

                }
            )}
        )}


    addData(){
        id += 1;
        this.setState({todo: [...this.state.todo,{id : id,checked : false,text:'New Item!'}]
        })
    }

    removeData(id){
        this.setState({
            todo : this.state.todo.filter(todo =>
            {
                if(todo.id!==id)
                    return todo;
            })
        })
    }
}

const Todo = (props) => (

    <View style={{flexDirection: 'column', flex:1}}>
        <Switch
            value={props.todo.checked}
            onValueChange={() => props.onChange()}/>
        <Text>{props.todo.text}</Text>
        <Button title={"Delete"} onPress={() => props.onRemove()}/>
    </View>
);


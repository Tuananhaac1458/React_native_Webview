import React, { Component } from 'react';
import { Image, View, FlatList, Text, TextInput, Button } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import List_His from './CustomList/ListCustom';
export default class User extends Component {
    constructor(props) {
        super(props)
        this._onclickk = this._onclickk.bind(this)
        this.state = {
            uri: 'data:image/jpeg;base64,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',
            text: '',
            his: []

        }
    }

    // static navigationOptions = {
    //   title: 'Welcome',
    // };
    componentDidMount() {
        RNFetchBlob.fetch('GET', 'http://10.37.147.117:3000/captcha?bank=vcb', {
            Authorization: 'Bearer access-token...',
            // more headers  ..
        }).then((res) => {
            let base64Str = res.base64()
            this.setState({
                uri: 'data:image/jpeg;base64,/'+base64Str
            })
            console.log('assssssssssssssssscc', res)
        })


    }
    _onclickk() {
        RNFetchBlob.fetch('GET', 'http://10.37.147.117:3000/danhsachgiaodich?trspage=2', {
            Authorization: 'Bearer access-token...',
            // more headers  ..
        }).then((res) => {
            let ax = res.json();

            this.setState({
                his: ax
            })
            console.log('hissssssssss', this.state.his)
        })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={{
                    flex: 1
                }}
            >

                <Image
                    style={{ width: 87, height: 25 }}
                    source={{ uri: this.state.uri }}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text: text })}
                    value={this.state.text}
                />
                <Button
                    onPress={e => {
                        console.log("aaaaaa", this.state.text);
                        this._onclickk()
                    }}
                    title="LOGIN"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
               
                <List_His
                    itemlist={this.state.his}
                >
                </List_His>
               
            </View>
        );
    }
}


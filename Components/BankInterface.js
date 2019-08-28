/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Button
} from 'react-native';
import { WebView } from 'react-native-webview';
import RNFetchBlob from 'react-native-fetch-blob'



export default class Page extends Component {
  

  isError = (e) => {
    console.log("err" + e)
  }
  
  render() {
    return (
      
      <View style={styles.container}>
        <Webservice 
          style={styles.viewOneservice}
          userAgent = "Mozilla/5.0 (Linux; Android 9; SM-G950F Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.157 Mobile Safari/537.36"
          isError = {this.isError}
        ></Webservice>
        <Webservice 
          style={styles.viewOneservice}
          userAgent = "Mozilla/5.0 (Linux; Android 5.1; A37f Build/LMY47V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.93 Mobile Safari/537.36"
          isError = {this.isError}
        ></Webservice>
      </View>
    );
  
      
  }
}
class Webservice extends Component {
  constructor(props) {
    super(props);
    this.ontextchang = this.ontextchang.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
    this.xemsodu = this.xemsodu.bind(this);
    this.xemsaoke = this.xemsaoke.bind(this);
    this.injecjs = this.injecjs.bind(this);
    this.postxaoke = this.postxaoke.bind(this);
    this.demo = this.demo.bind(this);
    this.de = this.de.bind(this);
    this.state = {
      uri: 'https://www.vietcombank.com.vn/IBanking2015/55c3c0a782b739e063efa9d5985e2ab4/Account/Login',
      message: 0,
      urlll: '',
      strcaptra: '',
      reload: '',
      aaa: '',
      isExistsLoad: 'true',
      isOne: 'true',
      datalist: '',
      request: false
    }
  }

  componentDidMount() {
  }
  onVideoSelect() {
    this._refWebView.injectJavaScript(`document.getElementsByClassName("btn-dangnhap")[0].click();`),
      console.log("aaaaaaaaaaaa", this.state.strcaptra)
    //this._refWebView.reload();
  }

  demo() {
    this._refWebView.injectJavaScript(`
 var aaa  = {
  "aaa":aaa,
};
var bbb = JSON.stringify(aaa);
window.ReactNativeWebView.postMessage(bbb);
 `)
  }

  injecjs() {
    console.log("assaxxxxxxxxxxxx", "aas")
    this._refWebView.injectJavaScript(`
    window.location="https://www.vietcombank.com.vn/ibanking2015/b73ec798b1faa596d6f937f0f33029a7/thongtintaikhoan/taikhoan/danhsachtaikhoan";
  `)
    console.log("dddddddddddddddddd", "aasaa")


  }

  xemsodu() {
    console.log("mmmmmmm", this.state.isExistsLoad);
    if (this.state.isExistsLoad === 'true') {
      console.log('xxxxcccc', this.state.isExistsLoad)
      this._refWebView.injectJavaScript(`
      var isExistsLoading = false;
         setInterval(function() {
        var ele = document.getElementsByClassName("loading-indicator");
        var isExists = false;
        for(var i = 0; i < ele.length; i++ ) {
          if(!document.body.contains(ele[i])) {
            continue;
          }
          isExists = true; 
          break;
        }
        if( isExists !== isExistsLoading){
        isExistsLoading = isExists;
         var load={
          'load':'flasee'
        }
        if(!isExistsLoading){
        window.ReactNativeWebView.postMessage(JSON.stringify(load));
      }
      }
      },100)
`)
    }
  }

  de() {
    console.log('issssssssssssssss', this.state.isExistsLoad)
    this._refWebView.injectJavaScript(
      `
           document.getElementsByClassName("btn btn-full")[0].click();
           `
    )

  }

  xemsaoke() {
    this._refWebView.injectJavaScript(`
    setInterval(function(){
      var one11 = 1;
      var isExistsLoading = false;
      var isTable = document.getElementById("datadetailts").rows.length;
      var isError = document.getElementsByClassName("mesError").length;

      if(isError === 0){
        setInterval(function() {
          var ele = document.getElementsByClassName("loading-indicator");
          var isExists = false;
          for(var i = 0; i < ele.length; i++ ) {
            if(!document.body.contains(ele[i])) {
              continue;
            }
            isExists = true; 
            break;
          }
          if( isExists !== isExistsLoading ){
          isExistsLoading = isExists;
           var load2={
            'load2':'flasee',
            'co':'as'
          };
          if(!isExistsLoading && isTable === 0 && one11 === 1){
           // console.log(load2);
           window.ReactNativeWebView.postMessage(JSON.stringify(load2));
           one11 === 1
          }
        }
        },100)
      }else {
        var load2={
          'load2':'err',
          'co':'as'
        };
        window.ReactNativeWebView.postMessage(JSON.stringify(load2));
      }
      document.getElementById("btnxemsaoke").click();
    },30000)
    `)

  }

  postxaoke() {

       this._refWebView.injectJavaScript(`
       var oTable = document.getElementById('datadetailts');
        var rowLength = oTable.rows.length;
        var DataJsons='';
        //var du = rowLength % 10;
        //loops through rows
        var lengthh = {
        'length':rowLength
        };
        window.ReactNativeWebView.postMessage(JSON.stringify(lengthh));
        for (i = 0; i < rowLength-1; i++){
        //gets cells of current row
        var oCells = oTable.rows.item(i).cells;

        //gets amount of cells of current row
        DataJsons = DataJsons + oCells.item(0).innerHTML+'|'+oCells.item(1).innerHTML+'|'+oCells.item(2).innerHTML+'|'+oCells.item(3).innerHTML+'||';
        if( i>0 && i%10 === 0){
        var OnegdJS = {
        'onegd':DataJsons
        };
        window.ReactNativeWebView.postMessage(JSON.stringify(OnegdJS));
        DataJsons=''; 
        }
        if(i === rowLength-2){
        var OnegdJS = {
        'onegd':DataJsons
        };
        window.ReactNativeWebView.postMessage(JSON.stringify(OnegdJS));
        }
        }
        
      if(rowLength.length === 0){
        
        var OnegdJS = {
          'onegd':"0"
          };
          window.ReactNativeWebView.postMessage(JSON.stringify(OnegdJS));
        }
     
    `)
       
  }


  ontextchang(text) {
    this.state.strcaptra = text
    this._refWebView.injectJavaScript(`document.getElementsByName('captcha')[0].value = "${this.state.strcaptra}";`)
    console.log("ssssssssssssss", text)
  }
  render(){
    var { userAgent } = this.props;
    console.log( 'xxxxxxxttttttttttt',userAgent )
    return(
      <View style={styles.container}>

        <WebView
          onError = {(e) => {
            console.log( '1111111111111111111222222222' )           
          //  () => this.props.isError(e);
          }}
          renderError={errorName => console.log('ERROR', errorName)}
          userAgent = {userAgent}
          ref={e => this._refWebView = e}
          onNavigationStateChange={e => {
            console.log("eeeeeeeee", e)
            if (e.loading === false) {
              return;
            }
            if (e.url.indexOf("thongtintaikhoan/") < 0 && e.url.indexOf("/Login") < 0) {
              this.injecjs()
              console.log('-------------------', "asdadsadsadsadsasad")
              return;
            }
            // console.log('aaaaaaaaaaaaaaaaaaaaaaaaa',"asdadsadsadsadsasad")
            if (e.url.indexOf("/thongtintaikhoan/") > 0 && e.url.indexOf("?AID") < 0) {
              this.xemsodu();
              return;
            }
            // if(e.url.indexOf("/ChiTietTaiKhoan") < 0){
            //   return;
            // }
            console.log("xxxxxxxxxx", e)
            // this.demo();
            // if(this.state.aaa==='aaa'){

            // }
            if (e.url.indexOf("?AID") < 0) {
              return;
            }
            this.xemsaoke();
            // this.postxaoke();
            console.log("sssssssssssssss", 'xxxxxx ');
          }}
          source={{ uri: this.state.uri }}
          onMessage={(event) => {
            const xx = JSON.parse(event.nativeEvent.data);
            console.log('data........', event.nativeEvent.data)
            console.log('josnnnnnn........', xx)
            console.log('refffffffff:', xx.ref)

            this.setState({
              urlll: xx.img,
              aaa: xx.aaa,
            })

            if (xx.length && xx.length !== 0) {

              console.log('lengthhhhhhh', xx.length)
              console.log('refffffffff:......................')


            }
            if (xx.onegd && xx.onegd !== "0") {
              console.log('lengthhhasdsadsdsdsdhhhh', xx.onegd)

              //gui socket data
              const socket = new WebSocket('ws://10.37.147.141:3000');
              //  http://1.37.147.141:3000
              // Connection opened
              socket.addEventListener('open', function (event) {
                socket.send(

                  JSON.stringify({
                    option: 'motngay',
                    data: xx.onegd
                  })
                );
              });
              console.log('4456546454', 'asdsd')
              socket.addEventListener('message', function (event) {
                console.log('Message from server ', event.data);
              });
            }

            if (xx.load) {

              this.de()
            }
            if (xx.load2 === "flasee" && this.state.isOne === 'true') {
              this.state.isOne = '1';
              this._refWebView.injectJavaScript(`
              document.getElementById("NgayBatDauText").value = "05/06/2019";
              document.getElementById("NgayKetThucText").value = "07/08/2019";
               document.getElementById("btnxemsaoke").click();
            `)
              console.log('llllllll', "asssddddasd")
            }
            if(xx.load2 === "err"){
              this.props.isError();
            }

            if (xx.co) {
              console.log('33333333333333', "asssddddasd")

              this.postxaoke();
            }
            

          }}
          onLoadEnd={e => {
            if (this._refWebView) {
              console.log('aassasasas', this.state.strcaptra)
              this._refWebView.injectJavaScript(`
          document.getElementsByName("username")[0].value = "14718997A52";
          document.getElementsByName("pass")[0].value = "Ta190499";
    var a = document.getElementById('captchaImage').src;
    var img  = {
      "img":a,
    };
    var b = JSON.stringify(img);
    window.ReactNativeWebView.postMessage(b);
           document.getElementsByName('captcha')[0].value = "${this.state.strcaptra}";`)
            }

          }}

          style={{ marginTop: 20 }}>
        </WebView>
        <View style={styles.view}>
          <PageRed urll={this.state.urlll}
            ontextchang={this.ontextchang}
            onclickk={this.onVideoSelect}>


          </PageRed>
        </View>
      </View>
    )
  }
}

class PageRed extends Component {
  constructor(props) {
    super(props);
    this.doSomethingWith = this.doSomethingWith.bind(this)
    this.state = {
      urlimg: '',
      text: '',

    }
  }
  componentDidMount() {
    console.log('urllllll:', this.props.urll)

    // if(this.urlll === xx.img){
    //   ImgToBase64.getBase64String(this.urlll)
    //   .then(base64String => doSomethingWith(base64String))
    //   .catch(err => doSomethingWith(err));
    // }
  }

  componentDidUpdate() {

    console.log('oooooooo:', this.props.urll)


    RNFetchBlob.fetch('GET', this.props.urll, {
      Authorization: 'Bearer access-token...',
      // more headers  ..
    }).then((res) => {
      // the conversion is done in native code
      let base64Str = res.base64()
      // the following conversions are done in js, it's SYNC
      let text = res.text()

      let base64 = 'data:image/jpeg;base64,' + base64Str;
      console.log('12222222222: base64', base64);
      console.log('222222222222222: base64', base64.length);
      console.log('aaaaaaccccccc', res);

      // const data = new FormData();
      // data.append(
      //   "file",
      //   JSON.stringify({
      //     type: 'image/jpeg',
      //     name: 'hinh.jpg',
      //     size: base64.length,
      //     data: base64
      //   })
      // )

      console.log('v---------------------', '123')
      RNFetchBlob.fetch('POST', 'http://1.37.147.141:3000/captcha?bankID=vcb',
        {
          // 'Accept' : 'application/json',
          'Content-Type': 'multipart/form-data',
        }, [
          {
            name: '1',
            filename: '1.jpg',
            type: 'image/jpeg',
            data: base64Str
          }]
      )
        .then((responseJson) => {
          console.log('xxxxxxxxxxxxxxxxxxssssss', responseJson.text());
        })
        .catch((err) => {
          console.log('err connect:', error);
        });

    })
      // Status code is not 200
      .catch((errorMessage, statusCode) => {
        // error handling
        console.log('12222222222', errorMessage);
        console.log('12222222222', statusCode);
      })

    console.log('12222222222', 'final');
  }


  doSomethingWith(base64String) {
    console.log('kkkkkkk', base64String);
  }
  render() {
    return (
      <View>
        <Image
          style={{ width: 140, height: 50, padding: 10 }}
          source={{ uri: this.props.urll }}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.props.ontextchang(text)}
        // value={this.state.text}
        />
        <Button
          onPress={e => {
            console.log("aaaaaa", this.state.text);
            this.props.onclickk()
          }}
          title="LOGIN"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  view: {
    backgroundColor: "red",
    height: 120,
    right: 0,
    position: "absolute",
    bottom: 0,
    left: 0
  },
  viewOneservice:{
    flex: 1,
    height: 300,
    backgroundColor: "blue",
  }
});



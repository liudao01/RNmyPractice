import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Modal,
    Text,
    ListView,
    Platform,
    Dimensions,
    StyleSheet,
    RefreshControl,
    Alert,
    TextInput
} from 'react-native';
import _ from 'lodash';
import myCityData from '../res/Mycity.json'
import NavigationBar from './compont/NavigationBar'

const {width, height} = Dimensions.get('window')
const SECTIONHEIGHT = 30, ROWHEIGHT = 40

//这是利用lodash的range和数组的map画出26个英文字母


let city = []//城市的数组 里面放的是对象
var totalheight = [];//每个字母对应的城市和字母的总高度  比如所有a字母中数据的高度
var that = null;//这个js

var myLetters = [];//我的字母数组
var myDataBlob = {};//获取到的数据
var mySectionIDs = []; //组id
var myRowIDs = [];//组内
var cityData = [];//获取到的数据
var totalNumber = 10;//总条数数据
var Util = require('./util/util')
export default class CityList extends Component {
    constructor(props) {
        super(props);
        // 获取组中数据
        var getSectionData = (myDataBlob, mySectionIDs) => {
            return myDataBlob[mySectionIDs];
        };
        // 获取行中的数据
        var getRowData = (myDataBlob, mySectionIDs, myRowIDs) => {
            // console.log(`行中数据${myDataBlob[myRowIDs]}`);
            return myDataBlob[myRowIDs];
        };
        this.state = {
            dataSource: new ListView.DataSource({
                getSectionHeaderData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            }),
            isLoading: true
        }
        that = this;
    }

    //加载数据
    loadData = () => {

        // var thiz = this;
        Util.post('http://ovji4jgcd.bkt.clouddn.com/Mycity.json', {},
            (ret) => {
                // console.log(ret);
                if (ret.resCode == 1 && ret.data.length > 0) {

                    console.log('成功')
                    cityData = ret.data;
                    console.log(cityData);
                    totalNumber = ret.totalNumber;
                    //关闭对话框
                    // thiz.setState({
                    //     isLoading: false,
                    // })
                    // thiz._fetchGoodsByCategory(ret.data.assortment[0].cate_id);

                    //一系列的操作 遍历数组
                    for (let i = 0; i < cityData.length; i++) {
                        var mysectionName = 'Section_' + i;
                        let cityMode = cityData[i].data;
                        let zimu = cityData[i].zimu;
                        mySectionIDs.push(mysectionName)
                        myRowIDs[i] = [];
                        var innerLoop = cityData[i].data; //内循环中的城市
                        myDataBlob[mysectionName] = zimu;//把字母放入总数据
                        myLetters.push(zimu)//把字母放入用于右边的字母列表

                        for (let jj = 0; jj < innerLoop.length; jj++) {
                            let rowName = i + '_' + jj;
                            myRowIDs[i].push(rowName);
                            myDataBlob[rowName] = innerLoop[jj];
                        }
                        var eachheight = SECTIONHEIGHT + ROWHEIGHT * cityMode.length
                        totalheight.push(eachheight)
                    }

                    //关闭对话框 设置数据源
                    console.log('打印了');
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRowsAndSections(myDataBlob, mySectionIDs, myRowIDs),
                        isLoading: false

                    })
                }
            });


    }

    //返回箭头
    handleBack = () => {
        //把任务栈顶部的任务清除
        this.props.navigation.goBack();
    }


    //左边的箭头
    getNavLeftBtn = () => {
        return <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.handleBack}>
                <Image source={require('../res/image/ic_arrow_back_white_36pt.png')}
                       style={{width: 24, height: 24}}/>
            </TouchableOpacity>
        </View>;
    }


    //页面渲染加载完调用
    componentDidMount() {
        this.loadData();

    }

    renderRow(rowData, rowId) {
        return (
            <TouchableOpacity
                key={rowId}
                style={{height: ROWHEIGHT, justifyContent: 'center', paddingLeft: 20, paddingRight: 30}}
                onPress={() => {
                    that.changedata(rowData)
                }}>
                <View style={styles.rowdata}><Text style={styles.rowdatatext}>{rowData}</Text></View>
            </TouchableOpacity>
        )
    }

    //设置组
    renderSectionHeader = (sectionData, sectionID) => {
        return (
            <View style={{height: SECTIONHEIGHT, justifyContent: 'center', paddingLeft: 5, backgroundColor: 'gray'}}>
                <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 10}}>
                    {sectionData}
                    {/*{console.log(`sectionData = ${sectionData}`)}*/}
                </Text>
            </View>
        )
    }
    // render ringht index Letters
    renderLetters(letter, index) {
        return (
            <TouchableOpacity key={index} activeOpacity={0.6} onPress={() => {
                this.scrollTo(index)
            }}>
                <View style={styles.letter}>
                    <Text style={styles.letterText}>{letter}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    //回调改变显示的城市
    changedata = (cityname) => {
        console.log(this.props.changeCity);
        console.log(this.state.changeCity);
        // this.state.changeCity(cityname);
        this.handleBack;
    }

    //touch right indexLetters, scroll the left
    scrollTo = (index) => {
        let position = 0;
        for (let i = 0; i < index; i++) {
            position += totalheight[i]
        }
        this._listView.scrollTo({
            y: position
        })
    }


    //做一些清除操作 避免再次进入会有数据异常
    componentWillUnmount() {
        myLetters = [];
        myDataBlob = {};//获取到的数据
        mySectionIDs = []; //组id
        myRowIDs = [];//组内
        cityData = [];//获取到的数据
    }

    render() {
        return (
            <View style={{height: Dimensions.get('window').height, marginBottom: 10}}>
                <NavigationBar
                    title="选择城市"
                    leftButton={this.getNavLeftBtn()}
                ></NavigationBar>

                {/*<View style={styles.wrapSearch}>*/}

                <View style={styles.searchBox}>
                    <Image source={require('../res/image/search_bar_icon_normal.png')} style={styles.searchIcon}/>
                    <TextInput style={styles.inputText}
                               underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                               placeholder='请输入城市名称或或首字母'/>
                </View>
                {/*</View>*/}
                <ListView
                    contentContainerStyle={styles.contentContainer}
                    ref={listView => this._listView = listView}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                    enableEmptySections={true}
                    initialListSize={totalNumber}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isLoading}
                            tintColor="#63B8FF"
                            title="正在加载..."
                            titleColor="#63B8FF"
                            colors={['#63B8FF']}
                        />
                    }
                />
                <View style={styles.letters}>
                    {myLetters.map((letter, index) => this.renderLetters(letter, index))}
                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    contentContainer: {
        width: width,
        paddingBottom: 20,
        backgroundColor: 'white',
    },
    letters: {
        position: 'absolute',
        height: height,
        top: 0,
        bottom: 0,
        right: 10,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    letter: {
        height: height * 3.3 / 100,
        width: width * 3 / 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    letterText: {//右边list字母的样式
        textAlign: 'center',
        fontSize: height * 1.1 / 50,
        color: 'black'
    },
    rowdata: {//下划线的样式
        borderBottomColor: '#faf0e6',
        borderBottomWidth: 0.5
    },
    rowdatatext: {
        color: 'gray',
    },
    searchBox: {//最外层搜索框包裹
        height: 35,
        borderColor: 'black',
        flexDirection: 'row',   // 水平排布
        borderRadius: 10,  // 设置圆角边
        backgroundColor: '#FFF',
        borderWidth: 0.8,
        borderRadius: 10,
        borderColor: 'gray',
        alignItems: 'center',
        marginLeft: 8,
        paddingTop: 0,
        paddingBottom: 0,
        marginRight: 8,
        marginTop: 5,

    },
    searchIcon: {//搜索图标
        height: 20,
        width: 20,
        marginLeft: 5,
        resizeMode: 'stretch'
    },
    inputText: {//搜索框
        backgroundColor: 'transparent',
        fontSize: 13,
        paddingBottom: 0,
        paddingTop: 0,
        flex: 1,
    },

})
/**
 * Created by sujiexu on 17/4/19.
 */
import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

//模拟数据
let MOCKED_MOVIE_DATA= [
    {title:'速度与激情',year:'2017',posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}},
];
const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
export default class Movie extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
        this.fetchData = this.fetchData.bind(this);
    }
    //组件加载完成
    componentDidMount() {
        this.fetchData();
    }
    //请求数据
    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            });
    }
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影数据……
                </Text>
            </View>
        );
    }
    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }
    render(){
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        console.log("data",this.state.dataSource);
        console.log("renderRow",this.renderMovie)
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie} //调用写好的单个模板
                style={styles.listView}
            />
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});
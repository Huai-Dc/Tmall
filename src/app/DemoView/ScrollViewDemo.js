/**
 * Created by sujiexu on 17/5/3.
 */
import React,{ Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native';

let img = require('../../static/Image/Demo/320x480.jpg');
class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return(
            <View>
                <View>
                    <Text>12121212</Text>
                </View>
                <ScrollView horizontal={true} style={{height:400}}>
                    <Text style={{fontSize:96}}>Scroll me plz</Text>
                    <Image source={img} />
                    <Image source={img} />
                    <Image source={img} />
                    <Image source={img} />
                    <Image source={img} />
                    <Text style={{fontSize:96}}>If you like</Text>
                    <Image source={img} />
                    <Image source={img} />
                    <Image source={img} />
                    <Image source={img} />
                    <Image source={img} />
                    <Text style={{fontSize:96}}>Scrolling down</Text>
                    <Image source={img} />
                    <Image source={img} />
                    <Image source={img} />
                    <Image source={img} />
                    <Image source={img} />
                    <Text style={{fontSize:96}}>What's the best</Text>
                    <Image source={img} />
                    <Image source={img} />
                    <Image source={img} />
                    <Image source={img} />
                    <Text style={{fontSize:80}}>React Native</Text>
                </ScrollView>
                <View>
                    <Text>说明文字啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</Text>
                </View>
            </View>
        );
    }
}

export default IScrolledDownAndWhatHappenedNextShockedMe;
import React, {Component} from 'react';
import {Text, View, Assets, Constants, Button, Colors, Typography} from 'react-native-ui-lib';
const ButtonSpace = 20;

export default class UILib extends Component {

    render() {
        return (
            <View flex paddingH-15 paddingT-120>
                {/*<Button*/}
                    {/*backgroundColor="#30B650"*/}
                    {/*label="SHUFFLE PLAY"*/}
                    {/*labelStyle={{fontWeight: '600'}}*/}
                    {/*style={{marginBottom: ButtonSpace}}*/}
                    {/*enableShadow*/}
                    {/*ref={element => (this.button_1 = element)}*/}
                    {/*onPress={() => this.showSnippet(this.button_1)}*/}
                {/*/>*/}

                {/*<Button*/}
                    {/*backgroundColor="#FB3C62"*/}
                    {/*label="Get 3 Months Free"*/}
                    {/*borderRadius={7}*/}
                    {/*style={{height: 45, marginBottom: ButtonSpace}}*/}
                    {/*ref={element => (this.button_2 = element)}*/}
                    {/*onPress={() => this.showSnippet(this.button_2)}*/}
                {/*/>*/}

                {/*<Button*/}
                    {/*outline*/}
                    {/*outlineColor={Colors.black}*/}
                    {/*label="SHOP HOLIDAY"*/}
                    {/*borderRadius={0}*/}
                    {/*size="medium"*/}
                    {/*text60*/}
                    {/*labelStyle={{fontWeight: '700', letterSpacing: 4}}*/}
                    {/*style={{borderWidth: 3, marginBottom: ButtonSpace}}*/}
                    {/*ref={element => (this.button_3 = element)}*/}
                    {/*onPress={() => this.showSnippet(this.button_3)}*/}
                {/*/>*/}

                {/*<Button*/}
                    {/*backgroundColor="#439F4F"*/}
                    {/*label="MOVE TO BAG"*/}
                    {/*size="small"*/}
                    {/*borderRadius={0}*/}
                    {/*text90*/}
                    {/*labelStyle={{fontWeight: '500', letterSpacing: -0.5}}*/}
                    {/*style={{marginBottom: ButtonSpace}}*/}
                    {/*ref={element => (this.button_4 = element)}*/}
                    {/*onPress={() => this.showSnippet(this.button_4)}*/}
                {/*/>*/}
                {/*<Button*/}
                    {/*backgroundColor="#3C9BF0"*/}
                    {/*label="Follow"*/}
                    {/*size="small"*/}
                    {/*borderRadius={3}*/}
                    {/*text90*/}
                    {/*labelStyle={{fontWeight: '500'}}*/}
                    {/*style={{marginBottom: ButtonSpace}}*/}
                    {/*ref={element => (this.button_5 = element)}*/}
                    {/*onPress={() => this.showSnippet(this.button_5)}*/}
                {/*/>*/}

                {/*/!*<Text style={styles.header}>Do you have it in small?</Text>*!/*/}
                {/*<Button*/}
                    {/*label={'Default'}*/}
                    {/*style={{marginBottom: ButtonSpace}}*/}
                    {/*ref={element => (this.button_6 = element)}*/}
                    {/*onPress={() => this.showSnippet(this.button_6)}*/}
                {/*/>*/}
                {/*<Button*/}
                    {/*label={'Medium'}*/}
                    {/*size={Button.sizes.medium}*/}
                    {/*style={{marginBottom: ButtonSpace}}*/}
                    {/*ref={element => (this.button_7 = element)}*/}
                    {/*onPress={() => this.showSnippet(this.button_7)}*/}
                {/*/>*/}
                {/*<Button*/}
                    {/*label={'Small'}*/}
                    {/*size={Button.sizes.small}*/}
                    {/*style={{marginBottom: ButtonSpace}}*/}
                    {/*ref={element => (this.button_8 = element)}*/}
                    {/*onPress={() => this.showSnippet(this.button_8)}*/}
                {/*/>*/}
                <Button
                    label={'xSmall'}
                    size={Button.sizes.xSmall}
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_81 = element)}
                    onPress={() => this.showSnippet(this.button_81)}
                />
                <Button
                    label={'This is a button with long text'}
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_9 = element)}
                    onPress={() => this.showSnippet(this.button_9)}
                />

                <Button
                    label={'Disabled'}
                    disabled
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_10 = element)}
                    onPress={() => this.showSnippet(this.button_10)}
                />

                {/*<Text style={styles.header}>Do you have it in red?</Text>*/}
                <Button
                    label={'Bold!'}
                    labelStyle={{fontWeight: '800'}}
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_11 = element)}
                    onPress={() => this.showSnippet(this.button_11)}
                />
                <Button
                    label={'Red Button'}
                    backgroundColor={Colors.red30}
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_12 = element)}
                    onPress={() => this.showSnippet(this.button_12)}
                />
                <Button
                    label={'Dark Label'}
                    red10
                    backgroundColor={Colors.red50}
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_13 = element)}
                    onPress={() => this.showSnippet(this.button_13)}
                />
                <Button
                    label={'With Shadow'}
                    enableShadow
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_14 = element)}
                    onPress={() => this.showSnippet(this.button_14)}
                />

                {/*<Text style={styles.header}>Inside Out</Text>*/}
                <Button
                    label="Outline"
                    outline
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_15 = element)}
                    onPress={() => this.showSnippet(this.button_15)}
                />
                <Button
                    label="Outline M"
                    size={Button.sizes.medium}
                    outline
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_16 = element)}
                    onPress={() => this.showSnippet(this.button_16)}
                />

                <Button
                    label="Outline S"
                    size={Button.sizes.small}
                    outline
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_16a = element)}
                    onPress={() => this.showSnippet(this.button_16a)}
                />
                <Button
                    label="Red Outline"
                    outline
                    outlineColor={Colors.red10}
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_16 = element)}
                    onPress={() => this.showSnippet(this.button_16)}
                />

                <Button
                    label="Disabled Outline"
                    outline
                    disabled
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_16 = element)}
                    onPress={() => this.showSnippet(this.button_16)}
                />

                <Button
                    label="disabled outline + icon"
                    outline
                    disabled
                    // //iconSource={plusIcon}
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_16 = element)}
                    onPress={() => this.showSnippet(this.button_16)}
                />

                {/*<Text style={styles.header}>Let your curves show</Text>*/}
                {Constants.isIOS ? (
                    <Button
                        label={'Squarish'}
                        borderRadius={2}
                        style={{marginBottom: ButtonSpace}}
                        ref={element => (this.button_17 = element)}
                        onPress={() => this.showSnippet(this.button_17)}
                    />
                ) : (
                    <Button
                        label={'Roundish'}
                        borderRadius={15}
                        style={{marginBottom: ButtonSpace}}
                        ref={element => (this.button_17 = element)}
                        onPress={() => this.showSnippet(this.button_17)}
                    />
                )}
                <Button
                    label={'Custom'}
                    borderRadius={22}
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_18 = element)}
                    onPress={() => this.showSnippet(this.button_18)}
                />
                <Button
                    label={'No Radius'}
                    borderRadius={0}
                    style={{marginBottom: ButtonSpace}}
                    ref={element => (this.button_19 = element)}
                    onPress={() => this.showSnippet(this.button_19)}
                />
                {/*<Text style={styles.header}>Special Cases</Text>*/}

                <Button
                    style={{marginBottom: ButtonSpace}}
                    size="small"
                    //iconSource={plusIcon}
                    iconStyle={{tintColor: 'white'}}
                    label="Icon"
                />

                <Button
                    style={{marginBottom: ButtonSpace}}
                    blue30
                    outline
                    //iconSource={plusIcon}
                    label="Icon"
                />

            </View>
        );
    }
}
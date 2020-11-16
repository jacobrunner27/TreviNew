import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MainWrapperPrimary, HeaderPrimary, BackIcon, LogoMain, Wrapper, TitleInfoCard, InputTitle, ComponentWrapper, Spacer, TouchableCustomIcon } from '../../../Components';
import sizes from '../../../Themes/Sizes';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { routes } from '../../../services';

class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props
        return (
            <MainWrapperPrimary>
                <HeaderPrimary
                    headerLeft={<BackIcon onPress={() => navigation.goBack()} />}
                    title="Account Settings"
                    headerRight={
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(routes.trending)}> 
                        <LogoMain />
                        </TouchableOpacity>
                    }
                />
                <Wrapper flex={1}>
                    <Wrapper animation="fadeInUpBig">
                        <ComponentWrapper>
                            <Spacer height={sizes.baseMargin} />
                            <InputTitle>Account</InputTitle>
                            <Spacer height={sizes.tinyMargin} />
                        </ComponentWrapper>
                        <TitleInfoCard
                            title="Name"
                            info="Alex Will"
                            shadow
                        />
                        <TitleInfoCard
                            title="Email"
                            info="alexw225@gmail.com"
                        />
                        <TitleInfoCard
                            title="Location"
                            info="Denver, CO."
                        />
                        <TitleInfoCard
                            title="Add Facebook"
                        />
                        <TitleInfoCard
                            title="Change Password"
                        />
                    </Wrapper>
                    <Wrapper animation="fadeInUpBig">
                        <ComponentWrapper>
                            <Spacer height={sizes.baseMargin} />
                            <InputTitle>Info</InputTitle>
                            <Spacer height={sizes.tinyMargin} />
                        </ComponentWrapper>
                        <TitleInfoCard
                            title="About Trevi"
                            hideLine
                            //info="Alex Will"
                            //shadow
                        />
                    </Wrapper>
                </Wrapper>
            </MainWrapperPrimary>
        );
    }
}

export default AccountSettings;

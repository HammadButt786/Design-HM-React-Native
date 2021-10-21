import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
const Page_iPhone_13_Pro_Max___6  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page5}    >
			<View style = {noneModeStyles._Rectangle_78}    >
			</View>
			<Text style = {noneModeStyles._4_05_pm}   >
				4:05 pm
			</Text>
			<View style = {noneModeStyles._mute}    >
				<View style = {noneModeStyles._Icon_close}    >
					<View style = {noneModeStyles.style5}    >
						<View style = {noneModeStyles.style6}   >
							<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
								<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.47497 5.47486L0.525068 0.524964L5.47497 5.47486Z"/>
								<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M5.47497 5.47486L0.525068 0.524964"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style7}    >
						<View style = {noneModeStyles.style8}   >
							<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
								<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.47493 0.524964L0.525033 5.47486L5.47493 0.524964Z"/>
								<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M5.47493 0.524964L0.525033 5.47486"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_volume_off}    >
					<View style = {noneModeStyles.style10}    >
						<View style = {noneModeStyles.style11}   >
							<Svg style={{height: 15, width: 11}} viewBox = "0 0 11 15">
								<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#FCDDEC"}  d = "M8.79284 0.7959C9.4228 0.165935 10.4999 0.6121 10.4999 1.50301L10.4999 12.6746C10.4999 13.5655 9.4228 14.0117 8.79284 13.3817L5.49995 10.0888H1.49995C0.94766 10.0888 0.499946 9.64108 0.499946 9.08879L0.499946 5.08879C0.499946 4.53651 0.94766 4.08879 1.49995 4.08879L5.49995 4.08879L8.79284 0.7959Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style12}    >
						<View style = {noneModeStyles.style13}   >
							<Svg style={{height: 3, width: 2}} viewBox = "0 0 2 3">
								<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0.5 2.5C1.00462 1.99538 1.00462 1.00462 0.5 0.5L0.5 2.5Z"/>
								<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M0.5 2.5C1.00462 1.99538 1.00462 1.00462 0.5 0.5"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._celluar}    >
				<View style = {noneModeStyles.style15}    >
					<View style = {noneModeStyles.style16}   >
						<Svg style={{height: 12, width: 1}} viewBox = "0 0 1 12">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V11.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style17}    >
					<View style = {noneModeStyles.style18}   >
						<Svg style={{height: 9, width: 1}} viewBox = "0 0 1 9">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V8.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style19}    >
					<View style = {noneModeStyles.style20}   >
						<Svg style={{height: 6, width: 1}} viewBox = "0 0 1 6">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V5.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style21}    >
					<View style = {noneModeStyles.style22}   >
						<Svg style={{height: 3, width: 1}} viewBox = "0 0 1 3">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V2.5"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._celluar_2}    >
				<View style = {noneModeStyles.style24}    >
					<View style = {noneModeStyles.style25}   >
						<Svg style={{height: 12, width: 1}} viewBox = "0 0 1 12">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V11.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style26}    >
					<View style = {noneModeStyles.style27}   >
						<Svg style={{height: 9, width: 1}} viewBox = "0 0 1 9">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V8.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style28}    >
					<View style = {noneModeStyles.style29}   >
						<Svg style={{height: 6, width: 1}} viewBox = "0 0 1 6">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V5.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style30}    >
					<View style = {noneModeStyles.style31}   >
						<Svg style={{height: 3, width: 1}} viewBox = "0 0 1 3">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V2.5"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._wifi}    >
				<View style = {noneModeStyles.style33}    >
					<View style = {noneModeStyles.style34}   >
						<Svg style={{height: 5, width: 20}} viewBox = "0 0 20 5">
							<Path fill = {"none"}   stroke = {"white"}  d = "M19.4757 4.4493C14.2424 -0.78396 5.75762 -0.78396 0.524355 4.4493"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style35}    >
					<View style = {noneModeStyles.style36}   >
						<Svg style={{height: 4, width: 12}} viewBox = "0 0 12 4">
							<Path fill = {"none"}   stroke = {"white"}  d = "M11.4933 2.78206C8.45945 -0.25183 3.54054 -0.25183 0.506643 2.78206"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style37}    >
					<View style = {noneModeStyles.style38}   >
						<Svg style={{height: 2, width: 5}} viewBox = "0 0 5 2">
							<Path fill = {"none"}   stroke = {"white"}  d = "M4.45815 1.3529C3.37668 0.271431 1.62327 0.271431 0.541799 1.3529"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_1}    >
				<View style = {noneModeStyles._Rectangle_107}    >
				</View>
			</View>
			<Text style = {noneModeStyles._Log_In}   >
				Log In
			</Text>
			<View style = {noneModeStyles._Rectangle_108}    >
			</View>
			<Text style = {noneModeStyles._Forgot_Password_}   >
				Forgot Password?
			</Text>
			<View style = {noneModeStyles._ellypsis}    >
				<View style = {noneModeStyles.style45}    >
					<View style = {noneModeStyles.style46}   >
						<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#D8D8D8"}  d = "M3 5.5C4.38071 5.5 5.5 4.38071 5.5 3C5.5 1.61929 4.38071 0.5 3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style47}    >
					<View style = {noneModeStyles.style48}   >
						<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#D8D8D8"}  d = "M3 5.5C4.38071 5.5 5.5 4.38071 5.5 3C5.5 1.61929 4.38071 0.5 3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style49}    >
					<View style = {noneModeStyles.style50}   >
						<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#D8D8D8"}  d = "M3 5.5C4.38072 5.5 5.50001 4.38071 5.50001 3C5.50001 1.61929 4.38072 0.5 3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._ellypsis_2}    >
				<View style = {noneModeStyles.style52}    >
					<View style = {noneModeStyles.style53}   >
						<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#D8D8D8"}  d = "M3 5.5C4.38071 5.5 5.5 4.38071 5.5 3C5.5 1.61929 4.38071 0.5 3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style54}    >
					<View style = {noneModeStyles.style55}   >
						<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#D8D8D8"}  d = "M3 5.5C4.38071 5.5 5.5 4.38071 5.5 3C5.5 1.61929 4.38071 0.5 3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style56}    >
					<View style = {noneModeStyles.style57}   >
						<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#D8D8D8"}  d = "M3 5.5C4.38072 5.5 5.50001 4.38071 5.50001 3C5.50001 1.61929 4.38072 0.5 3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._ellypsis_3}    >
				<View style = {noneModeStyles.style59}    >
					<View style = {noneModeStyles.style60}   >
						<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#D8D8D8"}  d = "M3 5.5C4.38071 5.5 5.5 4.38071 5.5 3C5.5 1.61929 4.38071 0.5 3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style61}    >
					<View style = {noneModeStyles.style62}   >
						<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#D8D8D8"}  d = "M3 5.5C4.38071 5.5 5.5 4.38071 5.5 3C5.5 1.61929 4.38071 0.5 3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style63}    >
					<View style = {noneModeStyles.style64}   >
						<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#D8D8D8"}  d = "M3 5.5C4.38072 5.5 5.50001 4.38071 5.50001 3C5.50001 1.61929 4.38072 0.5 3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._key}    >
				<View style = {noneModeStyles.style66}    >
					<View style = {noneModeStyles.style67}   >
						<Svg style={{height: 8, width: 16}} viewBox = "0 0 16 8">
							<Path fill = {"none"}   stroke = {"#D8D8D8"}  d = "M15.5 7.16667V0.5H0.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style68}    >
					<View style = {noneModeStyles.style69}   >
						<Svg style={{height: 15, width: 15}} viewBox = "0 0 15 15">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#D8D8D8"}  d = "M7.50004 14.4768C11.3532 14.4768 14.4768 11.3532 14.4768 7.50004C14.4768 3.64687 11.3532 0.523259 7.50004 0.523259C3.64687 0.523259 0.523259 3.64687 0.523259 7.50004C0.523259 11.3532 3.64687 14.4768 7.50004 14.4768Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style70}    >
					<View style = {noneModeStyles.style71}   >
						<Svg style={{height: 6, width: 1}} viewBox = "0 0 1 6">
							<Path fill = {"none"}   stroke = {"#D8D8D8"}  d = "M0.499918 5.5V0.5"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Password}   >
				Password
			</Text>
			<Text style = {noneModeStyles._FA18_BSE_035_cuilahore_edu_pk}   >
				FA18-BSE-035@cuilahore.edu.pk
			</Text>
			<View style = {noneModeStyles._envelope}    >
				<View style = {noneModeStyles._Rectangle_2}    >
				</View>
				<View style = {noneModeStyles.style76}    >
					<View style = {noneModeStyles.style77}   >
						<Svg style={{height: 17, width: 35}} viewBox = "0 0 35 17">
							<Path fill = {"none"}   stroke = {"#D8D8D8"}  d = "M0.344288 0.382486L17.5 15.8227L34.6558 0.382486"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style78}    >
					<View style = {noneModeStyles.style79}   >
						<Svg style={{height: 14, width: 13}} viewBox = "0 0 13 14">
							<Path fill = {"none"}   stroke = {"#D8D8D8"}  d = "M0.376437 13.6705L12.0498 0.329535"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style80}    >
					<View style = {noneModeStyles.style81}   >
						<Svg style={{height: 14, width: 13}} viewBox = "0 0 13 14">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#D8D8D8"}  d = "M12.0498 13.6705L0.376437 0.329535L12.0498 13.6705Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Email}   >
				Email
			</Text>
			<Text style = {noneModeStyles._welcome}   >
				welcome
			</Text>
			<View style = {noneModeStyles._Line_5}    >
			</View>
			<View style = {noneModeStyles._Line_6}    >
			</View>
			<View style = {noneModeStyles._Line_7}    >
			</View>
			<View style = {noneModeStyles._Rectangle_109}    >
			</View>
			<View style = {noneModeStyles._Rectangle_110}    >
			</View>
			<Text style = {noneModeStyles._Log_In_2}   >
				Log In
			</Text>
			<Text style = {noneModeStyles._Sign_Up}   >
				Sign Up
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_13_Pro_Max___6

const noneModeStyles = StyleSheet.create({
_page5: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Rectangle_78: {
	width: 428,
	height: 20,
	backgroundColor: "rgb(6, 1, 39)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_4_05_pm: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 14,
	top: 2,
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_mute: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -132},
		{translateY: -464},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Icon_close: {
	width: 10,
	height: 10,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 7},
	],
	},
style5: {
	position: "absolute",
	transform: [
		{translateX: 2.34814},
		{translateY: 2.34839},
	],
	},
style6: {
	},
style7: {
	position: "absolute",
	transform: [
		{translateX: 2.34839},
		{translateY: 2.34839},
	],
	},
style8: {
	},
_Icon_volume_off: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
style10: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 5.70703},
	],
	},
style11: {
	},
style12: {
	position: "absolute",
	transform: [
		{translateX: 14},
		{translateY: 11},
	],
	},
style13: {
	},
_celluar: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 94},
		{translateY: -467},
	],
	},
style15: {
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 7},
	],
	},
style16: {
	},
style17: {
	position: "absolute",
	transform: [
		{translateX: 13},
		{translateY: 10},
	],
	},
style18: {
	},
style19: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 13},
	],
	},
style20: {
	},
style21: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 16},
	],
	},
style22: {
	},
_celluar_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 123},
		{translateY: -467},
	],
	},
style24: {
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 7},
	],
	},
style25: {
	},
style26: {
	position: "absolute",
	transform: [
		{translateX: 13},
		{translateY: 10},
	],
	},
style27: {
	},
style28: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 13},
	],
	},
style29: {
	},
style30: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 16},
	],
	},
style31: {
	},
_wifi: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 160},
		{translateY: -467},
	],
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 3.15686},
		{translateY: 7.29297},
	],
	},
style34: {
	},
style35: {
	position: "absolute",
	transform: [
		{translateX: 6.77112},
		{translateY: 12.4041},
	],
	},
style36: {
	},
style37: {
	position: "absolute",
	transform: [
		{translateX: 10.3853},
		{translateY: 17.5154},
	],
	},
style38: {
	},
_Group_1: {
	width: 428,
	height: 906,
	position: "absolute",
	left: 0,
	top: 20,
	},
_Rectangle_107: {
	width: 428,
	height: 906,
	backgroundColor: "rgb(33, 33, 33)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Log_In: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 151,
	top: 119,
	color: "rgb(255, 255, 255)",
	fontSize: 45,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_108: {
	width: 428,
	height: 712,
	backgroundColor: "rgb(47, 45, 45)",
	position: "absolute",
	left: 0,
	top: 214,
	borderRadius: 5,
	},
_Forgot_Password_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 138,
	top: 691,
	color: "rgb(174, 163, 163)",
	fontSize: 20,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_ellypsis: {
	width: 60,
	height: 60,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -128},
		{translateY: 117},
	],
	},
style45: {
	position: "absolute",
	transform: [
		{translateX: 113.5},
		{translateY: 607.5},
	],
	},
style46: {
	},
style47: {
	position: "absolute",
	transform: [
		{translateX: 98.5},
		{translateY: 607.5},
	],
	},
style48: {
	},
style49: {
	position: "absolute",
	transform: [
		{translateX: 128.5},
		{translateY: 607.5},
	],
	},
style50: {
	},
_ellypsis_2: {
	width: 60,
	height: 60,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -37},
		{translateY: 117},
	],
	},
style52: {
	position: "absolute",
	transform: [
		{translateX: 27.5},
		{translateY: 27.5},
	],
	},
style53: {
	},
style54: {
	position: "absolute",
	transform: [
		{translateX: 12.5},
		{translateY: 27.5},
	],
	},
style55: {
	},
style56: {
	position: "absolute",
	transform: [
		{translateX: 42.5},
		{translateY: 27.5},
	],
	},
style57: {
	},
_ellypsis_3: {
	width: 60,
	height: 60,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -80},
		{translateY: 117},
	],
	},
style59: {
	position: "absolute",
	transform: [
		{translateX: 27.5},
		{translateY: 27.5},
	],
	},
style60: {
	},
style61: {
	position: "absolute",
	transform: [
		{translateX: 12.5},
		{translateY: 27.5},
	],
	},
style62: {
	},
style63: {
	position: "absolute",
	transform: [
		{translateX: 42.5},
		{translateY: 27.5},
	],
	},
style64: {
	},
_key: {
	width: 40,
	height: 40,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -166},
		{translateY: 124},
	],
	},
style66: {
	position: "absolute",
	transform: [
		{translateX: 68},
		{translateY: 607},
	],
	},
style67: {
	},
style68: {
	position: "absolute",
	transform: [
		{translateX: 53},
		{translateY: 600.333},
	],
	},
style69: {
	},
style70: {
	position: "absolute",
	transform: [
		{translateX: 74.6667},
		{translateY: 607},
	],
	},
style71: {
	},
_Password: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 19,
	top: 547,
	color: "rgb(216, 216, 216)",
	fontSize: 20,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_FA18_BSE_035_cuilahore_edu_pk: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 91,
	top: 486,
	color: "rgb(216, 216, 216)",
	fontSize: 20,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_envelope: {
	width: 40,
	height: 40,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -166},
		{translateY: 14},
	],
	},
_Rectangle_2: {
	width: 33.3333,
	height: 23.3333,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateX: 3.33325},
		{translateY: 8.33325},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(216, 216, 216)",
	},
style76: {
	position: "absolute",
	transform: [
		{translateX: 3.33325},
		{translateY: 8.33325},
	],
	},
style77: {
	},
style78: {
	position: "absolute",
	transform: [
		{translateX: 3.33325},
		{translateY: 18.3333},
	],
	},
style79: {
	},
style80: {
	position: "absolute",
	transform: [
		{translateX: 25},
		{translateY: 18.3333},
	],
	},
style81: {
	},
_Email: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 19,
	top: 440,
	color: "rgb(216, 216, 216)",
	fontSize: 20,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_welcome: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 141,
	top: 335,
	color: "rgb(255, 255, 255)",
	fontSize: 36,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Line_5: {
	width: 350,
	height: 1.0293,
	position: "absolute",
	left: 48,
	top: 516,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(229, 229, 229)",
	},
_Line_6: {
	width: 350,
	height: 1.0293,
	position: "absolute",
	left: 51,
	top: 623,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(229, 229, 229)",
	},
_Line_7: {
	width: 165,
	height: 0,
	position: "absolute",
	left: 135,
	top: 716,
	borderTopWidth: 4,
	borderRightWidth: 4,
	borderBottomWidth: 4,
	borderLeftWidth: 4,
	borderStyle: "solid",
	borderColor: "rgb(174, 163, 163)",
	},
_Rectangle_109: {
	width: 345,
	height: 55,
	backgroundColor: "rgb(8, 0, 61)",
	position: "absolute",
	left: 42,
	top: 751,
	borderRadius: 10,
	},
_Rectangle_110: {
	width: 345,
	height: 55,
	backgroundColor: "rgba(18, 209, 251, 0.43)",
	position: "absolute",
	left: 42,
	top: 836,
	borderRadius: 10,
	},
_Log_In_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 172,
	top: 760,
	color: "rgb(255, 255, 255)",
	fontSize: 30,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Sign_Up: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 172,
	top: 850,
	color: "rgb(255, 255, 255)",
	fontSize: 30,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
})


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
import {image_Rectangle_95_link} from './assets/imageLinks.js'
import {image_Rectangle_97_link} from './assets/imageLinks.js'
import {image_Rectangle_99_link} from './assets/imageLinks.js'
import {image_Rectangle_96_link} from './assets/imageLinks.js'
import {image_Rectangle_98_link} from './assets/imageLinks.js'
import {image_Rectangle_100_link} from './assets/imageLinks.js'
import {image_image_10_link} from './assets/imageLinks.js'
const Page_iPhone_13_Pro_Max___5  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page7}    >
			<View style = {noneModeStyles._Frame_11}    >
				<Text style = {noneModeStyles._What_is_your_interest_}   >
					 What is your interest?
				</Text>
				<View style = {noneModeStyles._Rectangle_76}    >
				</View>
				<View style = {noneModeStyles._Rectangle_77}    >
				</View>
				<Text style = {noneModeStyles._4_05_pm}   >
					4:05 pm
				</Text>
				<View style = {noneModeStyles._mute}    >
					<View style = {noneModeStyles._Icon_close}    >
						<View style = {noneModeStyles.style8}    >
							<View style = {noneModeStyles.style9}   >
								<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.47497 5.47486L0.525068 0.524964L5.47497 5.47486Z"/>
									<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M5.47497 5.47486L0.525068 0.524964"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style10}    >
							<View style = {noneModeStyles.style11}   >
								<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.47493 0.524964L0.525033 5.47486L5.47493 0.524964Z"/>
									<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M5.47493 0.524964L0.525033 5.47486"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Icon_volume_off}    >
						<View style = {noneModeStyles.style13}    >
							<View style = {noneModeStyles.style14}   >
								<Svg style={{height: 15, width: 11}} viewBox = "0 0 11 15">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#FCDDEC"}  d = "M8.79284 0.7959C9.4228 0.165935 10.4999 0.6121 10.4999 1.50301L10.4999 12.6746C10.4999 13.5655 9.4228 14.0117 8.79284 13.3817L5.49995 10.0888H1.49995C0.94766 10.0888 0.499946 9.64108 0.499946 9.08879L0.499946 5.08879C0.499946 4.53651 0.94766 4.08879 1.49995 4.08879L5.49995 4.08879L8.79284 0.7959Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style15}    >
							<View style = {noneModeStyles.style16}   >
								<Svg style={{height: 3, width: 2}} viewBox = "0 0 2 3">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0.5 2.5C1.00462 1.99538 1.00462 1.00462 0.5 0.5L0.5 2.5Z"/>
									<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M0.5 2.5C1.00462 1.99538 1.00462 1.00462 0.5 0.5"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._celluar}    >
					<View style = {noneModeStyles.style18}    >
						<View style = {noneModeStyles.style19}   >
							<Svg style={{height: 12, width: 1}} viewBox = "0 0 1 12">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V11.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style20}    >
						<View style = {noneModeStyles.style21}   >
							<Svg style={{height: 9, width: 1}} viewBox = "0 0 1 9">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V8.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style22}    >
						<View style = {noneModeStyles.style23}   >
							<Svg style={{height: 6, width: 1}} viewBox = "0 0 1 6">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V5.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style24}    >
						<View style = {noneModeStyles.style25}   >
							<Svg style={{height: 3, width: 1}} viewBox = "0 0 1 3">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V2.5"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._celluar_2}    >
					<View style = {noneModeStyles.style27}    >
						<View style = {noneModeStyles.style28}   >
							<Svg style={{height: 12, width: 1}} viewBox = "0 0 1 12">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V11.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style29}    >
						<View style = {noneModeStyles.style30}   >
							<Svg style={{height: 9, width: 1}} viewBox = "0 0 1 9">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V8.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style31}    >
						<View style = {noneModeStyles.style32}   >
							<Svg style={{height: 6, width: 1}} viewBox = "0 0 1 6">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V5.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style33}    >
						<View style = {noneModeStyles.style34}   >
							<Svg style={{height: 3, width: 1}} viewBox = "0 0 1 3">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V2.5"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._wifi}    >
					<View style = {noneModeStyles.style36}    >
						<View style = {noneModeStyles.style37}   >
							<Svg style={{height: 5, width: 20}} viewBox = "0 0 20 5">
								<Path fill = {"none"}   stroke = {"white"}  d = "M19.4757 4.4493C14.2424 -0.78396 5.75762 -0.78396 0.524355 4.4493"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style38}    >
						<View style = {noneModeStyles.style39}   >
							<Svg style={{height: 4, width: 12}} viewBox = "0 0 12 4">
								<Path fill = {"none"}   stroke = {"white"}  d = "M11.4935 2.78209C8.45954 -0.251833 3.54057 -0.251833 0.506649 2.78209"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style40}    >
						<View style = {noneModeStyles.style41}   >
							<Svg style={{height: 2, width: 5}} viewBox = "0 0 5 2">
								<Path fill = {"none"}   stroke = {"white"}  d = "M4.45815 1.3529C3.37668 0.271431 1.62327 0.271431 0.541799 1.3529"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._arrow_left}    >
					<View style = {noneModeStyles._Icon_arrow_down}    >
						<View style = {noneModeStyles.style44}    >
							<View style = {noneModeStyles.style45}   >
								<Svg style={{height: 1, width: 24}} viewBox = "0 0 24 1">
									<Path fill = {"none"}   stroke = {"white"}  d = "M23 0.5L0.5 0.5"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style46}    >
							<View style = {noneModeStyles.style47}   >
								<Svg style={{height: 16, width: 9}} viewBox = "0 0 9 16">
									<Path fill = {"none"}   stroke = {"white"}  d = "M8.20703 0.5L0.707031 8L8.20703 15.5"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._bell}    >
					<View style = {noneModeStyles.style49}    >
						<View style = {noneModeStyles.style50}   >
							<Svg style={{height: 20, width: 21}} viewBox = "0 0 21 20">
								<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#FCDDEC"}  d = "M10.5 0.5C14.6421 0.5 18 3.8578 18 7.99994C18 10.3914 18 12.7927 18 14.25C18 18 20.5 19.25 20.5 19.25L0.5 19.25C0.5 19.25 3 18 3 14.25C3 12.7927 3 10.3914 3 7.99994C3 3.8578 6.35786 0.5 10.5 0.5V0.5Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style51}    >
						<View style = {noneModeStyles.style52}   >
							<Svg style={{height: 3, width: 6}} viewBox = "0 0 6 3">
								<Path fill = {"none"}   stroke = {"#FCDDEC"}  d = "M0.5 0C0.5 1.38071 1.61929 2.5 3 2.5C4.38071 2.5 5.5 1.38071 5.5 0"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_89}    >
				</View>
			</View>
			<Text style = {noneModeStyles._Robredo_wants_change}   >
				Robredo wants change
			</Text>
			<Text style = {noneModeStyles._Robredo_will_need_the_full_support_of_the_42_agencies_under_the_ICAD}   >
				Robredo will need the full support of the 42 agencies under the ICAD
			</Text>
			<View style = {noneModeStyles._Frame_9}    >
				<Text style = {noneModeStyles._The_Asean_Post}   >
					The Asean Post
				</Text>
				<View style = {noneModeStyles._Rectangle_64}    >
				</View>
				<View style = {noneModeStyles._Frame_8}    >
					<Text style = {noneModeStyles._Open}   >
						Open
					</Text>
				</View>
				<View style = {noneModeStyles._Rectangle_94}    >
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_76_2}    >
			</View>
			<View style = {noneModeStyles._Rectangle_95_container}    >
				<View style = {noneModeStyles._Rectangle_95}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_95_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_97_container}    >
				<View style = {noneModeStyles._Rectangle_97}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_97_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_99_container}    >
				<View style = {noneModeStyles._Rectangle_99}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_99_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_96_container}    >
				<View style = {noneModeStyles._Rectangle_96}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_96_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_98_container}    >
				<View style = {noneModeStyles._Rectangle_98}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_98_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_100_container}    >
				<View style = {noneModeStyles._Rectangle_100}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_100_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_101}    >
			</View>
			<View style = {noneModeStyles._Rectangle_103}    >
			</View>
			<View style = {noneModeStyles._Rectangle_104}    >
			</View>
			<View style = {noneModeStyles._Rectangle_105}    >
			</View>
			<View style = {noneModeStyles._Rectangle_106}    >
			</View>
			<View style = {noneModeStyles._Rectangle_102}    >
			</View>
			<Text style = {noneModeStyles._Honda}   >
				Honda 
			</Text>
			<Text style = {noneModeStyles._Audi}   >
				Audi
			</Text>
			<Text style = {noneModeStyles._KIA}   >
				KIA
			</Text>
			<Text style = {noneModeStyles._MG}   >
				MG
			</Text>
			<Text style = {noneModeStyles._Mercedes}   >
				Mercedes
			</Text>
			<Text style = {noneModeStyles._Toyota}   >
				Toyota
			</Text>
			<View style = {noneModeStyles._Frame_11_2}    >
				<View style = {noneModeStyles._grid}    >
					<View style = {noneModeStyles._Rectangle}    >
					</View>
					<View style = {noneModeStyles._Rectangle_Copy}    >
					</View>
					<View style = {noneModeStyles._Rectangle_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_Copy_2}    >
					</View>
					<Text style = {noneModeStyles._Interest}   >
						Interest
					</Text>
				</View>
				<View style = {noneModeStyles._chat}    >
					<View style = {noneModeStyles._Combined_Shape}    >
					</View>
					<Text style = {noneModeStyles._Messsage}   >
						Messsage
					</Text>
				</View>
				<View style = {noneModeStyles._search}    >
					<View style = {noneModeStyles.style98}    >
						<View style = {noneModeStyles.style99}   >
							<Svg style={{height: 11, width: 11}} viewBox = "0 0 11 11">
								<Path fill = {"none"}   stroke = {"black"}  d = "M0.533387 0.533387L10.4667 10.4667"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style100}    >
						<View style = {noneModeStyles.style101}   >
							<Svg style={{height: 21, width: 21}} viewBox = "0 0 21 21">
								<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"black"}  d = "M10.5 20.5C16.0228 20.5 20.5 16.0228 20.5 10.5C20.5 4.97715 16.0228 0.5 10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Home}   >
					Home
				</Text>
				<View style = {noneModeStyles._home_alt}    >
					<View style = {noneModeStyles._Icon_home}    >
						<View style = {noneModeStyles.style105}    >
							<View style = {noneModeStyles.style106}   >
								<Svg style={{height: 35, width: 31}} viewBox = "0 0 31 35">
									<Path fill = {"none"}   stroke = {"black"}  d = "M0.5 34.3121V14.3121L15.5 0.675781L30.5 14.3121V34.3121H0.5Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_3}    >
					</View>
				</View>
				<View style = {noneModeStyles._image_10_container}    >
					<View style = {noneModeStyles._image_10}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_10_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Advanced_Search}   >
					Advanced{'\n'}Search
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_13_Pro_Max___5

const noneModeStyles = StyleSheet.create({
_page7: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Frame_11: {
	width: 428,
	height: 90,
	backgroundColor: "rgb(0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_What_is_your_interest_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 79,
	top: 43,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_76: {
	width: 135,
	height: 67,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 0,
	top: -67,
	},
_Rectangle_77: {
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
	left: 9,
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
		{translateX: -140},
		{translateY: -45},
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
style8: {
	position: "absolute",
	transform: [
		{translateX: 2.34814},
		{translateY: 2.34839},
	],
	},
style9: {
	},
style10: {
	position: "absolute",
	transform: [
		{translateX: 2.34839},
		{translateY: 2.34839},
	],
	},
style11: {
	},
_Icon_volume_off: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
style13: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 5.70703},
	],
	},
style14: {
	},
style15: {
	position: "absolute",
	transform: [
		{translateX: 14},
		{translateY: 11},
	],
	},
style16: {
	},
_celluar: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 95},
		{translateY: -48},
	],
	},
style18: {
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 7},
	],
	},
style19: {
	},
style20: {
	position: "absolute",
	transform: [
		{translateX: 13},
		{translateY: 10},
	],
	},
style21: {
	},
style22: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 13},
	],
	},
style23: {
	},
style24: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 16},
	],
	},
style25: {
	},
_celluar_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 129},
		{translateY: -47},
	],
	},
style27: {
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 7},
	],
	},
style28: {
	},
style29: {
	position: "absolute",
	transform: [
		{translateX: 13},
		{translateY: 10},
	],
	},
style30: {
	},
style31: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 13},
	],
	},
style32: {
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 16},
	],
	},
style34: {
	},
_wifi: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 163},
		{translateY: -48},
	],
	},
style36: {
	position: "absolute",
	transform: [
		{translateX: 3.15674},
		{translateY: 7.29297},
	],
	},
style37: {
	},
style38: {
	position: "absolute",
	transform: [
		{translateX: 6.771},
		{translateY: 12.4041},
	],
	},
style39: {
	},
style40: {
	position: "absolute",
	transform: [
		{translateX: 10.3853},
		{translateY: 17.5154},
	],
	},
style41: {
	},
_arrow_left: {
	width: 30,
	height: 30,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -196},
	],
	},
_Icon_arrow_down: {
	width: 30,
	height: 30,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
style44: {
	position: "absolute",
	transform: [
		{translateX: 3.75},
		{translateY: 13.75},
	],
	},
style45: {
	},
style46: {
	position: "absolute",
	transform: [
		{translateX: 3.75},
		{translateY: 7.5},
	],
	},
style47: {
	},
_bell: {
	width: 30,
	height: 30,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 160},
		{translateY: -4},
	],
	},
style49: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 3.75},
	],
	},
style50: {
	},
style51: {
	position: "absolute",
	transform: [
		{translateX: 12.5},
		{translateY: 22.5},
	],
	},
style52: {
	},
_Rectangle_89: {
	width: 428,
	height: 63,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 0,
	top: 88,
	},
_Robredo_wants_change: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 12,
	top: 101,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Robredo_will_need_the_full_support_of_the_42_agencies_under_the_ICAD: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 12,
	top: 123,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Frame_9: {
	width: 428,
	height: 32,
	backgroundColor: "rgb(216, 216, 216)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 149,
	},
_The_Asean_Post: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 23,
	top: 7,
	color: "rgb(104, 85, 85)",
	fontSize: 15,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_64: {
	width: 362,
	height: 389,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 28,
	top: 287,
	},
_Frame_8: {
	width: 230,
	height: 32,
	backgroundColor: "rgb(28, 12, 130)",
	overflow: "hidden",
	position: "absolute",
	left: 190,
	top: 0,
	borderRadius: 17,
	},
_Open: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 98,
	top: 7,
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_94: {
	width: 428,
	height: 660,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 0,
	top: 32,
	},
_Rectangle_76_2: {
	width: 428,
	height: 672,
	backgroundColor: "rgba(229, 229, 229, 0.52)",
	position: "absolute",
	left: 0,
	top: 181,
	},
_Rectangle_95_container: {
	width: 161,
	height: 117,
	position: "absolute",
	left: 29,
	top: 218,
	},
_Rectangle_95: {
	width: "100%",
	height: "100%",
	},
_Rectangle_97_container: {
	width: 161,
	height: 117,
	position: "absolute",
	left: 29,
	top: 372,
	},
_Rectangle_97: {
	width: "100%",
	height: "100%",
	},
_Rectangle_99_container: {
	width: 161,
	height: 117,
	position: "absolute",
	left: 29,
	top: 526,
	},
_Rectangle_99: {
	width: "100%",
	height: "100%",
	},
_Rectangle_96_container: {
	width: 161,
	height: 117,
	position: "absolute",
	left: 226,
	top: 218,
	},
_Rectangle_96: {
	width: "100%",
	height: "100%",
	},
_Rectangle_98_container: {
	width: 161,
	height: 117,
	position: "absolute",
	left: 226,
	top: 372,
	},
_Rectangle_98: {
	width: "100%",
	height: "100%",
	},
_Rectangle_100_container: {
	width: 161,
	height: 117,
	position: "absolute",
	left: 226,
	top: 526,
	},
_Rectangle_100: {
	width: "100%",
	height: "100%",
	},
_Rectangle_101: {
	width: 160,
	height: 118,
	backgroundColor: "rgba(0, 0, 0, 0.46)",
	position: "absolute",
	left: 30,
	top: 217,
	},
_Rectangle_103: {
	width: 160,
	height: 118,
	backgroundColor: "rgba(0, 0, 0, 0.46)",
	position: "absolute",
	left: 28,
	top: 371,
	},
_Rectangle_104: {
	width: 160,
	height: 118,
	backgroundColor: "rgba(0, 0, 0, 0.46)",
	position: "absolute",
	left: 226,
	top: 372,
	},
_Rectangle_105: {
	width: 160,
	height: 118,
	backgroundColor: "rgba(0, 0, 0, 0.46)",
	position: "absolute",
	left: 226,
	top: 527,
	},
_Rectangle_106: {
	width: 160,
	height: 118,
	backgroundColor: "rgba(0, 0, 0, 0.46)",
	position: "absolute",
	left: 28,
	top: 527,
	},
_Rectangle_102: {
	width: 160,
	height: 118,
	backgroundColor: "rgba(0, 0, 0, 0.46)",
	position: "absolute",
	left: 227,
	top: 218,
	},
_Honda: {
	width: 45,
	height: 20,
	position: "absolute",
	left: 82,
	top: 267,
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "400",
	lineHeight: 17.5781,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Audi: {
	width: 45,
	height: 20,
	position: "absolute",
	left: 75,
	top: 416,
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "400",
	lineHeight: 17.5781,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_KIA: {
	width: 45,
	height: 20,
	position: "absolute",
	left: 86,
	top: 570,
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "400",
	lineHeight: 17.5781,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_MG: {
	width: 45,
	height: 20,
	position: "absolute",
	left: 294,
	top: 570,
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "400",
	lineHeight: 17.5781,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Mercedes: {
	width: 73,
	height: 20,
	position: "absolute",
	left: 266,
	top: 420,
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "400",
	lineHeight: 17.5781,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Toyota: {
	width: 56,
	height: 20,
	position: "absolute",
	left: 288,
	top: 269,
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "400",
	lineHeight: 17.5781,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Frame_11_2: {
	width: 428,
	height: 75,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 853,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_grid: {
	width: 40,
	height: 40,
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -110},
		{translateY: -24.5},
	],
	},
_Rectangle: {
	width: 11.6667,
	height: 11.6667,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 5},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Rectangle_Copy: {
	width: 11.6667,
	height: 11.6667,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateX: 23.3333},
		{translateY: 5},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Rectangle_2: {
	width: 11.6667,
	height: 11.6667,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 23.3333},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Rectangle_Copy_2: {
	width: 11.6667,
	height: 11.6667,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateX: 23.3333},
		{translateY: 23.3333},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Interest: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 38},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_chat: {
	width: 40,
	height: 40,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 73},
		{translateY: -22.5},
	],
	},
_Combined_Shape: {
	width: 33.3333,
	height: 30,
	position: "absolute",
	transform: [
		{translateX: 3.33325},
		{translateY: 5},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Messsage: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: -3},
		{translateY: 39},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_search: {
	width: 40,
	height: 40,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 148},
		{translateY: -25.5},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	},
style98: {
	position: "absolute",
	transform: [
		{translateX: 23.3333},
		{translateY: 23.3333},
	],
	},
style99: {
	},
style100: {
	position: "absolute",
	transform: [
		{translateX: 6.66675},
		{translateY: 6.66675},
	],
	},
style101: {
	},
_Home: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 28,
	top: 49,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_home_alt: {
	width: 40,
	height: 40,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -192},
		{translateY: -26.5},
	],
	},
_Icon_home: {
	width: 40,
	height: 40,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
style105: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 3.33325},
	],
	},
style106: {
	},
_Rectangle_3: {
	width: 10,
	height: 13.3333,
	backgroundColor: "rgba(14, 63, 242, 0)",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 23.3333},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 1,
	},
_image_10_container: {
	width: 71,
	height: 37,
	position: "absolute",
	left: 179,
	top: 16,
	},
_image_10: {
	width: "100%",
	height: "100%",
	},
_Advanced_Search: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 368,
	top: 47,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
})


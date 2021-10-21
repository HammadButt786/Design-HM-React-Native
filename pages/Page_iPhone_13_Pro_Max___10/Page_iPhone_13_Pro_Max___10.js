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
import {image_image_19_link} from './assets/imageLinks.js'
import {image_image_23_link} from './assets/imageLinks.js'
import {image_image_19_2_link} from './assets/imageLinks.js'
import {image_image_20_link} from './assets/imageLinks.js'
import {image_image_19_3_link} from './assets/imageLinks.js'
import {image_image_22_link} from './assets/imageLinks.js'
import {image_image_19_4_link} from './assets/imageLinks.js'
import {image_image_21_link} from './assets/imageLinks.js'
const Page_iPhone_13_Pro_Max___10  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page2}    >
			<View style = {noneModeStyles._image_19_container}    >
				<View style = {noneModeStyles._image_19}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_19_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_23_container}    >
				<View style = {noneModeStyles._image_23}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_23_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Frame_11}    >
				<Text style = {noneModeStyles._Gallery}   >
					Gallery
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
						<View style = {noneModeStyles.style12}    >
							<View style = {noneModeStyles.style13}   >
								<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.47497 5.47486L0.525068 0.524964L5.47497 5.47486Z"/>
									<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M5.47497 5.47486L0.525068 0.524964"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style14}    >
							<View style = {noneModeStyles.style15}   >
								<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.47493 0.524964L0.525033 5.47486L5.47493 0.524964Z"/>
									<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M5.47493 0.524964L0.525033 5.47486"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Icon_volume_off}    >
						<View style = {noneModeStyles.style17}    >
							<View style = {noneModeStyles.style18}   >
								<Svg style={{height: 15, width: 11}} viewBox = "0 0 11 15">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#FCDDEC"}  d = "M8.79284 0.7959C9.4228 0.165935 10.4999 0.6121 10.4999 1.50301L10.4999 12.6746C10.4999 13.5655 9.4228 14.0117 8.79284 13.3817L5.49995 10.0888H1.49995C0.94766 10.0888 0.499946 9.64108 0.499946 9.08879L0.499946 5.08879C0.499946 4.53651 0.94766 4.08879 1.49995 4.08879L5.49995 4.08879L8.79284 0.7959Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style19}    >
							<View style = {noneModeStyles.style20}   >
								<Svg style={{height: 3, width: 2}} viewBox = "0 0 2 3">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0.5 2.5C1.00462 1.99538 1.00462 1.00462 0.5 0.5L0.5 2.5Z"/>
									<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M0.5 2.5C1.00462 1.99538 1.00462 1.00462 0.5 0.5"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._celluar}    >
					<View style = {noneModeStyles.style22}    >
						<View style = {noneModeStyles.style23}   >
							<Svg style={{height: 12, width: 1}} viewBox = "0 0 1 12">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V11.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style24}    >
						<View style = {noneModeStyles.style25}   >
							<Svg style={{height: 9, width: 1}} viewBox = "0 0 1 9">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V8.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style26}    >
						<View style = {noneModeStyles.style27}   >
							<Svg style={{height: 6, width: 1}} viewBox = "0 0 1 6">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V5.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style28}    >
						<View style = {noneModeStyles.style29}   >
							<Svg style={{height: 3, width: 1}} viewBox = "0 0 1 3">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V2.5"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._celluar_2}    >
					<View style = {noneModeStyles.style31}    >
						<View style = {noneModeStyles.style32}   >
							<Svg style={{height: 12, width: 1}} viewBox = "0 0 1 12">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V11.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style33}    >
						<View style = {noneModeStyles.style34}   >
							<Svg style={{height: 9, width: 1}} viewBox = "0 0 1 9">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V8.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style35}    >
						<View style = {noneModeStyles.style36}   >
							<Svg style={{height: 6, width: 1}} viewBox = "0 0 1 6">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V5.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style37}    >
						<View style = {noneModeStyles.style38}   >
							<Svg style={{height: 3, width: 1}} viewBox = "0 0 1 3">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V2.5"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._wifi}    >
					<View style = {noneModeStyles.style40}    >
						<View style = {noneModeStyles.style41}   >
							<Svg style={{height: 5, width: 20}} viewBox = "0 0 20 5">
								<Path fill = {"none"}   stroke = {"white"}  d = "M19.4757 4.4493C14.2424 -0.78396 5.75762 -0.78396 0.524355 4.4493"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style42}    >
						<View style = {noneModeStyles.style43}   >
							<Svg style={{height: 4, width: 12}} viewBox = "0 0 12 4">
								<Path fill = {"none"}   stroke = {"white"}  d = "M11.4935 2.78209C8.45954 -0.251833 3.54057 -0.251833 0.506649 2.78209"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style44}    >
						<View style = {noneModeStyles.style45}   >
							<Svg style={{height: 2, width: 5}} viewBox = "0 0 5 2">
								<Path fill = {"none"}   stroke = {"white"}  d = "M4.45815 1.3529C3.37668 0.271431 1.62327 0.271431 0.541799 1.3529"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._arrow_left}    >
					<View style = {noneModeStyles._Icon_arrow_down}    >
						<View style = {noneModeStyles.style48}    >
							<View style = {noneModeStyles.style49}   >
								<Svg style={{height: 1, width: 24}} viewBox = "0 0 24 1">
									<Path fill = {"none"}   stroke = {"white"}  d = "M23 0.5L0.5 0.5"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style50}    >
							<View style = {noneModeStyles.style51}   >
								<Svg style={{height: 16, width: 9}} viewBox = "0 0 9 16">
									<Path fill = {"none"}   stroke = {"white"}  d = "M8.20703 0.5L0.707031 8L8.20703 15.5"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_89}    >
				</View>
			</View>
			<View style = {noneModeStyles._image_19_container_2}    >
				<View style = {noneModeStyles._image_19_2}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_19_2_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_20_container}    >
				<View style = {noneModeStyles._image_20}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_20_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_19_container_3}    >
				<View style = {noneModeStyles._image_19_3}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_19_3_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_22_container}    >
				<View style = {noneModeStyles._image_22}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_22_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_19_container_4}    >
				<View style = {noneModeStyles._image_19_4}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_19_4_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_21_container}    >
				<View style = {noneModeStyles._image_21}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_21_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_133}    >
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_13_Pro_Max___10

const noneModeStyles = StyleSheet.create({
_page2: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(47, 45, 45)",
	},
_image_19_container: {
	width: 185,
	height: 145,
	position: "absolute",
	left: 15,
	top: 119,
	},
_image_19: {
	width: "100%",
	height: "100%",
	},
_image_23_container: {
	width: 185,
	height: 145,
	position: "absolute",
	left: 225,
	top: 644,
	},
_image_23: {
	width: "100%",
	height: "100%",
	},
_Frame_11: {
	width: 428,
	height: 88,
	backgroundColor: "rgb(0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Gallery: {
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
style12: {
	position: "absolute",
	transform: [
		{translateX: 2.34814},
		{translateY: 2.34839},
	],
	},
style13: {
	},
style14: {
	position: "absolute",
	transform: [
		{translateX: 2.34839},
		{translateY: 2.34839},
	],
	},
style15: {
	},
_Icon_volume_off: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
style17: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 5.70703},
	],
	},
style18: {
	},
style19: {
	position: "absolute",
	transform: [
		{translateX: 14},
		{translateY: 11},
	],
	},
style20: {
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
style22: {
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 7},
	],
	},
style23: {
	},
style24: {
	position: "absolute",
	transform: [
		{translateX: 13},
		{translateY: 10},
	],
	},
style25: {
	},
style26: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 13},
	],
	},
style27: {
	},
style28: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 16},
	],
	},
style29: {
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
style31: {
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 7},
	],
	},
style32: {
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 13},
		{translateY: 10},
	],
	},
style34: {
	},
style35: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 13},
	],
	},
style36: {
	},
style37: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 16},
	],
	},
style38: {
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
style40: {
	position: "absolute",
	transform: [
		{translateX: 3.15674},
		{translateY: 7.29297},
	],
	},
style41: {
	},
style42: {
	position: "absolute",
	transform: [
		{translateX: 6.771},
		{translateY: 12.4041},
	],
	},
style43: {
	},
style44: {
	position: "absolute",
	transform: [
		{translateX: 10.3853},
		{translateY: 17.5154},
	],
	},
style45: {
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
style48: {
	position: "absolute",
	transform: [
		{translateX: 3.75},
		{translateY: 13.75},
	],
	},
style49: {
	},
style50: {
	position: "absolute",
	transform: [
		{translateX: 3.75},
		{translateY: 7.5},
	],
	},
style51: {
	},
_Rectangle_89: {
	width: 428,
	height: 63,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 0,
	top: 88,
	},
_image_19_container_2: {
	width: 184,
	height: 146,
	position: "absolute",
	left: 231,
	top: 119,
	},
_image_19_2: {
	width: "100%",
	height: "100%",
	},
_image_20_container: {
	width: 184,
	height: 146,
	position: "absolute",
	left: 226,
	top: 293,
	},
_image_20: {
	width: "100%",
	height: "100%",
	},
_image_19_container_3: {
	width: 184,
	height: 146,
	position: "absolute",
	left: 15,
	top: 293,
	},
_image_19_3: {
	width: "100%",
	height: "100%",
	},
_image_22_container: {
	width: 184,
	height: 146,
	position: "absolute",
	left: 222,
	top: 468,
	},
_image_22: {
	width: "100%",
	height: "100%",
	},
_image_19_container_4: {
	width: 185,
	height: 147.39,
	position: "absolute",
	left: 15,
	top: 468,
	},
_image_19_4: {
	width: "100%",
	height: "100%",
	},
_image_21_container: {
	width: 185,
	height: 147.39,
	position: "absolute",
	left: 18,
	top: 644,
	},
_image_21: {
	width: "100%",
	height: "100%",
	},
_Rectangle_133: {
	width: 428,
	height: 31,
	backgroundColor: "rgb(0, 0, 0)",
	position: "absolute",
	left: 0,
	top: 895,
	},
})


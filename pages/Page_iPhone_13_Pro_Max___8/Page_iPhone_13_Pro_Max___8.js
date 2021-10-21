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
import {image_image_12_link} from './assets/imageLinks.js'
import {image_image_12_2_link} from './assets/imageLinks.js'
import {image_image_12_3_link} from './assets/imageLinks.js'
const Page_iPhone_13_Pro_Max___8  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page3}    >
			<View style = {noneModeStyles._Frame_10}    >
				<Text style = {noneModeStyles._Online__Active_}   >
					Online (Active)
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
			</View>
			<View style = {noneModeStyles._image_12_container}    >
				<View style = {noneModeStyles._image_12}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_12_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Audi_A5}   >
				Audi A5
			</Text>
			<Text style = {noneModeStyles._PKR_16_023_000__New_}   >
				PKR 16,023,000 (New)
			</Text>
			<View style = {noneModeStyles._Rectangle_89}    >
			</View>
			<View style = {noneModeStyles._Rectangle_87}    >
			</View>
			<View style = {noneModeStyles._Rectangle_113}    >
			</View>
			<Text style = {noneModeStyles._Make_Offer}   >
				Make Offer
			</Text>
			<View style = {noneModeStyles._user}    >
				<View style = {noneModeStyles.style57}    >
					<View style = {noneModeStyles.style58}   >
						<Svg style={{height: 19, width: 17}} viewBox = "0 0 17 19">
							<Path fill = {"none"}   stroke = {"#2329D6"}  d = "M0.508723 18.2504C0.508723 18.2504 4.81167 16.2791 6.04109 14.9649C7.2705 13.6507 3.58226 13.6507 3.58226 7.07973C3.58226 0.508723 8.49992 0.508723 8.49992 0.508723C8.49992 0.508723 13.4176 0.508723 13.4176 7.07973C13.4176 13.6507 9.72933 13.6507 10.9587 14.9649C12.1882 16.2791 16.4911 18.2504 16.4911 18.2504"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style59}    >
					<View style = {noneModeStyles.style60}   >
						<Svg style={{height: 27, width: 26}} viewBox = "0 0 26 27">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#2329D6"}  d = "M12.6615 26.497C19.3764 26.497 24.82 20.6781 24.82 13.5C24.82 6.32203 19.3764 0.503107 12.6615 0.503107C5.94662 0.503107 0.503107 6.32203 0.503107 13.5C0.503107 20.6781 5.94662 26.497 12.6615 26.497Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._user_2}    >
				<View style = {noneModeStyles.style62}    >
					<View style = {noneModeStyles.style63}   >
						<Svg style={{height: 19, width: 17}} viewBox = "0 0 17 19">
							<Path fill = {"none"}   stroke = {"#2329D6"}  d = "M0.508723 18.2504C0.508723 18.2504 4.81167 16.2791 6.04109 14.9649C7.2705 13.6507 3.58226 13.6507 3.58226 7.07973C3.58226 0.508723 8.49992 0.508723 8.49992 0.508723C8.49992 0.508723 13.4176 0.508723 13.4176 7.07973C13.4176 13.6507 9.72933 13.6507 10.9587 14.9649C12.1882 16.2791 16.4911 18.2504 16.4911 18.2504"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style64}    >
					<View style = {noneModeStyles.style65}   >
						<Svg style={{height: 27, width: 26}} viewBox = "0 0 26 27">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#2329D6"}  d = "M12.6615 26.4969C19.3764 26.4969 24.8198 20.678 24.8198 13.5C24.8198 6.322 19.3764 0.503105 12.6615 0.503105C5.94659 0.503105 0.503105 6.322 0.503105 13.5C0.503105 20.678 5.94659 26.4969 12.6615 26.4969Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles.style66}    >
				<View style = {noneModeStyles.style67}   >
					<Svg style={{height: 28, width: 95}} viewBox = "0 0 95 28">
						<Path fill = {"#E40EA8"}     d = "M0 10C0 4.47715 4.47715 0 10 0H85C90.5228 0 95 4.47715 95 10V18C95 23.5228 90.5228 28 85 28H10C4.47715 28 0 23.5228 0 18V10Z"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._Hello}   >
				Hello
			</Text>
			<Text style = {noneModeStyles._4_00_PM}   >
				4:00 PM
			</Text>
			<View style = {noneModeStyles.style70}    >
				<View style = {noneModeStyles.style71}   >
					<Svg style={{height: 131, width: 134}} viewBox = "0 0 134 131">
						<Path fill = {"#EAD66E"}     d = "M0 10C0 4.47716 4.47715 0 10 0H124C129.523 0 134 4.47715 134 10V121C134 126.523 129.523 131 124 131H10C4.47715 131 0 126.523 0 121V10Z"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._No_Sir__its_brand_new_car}   >
				No Sir, its brand {'\n'}{'\n'}new car
			</Text>
			<View style = {noneModeStyles.style73}    >
				<View style = {noneModeStyles.style74}   >
					<Svg style={{height: 25, width: 293}} viewBox = "0 0 293 25">
						<Path fill = {"white"}   stroke = {"#D8D8D8"}  d = "M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H286C289.59 0.5 292.5 3.41015 292.5 7V18C292.5 21.5899 289.59 24.5 286 24.5H7C3.41015 24.5 0.5 21.5899 0.5 18V7Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._send}    >
				<View style = {noneModeStyles.style76}    >
					<View style = {noneModeStyles.style77}   >
						<Svg style={{height: 19, width: 20}} viewBox = "0 0 20 19">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#C4C4C4"}  d = "M18.0682 8.60388C18.8092 8.97148 18.8092 10.0286 18.0681 10.3962L1.945 18.3937C1.28007 18.7236 0.500164 18.2398 0.500164 17.4976V11.4992L9.50311 9.49853L0.500164 7.29217L0.500164 1.50245C0.500164 0.760211 1.28008 0.276482 1.945 0.606307L18.0682 8.60388Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._image_12_container_2}    >
				<View style = {noneModeStyles._image_12_2}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_12_2_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_90}    >
			</View>
			<Text style = {noneModeStyles._Message_____}   >
				Message.....
			</Text>
			<View style = {noneModeStyles._Rectangle_114}    >
			</View>
			<View style = {noneModeStyles._Rectangle_116}    >
			</View>
			<Text style = {noneModeStyles._Make_Offer_For_This_Item}   >
				Make Offer For This Item
			</Text>
			<View style = {noneModeStyles._Rectangle_119}    >
			</View>
			<View style = {noneModeStyles._image_12_container_3}    >
				<View style = {noneModeStyles._image_12_3}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_12_3_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Audi_A5_2}   >
				Audi A5
			</Text>
			<Text style = {noneModeStyles._Price}   >
				Price
			</Text>
			<Text style = {noneModeStyles._PKR_16_023_000}   >
				PKR 16,023,000
			</Text>
			<View style = {noneModeStyles._Line_13}    >
			</View>
			<Text style = {noneModeStyles._PKR}   >
				PKR
			</Text>
			<View style = {noneModeStyles._Rectangle_120}    >
			</View>
			<Text style = {noneModeStyles._16_023_000}   >
				16,023,000
			</Text>
			<View style = {noneModeStyles._Rectangle_117}    >
			</View>
			<Text style = {noneModeStyles._Make_Offer_2}   >
				 Make Offer
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_13_Pro_Max___8

const noneModeStyles = StyleSheet.create({
_page3: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Frame_10: {
	width: 428,
	height: 90,
	backgroundColor: "rgb(0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Online__Active_: {
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
_image_12_container: {
	width: 77,
	height: 65,
	position: "absolute",
	left: 18,
	top: 111,
	},
_image_12: {
	width: "100%",
	height: "100%",
	},
_Audi_A5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 103,
	top: 120,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_PKR_16_023_000__New_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 103,
	top: 143,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Rectangle_89: {
	width: 428,
	height: 653,
	backgroundColor: "rgb(235, 235, 235)",
	position: "absolute",
	left: 0,
	top: 206,
	},
_Rectangle_87: {
	width: 428,
	height: 59,
	backgroundColor: "rgba(229, 229, 229, 0.52)",
	position: "absolute",
	left: 0,
	top: 851,
	},
_Rectangle_113: {
	width: 111,
	height: 67,
	backgroundColor: "rgb(3, 18, 74)",
	position: "absolute",
	left: 298,
	top: 109,
	},
_Make_Offer: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 308,
	top: 133,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_user: {
	width: 29,
	height: 31,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 181},
		{translateY: -229},
	],
	},
style57: {
	position: "absolute",
	transform: [
		{translateX: 6.64575},
		{translateY: 7.75},
	],
	},
style58: {
	},
style59: {
	position: "absolute",
	transform: [
		{translateX: 2.41675},
		{translateY: 2.58325},
	],
	},
style60: {
	},
_user_2: {
	width: 29,
	height: 31,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -206},
		{translateY: 258},
	],
	},
style62: {
	position: "absolute",
	transform: [
		{translateX: 6.64575},
		{translateY: 7.75},
	],
	},
style63: {
	},
style64: {
	position: "absolute",
	transform: [
		{translateX: 2.41675},
		{translateY: 2.58337},
	],
	},
style65: {
	},
style66: {
	width: 95,
	height: 28,
	position: "absolute",
	left: 289,
	top: 237,
	},
style67: {
	},
_Hello: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 318,
	top: 243,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_4_00_PM: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 233,
	top: 246,
	color: "rgb(196, 196, 196)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
style70: {
	width: 134,
	height: 131,
	position: "absolute",
	left: 65,
	top: 677,
	},
style71: {
	},
_No_Sir__its_brand_new_car: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 82,
	top: 722,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
style73: {
	width: 293,
	height: 25,
	position: "absolute",
	left: 79,
	top: 875,
	},
style74: {
	},
_send: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 170},
		{translateY: 412},
	],
	},
style76: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 3.00659},
	],
	},
style77: {
	},
_image_12_container_2: {
	width: 71,
	height: 37,
	position: "absolute",
	left: 0,
	top: 867,
	},
_image_12_2: {
	width: "100%",
	height: "100%",
	},
_Rectangle_90: {
	width: 428,
	height: 18,
	backgroundColor: "rgb(33, 33, 33)",
	position: "absolute",
	left: 0,
	top: 910,
	},
_Message_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 90,
	top: 878,
	color: "rgb(196, 196, 196)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_114: {
	width: 428,
	height: 906,
	backgroundColor: "rgba(0, 0, 0, 0.64)",
	position: "absolute",
	left: 0,
	top: 20,
	},
_Rectangle_116: {
	width: 287,
	height: 68,
	backgroundColor: "rgb(3, 16, 64)",
	position: "absolute",
	left: 71,
	top: 320,
	},
_Make_Offer_For_This_Item: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 120,
	top: 344,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_119: {
	width: 287,
	height: 262,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 71,
	top: 389,
	},
_image_12_container_3: {
	width: 77,
	height: 65,
	position: "absolute",
	left: 87,
	top: 405,
	},
_image_12_3: {
	width: "100%",
	height: "100%",
	},
_Audi_A5_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 174,
	top: 413,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Price: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 174,
	top: 439,
	color: "rgb(196, 196, 196)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_PKR_16_023_000: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 212,
	top: 440,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Line_13: {
	width: 287,
	height: 1,
	position: "absolute",
	left: 71,
	top: 496,
	borderTopWidth: 2,
	borderRightWidth: 2,
	borderBottomWidth: 2,
	borderLeftWidth: 2,
	borderStyle: "solid",
	borderColor: "rgb(196, 196, 196)",
	},
_PKR: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 126,
	top: 544,
	color: "rgb(8, 0, 61)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Rectangle_120: {
	width: 120,
	height: 34,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 160,
	top: 535,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(196, 196, 196)",
	borderRadius: 6,
	},
_16_023_000: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 187,
	top: 544,
	color: "rgb(3, 16, 64)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Rectangle_117: {
	width: 237,
	height: 24,
	backgroundColor: "rgb(3, 16, 64)",
	position: "absolute",
	left: 94,
	top: 611,
	},
_Make_Offer_2: {
	width: 98,
	height: 14,
	position: "absolute",
	left: 165,
	top: 613,
	color: "rgb(255, 255, 255)",
	fontSize: 18,
	fontWeight: "500",
	lineHeight: 21.0938,
	fontFamily: "Roboto",
	textAlign: "left",
	},
})


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
import {image_image_8_link} from './assets/imageLinks.js'
import {image_image_8_2_link} from './assets/imageLinks.js'
import {image_image_10_link} from './assets/imageLinks.js'
const Page_iPhone_13_Pro_Max___4  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page8}    >
			<View style = {noneModeStyles._Frame_10}    >
				<Text style = {noneModeStyles._Messages}   >
					Messages
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
			<View style = {noneModeStyles._Rectangle_76_2}    >
			</View>
			<Text style = {noneModeStyles._From_Sellers}   >
				From Sellers
			</Text>
			<Text style = {noneModeStyles._From_Buyers}   >
				From Buyers
			</Text>
			<View style = {noneModeStyles._Line_1}    >
			</View>
			<View style = {noneModeStyles._Rectangle_90}    >
			</View>
			<View style = {noneModeStyles._Rectangle_91}    >
			</View>
			<View style = {noneModeStyles._Rectangle_92}    >
			</View>
			<View style = {noneModeStyles._Rectangle_93}    >
			</View>
			<View style = {noneModeStyles._user}    >
				<View style = {noneModeStyles.style63}    >
					<View style = {noneModeStyles.style64}   >
						<Svg style={{height: 19, width: 17}} viewBox = "0 0 17 19">
							<Path fill = {"none"}   stroke = {"#2329D6"}  d = "M0.508723 18.2504C0.508723 18.2504 4.81167 16.2791 6.04109 14.9649C7.2705 13.6507 3.58226 13.6507 3.58226 7.07973C3.58226 0.508723 8.49992 0.508723 8.49992 0.508723C8.49992 0.508723 13.4176 0.508723 13.4176 7.07973C13.4176 13.6507 9.72933 13.6507 10.9587 14.9649C12.1882 16.2791 16.4911 18.2504 16.4911 18.2504"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style65}    >
					<View style = {noneModeStyles.style66}   >
						<Svg style={{height: 27, width: 26}} viewBox = "0 0 26 27">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#2329D6"}  d = "M12.6615 26.497C19.3764 26.497 24.82 20.6781 24.82 13.5C24.82 6.32203 19.3764 0.503107 12.6615 0.503107C5.94662 0.503107 0.503107 6.32203 0.503107 13.5C0.503107 20.6781 5.94662 26.497 12.6615 26.497Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._user_2}    >
				<View style = {noneModeStyles.style68}    >
					<View style = {noneModeStyles.style69}   >
						<Svg style={{height: 19, width: 17}} viewBox = "0 0 17 19">
							<Path fill = {"none"}   stroke = {"#2329D6"}  d = "M0.508723 18.2504C0.508723 18.2504 4.81167 16.2791 6.04109 14.9649C7.2705 13.6507 3.58226 13.6507 3.58226 7.07973C3.58226 0.508723 8.49992 0.508723 8.49992 0.508723C8.49992 0.508723 13.4176 0.508723 13.4176 7.07973C13.4176 13.6507 9.72933 13.6507 10.9587 14.9649C12.1882 16.2791 16.4911 18.2504 16.4911 18.2504"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style70}    >
					<View style = {noneModeStyles.style71}   >
						<Svg style={{height: 27, width: 26}} viewBox = "0 0 26 27">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#2329D6"}  d = "M12.6615 26.497C19.3764 26.497 24.82 20.6781 24.82 13.5C24.82 6.32203 19.3764 0.503107 12.6615 0.503107C5.94662 0.503107 0.503107 6.32203 0.503107 13.5C0.503107 20.6781 5.94662 26.497 12.6615 26.497Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._user_3}    >
				<View style = {noneModeStyles.style73}    >
					<View style = {noneModeStyles.style74}   >
						<Svg style={{height: 19, width: 17}} viewBox = "0 0 17 19">
							<Path fill = {"none"}   stroke = {"#2329D6"}  d = "M0.508723 18.2504C0.508723 18.2504 4.81167 16.2791 6.04109 14.9649C7.2705 13.6507 3.58226 13.6507 3.58226 7.07973C3.58226 0.508723 8.49992 0.508723 8.49992 0.508723C8.49992 0.508723 13.4176 0.508723 13.4176 7.07973C13.4176 13.6507 9.72933 13.6507 10.9587 14.9649C12.1882 16.2791 16.4911 18.2504 16.4911 18.2504"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style75}    >
					<View style = {noneModeStyles.style76}   >
						<Svg style={{height: 27, width: 26}} viewBox = "0 0 26 27">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#2329D6"}  d = "M12.6615 26.497C19.3764 26.497 24.82 20.6781 24.82 13.5C24.82 6.32203 19.3764 0.503107 12.6615 0.503107C5.94662 0.503107 0.503107 6.32203 0.503107 13.5C0.503107 20.6781 5.94662 26.497 12.6615 26.497Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Line_2}    >
			</View>
			<View style = {noneModeStyles._Line_3}    >
			</View>
			<View style = {noneModeStyles._Line_4}    >
			</View>
			<View style = {noneModeStyles._image_12_container}    >
				<View style = {noneModeStyles._image_12}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_12_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Andrew}   >
				Andrew
			</Text>
			<Text style = {noneModeStyles._James}   >
				James
			</Text>
			<Text style = {noneModeStyles._James_2}   >
				James
			</Text>
			<Text style = {noneModeStyles._Audi_A5}   >
				Audi A5
			</Text>
			<Text style = {noneModeStyles._Range_Rover}   >
				Range Rover
			</Text>
			<Text style = {noneModeStyles._Porsche}   >
				Porsche
			</Text>
			<Text style = {noneModeStyles._PKR_16_023_000__New_}   >
				PKR 16,023,000 (New)
			</Text>
			<Text style = {noneModeStyles._PKR_12_050_000__New_}   >
				PKR 12,050,000 (New)
			</Text>
			<Text style = {noneModeStyles._PKR_72_050_000__New_}   >
				PKR 72,050,000 (New)
			</Text>
			<Text style = {noneModeStyles._52_seconds_ago}   >
				52 seconds ago
			</Text>
			<Text style = {noneModeStyles._2_hours_ago}   >
				2 hours ago
			</Text>
			<Text style = {noneModeStyles._3_days_ago}   >
				3 days ago
			</Text>
			<View style = {noneModeStyles._image_8_container}    >
				<View style = {noneModeStyles._image_8}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_8_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_8_container_2}    >
				<View style = {noneModeStyles._image_8_2}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_8_2_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Frame_9}    >
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
					<View style = {noneModeStyles.style109}    >
						<View style = {noneModeStyles.style110}   >
							<Svg style={{height: 11, width: 11}} viewBox = "0 0 11 11">
								<Path fill = {"none"}   stroke = {"black"}  d = "M0.533387 0.533387L10.4667 10.4667"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style111}    >
						<View style = {noneModeStyles.style112}   >
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
						<View style = {noneModeStyles.style116}    >
							<View style = {noneModeStyles.style117}   >
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
export default Page_iPhone_13_Pro_Max___4

const noneModeStyles = StyleSheet.create({
_page8: {
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
_Messages: {
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
_Rectangle_76_2: {
	width: 428,
	height: 45,
	backgroundColor: "rgba(229, 229, 229, 0.52)",
	position: "absolute",
	left: 0,
	top: 88,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(216, 216, 216)",
	},
_From_Sellers: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 56,
	top: 100,
	color: "rgb(196, 196, 196)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_From_Buyers: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 262,
	top: 98,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Line_1: {
	width: 214,
	height: 0,
	position: "absolute",
	left: 214,
	top: 133,
	borderTopWidth: 2,
	borderRightWidth: 2,
	borderBottomWidth: 2,
	borderLeftWidth: 2,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Rectangle_90: {
	width: 428,
	height: 793,
	backgroundColor: "rgb(218, 218, 218)",
	position: "absolute",
	left: 0,
	top: 133,
	},
_Rectangle_91: {
	width: 397,
	height: 134,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 18,
	top: 140,
	borderRadius: 7,
	},
_Rectangle_92: {
	width: 397,
	height: 134,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 18,
	top: 288,
	borderRadius: 7,
	},
_Rectangle_93: {
	width: 397,
	height: 134,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 16,
	top: 441,
	borderRadius: 7,
	},
_user: {
	width: 29,
	height: 31,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -185},
		{translateY: -302},
	],
	},
style63: {
	position: "absolute",
	transform: [
		{translateX: 6.64575},
		{translateY: 7.75},
	],
	},
style64: {
	},
style65: {
	position: "absolute",
	transform: [
		{translateX: 2.41675},
		{translateY: 2.58325},
	],
	},
style66: {
	},
_user_2: {
	width: 29,
	height: 31,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -184},
		{translateY: -149},
	],
	},
style68: {
	position: "absolute",
	transform: [
		{translateX: 6.64575},
		{translateY: 7.75},
	],
	},
style69: {
	},
style70: {
	position: "absolute",
	transform: [
		{translateX: 2.41675},
		{translateY: 2.58325},
	],
	},
style71: {
	},
_user_3: {
	width: 29,
	height: 31,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -189},
		{translateY: -1},
	],
	},
style73: {
	position: "absolute",
	transform: [
		{translateX: 6.64575},
		{translateY: 7.75},
	],
	},
style74: {
	},
style75: {
	position: "absolute",
	transform: [
		{translateX: 2.41675},
		{translateY: 2.58325},
	],
	},
style76: {
	},
_Line_2: {
	width: 217.999,
	height: 1.14746,
	position: "absolute",
	left: 67,
	top: 176,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Line_3: {
	width: 218,
	height: 2,
	position: "absolute",
	left: 67,
	top: 325,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Line_4: {
	width: 210,
	height: 2,
	position: "absolute",
	left: 67,
	top: 473,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_image_12_container: {
	width: 77,
	height: 65,
	position: "absolute",
	left: 312,
	top: 157,
	},
_image_12: {
	width: "100%",
	height: "100%",
	},
_Andrew: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 86,
	top: 154,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_James: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 88,
	top: 304,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_James_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 80,
	top: 452,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Audi_A5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 84,
	top: 186,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Range_Rover: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 79,
	top: 486,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Porsche: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 88,
	top: 336,
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
	left: 84,
	top: 208,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_PKR_12_050_000__New_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 87,
	top: 358,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_PKR_72_050_000__New_: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 80,
	top: 508,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_52_seconds_ago: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 84,
	top: 233,
	color: "rgb(174, 163, 163)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_2_hours_ago: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 84,
	top: 375,
	color: "rgb(174, 163, 163)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_3_days_ago: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 79,
	top: 525,
	color: "rgb(174, 163, 163)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_image_8_container: {
	width: 77,
	height: 64,
	position: "absolute",
	left: 312,
	top: 310,
	},
_image_8: {
	width: "100%",
	height: "100%",
	},
_image_8_container_2: {
	width: 82,
	height: 62,
	position: "absolute",
	left: 314,
	top: 460,
	},
_image_8_2: {
	width: "100%",
	height: "100%",
	},
_Frame_9: {
	width: 428,
	height: 75,
	backgroundColor: "rgb(255, 255, 255)",
	overflow: "hidden",
	position: "absolute",
	left: 2,
	top: 850,
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
		{translateY: -26.5},
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
style109: {
	position: "absolute",
	transform: [
		{translateX: 23.3333},
		{translateY: 23.3333},
	],
	},
style110: {
	},
style111: {
	position: "absolute",
	transform: [
		{translateX: 6.66675},
		{translateY: 6.66675},
	],
	},
style112: {
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
style116: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 3.33325},
	],
	},
style117: {
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
	left: 363,
	top: 48,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
})


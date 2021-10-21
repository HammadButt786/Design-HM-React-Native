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
import {image_image_8_link} from './assets/imageLinks.js'
import {image_Rectangle_55_link} from './assets/imageLinks.js'
import {image_Rectangle_58_link} from './assets/imageLinks.js'
import {image_Rectangle_61_link} from './assets/imageLinks.js'
import {image_Rectangle_59_link} from './assets/imageLinks.js'
import {image_Rectangle_62_link} from './assets/imageLinks.js'
import {image_Rectangle_60_link} from './assets/imageLinks.js'
import {image_Rectangle_63_link} from './assets/imageLinks.js'
import {image_Rectangle_56_link} from './assets/imageLinks.js'
import {image_Rectangle_57_link} from './assets/imageLinks.js'
import {image_image_9_link} from './assets/imageLinks.js'
const Page_iPhone_13_Pro_Max___1  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page9}    >
			<View style = {noneModeStyles._image_8_container}    >
				<View style = {noneModeStyles._image_8}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_8_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._celluar}    >
				<View style = {noneModeStyles.style4}    >
					<View style = {noneModeStyles.style5}   >
						<Svg style={{height: 12, width: 1}} viewBox = "0 0 1 12">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V11.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style6}    >
					<View style = {noneModeStyles.style7}   >
						<Svg style={{height: 9, width: 1}} viewBox = "0 0 1 9">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V8.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style8}    >
					<View style = {noneModeStyles.style9}   >
						<Svg style={{height: 6, width: 1}} viewBox = "0 0 1 6">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V5.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style10}    >
					<View style = {noneModeStyles.style11}   >
						<Svg style={{height: 3, width: 1}} viewBox = "0 0 1 3">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V2.5"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._celluar_2}    >
				<View style = {noneModeStyles.style13}    >
					<View style = {noneModeStyles.style14}   >
						<Svg style={{height: 12, width: 1}} viewBox = "0 0 1 12">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V11.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style15}    >
					<View style = {noneModeStyles.style16}   >
						<Svg style={{height: 9, width: 1}} viewBox = "0 0 1 9">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V8.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style17}    >
					<View style = {noneModeStyles.style18}   >
						<Svg style={{height: 6, width: 1}} viewBox = "0 0 1 6">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V5.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style19}    >
					<View style = {noneModeStyles.style20}   >
						<Svg style={{height: 3, width: 1}} viewBox = "0 0 1 3">
							<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V2.5"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._mute}    >
				<View style = {noneModeStyles._Icon_close}    >
					<View style = {noneModeStyles.style23}    >
						<View style = {noneModeStyles.style24}   >
							<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
								<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.47471 5.47486L0.524812 0.524964L5.47471 5.47486Z"/>
								<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M5.47471 5.47486L0.524812 0.524964"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style25}    >
						<View style = {noneModeStyles.style26}   >
							<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
								<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.47493 0.524964L0.525033 5.47486L5.47493 0.524964Z"/>
								<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M5.47493 0.524964L0.525033 5.47486"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Icon_volume_off}    >
					<View style = {noneModeStyles.style28}    >
						<View style = {noneModeStyles.style29}   >
							<Svg style={{height: 15, width: 11}} viewBox = "0 0 11 15">
								<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#FCDDEC"}  d = "M8.79284 0.7959C9.4228 0.165935 10.4999 0.6121 10.4999 1.50301L10.4999 12.6746C10.4999 13.5655 9.4228 14.0117 8.79284 13.3817L5.49995 10.0888H1.49995C0.94766 10.0888 0.499946 9.64108 0.499946 9.08879L0.499946 5.08879C0.499946 4.53651 0.94766 4.08879 1.49995 4.08879L5.49995 4.08879L8.79284 0.7959Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style30}    >
						<View style = {noneModeStyles.style31}   >
							<Svg style={{height: 3, width: 2}} viewBox = "0 0 2 3">
								<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0.5 2.5C1.00462 1.99538 1.00462 1.00462 0.5 0.5L0.5 2.5Z"/>
								<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M0.5 2.5C1.00462 1.99538 1.00462 1.00462 0.5 0.5"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Find_Your_Best_cars_here}   >
				Find Your Best cars here 
			</Text>
			<View style = {noneModeStyles._book_opened}    >
				<View style = {noneModeStyles.style34}    >
					<View style = {noneModeStyles.style35}   >
						<Svg style={{height: 21, width: 13}} viewBox = "0 0 13 21">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#FCDDEC"}  d = "M11.75 20.5C11.75 20.5 11.75 3 11.75 3C11.75 3 9.24998 0.5 6.74998 0.5C4.24998 0.5 0.499977 3 0.499977 3C0.499977 3 0.499977 20.5 0.499977 20.5C0.499977 20.5 4.24997 18 6.74998 18C9.24999 18 11.75 20.5 11.75 20.5Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style36}    >
					<View style = {noneModeStyles.style37}   >
						<Svg style={{height: 21, width: 13}} viewBox = "0 0 13 21">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#FCDDEC"}  d = "M0.5 20.5C0.5 20.5 0.5 3 0.5 3C0.5 3 3.00002 0.5 5.50002 0.5C8.00002 0.5 11.75 3 11.75 3C11.75 3 11.75 20.5 11.75 20.5C11.75 20.5 8.00003 18 5.50002 18C3.00001 18 0.5 20.5 0.5 20.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._bell}    >
				<View style = {noneModeStyles.style39}    >
					<View style = {noneModeStyles.style40}   >
						<Svg style={{height: 20, width: 21}} viewBox = "0 0 21 20">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#FCDDEC"}  d = "M10.5 0.5C14.6421 0.5 18 3.8578 18 7.99994C18 10.3914 18 12.7927 18 14.25C18 18 20.5 19.25 20.5 19.25L0.5 19.25C0.5 19.25 3 18 3 14.25C3 12.7927 3 10.3914 3 7.99994C3 3.8578 6.35786 0.5 10.5 0.5V0.5Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style41}    >
					<View style = {noneModeStyles.style42}   >
						<Svg style={{height: 3, width: 6}} viewBox = "0 0 6 3">
							<Path fill = {"none"}   stroke = {"#FCDDEC"}  d = "M0.5 0C0.5 1.38071 1.61929 2.5 3 2.5C4.38071 2.5 5.5 1.38071 5.5 0"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._stats_alt}    >
				<View style = {noneModeStyles.style44}    >
					<View style = {noneModeStyles.style45}   >
						<Svg style={{height: 1, width: 11}} viewBox = "0 0 11 1">
							<Path fill = {"none"}   stroke = {"#FCDDEC"}  d = "M10.5 0.500082L0.500002 0.500082"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style46}    >
					<View style = {noneModeStyles.style47}   >
						<Svg style={{height: 1, width: 23}} viewBox = "0 0 23 1">
							<Path fill = {"none"}   stroke = {"#FCDDEC"}  d = "M22.1665 0.500081L0.499838 0.500081"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style48}    >
					<View style = {noneModeStyles.style49}   >
						<Svg style={{height: 21, width: 1}} viewBox = "0 0 1 21">
							<Path fill = {"none"}   stroke = {"#FCDDEC"}  d = "M0.499837 0.5L0.499837 20.5"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style50}    >
					<View style = {noneModeStyles.style51}   >
						<Svg style={{height: 1, width: 18}} viewBox = "0 0 18 1">
							<Path fill = {"none"}   stroke = {"#FCDDEC"}  d = "M17.1668 0.500081L0.500162 0.500081"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style52}    >
					<View style = {noneModeStyles.style53}   >
						<Svg style={{height: 1, width: 5}} viewBox = "0 0 5 1">
							<Path fill = {"none"}   stroke = {"#FCDDEC"}  d = "M3.8335 0.50008L0.500164 0.50008"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._HM_Motors}   >
				HM Motors
			</Text>
			<View style = {noneModeStyles._Rectangle_54}    >
			</View>
			<View style = {noneModeStyles._search}    >
				<View style = {noneModeStyles.style57}    >
					<View style = {noneModeStyles.style58}   >
						<Svg style={{height: 8, width: 8}} viewBox = "0 0 8 8">
							<Path fill = {"none"}   stroke = {"black"}  d = "M0.500951 0.500951L7.49905 7.49905"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style59}    >
					<View style = {noneModeStyles.style60}   >
						<Svg style={{height: 16, width: 16}} viewBox = "0 0 16 16">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"black"}  d = "M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Search_here____}   >
				Search here ...
			</Text>
			<Text style = {noneModeStyles._4_05_pm}   >
				4:05 pm
			</Text>
			<View style = {noneModeStyles._wifi}    >
				<View style = {noneModeStyles.style64}    >
					<View style = {noneModeStyles.style65}   >
						<Svg style={{height: 5, width: 20}} viewBox = "0 0 20 5">
							<Path fill = {"none"}   stroke = {"white"}  d = "M19.4754 4.44924C14.2422 -0.78395 5.75754 -0.78395 0.524348 4.44924"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style66}    >
					<View style = {noneModeStyles.style67}   >
						<Svg style={{height: 4, width: 12}} viewBox = "0 0 12 4">
							<Path fill = {"none"}   stroke = {"white"}  d = "M11.4932 2.78204C8.45936 -0.251828 3.5405 -0.251828 0.506638 2.78204"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style68}    >
					<View style = {noneModeStyles.style69}   >
						<Svg style={{height: 2, width: 5}} viewBox = "0 0 5 2">
							<Path fill = {"none"}   stroke = {"white"}  d = "M4.45815 1.3529C3.37668 0.271431 1.62327 0.271431 0.541799 1.3529"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Brands}   >
				Brands
			</Text>
			<Text style = {noneModeStyles._We_deal_in_all_brands_of_cars}   >
				We deal in all brands of cars 
			</Text>
			<View style = {noneModeStyles._Rectangle_55_container}    >
				<View style = {noneModeStyles._Rectangle_55}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_55_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_58_container}    >
				<View style = {noneModeStyles._Rectangle_58}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_58_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_61_container}    >
				<View style = {noneModeStyles._Rectangle_61}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_61_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_59_container}    >
				<View style = {noneModeStyles._Rectangle_59}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_59_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_62_container}    >
				<View style = {noneModeStyles._Rectangle_62}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_62_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_60_container}    >
				<View style = {noneModeStyles._Rectangle_60}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_60_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_63_container}    >
				<View style = {noneModeStyles._Rectangle_63}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_63_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_56_container}    >
				<View style = {noneModeStyles._Rectangle_56}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_56_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_57_container}    >
				<View style = {noneModeStyles._Rectangle_57}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_57_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._View_All}   >
				View All
			</Text>
			<View style = {noneModeStyles._Rectangle_130}    >
			</View>
			<Text style = {noneModeStyles._Log_in}   >
				Log in
			</Text>
			<View style = {noneModeStyles._Rectangle_131}    >
			</View>
			<Text style = {noneModeStyles._Sign_up}   >
				Sign up
			</Text>
			<View style = {noneModeStyles._Rectangle_138}    >
			</View>
			<View style = {noneModeStyles._home_alt}    >
				<View style = {noneModeStyles._Icon_home}    >
					<View style = {noneModeStyles.style98}    >
						<View style = {noneModeStyles.style99}   >
							<Svg style={{height: 35, width: 31}} viewBox = "0 0 31 35">
								<Path fill = {"none"}   stroke = {"black"}  d = "M0.5 34.3121V14.3121L15.5 0.675781L30.5 14.3121V34.3121H0.5Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle}    >
				</View>
			</View>
			<View style = {noneModeStyles._grid}    >
				<View style = {noneModeStyles._Rectangle_2}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy}    >
				</View>
				<View style = {noneModeStyles._Rectangle_3}    >
				</View>
				<View style = {noneModeStyles._Rectangle_Copy_2}    >
				</View>
				<Text style = {noneModeStyles._Interest}   >
					Interest
				</Text>
			</View>
			<View style = {noneModeStyles._image_9_container}    >
				<View style = {noneModeStyles._image_9}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_9_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._chat}    >
				<View style = {noneModeStyles._Combined_Shape}    >
				</View>
				<Text style = {noneModeStyles._Messsage}   >
					Messsage
				</Text>
			</View>
			<View style = {noneModeStyles._search_2}    >
				<View style = {noneModeStyles.style113}    >
					<View style = {noneModeStyles.style114}   >
						<Svg style={{height: 11, width: 11}} viewBox = "0 0 11 11">
							<Path fill = {"none"}   stroke = {"black"}  d = "M0.533127 0.533387L10.4664 10.4667"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style115}    >
					<View style = {noneModeStyles.style116}   >
						<Svg style={{height: 21, width: 21}} viewBox = "0 0 21 21">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"black"}  d = "M10.5 20.5C16.0228 20.5 20.5 16.0228 20.5 10.5C20.5 4.97715 16.0228 0.5 10.5 0.5C4.97715 0.5 0.5 4.97715 0.5 10.5C0.5 16.0228 4.97715 20.5 10.5 20.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Advanced_Search}   >
				Advanced{'\n'}Search
			</Text>
			<View style = {noneModeStyles.style118}    >
				<View style = {noneModeStyles.style119}   >
					<Svg style={{height: 499, width: 428}} viewBox = "0 0 428 499">
						<Path fill = {"black"}     d = "M0 0H428V499H0V0Z"/>
					</Svg>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_13_Pro_Max___1

const noneModeStyles = StyleSheet.create({
_page9: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_image_8_container: {
	width: 428,
	height: 926,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_8: {
	width: "100%",
	height: "100%",
	},
_celluar: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 101},
		{translateY: -459},
	],
	},
style4: {
	position: "absolute",
	transform: [
		{translateX: 332},
		{translateY: 11},
	],
	},
style5: {
	},
style6: {
	position: "absolute",
	transform: [
		{translateX: 328},
		{translateY: 14},
	],
	},
style7: {
	},
style8: {
	position: "absolute",
	transform: [
		{translateX: 324},
		{translateY: 17},
	],
	},
style9: {
	},
style10: {
	position: "absolute",
	transform: [
		{translateX: 320},
		{translateY: 20},
	],
	},
style11: {
	},
_celluar_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 137},
		{translateY: -459},
	],
	},
style13: {
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 7},
	],
	},
style14: {
	},
style15: {
	position: "absolute",
	transform: [
		{translateX: 13},
		{translateY: 10},
	],
	},
style16: {
	},
style17: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 13},
	],
	},
style18: {
	},
style19: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 16},
	],
	},
style20: {
	},
_mute: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -145},
		{translateY: -455},
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
		{translateX: -5050},
		{translateY: -3937},
	],
	},
style23: {
	position: "absolute",
	transform: [
		{translateX: 2.34814},
		{translateY: 2.34839},
	],
	},
style24: {
	},
style25: {
	position: "absolute",
	transform: [
		{translateX: 2.34863},
		{translateY: 2.34839},
	],
	},
style26: {
	},
_Icon_volume_off: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: -5065},
		{translateY: -3944},
	],
	},
style28: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 5.70703},
	],
	},
style29: {
	},
style30: {
	position: "absolute",
	transform: [
		{translateX: 14},
		{translateY: 11},
	],
	},
style31: {
	},
_Find_Your_Best_cars_here: {
	width: 398,
	height: 25,
	position: "absolute",
	left: 24,
	top: 162,
	color: "rgb(255, 255, 255)",
	fontSize: 20,
	fontWeight: "400",
	lineHeight: 23.4375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_book_opened: {
	width: 30,
	height: 30,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 168},
		{translateY: -417},
	],
	},
style34: {
	position: "absolute",
	transform: [
		{translateX: 385.75},
		{translateY: 51},
	],
	},
style35: {
	},
style36: {
	position: "absolute",
	transform: [
		{translateX: 397},
		{translateY: 51},
	],
	},
style37: {
	},
_bell: {
	width: 30,
	height: 30,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 120},
		{translateY: -417},
	],
	},
style39: {
	position: "absolute",
	transform: [
		{translateX: 339},
		{translateY: 49.75},
	],
	},
style40: {
	},
style41: {
	position: "absolute",
	transform: [
		{translateX: 346.5},
		{translateY: 68.5},
	],
	},
style42: {
	},
_stats_alt: {
	width: 40,
	height: 40,
	backgroundColor: "rgb(0, 0, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -206},
		{translateY: -417},
	],
	},
style44: {
	position: "absolute",
	transform: [
		{translateX: 21.3335},
		{translateY: 52.6667},
	],
	},
style45: {
	},
style46: {
	position: "absolute",
	transform: [
		{translateX: 21.3335},
		{translateY: 59.3333},
	],
	},
style47: {
	},
style48: {
	position: "absolute",
	transform: [
		{translateX: 11.3335},
		{translateY: 56},
	],
	},
style49: {
	},
style50: {
	position: "absolute",
	transform: [
		{translateX: 21.333},
		{translateY: 66},
	],
	},
style51: {
	},
style52: {
	position: "absolute",
	transform: [
		{translateX: 21.333},
		{translateY: 74.3335},
	],
	},
style53: {
	},
_HM_Motors: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 21,
	top: 115,
	color: "rgb(255, 255, 255)",
	fontSize: 40,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_54: {
	width: 378,
	height: 39,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 25,
	top: 321,
	borderRadius: 7,
	},
_search: {
	width: 30,
	height: 30,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 148},
		{translateY: -138},
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
style57: {
	position: "absolute",
	transform: [
		{translateX: 379.5},
		{translateY: 342.5},
	],
	},
style58: {
	},
style59: {
	position: "absolute",
	transform: [
		{translateX: 367},
		{translateY: 330},
	],
	},
style60: {
	},
_Search_here____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 41,
	top: 329,
	color: "rgb(196, 196, 196)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_4_05_pm: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 8,
	top: 11,
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_wifi: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 173},
		{translateY: -456},
	],
	},
style64: {
	position: "absolute",
	transform: [
		{translateX: 390.157},
		{translateY: 14.293},
	],
	},
style65: {
	},
style66: {
	position: "absolute",
	transform: [
		{translateX: 393.771},
		{translateY: 19.4041},
	],
	},
style67: {
	},
style68: {
	position: "absolute",
	transform: [
		{translateX: 397.385},
		{translateY: 24.5154},
	],
	},
style69: {
	},
_Brands: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 21,
	top: 445,
	color: "rgb(216, 216, 216)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_We_deal_in_all_brands_of_cars: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 18,
	top: 475,
	color: "rgb(216, 216, 216)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_55_container: {
	width: 90,
	height: 75,
	position: "absolute",
	left: 25,
	top: 522,
	},
_Rectangle_55: {
	width: "100%",
	height: "100%",
	},
_Rectangle_58_container: {
	width: 90,
	height: 75,
	position: "absolute",
	left: 25,
	top: 644,
	},
_Rectangle_58: {
	width: "100%",
	height: "100%",
	},
_Rectangle_61_container: {
	width: 90,
	height: 75,
	position: "absolute",
	left: 21,
	top: 766,
	},
_Rectangle_61: {
	width: "100%",
	height: "100%",
	},
_Rectangle_59_container: {
	width: 90,
	height: 75,
	position: "absolute",
	left: 167,
	top: 644,
	},
_Rectangle_59: {
	width: "100%",
	height: "100%",
	},
_Rectangle_62_container: {
	width: 90,
	height: 75,
	position: "absolute",
	left: 167,
	top: 766,
	},
_Rectangle_62: {
	width: "100%",
	height: "100%",
	},
_Rectangle_60_container: {
	width: 90,
	height: 75,
	position: "absolute",
	left: 309,
	top: 644,
	},
_Rectangle_60: {
	width: "100%",
	height: "100%",
	},
_Rectangle_63_container: {
	width: 90,
	height: 75,
	position: "absolute",
	left: 309,
	top: 766,
	},
_Rectangle_63: {
	width: "100%",
	height: "100%",
	},
_Rectangle_56_container: {
	width: 90,
	height: 75,
	position: "absolute",
	left: 167,
	top: 522,
	},
_Rectangle_56: {
	width: "100%",
	height: "100%",
	},
_Rectangle_57_container: {
	width: 90,
	height: 75,
	position: "absolute",
	left: 309,
	top: 522,
	},
_Rectangle_57: {
	width: "100%",
	height: "100%",
	},
_View_All: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 349,
	top: 450,
	color: "rgb(216, 216, 216)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_130: {
	width: 61,
	height: 22,
	backgroundColor: "rgb(3, 18, 74)",
	position: "absolute",
	left: 350,
	top: 98,
	},
_Log_in: {
	width: 43,
	height: 18,
	position: "absolute",
	left: 360,
	top: 99,
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "500",
	lineHeight: 17.5781,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_131: {
	width: 60,
	height: 24,
	backgroundColor: "rgb(3, 18, 74)",
	position: "absolute",
	left: 352,
	top: 129,
	},
_Sign_up: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 357,
	top: 131,
	color: "rgb(255, 255, 255)",
	fontSize: 15,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_138: {
	width: 428,
	height: 67,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 859,
	},
_home_alt: {
	width: 40,
	height: 40,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -197},
		{translateY: 402},
	],
	},
_Icon_home: {
	width: 40,
	height: 40,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: -5117},
		{translateY: -3087},
	],
	},
style98: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 3.33325},
	],
	},
style99: {
	},
_Rectangle: {
	width: 10,
	height: 13.3333,
	backgroundColor: "rgba(14, 63, 242, 0)",
	position: "absolute",
	transform: [
		{translateX: -5102},
		{translateY: -3063.67},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	borderRadius: 1,
	},
_grid: {
	width: 40,
	height: 40,
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -119},
		{translateY: 405},
	],
	},
_Rectangle_2: {
	width: 11.6665,
	height: 11.6667,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateX: -5034},
		{translateY: -3079},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Rectangle_Copy: {
	width: 11.6665,
	height: 11.6667,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateX: -5015.67},
		{translateY: -3079},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Rectangle_3: {
	width: 11.6665,
	height: 11.6667,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateX: -5034},
		{translateY: -3060.67},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Rectangle_Copy_2: {
	width: 11.6665,
	height: 11.6667,
	backgroundColor: "rgba(216, 216, 216, 0)",
	position: "absolute",
	transform: [
		{translateX: -5015.67},
		{translateY: -3060.67},
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
		{translateX: -5036},
		{translateY: -3046},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_image_9_container: {
	width: 71,
	height: 37,
	position: "absolute",
	left: 172,
	top: 871,
	},
_image_9: {
	width: "100%",
	height: "100%",
	},
_chat: {
	width: 40,
	height: 40,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 66},
		{translateY: 402},
	],
	},
_Combined_Shape: {
	width: 33.3335,
	height: 30,
	position: "absolute",
	transform: [
		{translateX: -4850.67},
		{translateY: -3082},
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
		{translateX: -4857},
		{translateY: -3048},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_search_2: {
	width: 40,
	height: 40,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 145},
		{translateY: 402},
	],
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	},
style113: {
	position: "absolute",
	transform: [
		{translateX: 23.3335},
		{translateY: 23.3333},
	],
	},
style114: {
	},
style115: {
	position: "absolute",
	transform: [
		{translateX: 6.6665},
		{translateY: 6.66675},
	],
	},
style116: {
	},
_Advanced_Search: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 362,
	top: 900,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
style118: {
	width: 428,
	height: 499,
	position: "absolute",
	left: 0,
	top: 360,
	},
style119: {
	},
})


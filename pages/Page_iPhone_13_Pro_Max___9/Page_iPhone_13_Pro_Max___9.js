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
import {image_image_13_link} from './assets/imageLinks.js'
import {image_image_15_link} from './assets/imageLinks.js'
import {image_image_17_link} from './assets/imageLinks.js'
import {image_image_18_link} from './assets/imageLinks.js'
import {image_image_16_link} from './assets/imageLinks.js'
import {image_image_14_link} from './assets/imageLinks.js'
import {image_image_8_link} from './assets/imageLinks.js'
import {image_image_8_2_link} from './assets/imageLinks.js'
import {image_image_8_3_link} from './assets/imageLinks.js'
import {image_image_8_4_link} from './assets/imageLinks.js'
import {image_Rectangle_129_link} from './assets/imageLinks.js'
import {image_Rectangle_130_link} from './assets/imageLinks.js'
import {image_Rectangle_131_link} from './assets/imageLinks.js'
import {image_Rectangle_132_link} from './assets/imageLinks.js'
const Page_iPhone_13_Pro_Max___9  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page6}    >
			<View style = {noneModeStyles._Frame_12}    >
				<Text style = {noneModeStyles._Recent_Uploaded_Cars}   >
					Recent Uploaded Cars
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
								<Path fill = {"none"}   stroke = {"white"}  d = "M11.4933 2.78206C8.45945 -0.25183 3.54054 -0.25183 0.506643 2.78206"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style40}    >
						<View style = {noneModeStyles.style41}   >
							<Svg style={{height: 2, width: 5}} viewBox = "0 0 5 2">
								<Path fill = {"none"}   stroke = {"white"}  d = "M4.45821 1.35292C3.37673 0.271435 1.62329 0.271435 0.541806 1.35292"/>
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
									<Path fill = {"none"}   stroke = {"white"}  d = "M8.20715 0.5L0.707153 8L8.20715 15.5"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._bell}    >
					<View style = {noneModeStyles.style49}    >
						<View style = {noneModeStyles.style50}   >
							<Svg style={{height: 20, width: 21}} viewBox = "0 0 21 20">
								<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#FCDDEC"}  d = "M10.5 0.499997C14.6421 0.499997 18 3.85778 18 7.99989C18 10.3913 18 12.7926 18 14.2499C18 17.9999 20.4999 19.2499 20.4999 19.2499L0.500058 19.2499C0.500058 19.2499 3.00004 17.9999 3.00004 14.2499C3.00004 12.7926 3.00004 10.3913 3.00004 7.99989C3.00004 3.85778 6.35789 0.499997 10.5 0.499997V0.499997Z"/>
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
			<View style = {noneModeStyles._Rectangle_121}    >
			</View>
			<View style = {noneModeStyles._Rectangle_122}    >
			</View>
			<View style = {noneModeStyles._Rectangle_124}    >
			</View>
			<View style = {noneModeStyles._Rectangle_126}    >
			</View>
			<View style = {noneModeStyles._Rectangle_127}    >
			</View>
			<View style = {noneModeStyles._Rectangle_125}    >
			</View>
			<View style = {noneModeStyles._favourite}    >
				<View style = {noneModeStyles.style63}    >
					<View style = {noneModeStyles.style64}   >
						<Svg style={{height: 20, width: 21}} viewBox = "0 0 21 20">
							<Path fill = {"none"}   stroke = {"black"}  d = "M10.5 18.5L9.05 17.2052C3.9 12.6243 0.5 9.603 0.5 5.8951C0.5 2.87384 2.92 0.5 6 0.5C7.74 0.5 9.41 1.29455 10.5 2.55014C11.59 1.29455 13.26 0.5 15 0.5C18.08 0.5 20.5 2.87384 20.5 5.8951C20.5 9.603 17.1 12.6243 11.95 17.215L10.5 18.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._favourite_2}    >
				<View style = {noneModeStyles.style66}    >
					<View style = {noneModeStyles.style67}   >
						<Svg style={{height: 20, width: 21}} viewBox = "0 0 21 20">
							<Path fill = {"none"}   stroke = {"black"}  d = "M10.5 18.5L9.05 17.2052C3.9 12.6243 0.5 9.603 0.5 5.8951C0.5 2.87384 2.92 0.5 6 0.5C7.74 0.5 9.41 1.29455 10.5 2.55014C11.59 1.29455 13.26 0.5 15 0.5C18.08 0.5 20.5 2.87384 20.5 5.8951C20.5 9.603 17.1 12.6243 11.95 17.215L10.5 18.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._favourite_3}    >
				<View style = {noneModeStyles.style69}    >
					<View style = {noneModeStyles.style70}   >
						<Svg style={{height: 20, width: 21}} viewBox = "0 0 21 20">
							<Path fill = {"none"}   stroke = {"black"}  d = "M10.5 18.5L9.05 17.2052C3.9 12.6243 0.5 9.603 0.5 5.8951C0.5 2.87384 2.92 0.5 6 0.5C7.74 0.5 9.41 1.29455 10.5 2.55014C11.59 1.29455 13.26 0.5 15 0.5C18.08 0.5 20.5 2.87384 20.5 5.8951C20.5 9.603 17.1 12.6243 11.95 17.215L10.5 18.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._favourite_4}    >
				<View style = {noneModeStyles.style72}    >
					<View style = {noneModeStyles.style73}   >
						<Svg style={{height: 20, width: 21}} viewBox = "0 0 21 20">
							<Path fill = {"none"}   stroke = {"black"}  d = "M10.5 18.5L9.05 17.2052C3.9 12.6243 0.5 9.603 0.5 5.8951C0.5 2.87384 2.92 0.5 6 0.5C7.74 0.5 9.41 1.29455 10.5 2.55014C11.59 1.29455 13.26 0.5 15 0.5C18.08 0.5 20.5 2.87384 20.5 5.8951C20.5 9.603 17.1 12.6243 11.95 17.215L10.5 18.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Lahore__Pakistan}   >
				Lahore, Pakistan
			</Text>
			<Text style = {noneModeStyles._Lahore__Pakistan_2}   >
				Lahore, Pakistan
			</Text>
			<Text style = {noneModeStyles._Lahore__Pakistan_3}   >
				Lahore, Pakistan
			</Text>
			<Text style = {noneModeStyles._0}   >
				0
			</Text>
			<Text style = {noneModeStyles._0_2}   >
				0
			</Text>
			<Text style = {noneModeStyles._0_3}   >
				0
			</Text>
			<View style = {noneModeStyles._location}    >
				<View style = {noneModeStyles.style81}    >
					<View style = {noneModeStyles.style82}   >
						<Svg style={{height: 20, width: 13}} viewBox = "0 0 13 20">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#37806B"}  d = "M6.5 18.5C6.5 18.5 12.5 12.2 12.5 6.5C12.5 3.18629 9.81371 0.5 6.5 0.5C3.18629 0.5 0.5 3.18629 0.5 6.5C0.5 12.2 6.5 18.5 6.5 18.5Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style83}    >
					<View style = {noneModeStyles.style84}   >
						<Svg style={{height: 3, width: 3}} viewBox = "0 0 3 3">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#37806B"}  d = "M1.5 2.5C2.05228 2.5 2.5 2.05228 2.5 1.5C2.5 0.947715 2.05228 0.5 1.5 0.5C0.947715 0.5 0.5 0.947715 0.5 1.5C0.5 2.05228 0.947715 2.5 1.5 2.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._location_2}    >
				<View style = {noneModeStyles.style86}    >
					<View style = {noneModeStyles.style87}   >
						<Svg style={{height: 20, width: 13}} viewBox = "0 0 13 20">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#37806B"}  d = "M6.5 18.5C6.5 18.5 12.5 12.2 12.5 6.5C12.5 3.18629 9.81371 0.5 6.5 0.5C3.18629 0.5 0.5 3.18629 0.5 6.5C0.5 12.2 6.5 18.5 6.5 18.5Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style88}    >
					<View style = {noneModeStyles.style89}   >
						<Svg style={{height: 3, width: 3}} viewBox = "0 0 3 3">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#37806B"}  d = "M1.5 2.5C2.05228 2.5 2.5 2.05228 2.5 1.5C2.5 0.947715 2.05228 0.5 1.5 0.5C0.947715 0.5 0.5 0.947715 0.5 1.5C0.5 2.05228 0.947715 2.5 1.5 2.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._location_3}    >
				<View style = {noneModeStyles.style91}    >
					<View style = {noneModeStyles.style92}   >
						<Svg style={{height: 20, width: 13}} viewBox = "0 0 13 20">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#37806B"}  d = "M6.5 18.5C6.5 18.5 12.5 12.2 12.5 6.5C12.5 3.18629 9.81371 0.5 6.5 0.5C3.18629 0.5 0.5 3.18629 0.5 6.5C0.5 12.2 6.5 18.5 6.5 18.5Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style93}    >
					<View style = {noneModeStyles.style94}   >
						<Svg style={{height: 3, width: 3}} viewBox = "0 0 3 3">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#37806B"}  d = "M1.5 2.5C2.05228 2.5 2.5 2.05228 2.5 1.5C2.5 0.947715 2.05228 0.5 1.5 0.5C0.947715 0.5 0.5 0.947715 0.5 1.5C0.5 2.05228 0.947715 2.5 1.5 2.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Price_PKR_80_100_000}   >
				Price PKR 80,100,000
			</Text>
			<Text style = {noneModeStyles._Price_PKR_10_560_000}   >
				Price PKR 10,560,000
			</Text>
			<Text style = {noneModeStyles._Price_PKR_30_500_000}   >
				Price PKR 30,500,000
			</Text>
			<Text style = {noneModeStyles._3_hours_ago}   >
				3 hours ago
			</Text>
			<Text style = {noneModeStyles._3_hours_ago_2}   >
				3 hours ago
			</Text>
			<Text style = {noneModeStyles._3_hours_ago_3}   >
				3 hours ago
			</Text>
			<Text style = {noneModeStyles._3_hours_ago_4}   >
				3 hours ago
			</Text>
			<Text style = {noneModeStyles._3_hours_ago_5}   >
				3 hours ago
			</Text>
			<Text style = {noneModeStyles._3_hours_ago_6}   >
				3 hours ago
			</Text>
			<View style = {noneModeStyles.style104}    >
				<View style = {noneModeStyles.style105}   >
					<Svg style={{height: 311, width: 195}} viewBox = "0 0 195 311">
						<Path fill = {"white"}     d = "M0 7.2116C0 3.22874 3.73495 0 8.34225 0H186.658C191.265 0 195 3.22874 195 7.21159V303.788C195 307.771 191.265 311 186.658 311H8.34225C3.73495 311 0 307.771 0 303.788V7.2116Z"/>
						<Path fill = {"white"}     d = "M0 7.2116C0 3.22874 3.73495 0 8.34225 0H186.658C191.265 0 195 3.22874 195 7.21159V303.788C195 307.771 191.265 311 186.658 311H8.34225C3.73495 311 0 307.771 0 303.788V7.2116Z"/>
						<Path fill = {"white"}     d = "M0 7.2116C0 3.22874 3.73495 0 8.34225 0H186.658C191.265 0 195 3.22874 195 7.21159V303.788C195 307.771 191.265 311 186.658 311H8.34225C3.73495 311 0 307.771 0 303.788V7.2116Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._image_13_container}    >
				<View style = {noneModeStyles._image_13}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_13_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_15_container}    >
				<View style = {noneModeStyles._image_15}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_15_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_17_container}    >
				<View style = {noneModeStyles._image_17}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_17_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_18_container}    >
				<View style = {noneModeStyles._image_18}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_18_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_16_container}    >
				<View style = {noneModeStyles._image_16}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_16_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_14_container}    >
				<View style = {noneModeStyles._image_14}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_14_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._HM_Motor_s_Admin}   >
				HM Motor’s Admin
			</Text>
			<Text style = {noneModeStyles._HM_Motor_s_Admin_2}   >
				HM Motor’s Admin
			</Text>
			<Text style = {noneModeStyles._HM_Motor_s_Admin_3}   >
				HM Motor’s Admin
			</Text>
			<Text style = {noneModeStyles._HM_Motor_s_Admin_4}   >
				HM Motor’s Admin
			</Text>
			<Text style = {noneModeStyles._HM_Motor_s_Admin_5}   >
				HM Motor’s Admin
			</Text>
			<Text style = {noneModeStyles._HM_Motor_s_Admin_6}   >
				HM Motor’s Admin
			</Text>
			<View style = {noneModeStyles._image_8_container}    >
				<View style = {noneModeStyles._image_8}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_8_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Mercedes_Benz}   >
				Mercedes-Benz
			</Text>
			<Text style = {noneModeStyles._Land_Cruiser}   >
				Land Cruiser
			</Text>
			<Text style = {noneModeStyles._Range_Rover}   >
				Range Rover
			</Text>
			<Text style = {noneModeStyles._Audi}   >
				Audi
			</Text>
			<Text style = {noneModeStyles._3_hours_ago_7}   >
				3 hours ago
			</Text>
			<View style = {noneModeStyles._image_8_container_2}    >
				<View style = {noneModeStyles._image_8_2}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_8_2_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Price_PKR_15_000_000}   >
				Price PKR 15,000,000
			</Text>
			<View style = {noneModeStyles._location_4}    >
				<View style = {noneModeStyles.style135}    >
					<View style = {noneModeStyles.style136}   >
						<Svg style={{height: 20, width: 13}} viewBox = "0 0 13 20">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#37806B"}  d = "M6.5 18.5C6.5 18.5 12.5 12.2 12.5 6.5C12.5 3.18629 9.81371 0.5 6.5 0.5C3.18629 0.5 0.5 3.18629 0.5 6.5C0.5 12.2 6.5 18.5 6.5 18.5Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style137}    >
					<View style = {noneModeStyles.style138}   >
						<Svg style={{height: 3, width: 3}} viewBox = "0 0 3 3">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#37806B"}  d = "M1.5 2.5C2.05228 2.5 2.5 2.05228 2.5 1.5C2.5 0.947715 2.05228 0.5 1.5 0.5C0.947715 0.5 0.5 0.947715 0.5 1.5C0.5 2.05228 0.947715 2.5 1.5 2.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Lahore__Pakistan_4}   >
				Lahore, Pakistan
			</Text>
			<View style = {noneModeStyles._favourite_5}    >
				<View style = {noneModeStyles.style141}    >
					<View style = {noneModeStyles.style142}   >
						<Svg style={{height: 20, width: 21}} viewBox = "0 0 21 20">
							<Path fill = {"none"}   stroke = {"black"}  d = "M10.5 18.5L9.05 17.2052C3.9 12.6243 0.5 9.603 0.5 5.8951C0.5 2.87384 2.92 0.5 6 0.5C7.74 0.5 9.41 1.29455 10.5 2.55014C11.59 1.29455 13.26 0.5 15 0.5C18.08 0.5 20.5 2.87384 20.5 5.8951C20.5 9.603 17.1 12.6243 11.95 17.215L10.5 18.5Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._0_4}   >
				0
			</Text>
			<View style = {noneModeStyles._image_8_container_3}    >
				<View style = {noneModeStyles._image_8_3}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_8_3_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._image_8_container_4}    >
				<View style = {noneModeStyles._image_8_4}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_8_4_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_129_container}    >
				<View style = {noneModeStyles._Rectangle_129}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_129_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_130_container}    >
				<View style = {noneModeStyles._Rectangle_130}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_130_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_131_container}    >
				<View style = {noneModeStyles._Rectangle_131}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_131_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_132_container}    >
				<View style = {noneModeStyles._Rectangle_132}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_132_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_13_Pro_Max___9

const noneModeStyles = StyleSheet.create({
_page6: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Frame_12: {
	width: 428,
	height: 90,
	backgroundColor: "rgb(0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: -4,
	},
_Recent_Uploaded_Cars: {
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
		{translateX: 2.34839},
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
		{translateX: 3.15686},
		{translateY: 7.29297},
	],
	},
style37: {
	},
style38: {
	position: "absolute",
	transform: [
		{translateX: 6.77106},
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
	top: 97,
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
	top: 120,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_121: {
	width: 428,
	height: 783,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 0,
	top: 147,
	},
_Rectangle_122: {
	width: 198,
	height: 311,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 8,
	top: 169,
	borderRadius: 8,
	},
_Rectangle_124: {
	width: 198,
	height: 311,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 12,
	top: 509,
	borderRadius: 8,
	},
_Rectangle_126: {
	width: 198,
	height: 77,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 12,
	top: 849,
	borderRadius: 8,
	},
_Rectangle_127: {
	width: 198,
	height: 77,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 222,
	top: 849,
	borderRadius: 8,
	},
_Rectangle_125: {
	width: 198,
	height: 311,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 222,
	top: 509,
	borderRadius: 8,
	},
_favourite: {
	width: 24,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -52},
		{translateY: -21},
	],
	},
style63: {
	position: "absolute",
	transform: [
		{translateX: 164},
		{translateY: 445},
	],
	},
style64: {
	},
_favourite_2: {
	width: 24,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -52},
		{translateY: -21},
	],
	},
style66: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 3},
	],
	},
style67: {
	},
_favourite_3: {
	width: 24,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -54},
		{translateY: 324},
	],
	},
style69: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 3},
	],
	},
style70: {
	},
_favourite_4: {
	width: 24,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 160},
		{translateY: 326},
	],
	},
style72: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 3},
	],
	},
style73: {
	},
_Lahore__Pakistan: {
	width: 69,
	height: 12,
	position: "absolute",
	left: 42,
	top: 450,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "300",
	lineHeight: 9.375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Lahore__Pakistan_2: {
	width: 69,
	height: 12,
	position: "absolute",
	left: 42,
	top: 795,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "300",
	lineHeight: 9.375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Lahore__Pakistan_3: {
	width: 69,
	height: 12,
	position: "absolute",
	left: 252,
	top: 795,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "300",
	lineHeight: 9.375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_0: {
	width: 13,
	height: 9,
	position: "absolute",
	left: 193,
	top: 446,
	color: "rgb(0, 0, 0)",
	fontSize: 13,
	fontWeight: "300",
	lineHeight: 15.2344,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_0_2: {
	width: 13,
	height: 9,
	position: "absolute",
	left: 192,
	top: 791,
	color: "rgb(0, 0, 0)",
	fontSize: 13,
	fontWeight: "300",
	lineHeight: 15.2344,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_0_3: {
	width: 13,
	height: 9,
	position: "absolute",
	left: 403,
	top: 793,
	color: "rgb(0, 0, 0)",
	fontSize: 13,
	fontWeight: "300",
	lineHeight: 15.2344,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_location: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -199},
		{translateY: -22},
	],
	},
style81: {
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 444},
	],
	},
style82: {
	},
style83: {
	position: "absolute",
	transform: [
		{translateX: 26},
		{translateY: 449},
	],
	},
style84: {
	},
_location_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -199},
		{translateY: 323},
	],
	},
style86: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 3},
	],
	},
style87: {
	},
style88: {
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 8},
	],
	},
style89: {
	},
_location_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 13},
		{translateY: 326},
	],
	},
style91: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 3},
	],
	},
style92: {
	},
style93: {
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 8},
	],
	},
style94: {
	},
_Price_PKR_80_100_000: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 227,
	top: 765,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Price_PKR_10_560_000: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 15,
	top: 419,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Price_PKR_30_500_000: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 21,
	top: 767,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_3_hours_ago: {
	width: 51,
	height: "auto",
	position: "absolute",
	left: 61,
	top: 198,
	color: "rgb(174, 163, 163)",
	fontSize: 8,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_3_hours_ago_2: {
	width: 51,
	height: "auto",
	position: "absolute",
	left: 61,
	top: 546,
	color: "rgb(174, 163, 163)",
	fontSize: 8,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_3_hours_ago_3: {
	width: 51,
	height: "auto",
	position: "absolute",
	left: 61,
	top: 886,
	color: "rgb(174, 163, 163)",
	fontSize: 8,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_3_hours_ago_4: {
	width: 51,
	height: "auto",
	position: "absolute",
	left: 277,
	top: 886,
	color: "rgb(174, 163, 163)",
	fontSize: 8,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_3_hours_ago_5: {
	width: 51,
	height: "auto",
	position: "absolute",
	left: 277,
	top: 544,
	color: "rgb(174, 163, 163)",
	fontSize: 8,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_3_hours_ago_6: {
	width: 51,
	height: "auto",
	position: "absolute",
	left: 280,
	top: 198,
	color: "rgb(174, 163, 163)",
	fontSize: 8,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
style104: {
	width: 195,
	height: 311,
	position: "absolute",
	left: 222,
	top: 169,
	},
style105: {
	},
_image_13_container: {
	width: 28.8462,
	height: 30,
	position: "absolute",
	left: 22,
	top: 183,
	},
_image_13: {
	width: "100%",
	height: "100%",
	borderRadius: 24,
	},
_image_15_container: {
	width: 28.8462,
	height: 30,
	position: "absolute",
	left: 22,
	top: 530,
	},
_image_15: {
	width: "100%",
	height: "100%",
	borderRadius: 24,
	},
_image_17_container: {
	width: 28.8462,
	height: 30,
	position: "absolute",
	left: 20,
	top: 870,
	},
_image_17: {
	width: "100%",
	height: "100%",
	borderRadius: 24,
	},
_image_18_container: {
	width: 28.8462,
	height: 30,
	position: "absolute",
	left: 239,
	top: 870,
	},
_image_18: {
	width: "100%",
	height: "100%",
	borderRadius: 24,
	},
_image_16_container: {
	width: 28.8462,
	height: 30,
	position: "absolute",
	left: 239,
	top: 530,
	},
_image_16: {
	width: "100%",
	height: "100%",
	borderRadius: 24,
	},
_image_14_container: {
	width: 28.8462,
	height: 30,
	position: "absolute",
	left: 235,
	top: 182,
	},
_image_14: {
	width: "100%",
	height: "100%",
	borderRadius: 24,
	},
_HM_Motor_s_Admin: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 61,
	top: 183,
	color: "rgb(174, 163, 163)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_HM_Motor_s_Admin_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 61,
	top: 531,
	color: "rgb(174, 163, 163)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_HM_Motor_s_Admin_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 61,
	top: 871,
	color: "rgb(174, 163, 163)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_HM_Motor_s_Admin_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 276,
	top: 871,
	color: "rgb(174, 163, 163)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_HM_Motor_s_Admin_5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 277,
	top: 531,
	color: "rgb(174, 163, 163)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_HM_Motor_s_Admin_6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 277,
	top: 183,
	color: "rgb(174, 163, 163)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_image_8_container: {
	width: 184,
	height: 146,
	position: "absolute",
	left: 15,
	top: 234,
	},
_image_8: {
	width: "100%",
	height: "100%",
	},
_Mercedes_Benz: {
	width: 120,
	height: 20,
	position: "absolute",
	left: 15,
	top: 392,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "600",
	lineHeight: 17.5781,
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Land_Cruiser: {
	width: 120,
	height: 20,
	position: "absolute",
	left: 21,
	top: 743,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "600",
	lineHeight: 17.5781,
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Range_Rover: {
	width: 120,
	height: 20,
	position: "absolute",
	left: 227,
	top: 743,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "600",
	lineHeight: 17.5781,
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Audi: {
	width: 120,
	height: 20,
	position: "absolute",
	left: 227,
	top: 392,
	color: "rgb(0, 0, 0)",
	fontSize: 15,
	fontWeight: "600",
	lineHeight: 17.5781,
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_3_hours_ago_7: {
	width: 51,
	height: "auto",
	position: "absolute",
	left: 277,
	top: 198,
	color: "rgb(174, 163, 163)",
	fontSize: 8,
	fontWeight: "300",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_image_8_container_2: {
	width: 184,
	height: 146,
	position: "absolute",
	left: 227,
	top: 234,
	},
_image_8_2: {
	width: "100%",
	height: "100%",
	},
_Price_PKR_15_000_000: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 227,
	top: 419,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_location_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 13},
		{translateY: -24},
	],
	},
style135: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 3},
	],
	},
style136: {
	},
style137: {
	position: "absolute",
	transform: [
		{translateX: 11},
		{translateY: 8},
	],
	},
style138: {
	},
_Lahore__Pakistan_4: {
	width: 69,
	height: 12,
	position: "absolute",
	left: 256,
	top: 449,
	color: "rgb(0, 0, 0)",
	fontSize: 8,
	fontWeight: "300",
	lineHeight: 9.375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_favourite_5: {
	width: 24,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 162},
		{translateY: -21},
	],
	},
style141: {
	position: "absolute",
	transform: [
		{translateX: 2},
		{translateY: 3},
	],
	},
style142: {
	},
_0_4: {
	width: 13,
	height: 9,
	position: "absolute",
	left: 404,
	top: 445,
	color: "rgb(0, 0, 0)",
	fontSize: 13,
	fontWeight: "300",
	lineHeight: 15.2344,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_image_8_container_3: {
	width: 185,
	height: 145,
	position: "absolute",
	left: 20,
	top: 588,
	},
_image_8_3: {
	width: "100%",
	height: "100%",
	},
_image_8_container_4: {
	width: 185,
	height: 147.39,
	position: "absolute",
	left: 227,
	top: 587,
	},
_image_8_4: {
	width: "100%",
	height: "100%",
	},
_Rectangle_129_container: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 169,
	top: 392,
	},
_Rectangle_129: {
	width: "100%",
	height: "100%",
	borderRadius: 8,
	},
_Rectangle_130_container: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 381,
	top: 392,
	},
_Rectangle_130: {
	width: "100%",
	height: "100%",
	borderRadius: 8,
	},
_Rectangle_131_container: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 384,
	top: 743,
	},
_Rectangle_131: {
	width: "100%",
	height: "100%",
	borderRadius: 8,
	},
_Rectangle_132_container: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 174,
	top: 743,
	},
_Rectangle_132: {
	width: "100%",
	height: "100%",
	borderRadius: 8,
	},
})


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
import {image_image_2_link} from './assets/imageLinks.js'
import {image_image_11_link} from './assets/imageLinks.js'
const Page_iPhone_13_Pro_Max___3  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page10}    >
			<View style = {noneModeStyles._Rectangle_89}    >
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
							<Path fill = {"none"}   stroke = {"white"}  d = "M11.4935 2.78209C8.45954 -0.251833 3.54057 -0.251833 0.506649 2.78209"/>
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
			<View style = {noneModeStyles._Frame_9}    >
				<Text style = {noneModeStyles._Online__Active_}   >
					Online (Active)
				</Text>
				<View style = {noneModeStyles._Rectangle_76}    >
				</View>
				<View style = {noneModeStyles._Rectangle_77}    >
				</View>
				<Text style = {noneModeStyles._4_05_pm_2}   >
					4:05 pm
				</Text>
				<View style = {noneModeStyles._mute_2}    >
					<View style = {noneModeStyles._Icon_close_2}    >
						<View style = {noneModeStyles.style46}    >
							<View style = {noneModeStyles.style47}   >
								<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.47497 5.47486L0.525068 0.524964L5.47497 5.47486Z"/>
									<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M5.47497 5.47486L0.525068 0.524964"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style48}    >
							<View style = {noneModeStyles.style49}   >
								<Svg style={{height: 6, width: 6}} viewBox = "0 0 6 6">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.47493 0.524964L0.525033 5.47486L5.47493 0.524964Z"/>
									<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M5.47493 0.524964L0.525033 5.47486"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Icon_volume_off_2}    >
						<View style = {noneModeStyles.style51}    >
							<View style = {noneModeStyles.style52}   >
								<Svg style={{height: 15, width: 11}} viewBox = "0 0 11 15">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#FCDDEC"}  d = "M8.79284 0.7959C9.4228 0.165935 10.4999 0.6121 10.4999 1.50301L10.4999 12.6746C10.4999 13.5655 9.4228 14.0117 8.79284 13.3817L5.49995 10.0888H1.49995C0.94766 10.0888 0.499946 9.64108 0.499946 9.08879L0.499946 5.08879C0.499946 4.53651 0.94766 4.08879 1.49995 4.08879L5.49995 4.08879L8.79284 0.7959Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style53}    >
							<View style = {noneModeStyles.style54}   >
								<Svg style={{height: 3, width: 2}} viewBox = "0 0 2 3">
									<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M0.5 2.5C1.00462 1.99538 1.00462 1.00462 0.5 0.5L0.5 2.5Z"/>
									<Path fill = {"white"}   stroke = {"#FCDDEC"}  d = "M0.5 2.5C1.00462 1.99538 1.00462 1.00462 0.5 0.5"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._celluar_3}    >
					<View style = {noneModeStyles.style56}    >
						<View style = {noneModeStyles.style57}   >
							<Svg style={{height: 12, width: 1}} viewBox = "0 0 1 12">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V11.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style58}    >
						<View style = {noneModeStyles.style59}   >
							<Svg style={{height: 9, width: 1}} viewBox = "0 0 1 9">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V8.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style60}    >
						<View style = {noneModeStyles.style61}   >
							<Svg style={{height: 6, width: 1}} viewBox = "0 0 1 6">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V5.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style62}    >
						<View style = {noneModeStyles.style63}   >
							<Svg style={{height: 3, width: 1}} viewBox = "0 0 1 3">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V2.5"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._celluar_4}    >
					<View style = {noneModeStyles.style65}    >
						<View style = {noneModeStyles.style66}   >
							<Svg style={{height: 12, width: 1}} viewBox = "0 0 1 12">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V11.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style67}    >
						<View style = {noneModeStyles.style68}   >
							<Svg style={{height: 9, width: 1}} viewBox = "0 0 1 9">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V8.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style69}    >
						<View style = {noneModeStyles.style70}   >
							<Svg style={{height: 6, width: 1}} viewBox = "0 0 1 6">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V5.5"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style71}    >
						<View style = {noneModeStyles.style72}   >
							<Svg style={{height: 3, width: 1}} viewBox = "0 0 1 3">
								<Path fill = {"none"}   stroke = {"white"}  d = "M0.5 0.5V2.5"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._wifi_2}    >
					<View style = {noneModeStyles.style74}    >
						<View style = {noneModeStyles.style75}   >
							<Svg style={{height: 5, width: 20}} viewBox = "0 0 20 5">
								<Path fill = {"none"}   stroke = {"white"}  d = "M19.4757 4.4493C14.2424 -0.78396 5.75762 -0.78396 0.524355 4.4493"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style76}    >
						<View style = {noneModeStyles.style77}   >
							<Svg style={{height: 4, width: 12}} viewBox = "0 0 12 4">
								<Path fill = {"none"}   stroke = {"white"}  d = "M11.4935 2.78209C8.45954 -0.251833 3.54057 -0.251833 0.506649 2.78209"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style78}    >
						<View style = {noneModeStyles.style79}   >
							<Svg style={{height: 2, width: 5}} viewBox = "0 0 5 2">
								<Path fill = {"none"}   stroke = {"white"}  d = "M4.45815 1.3529C3.37668 0.271431 1.62327 0.271431 0.541799 1.3529"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._arrow_left}    >
					<View style = {noneModeStyles._Icon_arrow_down}    >
						<View style = {noneModeStyles.style82}    >
							<View style = {noneModeStyles.style83}   >
								<Svg style={{height: 1, width: 24}} viewBox = "0 0 24 1">
									<Path fill = {"none"}   stroke = {"white"}  d = "M23 0.5L0.5 0.5"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style84}    >
							<View style = {noneModeStyles.style85}   >
								<Svg style={{height: 16, width: 9}} viewBox = "0 0 9 16">
									<Path fill = {"none"}   stroke = {"white"}  d = "M8.20703 0.5L0.707031 8L8.20703 15.5"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_78}    >
			</View>
			<View style = {noneModeStyles._image_2_container}    >
				<View style = {noneModeStyles._image_2}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_2_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Audi_A5}   >
				Audi A5
			</Text>
			<Text style = {noneModeStyles._PKR_16_023_000__New_}   >
				PKR 16,023,000 (New)
			</Text>
			<View style = {noneModeStyles._Rectangle_79}    >
			</View>
			<Text style = {noneModeStyles._Sold}   >
				Sold
			</Text>
			<View style = {noneModeStyles._Rectangle_80}    >
			</View>
			<View style = {noneModeStyles._Rectangle_84}    >
			</View>
			<View style = {noneModeStyles._user}    >
				<View style = {noneModeStyles.style96}    >
					<View style = {noneModeStyles.style97}   >
						<Svg style={{height: 19, width: 17}} viewBox = "0 0 17 19">
							<Path fill = {"none"}   stroke = {"#2329D6"}  d = "M0.508723 18.2504C0.508723 18.2504 4.81167 16.2791 6.04109 14.9649C7.2705 13.6507 3.58226 13.6507 3.58226 7.07973C3.58226 0.508723 8.49992 0.508723 8.49992 0.508723C8.49992 0.508723 13.4176 0.508723 13.4176 7.07973C13.4176 13.6507 9.72933 13.6507 10.9587 14.9649C12.1882 16.2791 16.4911 18.2504 16.4911 18.2504"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style98}    >
					<View style = {noneModeStyles.style99}   >
						<Svg style={{height: 27, width: 26}} viewBox = "0 0 26 27">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#2329D6"}  d = "M12.6615 26.497C19.3764 26.497 24.82 20.6781 24.82 13.5C24.82 6.32203 19.3764 0.503107 12.6615 0.503107C5.94662 0.503107 0.503107 6.32203 0.503107 13.5C0.503107 20.6781 5.94662 26.497 12.6615 26.497Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._user_2}    >
				<View style = {noneModeStyles.style101}    >
					<View style = {noneModeStyles.style102}   >
						<Svg style={{height: 19, width: 17}} viewBox = "0 0 17 19">
							<Path fill = {"none"}   stroke = {"#2329D6"}  d = "M0.508723 18.2504C0.508723 18.2504 4.81167 16.2791 6.04109 14.9649C7.2705 13.6507 3.58226 13.6507 3.58226 7.07973C3.58226 0.508723 8.49992 0.508723 8.49992 0.508723C8.49992 0.508723 13.4176 0.508723 13.4176 7.07973C13.4176 13.6507 9.72933 13.6507 10.9587 14.9649C12.1882 16.2791 16.4911 18.2504 16.4911 18.2504"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style103}    >
					<View style = {noneModeStyles.style104}   >
						<Svg style={{height: 27, width: 26}} viewBox = "0 0 26 27">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#2329D6"}  d = "M12.6615 26.497C19.3764 26.497 24.82 20.6781 24.82 13.5C24.82 6.32203 19.3764 0.503107 12.6615 0.503107C5.94662 0.503107 0.503107 6.32203 0.503107 13.5C0.503107 20.6781 5.94662 26.497 12.6615 26.497Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._user_3}    >
				<View style = {noneModeStyles.style106}    >
					<View style = {noneModeStyles.style107}   >
						<Svg style={{height: 19, width: 17}} viewBox = "0 0 17 19">
							<Path fill = {"none"}   stroke = {"#2329D6"}  d = "M0.508723 18.2504C0.508723 18.2504 4.81167 16.2791 6.04109 14.9649C7.2705 13.6507 3.58226 13.6507 3.58226 7.07973C3.58226 0.508723 8.49992 0.508723 8.49992 0.508723C8.49992 0.508723 13.4176 0.508723 13.4176 7.07973C13.4176 13.6507 9.72933 13.6507 10.9587 14.9649C12.1882 16.2791 16.4911 18.2504 16.4911 18.2504"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles.style108}    >
					<View style = {noneModeStyles.style109}   >
						<Svg style={{height: 27, width: 26}} viewBox = "0 0 26 27">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#2329D6"}  d = "M12.6615 26.497C19.3764 26.497 24.82 20.6781 24.82 13.5C24.82 6.32203 19.3764 0.503107 12.6615 0.503107C5.94662 0.503107 0.503107 6.32203 0.503107 13.5C0.503107 20.6781 5.94662 26.497 12.6615 26.497Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles.style110}    >
				<View style = {noneModeStyles.style111}   >
					<Svg style={{height: 28, width: 95}} viewBox = "0 0 95 28">
						<Path fill = {"#E40EA8"}     d = "M0 10C0 4.47715 4.47715 0 10 0H85C90.5228 0 95 4.47715 95 10V18C95 23.5228 90.5228 28 85 28H10C4.47715 28 0 23.5228 0 18V10Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles.style112}    >
				<View style = {noneModeStyles.style113}   >
					<Svg style={{height: 100, width: 134}} viewBox = "0 0 134 100">
						<Path fill = {"#EAD66E"}     d = "M0 10C0 4.47716 4.47715 0 10 0H124C129.523 0 134 4.47715 134 10V90C134 95.5228 129.523 100 124 100H10C4.47715 100 0 95.5229 0 90V10Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles.style114}    >
				<View style = {noneModeStyles.style115}   >
					<Svg style={{height: 100, width: 134}} viewBox = "0 0 134 100">
						<Path fill = {"#E40EA8"}     d = "M0 10C0 4.47716 4.47715 0 10 0H124C129.523 0 134 4.47715 134 10V90C134 95.5228 129.523 100 124 100H10C4.47715 100 0 95.5229 0 90V10Z"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._PKR_16_023_000}   >
				PKR 16,023,000
			</Text>
			<Text style = {noneModeStyles._PKR_16_023_000_2}   >
				PKR 16,023,000
			</Text>
			<Text style = {noneModeStyles._Offer_Received}   >
				Offer Received
			</Text>
			<Text style = {noneModeStyles._Offer_Accepted}   >
				Offer Accepted
			</Text>
			<Text style = {noneModeStyles._PKR_15_000_000}   >
				PKR 15,000,000
			</Text>
			<View style = {noneModeStyles._Rectangle_85}    >
			</View>
			<Text style = {noneModeStyles._Item_has_been_sold}   >
				Item has been sold
			</Text>
			<Text style = {noneModeStyles._PKR_16_023_000_3}   >
				PKR 16,023,000
			</Text>
			<View style = {noneModeStyles._Rectangle_86}    >
			</View>
			<Text style = {noneModeStyles._Give_Review}   >
				Give Review
			</Text>
			<View style = {noneModeStyles._image_11_container}    >
				<View style = {noneModeStyles._image_11}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_11_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles.style128}    >
				<View style = {noneModeStyles.style129}   >
					<Svg style={{height: 25, width: 293}} viewBox = "0 0 293 25">
						<Path fill = {"white"}   stroke = {"#D8D8D8"}  d = "M0.5 7C0.5 3.41015 3.41015 0.5 7 0.5H286C289.59 0.5 292.5 3.41015 292.5 7V18C292.5 21.5899 289.59 24.5 286 24.5H7C3.41015 24.5 0.5 21.5899 0.5 18V7Z"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._Message_____}   >
				Message.....
			</Text>
			<View style = {noneModeStyles._send}    >
				<View style = {noneModeStyles.style132}    >
					<View style = {noneModeStyles.style133}   >
						<Svg style={{height: 19, width: 20}} viewBox = "0 0 20 19">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#C4C4C4"}  d = "M18.068 8.60383C18.8091 8.97142 18.8091 10.0285 18.068 10.3961L1.94499 18.3936C1.28007 18.7234 0.500161 18.2397 0.500161 17.4975V11.4991L9.50305 9.49846L0.500161 7.29212L0.500161 1.50244C0.500161 0.760206 1.28007 0.27648 1.94499 0.606303L18.068 8.60383Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_88}    >
			</View>
			<Text style = {noneModeStyles._5_08_PM}   >
				5:08 PM
			</Text>
			<Text style = {noneModeStyles._5_10_PM}   >
				5:10 PM
			</Text>
			<Text style = {noneModeStyles._5_12_PM}   >
				5:12 PM
			</Text>
			<Text style = {noneModeStyles._5_12_PM_2}   >
				5:12 PM
			</Text>
			<View style = {noneModeStyles._Rectangle_129}    >
			</View>
			<Text style = {noneModeStyles._Make_offer}   >
				Make offer
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_13_Pro_Max___3

const noneModeStyles = StyleSheet.create({
_page10: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Rectangle_89: {
	width: 428,
	height: 59,
	backgroundColor: "rgba(229, 229, 229, 0.52)",
	position: "absolute",
	left: 0,
	top: 851,
	},
_4_05_pm: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 14,
	top: 0,
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
		{translateX: -137},
		{translateY: -465},
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
		{translateX: 106},
		{translateY: -465},
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
		{translateX: 138},
		{translateY: -466},
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
		{translateX: 170},
		{translateY: -466},
	],
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 3.15674},
		{translateY: 7.29297},
	],
	},
style34: {
	},
style35: {
	position: "absolute",
	transform: [
		{translateX: 6.771},
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
_Frame_9: {
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
_4_05_pm_2: {
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
_mute_2: {
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
_Icon_close_2: {
	width: 10,
	height: 10,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 15},
		{translateY: 7},
	],
	},
style46: {
	position: "absolute",
	transform: [
		{translateX: 2.34814},
		{translateY: 2.34839},
	],
	},
style47: {
	},
style48: {
	position: "absolute",
	transform: [
		{translateX: 2.34839},
		{translateY: 2.34839},
	],
	},
style49: {
	},
_Icon_volume_off_2: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	},
style51: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 5.70703},
	],
	},
style52: {
	},
style53: {
	position: "absolute",
	transform: [
		{translateX: 14},
		{translateY: 11},
	],
	},
style54: {
	},
_celluar_3: {
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
style56: {
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 7},
	],
	},
style57: {
	},
style58: {
	position: "absolute",
	transform: [
		{translateX: 13},
		{translateY: 10},
	],
	},
style59: {
	},
style60: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 13},
	],
	},
style61: {
	},
style62: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 16},
	],
	},
style63: {
	},
_celluar_4: {
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
style65: {
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 7},
	],
	},
style66: {
	},
style67: {
	position: "absolute",
	transform: [
		{translateX: 13},
		{translateY: 10},
	],
	},
style68: {
	},
style69: {
	position: "absolute",
	transform: [
		{translateX: 9},
		{translateY: 13},
	],
	},
style70: {
	},
style71: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 16},
	],
	},
style72: {
	},
_wifi_2: {
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
style74: {
	position: "absolute",
	transform: [
		{translateX: 3.15674},
		{translateY: 7.29297},
	],
	},
style75: {
	},
style76: {
	position: "absolute",
	transform: [
		{translateX: 6.771},
		{translateY: 12.4041},
	],
	},
style77: {
	},
style78: {
	position: "absolute",
	transform: [
		{translateX: 10.3853},
		{translateY: 17.5154},
	],
	},
style79: {
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
	transform: [
		{translateX: -3900},
		{translateY: -3806},
	],
	},
style82: {
	position: "absolute",
	transform: [
		{translateX: 3.75},
		{translateY: 13.75},
	],
	},
style83: {
	},
style84: {
	position: "absolute",
	transform: [
		{translateX: 3.75},
		{translateY: 7.5},
	],
	},
style85: {
	},
_Rectangle_78: {
	width: 75,
	height: 65,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 22,
	top: 107,
	},
_image_2_container: {
	width: 77,
	height: 65,
	position: "absolute",
	left: 22,
	top: 107,
	},
_image_2: {
	width: "100%",
	height: "100%",
	},
_Audi_A5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 118,
	top: 118,
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
	left: 118,
	top: 139,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Open Sans",
	textAlign: "left",
	},
_Rectangle_79: {
	width: 30,
	height: 13,
	backgroundColor: "rgb(3, 18, 74)",
	position: "absolute",
	left: 247,
	top: 142,
	borderRadius: 4,
	},
_Sold: {
	width: 22,
	height: 13,
	position: "absolute",
	left: 252,
	top: 143,
	color: "rgb(255, 255, 255)",
	fontSize: 10,
	fontWeight: "400",
	lineHeight: 11.7188,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_80: {
	width: 428,
	height: 636,
	backgroundColor: "rgba(229, 229, 229, 0.52)",
	position: "absolute",
	left: 0,
	top: 198,
	},
_Rectangle_84: {
	width: 428,
	height: 653,
	backgroundColor: "rgb(235, 235, 235)",
	position: "absolute",
	left: 0,
	top: 198,
	},
_user: {
	width: 29,
	height: 31,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: -204},
		{translateY: -97},
	],
	},
style96: {
	position: "absolute",
	transform: [
		{translateX: 16.6458},
		{translateY: 373.75},
	],
	},
style97: {
	},
style98: {
	position: "absolute",
	transform: [
		{translateX: 12.4167},
		{translateY: 368.583},
	],
	},
style99: {
	},
_user_2: {
	width: 29,
	height: 31,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 179},
		{translateY: 87},
	],
	},
style101: {
	position: "absolute",
	transform: [
		{translateX: 6.64575},
		{translateY: 7.75},
	],
	},
style102: {
	},
style103: {
	position: "absolute",
	transform: [
		{translateX: 2.41675},
		{translateY: 2.58325},
	],
	},
style104: {
	},
_user_3: {
	width: 29,
	height: 31,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 185},
		{translateY: -236},
	],
	},
style106: {
	position: "absolute",
	transform: [
		{translateX: 6.64575},
		{translateY: 7.75},
	],
	},
style107: {
	},
style108: {
	position: "absolute",
	transform: [
		{translateX: 2.41675},
		{translateY: 2.58325},
	],
	},
style109: {
	},
style110: {
	width: 95,
	height: 28,
	position: "absolute",
	left: 298,
	top: 227,
	},
style111: {
	},
style112: {
	width: 134,
	height: 100,
	position: "absolute",
	left: 48,
	top: 335,
	},
style113: {
	},
style114: {
	width: 134,
	height: 100,
	position: "absolute",
	left: 248,
	top: 515,
	},
style115: {
	},
_PKR_16_023_000: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 79,
	top: 391,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_PKR_16_023_000_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 281,
	top: 569,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Offer_Received: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 69,
	top: 357,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Offer_Accepted: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 269,
	top: 540,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_PKR_15_000_000: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 309.96,
	top: 236.761,
	color: "rgb(33, 33, 33)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_85: {
	width: 134,
	height: 81,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 147,
	top: 650,
	borderRadius: 8,
	},
_Item_has_been_sold: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 156,
	top: 666,
	color: "rgb(0, 0, 0)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_PKR_16_023_000_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 180,
	top: 696,
	color: "rgb(0, 0, 0)",
	fontSize: 10,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_86: {
	width: 95,
	height: 43,
	backgroundColor: "rgb(3, 18, 74)",
	position: "absolute",
	left: 167,
	top: 777,
	},
_Give_Review: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 176,
	top: 790,
	color: "rgb(255, 255, 255)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_image_11_container: {
	width: 71,
	height: 37,
	position: "absolute",
	left: 0,
	top: 860,
	},
_image_11: {
	width: "100%",
	height: "100%",
	},
style128: {
	width: 293,
	height: 25,
	position: "absolute",
	left: 84,
	top: 868,
	},
style129: {
	},
_Message_____: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 97,
	top: 871,
	color: "rgb(196, 196, 196)",
	fontSize: 15,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_send: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: [
		{translateX: 176},
		{translateY: 406},
	],
	},
style132: {
	position: "absolute",
	transform: [
		{translateX: 393},
		{translateY: 872.007},
	],
	},
style133: {
	},
_Rectangle_88: {
	width: 428,
	height: 18,
	backgroundColor: "rgb(33, 33, 33)",
	position: "absolute",
	left: 0,
	top: 908,
	},
_5_08_PM: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 240,
	top: 237,
	color: "rgb(196, 196, 196)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_5_10_PM: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 209,
	top: 375,
	color: "rgb(196, 196, 196)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_5_12_PM: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 195,
	top: 558,
	color: "rgb(196, 196, 196)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_5_12_PM_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 296,
	top: 684,
	color: "rgb(196, 196, 196)",
	fontSize: 10,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_129: {
	width: 90,
	height: 38,
	backgroundColor: "rgb(8, 0, 61)",
	position: "absolute",
	left: 318,
	top: 125,
	},
_Make_offer: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 337,
	top: 138,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Roboto",
	textAlign: "left",
	},
})


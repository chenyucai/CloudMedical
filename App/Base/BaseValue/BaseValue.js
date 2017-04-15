/**
 * Created by Leung on 2017/1/9.
 */
import React, {Component} from 'react';
import {
	Platform,
	View
} from 'react-native';
let BaseValue = {
	font: {
		big: 16,
		normal: 14,
		small: 12
	},
	colors: {
		ThemeColor: '#5ac6fd',
		blackDark: '#333333',
		blackNormal: '#555555',
		blueBase: '#0090FF',
		brown: '#ff7700',
		bgGray: '#f6f6f6'
	},
	getSmallDP(dp) {
		if (dp * GOBAL_PIXELRATIO < 1) {
			return 1.0 / GOBAL_PIXELRATIO;
		} else {
			return dp;
		}
	},
	isiOSNavbar(color) {/**/
		if (Platform.OS == 'ios') {
			if (color) {
				return (
					<View style={{height: 20, width: GOBAL_WIDTH, backgroundColor: color}}></View>
				);
			} else {
				return (
					<View style={{height: 20, width: GOBAL_WIDTH}}></View>
				);
			}
		}
	},
	xround(x, num) {
		return Math.round(x * Math.pow(10, num)) / Math.pow(10, num);
	}
}
export default BaseValue
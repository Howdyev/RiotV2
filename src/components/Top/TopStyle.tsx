import React, { FunctionComponent } from "react";
import { Global, css } from "@emotion/react";

const defaultColors = {
  base: "#093762",
  baseInvert: "#fff",
  text: "#202020",
};

const defaultStyle = css`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Myeongjo', serif;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -font-smoothing: antialiased;
    font-family: 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "MS Pゴシック", "MS PGothic", sans-serif;
}
html {
    scroll-behavior: smooth;
}
html,
body,
#___gatsby {
    height: 100%;
    min-height: 100%;
    background-color: #F2F8F7;
    position: relative;
    color: #232323;
    overflow: hidden;
}

body.no_scroll {
    overflow: hidden;
}
a, button, input[type=submit], select{
    cursor: pointer;
}
a, a:hover, a:focus, 
button, button:hover, button:focus,
input, input:hover, input:focus, 
textarea, textarea:hover, textarea:focus,
select, select:hover, select:focus{
    outline: 0;
    box-shadow: none;
    text-decoration: none;
}
ul, ol, li{
    list-style: none;
}
img{
    max-width: 100%;
    display: block;
}

.bg_line {
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    position: absolute;
    width: 4px;
    height: 110vh;
    left: 60%;
    top: -5vh;
    background-color: #09376E;
    z-index: 0;
}
.bg_line:before {
    content: "";
    background-color: #ffffff;
    height: 100%;
    width: 2px;
    position: absolute;
    left: 20px;
}
.bg_line:after {
    content: "";
    background-color: #ffffff;
    height: 100%;
    width: 2px;
    position: absolute;
    right: 20px;
}

/*header section css start*/
header.site_header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    padding: 30px;
}
header.site_header.inner_page_header {
    position: absolute;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
header.site_header.inner_page_header .navbar_toggler {
    position: relative;
    top: auto;
    right: auto;
}
header.site_header.fixed_header {
    top: -208px;
    background-color: #fff;
    position: fixed;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.16);
}
header.site_header.fixed_header.header_animate {
    transition: all 0.4s;
    top: 0;
    padding: 15px 30px;
}
header.site_header a.header_logo {
    display: table;
    cursor: pointer;
}
header.site_header a.header_logo.open_menu {
    z-index: 1;
    position: relative;
}
header.site_header a.header_logo .logo_black {
    width: 0px;
    transition: all 1s cubic-bezier(0.72, 0, 0.35, 0.99) 0s;
}
header.site_header.inner_page_header.fixed_header a.header_logo .logo_black {
    width: 0;
    transition: all 0.4s;
}
header.site_header.inner_page_header.fixed_header.header_animate a.header_logo.open_menu .logo_black,
header.site_header.inner_page_header a.header_logo .logo_black,
header.site_header a.header_logo.open_menu .logo_black,
.viewing-page-1 header.site_header a.header_logo .logo_black {
    width: 207px;
}
header.site_header a.header_logo svg {
    width: 85px;
    margin-left: auto;
    display: block;
    height: auto;
    transition: all 1s cubic-bezier(0.72, 0, 0.35, 0.99) 0s;
}
header.site_header a.header_logo svg path {
    transition: all 1s cubic-bezier(0.72, 0, 0.35, 0.99) 0s;
    fill: ${defaultColors.base};
}
body.dark header.site_header a.header_logo svg path {
    fill: ${defaultColors.baseInvert};
}
header.site_header.inner_page_header.fixed_header.header_animate a.header_logo.open_menu svg,
header.site_header a.header_logo.open_menu svg {
    width: 153px;
}
header.site_header nav.custom_navbar {
    position: fixed;
    top: -125%;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    transition: all 0.4s;
}
header.site_header nav.custom_navbar.navbar_animate {
    top: 0;
}
header.site_header ul.custom_navbar_links li a {
    font-size: 40px;
    line-height: 70px;
    color: ${defaultColors.base};
    font-weight: 900;
    margin: 20px 0;
    display: block;
    text-align: center;
    transition: all 0.4s;
    pointer-events: all;
}
header.site_header ul.custom_navbar_links li a:hover {
    color: ${defaultColors.base};
    opacity: 0.7;
}
.navbar_toggler {
    padding: 0;
    height: 80px;
    width: 80px;
    border: none;
    outline: none !important;
    background-color: #fff;
    border-radius: 50%;
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 9999;
    display: block;
    box-shadow: 3px 3px 6px 0 rgb(0 0 0 / 16%) !important;
}
.navbar_toggler .navbar_toggler_inner,
.navbar_toggler .navbar_toggler_inner:after,
.navbar_toggler .navbar_toggler_inner:before {
    width: 5px;
    height: 5px;
    transition-timing-function: ease;
    transition-duration: 0.3s;
    transition-property: transform;
    border-radius: 6px;
    background-color: ${defaultColors.base};
    position: absolute;
    left: 0;
    right: 0;
}
.navbar_toggler .navbar_toggler_inner{
    transition: top 75ms ease 0.12s,transform 75ms cubic-bezier(.55,.055,.675,.19);
    top: 0;
    bottom: 0;
    margin: auto;
    transform: rotate(90deg);
}
.navbar_toggler .navbar_toggler_inner:after,
.navbar_toggler .navbar_toggler_inner:before {
    display: block;
    content: "";
}
.navbar_toggler .navbar_toggler_inner:before {
    transition: top 75ms ease 0.12s,opacity 75ms ease;
    top: -12px;
}
.navbar_toggler .navbar_toggler_inner:after {
    transition: bottom 75ms ease 0.12s,transform 75ms cubic-bezier(.55,.055,.675,.19);
    bottom: -12px;
}
.navbar_toggler.open_menu .navbar_toggler_inner {
    transition: top 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) 0.12s;
    transform: rotate(45deg);
    top: 0;
    width: 40px;
    height: 2px;
}
.navbar_toggler.open_menu .navbar_toggler_inner:before {
    top: 0;
    transition: top 75ms ease,opacity 75ms ease 0.12s;
    opacity: 0;
    width: 40px;
    height: 2px;
}
.navbar_toggler.open_menu .navbar_toggler_inner:after {
    bottom: 0;
    transition: bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) 0.12s;
    transform: rotate(-90deg);
    width: 40px;
    height: 2px;
}
header.site_header nav.custom_navbar .copyright_text {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
    line-height: 22px;
    color: #939393;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin-top: 15px;
    padding: 0 35px;
}
/*header section css end*/
/*header responsive css start*/
@media(max-width: 1700px) {
    .navbar_toggler {
        top: 15px;
    }
}
@media(max-width: 1500px) {
    header.site_header.fixed_header.header_animate {
        padding: 15px;
    }
    header.site_header.inner_page_header.fixed_header.header_animate a.header_logo.open_menu .logo_black,
    header.site_header.inner_page_header a.header_logo .logo_black, 
    header.site_header a.header_logo.open_menu .logo_black, 
    .viewing-page-1 header.site_header a.header_logo .logo_black, 
    header.site_header a.header_logo img {
        width: 170px;
    }
    header.site_header a.header_logo.open_menu svg {
        width: 127px;
    }
    .navbar_toggler {
        height: 60px;
        width: 60px;
        right: 15px;
    }
    .social_icon li {
        margin-bottom: 14px;
    }
}
@media(max-width: 1166px) {
    header.site_header ul.custom_navbar_links li a {
        font-size: 30px;
        line-height: 60px;
        margin: 10px 0;
    }
    header.site_header.inner_page_header.fixed_header.header_animate a.header_logo.open_menu .logo_black,
    header.site_header.inner_page_header a.header_logo .logo_black, 
    header.site_header a.header_logo.open_menu .logo_black, 
    .viewing-page-1 header.site_header a.header_logo .logo_black, 
    header.site_header a.header_logo img {
        width: 150px;
    }
    header.site_header.inner_page_header a.header_logo .svg,
    header.site_header a.header_logo.open_menu svg {
        width: 114px;
    }
}
@media(max-width: 675px) {
    header.site_header ul.custom_navbar_links li a {
        font-size: 24px;
        line-height: 50px;
        margin: 5px 0;
    }
    header.site_header a.header_logo.open_menu .logo_black, 
    .viewing-page-1 header.site_header a.header_logo .logo_black,
    header.site_header a.header_logo img {
        width: 150px;
    }
    header.site_header a.header_logo.open_menu svg {
        width: 113px;
    }
    .navbar_toggler {
        height: 45px;
        width: 45px;
    }
    .navbar_toggler.open_menu .navbar_toggler_inner,
    .navbar_toggler.open_menu .navbar_toggler_inner:before,
    .navbar_toggler.open_menu .navbar_toggler_inner:after {
        width: 30px;
        height: 2px;
    }
    .navbar_toggler .navbar_toggler_inner:before {
        top: -10px;
    }
    .navbar_toggler .navbar_toggler_inner:after {
        bottom: -10px;
    }
    .social_icon ul li a {
        font-size: 18px;
    }
}
@media(min-width: 675px) {
    .navbar_toggler {
        display: none;
    }
    header.site_header nav.custom_navbar {
        top: 0;
        height: unset;
        justify-content: flex-end;
        background: none;
        pointer-events: none;
    }
    .custom_navbar_links {
        display: flex;
        pointer-events: all;
    }
    .custom_navbar_links li {
        margin-right: 30px;
    }
    header.site_header ul.custom_navbar_links li a {
        color: ${defaultColors.base};
        font-size: 16px;
        line-height: 40px;
        font-weight: bold;
    }
    header.site_header ul.custom_navbar_links li a:hover {
        opacity: .7;
    }
    header.site_header ul.custom_navbar_links li a.contact {
        background-color: ${defaultColors.base};
        color: ${defaultColors.baseInvert};
        padding-left: 20px;
        border-radius: 100px;
        padding-right: 20px;
    }
    body.dark header.site_header ul.custom_navbar_links li a {
        color: ${defaultColors.baseInvert};
    }
    body.dark header.site_header ul.custom_navbar_links li a.contact {
        background-color: ${defaultColors.baseInvert};
        color: ${defaultColors.base};
    }
}
/*responsive css end*/
/*SocialButtons css start*/
.social_icon {
    position: fixed;
    left: 30px;
    bottom: 40px;
    z-index: 111;
}
.social_icon.open_menu {
    z-index: 1111;
}
.social_icon li {
    margin-bottom: 22px;
}
.social_icon ul li a {
    color: ${defaultColors.base};
    font-size: 23px;
    transition: all 0.4s;
}
.social_icon ul li a:hover {
    opacity: .7;
}
.social_icon.open_menu ul li a {
    color: #000;
}
body.dark .social_icon ul li a {
    color: ${defaultColors.baseInvert};
}
@media(max-width: 1500px) {
    .social_icon li {
        margin-bottom: 14px;
    }
}
/*SocialButtons css end*/
/*ScrollNext css end*/

.page_top_btn {
    cursor: pointer;
    position: absolute;
    bottom: 40px;
    right: 20px;
    margin: auto;
    width: 70px;
    text-align: center;
}
.top_btn img {
    margin: auto;
}
.top_btn p {
    font-size: 12px;
    line-height: 20px;
    color: #09376E;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin-top: 10px;
    text-transform: uppercase;
}

.slider_next {
    position: fixed;
    right: 30px;
    bottom: 40px;
    z-index: 111;
    color: ${defaultColors.base};
    border: 2px solid ${defaultColors.base};
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: transparent;  
    transition: all 0.7s;
}

body.dark .slider_next {
    color: ${defaultColors.baseInvert};
    border-color: ${defaultColors.baseInvert};
}
.slider_next i {
    font-size: 16px;
    transition: all 0.7s;
}
/*ScrollNextButton css end*/

/*Vertical Slider Setup start*/
.vertical_slider_main {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute !important;
    overflow: hidden;
    transform: none !important;
    transition: all 0s !important;
    -webkit-transform-style: preserve-3d;
    z-index: 2;
}
section.page_back {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: 0;
}
.page_inner {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.vertical_slider_main section > div {
    height: 100% !important;
    /* background-color: #ffffff; */
    transition: transform 1s cubic-bezier(0.72, 0, 0.35, 0.99) 0s, visibility 1s cubic-bezier(0.72, 0, 0.35, 0.99) 0s;
}
.vertical_slider_main section.previous_active {
    transform: translate3d(-20%, -100%, 0px);
    /*top: -100% !important;*/
}
.vertical_slider_main section.previous_active > div {
    transform: scale(0.5, 0.5);
}
.vertical_slider_main section.active {
    transform: translate3d(0%, 0%, 0px);
    visibility: visible;
    /*top: 0 !important;*/
}
.vertical_slider_main section.active > div {
    transform: scale(1, 1);
}
.vertical_slider_main section.next_active {
    transform: translate3d(20%, 100%, 0px);f
    /*top: 100% !important;*/
}
.vertical_slider_main section.next_active > div {
    transform: scale(0.5, 0.5);
}
ul.onepage-pagination {
    position: absolute;
    top: 0;
    right: 64px;
    bottom: 0;
    margin: auto;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    z-index: 111;
}
ul.onepage-pagination li {
    margin: 10px 4px;
    font-size: 0px;
}
ul.onepage-pagination li a {
    font-size: 0px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #CED1D0;
    transition: all 0.3s;
    display: table;
}
ul.onepage-pagination li a.active {
    background-color: #09376E;
}
.front_wrap {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute !important;
    overflow: hidden;
    transform: none !important;
    transition: all 0s !important;
    -webkit-transform-style: preserve-3d;
    z-index: 3;
}
.front_page {
    width: 100%;
    height: 100%;
    position: absolute;
}
.abs_hide {
    visibility: hidden !important;
}

.before_back_abs_hide::before {
    background: none !important;
}
.back_abs_hide {
    background: none !important;
}
.back_hide {
    visibility: hidden !important;
}
.overflow_hidden {
    overflow: hidden !important;
}
.padding_more {
    padding: 20px 20px !important;
    margin: -20px -20px !important;
}
.front_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-top: 60px;
    padding-bottom:20px;
}
.subpage_scroller {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
}
.subpage_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    padding-top: 90px;
    padding-bottom:60px;
    position: relative;
}
.subpage {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
/*Vertical Silder setup end*/
/*loading layer css start*/
.ml2 {
    font-weight: 900;
    font-size: 3.5em;
  }
  
  .ml2letter {
    display: inline-block;
    line-height: 1em;
}
.closing_layer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: ${defaultColors.base};
    z-index: 999;
    transition: all .7s;
    opacity: 0;
    display: none;
}
.loader_layer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: ${defaultColors.base};
    z-index: 999;
    transition: all .7s;
}
.first_mask,
.progress_mask {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${defaultColors.base};
    z-index:1001;
}
.progress_mask {
    background-color: transparent;
}
.closing_layer svg,
.first_mask svg,
.progress_mask svg {
    width: 36px;
    height: 36px;
}
.closing_layer svg,
.first_mask svg {
    fill: #fff;
}
.progress_mask svg {
    fill: ${defaultColors.base}
}
#loader,
#progress_spin {
	position: absolute;
	top:calc(50% - 35px);
	left:calc(50% - 35px);
	-webkit-border-radius: 50%;
	border-radius: 50%;
	width: 70px;
	height: 70px;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-animation: loader 1.1s infinite linear;
	animation: loader 1.1s infinite linear;
    border-top: 3px solid rgba(255, 255, 255, 0.2);
	border-right: 3px solid rgba(255, 255, 255, 0.2);
	border-bottom: 3px solid rgba(255, 255, 255, 0.2);
	border-left: 3px solid rgba(255, 255, 255, 1);
}
#progress_spin {
    border-top: 3px solid rgba(9, 55, 110, 0.2);
	border-right: 3px solid rgba(9, 55, 110, 0.2);
	border-bottom: 3px solid rgba(9, 55, 110, 0.2);
	border-left: 3px solid rgba(9, 55, 110, 1);
}

@-webkit-keyframes loader {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}

@keyframes loader {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
/*loading layer css end*/
/*Toast css start*/
.toast_window {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(9, 55, 110, 0.2);
    z-index: 1200;
    display: flex;
    justify-content: center;
    align-items: center;
}
.toast_content {
    width: 600px;
    height: 300px;
    background-color: #fff;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 7px 23px -1px rgba(0,0,0,0.35);
}
.toast_content p {
    font-size: 16px;
    font-weight: bold;
    color: ${defaultColors.text};
}
/*Toast css end*/
/*video effect css start*/
video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}
.video_blur {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    background-color: rgba(0,0,0,0.6);
}
/*video effect css end*/
/*Dots css start*/
.HomeNavDots-list {
	position: absolute;
	right: 35px;
	top: 50%;
	-webkit-transform: translate(0, -50%);
	transform: translate(0, -50%);
    z-index: 111;
}
@media(max-width: 675px) {
    .HomeNavDots-list {
        display: none;
    }
}
.HomeNavDots-list-item {
	position: relative;
	width: 26px;
	height: 26px;
	cursor: pointer;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-webkit-tap-highlight-color: transparent
}

.HomeNavDots-list-item:hover::after {
	-webkit-transform: scale(1);
	transform: scale(1);
	opacity: 1;
	transition: opacity .6s cubic-bezier(.215, .61, .355, 1), border .6s cubic-bezier(.645, .045, .355, 1), -webkit-transform .6s cubic-bezier(.215, .61, .355, 1);
	transition: transform .6s cubic-bezier(.215, .61, .355, 1), opacity .6s cubic-bezier(.215, .61, .355, 1), border .6s cubic-bezier(.645, .045, .355, 1);
	transition: transform .6s cubic-bezier(.215, .61, .355, 1), opacity .6s cubic-bezier(.215, .61, .355, 1), border .6s cubic-bezier(.645, .045, .355, 1), -webkit-transform .6s cubic-bezier(.215, .61, .355, 1)
}

.HomeNavDots-list-item::after,
.HomeNavDots-neighbor::before {
	display: block;
	opacity: 0;
	content: "";
	pointer-events: none
}

.HomeNavDots-list-item.active {
	cursor: auto;
	pointer-events: none
}

.HomeNavDots-list-item.active::after {
	border: 2px solid #09376E
}

.HomeNavDots-list-item::after {
	position: absolute;
	left: 8px;
	top: 8px;
	width: 10px;
	height: 10px;
	border: 2px solid #cbcbcb;
	box-sizing: border-box;
	border-radius: 50%;
	-webkit-transform: scale(2.5);
	transform: scale(2.5);
	transition: opacity .6s cubic-bezier(.645, .045, .355, 1), border .6s cubic-bezier(.645, .045, .355, 1), -webkit-transform .6s cubic-bezier(.645, .045, .355, 1);
	transition: transform .6s cubic-bezier(.645, .045, .355, 1), opacity .6s cubic-bezier(.645, .045, .355, 1), border .6s cubic-bezier(.645, .045, .355, 1);
	transition: transform .6s cubic-bezier(.645, .045, .355, 1), opacity .6s cubic-bezier(.645, .045, .355, 1), border .6s cubic-bezier(.645, .045, .355, 1), -webkit-transform .6s cubic-bezier(.645, .045, .355, 1)
}

.HomeNavDots-circle {
	display: block;
	position: absolute;
	width: 6px;
	height: 0;
	left: 10px;
	top: 10px;
	padding-top: 6px;
	overflow: hidden;
	border-radius: 50%;
	background-color: #cbcbcb;
	transition: background .5s cubic-bezier(.42, .08, .2, 1), -webkit-transform .4s cubic-bezier(.215, .61, .355, 1);
	transition: background .5s cubic-bezier(.42, .08, .2, 1), transform .4s cubic-bezier(.215, .61, .355, 1);
	transition: background .5s cubic-bezier(.42, .08, .2, 1), transform .4s cubic-bezier(.215, .61, .355, 1), -webkit-transform .4s cubic-bezier(.215, .61, .355, 1)
}

.HomeNavDots-neighbor,
.HomeNavDots-neighbor::before {
	width: 44px;
	height: 44px;
	position: absolute;
	box-sizing: border-box
}

.active .HomeNavDots-circle {
	background-color: #0F7DFF
}

.HomeNavDots-neighbor {
	right: 20px;
	bottom: 20px;
	border: 2px solid #000;
	border-radius: 50%;
	cursor: pointer;
	transition: border .6s cubic-bezier(.645, .045, .355, 1), color .6s cubic-bezier(.645, .045, .355, 1), opacity .6s cubic-bezier(.645, .045, .355, 1), -webkit-transform .4s cubic-bezier(.215, .61, .355, 1);
	transition: border .6s cubic-bezier(.645, .045, .355, 1), color .6s cubic-bezier(.645, .045, .355, 1), opacity .6s cubic-bezier(.645, .045, .355, 1), transform .4s cubic-bezier(.215, .61, .355, 1);
	transition: border .6s cubic-bezier(.645, .045, .355, 1), color .6s cubic-bezier(.645, .045, .355, 1), opacity .6s cubic-bezier(.645, .045, .355, 1), transform .4s cubic-bezier(.215, .61, .355, 1), -webkit-transform .4s cubic-bezier(.215, .61, .355, 1);
	z-index: 2
}

.HomeNavDots-neighbor::before {
	left: -2px;
	top: -2px;
	border: 3px solid #fff;
	border-radius: 50%;
	-webkit-transform: scale(1.4);
	transform: scale(1.4);
	transition: opacity .6s cubic-bezier(.645, .045, .355, 1), border .6s cubic-bezier(.645, .045, .355, 1), -webkit-transform .6s cubic-bezier(.645, .045, .355, 1);
	transition: transform .6s cubic-bezier(.645, .045, .355, 1), opacity .6s cubic-bezier(.645, .045, .355, 1), border .6s cubic-bezier(.645, .045, .355, 1);
	transition: transform .6s cubic-bezier(.645, .045, .355, 1), opacity .6s cubic-bezier(.645, .045, .355, 1), border .6s cubic-bezier(.645, .045, .355, 1), -webkit-transform .6s cubic-bezier(.645, .045, .355, 1)
}

.is-scene1 .HomeNavDots-neighbor,
.is-scene2 .HomeNavDots-neighbor,
.is-scene3 .HomeNavDots-neighbor,
.is-scene4 .HomeNavDots-neighbor,
.is-scene5 .HomeNavDots-neighbor,
.is-scene6 .HomeNavDots-neighbor,
.is-scene7 .HomeNavDots-neighbor {
	border: 2px solid #fff;
	color: #fff
}

.no-touchevents .HomeNavDots-neighbor:hover::before {
	-webkit-transform: scale(1);
	transform: scale(1);
	opacity: 1;
	transition: opacity .6s cubic-bezier(.215, .61, .355, 1), border .6s cubic-bezier(.645, .045, .355, 1), -webkit-transform .6s cubic-bezier(.215, .61, .355, 1);
	transition: transform .6s cubic-bezier(.215, .61, .355, 1), opacity .6s cubic-bezier(.215, .61, .355, 1), border .6s cubic-bezier(.645, .045, .355, 1);
	transition: transform .6s cubic-bezier(.215, .61, .355, 1), opacity .6s cubic-bezier(.215, .61, .355, 1), border .6s cubic-bezier(.645, .045, .355, 1), -webkit-transform .6s cubic-bezier(.215, .61, .355, 1)
}
/*Dots css end*/
/*Read More button css start*/
.readmore {
    font-weight: bold;
    text-decoration: none;
    padding: 12px 36px;
    display: inline-block;
    border-radius: 100px;
    transition: all .2s;
    position: absolute;
    background-color: ${defaultColors.baseInvert};
    color: ${defaultColors.base};
    animation: moveInBottom 5s ease-out;
    animation-fill-mode: backwards;
}
.readmore:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.readmore::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
    background-color: #fff;
}
.readmore:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}
@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
.readmore_wrap {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/*Read More button css end*/
/*Common heading start*/
.common_heading {
    text-align: center;
    width: 100%;
    overflow: hidden;
}
.common_heading img {
    margin: auto;
    width: auto;
    object-fit: contain;
}
.common_heading h2 {
    font-size: 50px;
    line-height: 80px;
    font-weight: 900;
    color: ${defaultColors.base};
    text-transform: uppercase;

}
.common_heading p {
    font-size: 30px;
    line-height: 48px;
    font-weight: 900;
    text-align: center;
    color: ${defaultColors.base};
}
.common_heading p span {
    padding: 0 20px;
    font-size: 30px;
    line-height: 48px;
    font-weight: 900;
    color: ${defaultColors.base};
    border-top: solid 1px ${defaultColors.base};
}
.service_front .common_heading h2,
.work_front .common_heading h2,
.partner_front .common_heading h2,
.recruit_front .common_heading h2 {
    color: ${defaultColors.baseInvert};
}
.service_front .common_heading p span,
.work_front .common_heading p span,
.partner_front .common_heading p span,
.recruit_front .common_heading p span {
    border-top-color: ${defaultColors.baseInvert};
}
@media(max-width: 1400px) {
    .common_heading h2 {
        font-size: 40px;
        line-height: 60px;
    }
}
/*Common heading enbd*/
/*banner section css start*/
.front_container.banner_front {
    padding: 0 0;
}
.banner_title h1 {
    font-size: 72px;
    color: #fff;
    text-align: center;
}
@media(max-width: 1399px) {
    .banner_title h1 {
        font-size: 60px;
    }
}
@media(max-width: 1019px) {
    .banner_title h1 {
        font-size: 50px;
    }
}
/*banner section css end*/
/*aboutus section css start*/
.aboutus_content {
    width: 1200px;
    margin: auto;
}
.aboutus_content p {
    text-align: center;
    font-size: 20px;
    line-height: 60px;
    font-weight: 900;
    color: #232323;
}
.aboutus_top {
    display: flex;
    justify-content: space-between;
}
.aboutus_item {
    display: flex;
    padding: 16px 0;
    border-bottom: solid 1px #EEEEEE;
}
.aboutus_info {
    flex: 1;
}
.aboutus_info dt {
    font-size: 16px;
    font-weight: bold;
    width: 120px;
    flex: 0 0 120px;
}
.aboutus_info dd {
    flex: 0 0 1;
    font-size: 16px;
}
.aboutus_img {
    padding-left: 80px;
}
.aboutus_img img {
    height: 345px;
}
.aboutus_map {
    flex: 1;
    width: 1200px;
    margin 20px auto;
}
.subpage_container .aboutus_map {
    height: 300px;
    flex: unset;
}
@media(max-width: 1399px) {
    .aboutus_content {
        width: 1000px;
    }
    .aboutus_info dt {
        font-size: 14px;
    }
    .aboutus_info dd {
        font-size: 14px;
    }
    .aboutus_img img {
        height: 300px;
    }
    .aboutus_map {
        width: 1000px;
    }
}
@media(max-width: 1019px) {
    .aboutus_content {
        width: 100%;
        padding: 0 16px;
    }
    .aboutus_map {
        width: 100%;
        padding 0 16px;
    }
    .aboutus_img img {
        width: 48vw;
        height: auto !important;
    }

}
/*aboutus section css end*/
/*service section css start*/
.service_content {
    width: 1400px; 
    margin: auto;
}
.aboutus_item {
    padding: 12px 0;
}
.service_list {
    display: flex;
    justify-content: center;
}
.single_service {
    flex: 0 0 33.33%; 
    padding: 13px;
}
.service_image {
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 10px;
}
.service_content_sec .custom_col_text {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    padding-bottom: 30px;
    min-height: 100%;
}
.service_subtitle {
    text-align: center;
    font-size: 30px;
    line-height: 30px;
    font-weight: 900;
    color: #323232;
    margin: 10px 0;
}
.service_text h3 {
    font-size: 20px;
    line-height: 30px;
    padding-left: 0px;
    color: #fff;
}
.service_text h3 span{
    font-size: 24px;
    line-height: 60px;
    font-weight: 900;
    background-color: #fff;
    color: #000;
    padding: 6px 8px;
    border-radius: 2px;
    margin-right: 16px;
}
.service_text p {
    font-size: 16px;
    line-height: 1.6em;
    color: #fff;
    font-weight: 500;
}
@media(max-width: 1399px) {
    .service_content {
        width: 1000px;
    }
    .service_image {
        border-radius: 6px;
    }
    .service_text h3 {
        font-size: 16px;
        line-height: 20px;
    }
    .service_text h3 span {
        font-size: 16px;
        line-height: 40px;
        padding: 4px 6px;
    }
    .service_text p {
        font-size: 14px;
    }
}
@media(max-width: 1019px) {
    .service_content {
        width: 100%;
        padding: 0 16px;
    }
}
/*service section css end*/
/*work section css start*/
.work_img {
    display: flex;
    justify-content: center;
    align-items: center;
}
.work_img img{
    max-width: 600px;
    border-radius: 12px;
    margin-bottom: 20px;
}
.work_text p {
    font-size: 16px;
    color: #fff;
    text-align: center;
}
.work_text p a {
    font-size: 14px;
    color: #fff;
}
.work_text p span {
    font-size: 18px;
    font-weight: bold;
}
@media(max-width: 1399px) {
    .work_text p {
        font-size: 14px;
    }
}
@media(max-width: 600px) {
    .work_img img {
        width: 90vw;
    }
}
/*work section css end*/
/*recruit section css start*/
.recruit_desc p {
    color: ${defaultColors.baseInvert};
    font-size: 16px;
    line-height: 1.6em;
    text-align: center;
}
.recruit_list {
    display: flex;
}
.recruit_item {
    background-color: #fff;
    margin: 20px;
    border-radius: 12px;
    padding: 20px 20px 0 20px;
    max-width: 560px;
}
.recruit_item h3 {
    font-size: 18px;
    line-height: 2em;
    color: ${defaultColors.base};
    border-bottom: solid 1px #00000011;
    margin-bottom: 20px;
}
.recruit_item p {
    font-size: 15px;
    line-height: 1.6em;
    font-weight: bold;
    color: ${defaultColors.text};
}
.recruit_item ul {
    color: ${defaultColors.text};
    padding-left: 20px;
    margin-bottom: 20px;
}
.recruit_item li {
    font-size: 15px;
    line-height: 1.5em;
    color: ${defaultColors.text};
    list-style: disc;
}
@media(max-width: 1399px) {
    .recruit_desc p {
        font-size: 14px;
    }
    .recruit_item h3 {
        font-size: 16px;
    }
    .recruit_item p {
        font-size: 12px;
    }
    .recruit_item li {
        font-size: 12px;
    }
    .recruit_content {
        width: 1000px;
    }
    .recruit_list {
        justify-content: space-between;
    }
    .recruit_item {
        flex: 0 0 47%;
        margin: 0;
        margin-top: 20px;
    }
}
@media(max-width: 1019px) {
    .recruit_content {
        width: 100%;
        padding: 16px 0;
    }
    .recruit_list {
        justify-content: space-around;
    }
}
/*recruit section css end*/
/*message section css start*/
.message_content {
    display: flex;
}
.message_text p {
    font-size: 16px;
    font-weight: bold;
    line-height: 2em;
    margin-bottom: 20px;
}
.message_right {
    margin-left: 4vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.profile_row {
    display: flex;
}
.profile_img_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
}
.profile_item .job_name {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 8px 0;
}
.profile_item.ceo_item .job_name {
    flex-direction: row;
}
.profile_item.ceo_item .job{
    margin-right: 20px;
}
.profile_item .job_name .job {
    font-size: 12px;
}
.profile_item .job_name .name {
    font-size: 14px;
    font-weight: bold;
    margin-top: 8px;
}
.profile_item.ceo_item .job_name .name {
    margin-top: 0;
}
.profile_item.ceo_item img {
    height: 40vh;
    width: auto;
}
.profile_item img {
    height: 20vh;
    width: auto;
}
@media(max-width: 1399px) {
    .message_text p {
        font-size: 14px;
    }
}
@media(max-width: 999px) {
    .message_content {
        width: 100%; 
        padding: 16px;
    }
}
/*message section css end*/
/*news section css start*/
.news_width {
    display: flex;
    width: 1400px;
    margin: auto;
    justify-content: space-between;
    align-items: center;
}
.news_left {
    width: 45%;
    margin-left: 16px;
}
.news_right {
    width: 48%;
    margin-right: 16px
}
.news_list {
    border-top: solid 1px #EEEEEE;
}
.news_item {
    display: flex;
    padding: 16px 8px;
    border-bottom: solid 1px #EEEEEE;
    cursor: pointer;
}
.news_item:hover {
    background-color: #E5E9EF;
}
.news_item dt {
    font-size: 12px;
    margin-right: 20px;
} 
.news_item dd {
    font-size: 14px;
    line-height: 1.6em;
} 
.news_right .news_date {
    font-size: 12px;
}
.news_title h3 {
    font-weight: bold;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.news_detail p {
    font-size: 14px;
    margin-bottom: 12px;
}
@media(max-width: 1399px) {
    .news_width{
        width:  100%;
    }
}
@media(max-width: 999px) {
    .message_content {
        width: 100%; 
        padding: 16px;
    }
}
/*news section css end*/
/*contact section css start*/
.contact_width {
    width: 560px;
    margin: auto;
}
.input_item {
    margin-bottom: 30px;
}
.input_cap {
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 10px
}
.input_cap span {
    font-size: 10px;
    line-height: 10px;
    background-color: #D61313;
    color: #fff;
    padding: 2px 2px;
    border-radius: 4px;
    margin-left: 10px;
}
.input_wrap textarea,
.input_wrap input {
    border: solid 1px #CCCCCC;
    border-radius: 4px;
    width: 100%;
    padding: 5px 16px;
}
.input_wrap textarea {
    heigh: 100px;
}
.submit_item {
    display: flex;
    justify-content: center;
    align-items: center;
}
.submit_item button {
    border-color: ${defaultColors.base};
    background-color: ${defaultColors.base};
    color: ${defaultColors.baseInvert};
    border-radius: 50px;
    padding: 10px 90px;
    font-size: 16px;
    font-weight: bold;
    transition: all .3s;
}
.submit_item button:hover {
    opacity: .7;
}
.radio_item input {
    border: solid 1px #CCCCCC;
}
.radio_item {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}
.radio_item label {
    font-size: 14px;
    padding-left: 10px;
    margin-right: 40px;
}
.radio_wrap {
    display: flex;
    align-items: center;
}
@media(max-width: 559px) {
    .contact_width {
        width: 100%; 
        padding: 16px;
    }
}
/*news section css end*/

/*********************************************/
/******         sp style                 *****/
/*********************************************/
@media(max-width: 767px) {
    header.site_header {
        padding: 8px;
    }
    header.site_header a.header_logo svg path {
        fill: ${defaultColors.baseInvert};
    }
    body.bright header.site_header a.header_logo svg path {
        fill: ${defaultColors.base};
    }
    body.dark header.site_header a.header_logo svg path {
        fill: ${defaultColors.baseInvert};
    }
    header.site_header ul.custom_navbar_links li a.contact {
        background-color: ${defaultColors.base};
        color: ${defaultColors.baseInvert};
        padding-left: 20px;
        border-radius: 100px;
        padding-right: 20px;
        margin-top: 30px;
    }
    .custom_scroller {
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
    .front_page {
        height: auto;
        position: initial;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .front_container {
        display: block;
        padding-bottom: 40px;
    }
    .common_heading h2 {
        font-size: 35px;
    }
    /*banner start*/
    .banner_front {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.6);
    }
    .banner_title h1 {
        font-size: 36px;
    }
    /*service start*/
    .service_list {
        display: block;
    }
    .single_service {
        padding: 0;
        margin: 30px 0;
    }
    .service_image img {
        width: 100%;
    }
    .service_text h3 {
         font-size: 18px;
    }
    .service_text p {
        font-size: 16px;
    }
    .aboutus_top {
        display: block;
    }
    .aboutus_info dt,
    .aboutus_info dd {
        font-size: 16px;
        padding-left: 10px;
    }
    .aboutus_img {
        padding: 0;
    }
    .aboutus_img img {
        width: 100%;
        margin: 20px 0;
    }
    .aboutus_map {
        height: 300px;
        margin-bottom: 20px;
    }
    .work_text p {
        padding: 0 16px;
    }
    .recruit_desc p {
        font-size: 16px;
        padding: 0 16px;
    }
    .recruit_list {
        display: block;
        padding: 0 16px;
    }
    .recruit_item {
        padding-bottom: 2px;
    }
    .recruit_item h3 {
        font-size: 18px;
    }
    .recruit_item p {
        font-size: 16px;
    }
    .recruit_item li {
        font-size: 16px;
    }
    .message_content {
        display: block;
    }
    .message_text p {
        font-size: 16px;
        text-align: center;
    }
    .message_right {
        margin-left: 0;
        margin-top: 30px;
    }
    .left_div_wrap {
        display: flex;
        justify-content: flex-end;
    }
    .left_img {
        margin-left: 20px;
    }
    .profile_item .job_name .job {
        font-size: 14px;
    }
    .profile_item.ceo_item .job_name .name {
        font-size: 16px;
    }
    .profile_item .job_name .name {
        font-size: 16px;
    }
    .news_width {
        display: block;
        padding: 0 16px;
    }
    .news_left {
        width: 100%;
        margin-left: 0;
    }
    .news_item {
        display: block;
    }
    .news_item dt {
        font-size: 14px;
    }
    .news_item dd {
        font-size: 16px;
    }
    .news_right {
        width: 100%;
        margin-top: 40px;
    }
    .news_title h3 {
        font-size: 18px;
    }
    .news_right .news_date {
        font-size: 14px;
    }
    .news_detail p {
        font-size: 16px;
    }
    .radio_item {
         display: block;
         padding-left: 20px;
    }
    .radio_wrap {
        margin-top: 16px;
    }
    .radio_item label {
        font-size: 16px;
    }
    .input_cap {
        font-size: 16px;
    }
    .input_wrap textarea, 
    .input_wrap input {
        font-size: 16px;
    }
    .input_wrap textarea {
        height: 140px;
    }
    .footer {
        background-color: ${defaultColors.base};
    }
    .footer_wrap {
        padding: 20px 16px;
        display: flex;
        justify-content: space-around;
    }
    .footer_wrap a {
        font-size: 14px;
        color: ${defaultColors.baseInvert};
        word-break: keep-all;
    }
    .footer_wrap a:hover {
        opacity: 0.7;
    }
    .copyright {
        position: relative;
    }
    .copyright p {
        font-size: 12px;
       text-align: center;
       padding-bottom: 20px;
       color: ${defaultColors.baseInvert};
    }
}

`;

const TopStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default TopStyle;

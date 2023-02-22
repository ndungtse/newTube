import { qwikify$ } from "@builder.io/qwik-react";
import {
	BiSearch,
	BiMicrophone,
	BiGridAlt,
	BiBell,
	BiChevronDown,
	BiPlus,
	BiUser,
	BiMusic,
	BiNews,
	BiRadio,
	BiDotsHorizontalRounded,
	BiComment,
	BiPause,
	BiPlay,
	BiCog,
	BiSkipNext,
	BiSkipPrevious,
} from "react-icons/bi";
import {
	FaFire,
	FaGamepad,
} from "react-icons/fa";

export const SearchIcon = qwikify$(BiSearch, {  eagerness: "load" });
export const MicrophoneIcon = qwikify$(BiMicrophone, {  eagerness: "load" });
export const GridAltIcon = qwikify$(BiGridAlt, {  eagerness: "load" });
export const ChevronDownIcon = qwikify$(BiChevronDown, {  eagerness: "load" });
export const BellIcon = qwikify$(BiBell, {  eagerness: "load" });
export const CommentIcon = qwikify$(BiComment, {  eagerness: "load" });
export const PlusIcon = qwikify$(BiPlus, {  eagerness: "load" });
export const UserIcon = qwikify$(BiUser, {  eagerness: "load" });
export const MusicIcon = qwikify$(BiMusic, {  eagerness: "load" });
export const NewsIcon = qwikify$(BiNews, {  eagerness: "load" });
export const RadioIcon = qwikify$(BiRadio, {  eagerness: "load" });
export const FireIcon = qwikify$(FaFire, {  eagerness: "load" });
export const ForwardIcon = qwikify$(BiSkipNext, {  eagerness: "load" });
export const BackwardIcon = qwikify$(BiSkipPrevious, {  eagerness: "load" });
export const GamepadIcon = qwikify$(FaGamepad, {  eagerness: "load" });
export const DotsHorizontalIcon = qwikify$(BiDotsHorizontalRounded, {  eagerness: "load" });
export const PlayIcon = qwikify$(BiPlay, {  eagerness: "load" });
export const PauseIcon = qwikify$(BiPause, {  eagerness: "load" });
export const CogIcon = qwikify$(BiCog, {  eagerness: "load" });

import React from "react";
import { Icon } from "@ui-kitten/components";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export const BackIcon = (style) => <Icon {...style} name="arrow-back" />;

export const RSVPIcon = (style) => (
  <FontAwesome5 name="ring" size={24} color="#7E55A0" />
);
export const Circle = (style) => <Icon {...style} name="stop-circle-outline" />;

export const QRIcon = (style) => (
  <AntDesign name="qrcode" size={50} color="#7E55A0" />
);

export const FoodIcon = (style) => (
  <MaterialIcons name="food-bank" size={24} color="#7E55A0" />
);
export const ScheduleIcon = (style) => (
  <AntDesign name="calendar" size={24} color="#7E55A0" />
);
export const GameIcon = (style) => (
  <MaterialCommunityIcons
    name="gamepad-circle-left"
    size={24}
    color="#7E55A0"
  />
);

export const BulbOutline = (style) => <Icon {...style} name="bulb-outline" />;

export const BellOutline = (style) => <Icon {...style} name="bell-outline" />;

export const UserOutline = (style) => <Icon {...style} name="person-outline" />;

export const LikeOutline = (style) => <Icon {...style} name="heart-outline" />;

export const DislikeOutline = (style) => (
  <Icon {...style} name="arrow-down-outline" />
);
export const CommentOutline = (style) => (
  <Icon {...style} name="message-square-outline" />
);

export const StarOutline = (style) => <Icon {...style} name="star-outline" />;

export const LayoutIcon = (style) => <Icon {...style} name="layout-outline" />;

export const PersonIcon = (style) => <Icon {...style} name="person-outline" />;

export const MoreVerticalIcon = (style) => (
  <Icon {...style} name="more-vertical" />
);

export const LogoutIcon = (style) => <Icon {...style} name="log-out-outline" />;

export const InfoIcon = (style) => <Icon {...style} name="info-outline" />;

export const AlertTriangleIcon = (style) => (
  <Icon {...style} name="alert-triangle-outline" />
);

export const EyeIcon = (style) => <Icon {...style} name="eye-outline" />;

export const EyeOffIcon = (style) => <Icon {...style} name="eye-off-outline" />;

export const MenuIcon = (style) => <Icon {...style} name="menu-outline" />;

export const HomeIcon = (style) => <Icon {...style} name="home-outline" />;

export const DoneAllIcon = (style) => (
  <Icon {...style} name="done-all-outline" />
);

export const GridIcon = (style) => <Icon {...style} name="grid-outline" />;

export const SearchIcon = (style) => <Icon {...style} name="search-outline" />;

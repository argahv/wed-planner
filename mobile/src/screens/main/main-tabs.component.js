import React from "react";
import {
  BottomNavigation,
  BottomNavigationTab,
  Text,
} from "@ui-kitten/components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  RSVPIcon,
  GameIcon,
  ScheduleIcon,
  QRIcon,
  FoodIcon,
} from "../../assets/icons";
import Title from "../../components/title.component";

const MainTabs = ({ navigation, state }) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab
        icon={RSVPIcon}
        title={<Title style={{ color: "#6B66A8" }}>Invitation</Title>}
      />
      <BottomNavigationTab
        icon={FoodIcon}
        title={<Title style={{ color: "#6B66A8" }}>Foods</Title>}
      />
      <BottomNavigationTab
        icon={QRIcon}
        title={
          <Title style={{ fontSize: 20 }} style={{ color: "#6B66A8" }}>
            Scan
          </Title>
        }
      />
      <BottomNavigationTab
        icon={ScheduleIcon}
        title={<Title style={{ color: "#6B66A8" }}>Schedule</Title>}
      />
      <BottomNavigationTab
        icon={GameIcon}
        title={<Title style={{ color: "#6B66A8" }}>Quiz</Title>}
      />
    </BottomNavigation>
  );
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(MainTabs);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToken } from "../selectors";

// Route logged-in-user cannot access
const GuestRoute = ({ token, container: Container, ...restProps }) => {
  useEffect(() => {
    if (token) {
      if (restProps.location.state && restProps.location.state.from) {
        restProps.navigate(restProps.location.state.from, { replace: true });
      } else {
        restProps.navigate("/", { replace: true });
      }
    }
  }, [token]);
  return <Container {...restProps} />;
};

const mapStateToProps = createStructuredSelector({
  token: selectToken
});

export default connect(mapStateToProps)(GuestRoute);

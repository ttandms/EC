import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import component from "./component";
import Dispatchers from "./dispatchers";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatchers: new Dispatchers(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);

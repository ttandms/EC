import { connect } from "react-redux";
import Dispatchers from "./dispatchers";
import component from "./component";

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  dispatchers: new Dispatchers(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);

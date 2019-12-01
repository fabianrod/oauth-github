import { connect } from 'react-redux';
import Login from '../../components/Login';
import { fetchUserRequest } from '../../redux/actions/user';

const mapStateToProps = (state: any) => ({
  user: state.user.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUserData: () => dispatch(fetchUserRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import { connect } from 'react-redux';
import { fetchGithubRequest } from '../../redux/actions/github';
import Github from '../../components/Github';


const mapStateToProps = (state: any) => ({
  repositories: state.githubRepositories.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getRepositories: (username: string) => dispatch(fetchGithubRequest(username)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Github);
import PropTypes from "prop-types"
import React, { Component } from "react"
import ContributionShowFrame from "./frame"
import Footer from "../../../../utils/parts/footer"
import {Header, Follow, Problem} from "../../../../component/contribution/show/"

export default class Main extends Component {
  componentWillMount() {
    if (this.getID() == 0) {
      return
    }

    this.getDetail(this.getID())
  }
  getID() {
    if (this.props.match == undefined) {
      return this.props.params.id
    }

    return this.props.match.params.id
  }
  /**
   * 詳細を取得する
   *
   * @param  {number} id 投稿ID
   */
  getDetail(id) {
    this.props.getDetail(id)
  }
  /**
   * フォロー追加する
   */
  addFollow() {
    if (this.getID() == 0) {
      return
    }

    this.props.addFollow({userContributionId: this.getID()})
  }
  /**
   * フォロー削除する
   */
  deleteFollow() {
    if (this.getID() == 0) {
      return
    }

    this.props.deleteFollow({userContributionId: this.getID()})
  }
  /**
   * 通報する
   */
  addProblem() {
    if (this.props.contributionShow.AddProblem) {
      return
    }

    this.props.addProblem({userContributionId: this.props.contributionShow.ID, type: this.props.contributionShow.ProblemType})
  }
  /**
   * 描画する
   *
   * @return {object} html
   */
  render() {
    return (
      <div>
        <Problem
          problemType={this.props.contributionShow.ProblemType}
          send={this.props.contributionShow.AddProblem}
          show={this.props.contributionShow.Problem}
          onProblemType={this.props.setProblemType}
          onHide={this.props.closeProblem}
          onAdd={this.addProblem.bind(this)}
        />
        <Header
          followElement={(
            <Follow
              count={this.props.contributionShow.FollowCount}
              actived={(this.props.contributionShow.Following)}
              disabled={(this.props.loginAuth.Login)}
              onAdd={this.addFollow}
              onDelete={this.deleteFollow}
            />
          )}
          tagList={this.props.contributionShow.TagList}
          title={this.props.contributionShow.Title}
          profileImageID={this.props.contributionShow.User.ProfileImageID}
          userName={this.props.contributionShow.User.Name}
          updatedAt={this.props.contributionShow.UpdatedAt}
          movieID={this.props.contributionShow.Movie.movie_id}
          openProblem={this.props.openProblem}
        />
        <ContributionShowFrame
          title={this.props.contributionShow.Title}
          body={this.props.contributionShow.Body}/>
        <Footer/>
      </div>
    )
  }
}

Main.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  getDetail: PropTypes.func,
  contributionShow: PropTypes.object,
  addFollow: PropTypes.func,
  deleteFollow: PropTypes.func,
  openProblem: PropTypes.func,
  closeProblem: PropTypes.func,
  setProblemType: PropTypes.func,
  addProblem: PropTypes.func,
  loginAuth: PropTypes.object
}

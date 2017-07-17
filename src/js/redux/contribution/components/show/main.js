// @flow
import PropTypes from "prop-types"
import React, { Component } from "react"
import ContributionShowFrame from "./frame"
import { Link as Footer } from "../../../../component/footer/"
import {
  Header,
  Follow,
  Problem
} from "../../../../component/contribution/show/"

export default class Main extends Component {
  componentWillMount() {
    if (this.getID() == 0 || this.getID() == undefined) {
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
  getDetail(id: number) {
    this.props.getDetail(id)
  }
  /**
   * フォロー追加する
   */
  addFollow() {
    if (this.getID() == 0) {
      return
    }

    this.props.addFollow(this.getID())
  }
  /**
   * フォロー削除する
   */
  deleteFollow() {
    if (this.getID() == 0) {
      return
    }

    this.props.deleteFollow(this.getID())
  }
  /**
   * 通報する
   */
  addProblem() {
    if (this.props.contributionShow.addProblem) {
      return
    }

    this.props.addProblem({
      userContributionId: this.props.contributionShow.ID,
      type: this.props.contributionShow.problemType
    })
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
          problemType={this.props.contributionShow.problemType}
          send={this.props.contributionShow.addProblem}
          show={this.props.contributionShow.problem}
          onProblemType={this.props.setProblemType}
          onHide={this.props.closeProblem}
          onAdd={this.addProblem.bind(this)}
        />
        <Header
          followElement={
            <Follow
              count={this.props.contributionShow.followCount}
              actived={this.props.contributionShow.following}
              disabled={!this.props.loginAuth.login}
              onAdd={this.addFollow.bind(this)}
              onDelete={this.deleteFollow.bind(this)}
            />
          }
          tags={this.props.contributionShow.tags}
          title={this.props.contributionShow.title}
          profileImageID={this.props.contributionShow.user.profileImageID}
          userName={this.props.contributionShow.user.name}
          updatedAt={this.props.contributionShow.updatedAt}
          movieID={this.props.contributionShow.movie.movie_id}
          openProblem={this.props.openProblem.bind(this)}
        />
        <ContributionShowFrame list={this.props.contributionShow.body} />
        <Footer />
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

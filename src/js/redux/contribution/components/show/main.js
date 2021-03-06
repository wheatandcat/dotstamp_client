// @flow
import React, { Component } from "react"
import ContributionShowFrame from "./frame"
import { Link as Footer } from "../../../../component/footer/"
import {
  Header,
  Follow,
  Problem
} from "../../../../component/contribution/show/"
import type { State as ContributionShow } from "../../reducers/show"
import type { State as LoginAuth } from "../../../login/reducers/auth"

type Props = {
  match: {
    params: {
      id: number
    }
  },
  params: {
    id: number
  },
  getDetail: (id: number) => void,
  contributionShow: ContributionShow,
  addFollow: (id: number) => void,
  deleteFollow: (id: number) => void,
  openProblem: () => void,
  closeProblem: () => void,
  setProblemType: () => void,
  addProblem: ({ userContributionId: number, type: number }) => void,
  loginAuth: LoginAuth
}

export default class Main extends Component {
  componentWillMount() {
    if (this.getID() == 0 || this.getID() == undefined) {
      return
    }

    this.getDetail(this.getID())
  }
  props: Props
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
      userContributionId: this.props.contributionShow.id,
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

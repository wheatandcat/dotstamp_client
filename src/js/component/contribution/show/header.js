// @flow
import React from "react"
import { Title, About, Youtube } from "./"

export type Props = {
  followElement: React$Element<*>,
  tagList: Array<Object>,
  title: string,
  profileImageID: number,
  userName: string,
  updatedAt: string,
  movieID: string,
  openProblem: Function
}

export default ({
  followElement,
  tagList,
  title,
  profileImageID,
  userName,
  updatedAt,
  movieID,
  openProblem
}: Props) => (
  <div>
    <Title followElement={followElement} tagList={tagList} title={title} />
    <br />
    <About
      profileImageID={profileImageID}
      userName={userName}
      updatedAt={updatedAt}
      openProblem={openProblem}
    />
    <br />
    <Youtube movieID={movieID} />
  </div>
)

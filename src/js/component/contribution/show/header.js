// @flow
import React from "react"
import { Title, About, Youtube } from "./"

export type Props = {
  followElement: React$Element<*>,
  tags: Array<Object>,
  title: string,
  profileImageID: number,
  userName: string,
  updatedAt: string,
  movieID: string,
  openProblem: Function
}

export default ({
  followElement,
  tags,
  title,
  profileImageID,
  userName,
  updatedAt,
  movieID,
  openProblem
}: Props) =>
  <div>
    <Title followElement={followElement} tags={tags} title={title} />
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

// @flow
import React from "react"
import { Play, Pause, Finished } from "./"

export const PLAY = 1
export const PAUSE = 2
export const FINISHED = 3

type Props = {
  status: number,
  onPlay: Function,
  onPause: Function
}

function player(status: number, onPlay: Function, onPause: Function) {
  if (status == PLAY) {
    return <Play label="　記事の読み上げを再生中" onPause={onPause} />
  } else if (status == PAUSE) {
    return <Pause label="　記事の読み上げを再生する" onPlay={onPlay} />
  }

  return <Finished label="　記事の読み上げを再生中" onPlay={onPlay} />
}

export default ({ status, onPlay, onPause }: Props) => {
  return player(status, onPlay, onPause)
}

// @flow
import React from "react"
import YouTube from "react-youtube"

type Props = {
  open?: boolean,
  videoId: string,
  onReady: Function,
  onEnd: Function
}

function getOptions(open?: boolean) {
  if (open) {
    return {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 0
      }
    }
  }

  return {
    height: "1",
    width: "1",
    playerVars: {
      autoplay: 0
    }
  }
}

export default ({ open, videoId, onReady, onEnd }: Props) =>
  <div>
    {(() => {
      if (open) {
        return (
          <div>
            <hr />
          </div>
        )
      }
    })()}
    <YouTube
      videoId={videoId}
      opts={getOptions(open)}
      onReady={onReady}
      onEnd={onEnd}
    />
  </div>

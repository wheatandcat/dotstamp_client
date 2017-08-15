// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { MemoryRouter } from "react-router"
import { Player, ScreenButton, Video, Form } from "./"
import { PLAY, PAUSE, FINISHED } from "./player"

storiesOf("youtube")
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  )
  .add("play", () =>
    <Player status={PLAY} onPlay={action("play")} onPause={action("pause")} />
  )
  .add("pause", () =>
    <Player status={PAUSE} onPlay={action("play")} onPause={action("pause")} />
  )
  .add("finished", () =>
    <Player
      status={FINISHED}
      onPlay={action("play")}
      onPause={action("pause")}
    />
  )
  .add("ScreenButton on full", () =>
    <ScreenButton full onFull={action("full")} onSmaill={action("small")} />
  )
  .add("ScreenButton on small", () =>
    <ScreenButton
      full={false}
      onFull={action("full")}
      onSmaill={action("small")}
    />
  )
  .add("Video", () =>
    <Video
      open={boolean("open", true)}
      videoId="3ovRJjqqvdM"
      onReady={action("redy")}
      onEnd={action("fend")}
    />
  )
  .add("Form", () =>
    <div>
      <br />
      <br />
      <br />
      <Form videoId="3ovRJjqqvdM" />
    </div>
  )

// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Icon, NoIcon, Menu, Voice } from "./index"

storiesOf("character")
  .add("voice", () =>
    <Voice
      voiceList={[
        {
          type: 1,
          name: "ボイス1"
        },
        {
          type: 2,
          name: "ボイス2"
        },
        {
          type: 3,
          name: "ボイス3"
        }
      ]}
      voiceType={1}
      voiceLabel="ボイス1"
      onVoiceType={action("voiceType")}
      onSave={action("save")}
    />
  )
  .add("icon", () =>
    <Icon fileName="0.png" iconId={1} onDelete={action("onDelete")} />
  )
  .add("no icon", () => <NoIcon />)
  .add("menu", () =>
    <Menu
      fileName="0.png"
      iconId={1}
      voiceList={[
        {
          type: 1,
          name: "ボイス1"
        },
        {
          type: 2,
          name: "ボイス2"
        },
        {
          type: 3,
          name: "ボイス3"
        }
      ]}
      voiceType={1}
      voiceLabel="ボイス1"
      onVoiceType={action("voiceType")}
      onSave={action("save")}
      onDelete={action("onDelete")}
    />
  )

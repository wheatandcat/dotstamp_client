// @flow
import React from "react"
import { Icon, Voice } from "./"

type Props = {
  fileName: string,
  iconId: number,
  voiceList: Array<Object>,
  voiceType: number,
  voiceLabel: string,
  onDelete: Function,
  onVoiceType: Function,
  onSave: Function
}

export default ({
  fileName,
  iconId,
  voiceList,
  voiceType,
  voiceLabel,
  onDelete,
  onVoiceType,
  onSave
}: Props) =>
  <div>
    <Icon fileName={fileName} iconId={iconId} onDelete={onDelete} />
    <p />
    <Voice
      voiceList={voiceList}
      voiceType={voiceType}
      voiceLabel={voiceLabel}
      onVoiceType={onVoiceType}
      onSave={onSave}
    />
    <p />
  </div>

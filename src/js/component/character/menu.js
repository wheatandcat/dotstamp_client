// @flow
import React from "react"
import { Icon, Voice } from "./"

type Props = {
  fileName: string,
  IconId: number,
  voiceList: Array<Object>,
  voiceType: number,
  voiceLabel: string,
  onDelete: Function,
  onVoiceType: Function,
  onSave: Function
}

export default ({
  fileName,
  IconId,
  voiceList,
  voiceType,
  voiceLabel,
  onDelete,
  onVoiceType,
  onSave
}: Props) => (
  <div>
    <Icon fileName={fileName} IconId={IconId} onDelete={onDelete} />
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
)

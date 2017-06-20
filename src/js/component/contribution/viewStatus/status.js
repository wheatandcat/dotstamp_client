// @flow
import React from "react"
import { Public, Private } from "./"
import { VIEW_STATUS_PUBLIC } from "../../../constants/contribution"

type Props = {
  disabled: boolean,
  viewStatus: number,
  onChageStatus: Function,
  onPublic: Function,
  onPrivate: Function
}

const status = (
  viewStatus: number,
  disabled: boolean,
  onChageStatus: Function,
  onPublic: Function,
  onPrivate: Function
) => {
  if (viewStatus === VIEW_STATUS_PUBLIC) {
    return (
      <Public
        disabled={disabled}
        onSave={onPublic}
        onChageStatus={onChageStatus}
      />
    )
  }

  return (
    <Private
      disabled={disabled}
      onSave={onPrivate}
      onChageStatus={onChageStatus}
    />
  )
}

export default ({
  viewStatus,
  disabled,
  onChageStatus,
  onPublic,
  onPrivate
}: Props) =>
  <span>
    {status(viewStatus, disabled, onChageStatus, onPublic, onPrivate)}
  </span>

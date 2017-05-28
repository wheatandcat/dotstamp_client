// @flow
import React from "react"
import {
  MenuItem,
  Panel,
  Dropdown,
  Button,
  ButtonGroup,
  Glyphicon
} from "react-bootstrap"

type Props = {
  voiceList: Array<Object>,
  voiceType: number,
  voiceLabel: string,
  onVoiceType: Function,
  onSave: Function
}

export default ({
  voiceList,
  voiceType,
  voiceLabel,
  onVoiceType,
  onSave
}: Props) => (
  <div className="center-block">
    <Panel header="アイコンのデフォルト音声" bsStyle="success">
      <ButtonGroup>
        <Dropdown id="voiceType" onSelect={onVoiceType.bind(this)}>
          <Dropdown.Toggle>
            <Glyphicon glyph="volume-up" />&nbsp;{voiceLabel}&nbsp;&nbsp;
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {voiceList.map(item => {
              let option = {}
              if (voiceType == item.type) {
                option = {
                  active: true
                }
              }

              return (
                <MenuItem key={item.type} eventKey={item.type} {...option}>
                  &nbsp;&nbsp;&nbsp;{item.name}&nbsp;&nbsp;
                </MenuItem>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
        <Button bsStyle="success" onClick={() => onSave()}>
          設定する
        </Button>
      </ButtonGroup>
    </Panel>
  </div>
)

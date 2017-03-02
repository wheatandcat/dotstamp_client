/*global BASE_URL*/
import React, {PropTypes, Component} from "react"
import {ButtonGroup, MenuItem, Dropdown, FormControl, Table, PageHeader, Glyphicon, Button} from "react-bootstrap"
import {VOICE_TYPE, VOICE_TYPE_MAP} from "../../constants/common"
import {Link} from "react-router"
import Footer from "../../utils/parts/footer"
import {InputText, InputTextBox} from "../../../css/sound.css"
import {Middle} from "../../../css/common.css"


export default class Show extends Component {
    componentWillMount() {
        this.getDeatil(this.props.params.id)
    }
    /**
     * 詳細を取得する
     *
     * @param  {numbet} id 投稿ID
     */
    getDeatil(id) {
        this.props.getDetail({userContributionId: id})
    }
    /**
     * 音声本文を変更する
     *
     * @param  {object} e エレメント
     */
    changeBodySound(e) {
        this.props.changeBodySound(e.target.id.replace("body_sound-", ""), e.target.value)
    }
    /**
     * ボイスタイプを設定する
     *
     * @param  {string} voiceType ボイスタイプ
     */
    setVoiceType(voiceType) {
        let tmp = voiceType.split("_")
        this.props.changeVoiceType(tmp[0], tmp[1])
        this.props.saveVoiceType({
            id: tmp[2],
            voice_type: tmp[1],
        })
    }
    /**
     * ボイスタイプを取得する
     *
     * @param  {object} item アイテム
     * @return {object} html
     */
    getVoiceType(item) {
        let voiceType = ""
        if (item.voice_type != undefined) {
            voiceType = VOICE_TYPE_MAP[item.voice_type]
        }

        return (
            <Dropdown id="voiceType" onSelect={this.setVoiceType.bind(this)}>
                <Dropdown.Toggle >
                    <Glyphicon glyph="volume-up"/>&nbsp;{voiceType}&nbsp;&nbsp;
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {VOICE_TYPE.map((voive) => {
                        let option = {}
                        if (item.voice_type == voive.type) {
                            option = {
                                active: true
                            }
                        }

                        return (
                            <MenuItem key={item.Priority + "_" + voive.type} eventKey={item.Priority + "_" + voive.type + "_" + item.ID} {...option}>
                                &nbsp;&nbsp;&nbsp;{voive.name}&nbsp;&nbsp;
                            </MenuItem>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
    /**
     * 改行を変換する
     *
     * @param  {string} text テキスト
     * @return {string} 改行変換後テキスト
     */
    changeBr(text) {
        let regex = /(\n)/g
        return text.split(regex).map(function(line, i) {
            if (line.match(regex)) {
                return <br key={i}/>
            } else {
                return line
            }
        })
    }
    /**
     * 音声本文を保存する
     *
     * @param  {number} priority 優先度
     * @param  {number} id       ID
     */
    saveBodySound(priority, id) {
        this.props.saveBodySound({
            id: id,
            body: this.props.soundShow.List[priority].body_sound,
        })
    }
    /**
     * アイテムを取得する
     *
     * @param  {object} item アイテム
     * @return {object} html
     */
    getItem(item) {
        return (
            <tr key={item.Priority}>
                <td>
                    {item.Priority + 1}
                </td>
                <td>
                    {this.changeBr(item.Body)}
                </td>
                <td className={InputTextBox}>
                    <FormControl
                        componentClass="textarea"
                        placeholder="読み上げ本文"
                        value={item.body_sound}
                        onChange={this.changeBodySound.bind(this)}
                        id={"body_sound-" + item.Priority}
                        className={InputText}
                    />
                </td>
                <td className={Middle}>
                    <Button onClick={() => this.saveBodySound(item.Priority, item.ID)}>
                        保存
                    </Button>
                </td>
                <td>
                    {this.getVoiceType(item)}
                </td>
            </tr>
        )
    }
    /**
     * 作成する
     */
    make() {
        this.props.onLoading()
        this.props.make({
            userContributionId: this.props.params.id
        })
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        let download = ""
        if (this.props.soundShow.Make) {
            download = (
                <div className="pull-right">
                    <br />
                    <Button bsStyle="info" bsSize="large" href={BASE_URL + "/static/files/sound/" + this.props.params.id + ".mp3"}>
                        <Glyphicon glyph="download-alt"/>&nbsp;音声をダウンロードする
                    </Button>
                </div>
            )
        }

        let make = ""
        if (!this.props.soundShow.Loading) {
            make = (
                <Button bsStyle="success" bsSize="large" block onClick={() => this.make()}>
                    音声ファイルを作成する
                </Button>
            )
        } else {
            make = (
                <Button bsStyle="success" bsSize="large" active>
                    音声ファイル作成中です・・・・
                </Button>
            )
        }

        return (
            <div>
                <div className="container">
                    <PageHeader>
                        &nbsp;&nbsp;<Glyphicon glyph="bullhorn"/>&nbsp;読み上げを編集する（β版）
                    </PageHeader>
                    <div>
                        <Button>
                            <Glyphicon glyph="refresh"/>&nbsp;記事の文章を反映される
                        </Button>
                    </div>
                    <div className="pull-right">
                        <Link to={"/contribution/edit/" + this.props.params.id}>
                            投稿編集に戻る
                        </Link>
                        <br />
                    </div>
                </div>
                <div className="container">
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>本文</th>
                                <th>読み上げ本文</th>
                                <th>操作</th>
                                <th>音声タイプ設定</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.soundShow.List.map((item) => {
                                return this.getItem(item)
                            })}
                        </tbody>
                    </Table>
                     <ButtonGroup vertical block>
                        {make}
                    </ButtonGroup>
                    {download}
                </div>
                <Footer />
            </div>
        )
    }
}

Show.propTypes = {
    params: PropTypes.object,
    getDetail: PropTypes.func,
    soundShow: PropTypes.object,
    changeBodySound: PropTypes.func,
    changeVoiceType: PropTypes.func,
    saveBodySound: PropTypes.func,
    saveVoiceType: PropTypes.func,
    make: PropTypes.func,
    onLoading: PropTypes.func,
}

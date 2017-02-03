import React, {PropTypes, Component} from "react"
import { Modal, Button, Alert } from "react-bootstrap"

export default class Show extends Component {
    /**
     * 閉じる
     */
    close () {
        this.props.closeError()
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render () {
        return (
            <Modal show={this.props.errorShow.show} onHide={() => this.close()}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">
                        Error!!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert bsStyle="danger">
                        <strong>{this.props.errorShow.message}</strong>
                    </Alert>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.close()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

Show.propTypes = {
    errorShow: PropTypes.object,
    closeError: PropTypes.func,
}

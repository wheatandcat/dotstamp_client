import { connect } from "react-redux"
import New from "../components/new"
import ActionsForm from "../actions/form"
import ActionsCharacterList from "../../character/actions/list"
import ActionsErrorShow from "../../error/actions/show"

import { IMAGE_DISPLAY_TYPE_CHARACTER_FORM } from "../../utils/image"

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch) {
    return {
        setCharacterImageList: (response) => {
            let val = ActionsCharacterList.getList(response, IMAGE_DISPLAY_TYPE_CHARACTER_FORM)
            console.log (val)
            val = {
                type: "GET_CHARACTER_LIST",
                list: {
                    Image:[
                        {
                            CharacterID:0,
                            FileName:"e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683.jpg",
                            ID:6,
                            Priority:0,
                        },
                        {
                            CharacterID:0,
                            FileName:"e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683.jpg",
                            ID:7,
                            Priority:1,
                        }
                    ],
                },
                imageType:4,
            }
            dispatch(val)
        },
        changeCharacter: (character) => {
            dispatch(ActionsForm.changeCharacter(character))
        },
        showError: (error) => {
            dispatch(ActionsErrorShow.showError(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(New)

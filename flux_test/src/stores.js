import {appDispatcher} from './appDispatcher.js'
import {ActionType} from './actions.js'

export const nameStore = {name: '', onChange: null}
export const messageStore = {massage: '', onChange: null}

appDispatcher.register(payload => {
    if (payload.ActionType === ActionType.CHANGE_NAME) {
        nameStore.name = payload.value
        nameStore.onChange()
    }
})

appDispatcher.register(payload => {
    if (payload.ActionType === ActionType.SUBMIT_NAME) {
        messageStore.message = nameStore.name + 'さん、こんにちは。'
        messageStore.onChange()
    }
})
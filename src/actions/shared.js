import {getInitialData} from "../utils/api"
import {receivedUsers} from "../actions/users"
import {receivedTweets, receiveTweets} from "../actions/tweets"
import {setAuthedUser} from "../actions/authedUser"


const AUTH_ID = 'tylermcginnis'

export function handleIniditalData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users,tweets}) =>{
                dispatch(receivedUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAuthedUser(AUTH_ID))

            })
    }
}
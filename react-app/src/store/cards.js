
const GET_CARDS = 'cards-all'
const ADD_CARD = 'add-card'
const DELETE_CARD = 'delete-card'
const EDIT_CARD = 'edit-card'

const setCards = (cards) => {
    return {type: GET_CARDS, payload: cards}
}

const newCard = (card) => {
    return {type: ADD_CARD, payload: card}
}



export const allCards = () => async(dispatch) => {
    const response = await fetch('/api/cards/')

    const resJson = await response.json()

    dispatch(setCards(resJson['cards']))

    return response

}

export const addCard = (card) => async(dispatch) => {
    const response = await fetch('/api/cards/', {method:'POST', headers: {'Content-Type':'application/json'} ,body: JSON.stringify(card)})
    const responseJson = await response.json()
    dispatch(newCard(responseJson))

    return response

}

export const editCard = (card_id, card) => async(dispatch) => {
    const response = await fetch(`/api/cards/${card_id}`, {method:'PUT', headers: {'Content-Type':'application/json'} ,body: JSON.stringify(card)})

    const responseJson = await response.json()
    await allCards()

    return response
}






const cardReducer = (state = {cards:null}, action) => {
    let new_state

    switch(action.type) {
        case GET_CARDS:
            new_state = Object.assign({}, state)

            new_state.cards = action.payload
            return new_state

        case ADD_CARD:
            new_state = Object.assign({}, state)

            new_state.cards.push(action.payload)
            return new_state

        // case EDIT_CARD:
        //     new_state = Object.assign({}, state)

        //     new_state.cards = action.payload

        default:
            return state
    }

    
}

export default cardReducer
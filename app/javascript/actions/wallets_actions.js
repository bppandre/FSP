import * as WalletsAPIUtil from '../util/wallets_v1_util'

//actions type
export const ADD_COIN = 'ADD_COIN'
export const REMOVE_COIN = 'REMOVE_COIN'
export const RECEIVE_COIN_ERRORS = "RECEIVE_COIN_ERRORS";

//actions 
const addCoin = (coin) => ({
    type: ADD_COIN,
    coin
});

const removeCoin = (coinSym) => ({
    type: REMOVE_COIN,
    coinSym
});

const receiveCoinErrors = (err) => ({
    type: RECEIVE_COIN_ERRORS,
    err
})

//Thunk 

export const add = (coinSymbol) => dispatch => (
    WalletsAPIUtil.addCoin(coinSymbol)
    .then( coin => dispatch(addCoin(coin)),
           err => dispatch(receiveCoinErrors(err))
        )
);

export const remove = (coinId)=> dispatch => (
    WalletsAPIUtil.removeCoin(coinId)
    // .then(r=>console.log(r))
        .then( coinSym => dispatch(removeCoin(coinSym)),
               err => dispatch(receiveCoinErrors(err))
        )
);


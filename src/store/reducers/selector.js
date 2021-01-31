import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
  [selectUser], (user) => user.currentUser
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem)=>accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
)

export const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector(
  [selectDirectory], 
   directory => directory.sections
)


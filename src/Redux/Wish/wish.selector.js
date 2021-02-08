import { createSelector } from 'reselect'

// selector- returns a piece of state
const selectWish = (state) => state.wish

// Wish Items
export const selectWishItems = createSelector (
  [selectWish],
  cart => cart.wishItems
);
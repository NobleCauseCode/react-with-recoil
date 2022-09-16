import { atom, selector } from 'recoil';
import { Item } from '../Models/Item';

export const cartState = atom<Item[]>({
  key: 'cart',
  default: [],
});

export const cartTotal = selector({
  key: 'cartTotal',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((acc, cur) => acc + cur.price, 0);
  },
});

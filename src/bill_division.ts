"use strict";

/**
 * @param bill Ordered items.
 * @param k The index of the item that Anna won´t eat.
 * @param b The amount of money that Anna will pay.
 * @returns A message: "Bone Appetite" or the money Brian charged Anna.
 */
export const bill_division = (
  bill: Array<number>,
  k: number,
  b: number
): number | string => {
  const avoid_item = bill[k];
  const b_actual = bill.reduce((previus, current) => previus + current);
  if (b_actual - avoid_item === b * 2) return "Bon Appetite";
  else return avoid_item / 2;
};

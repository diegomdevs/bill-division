"use strict";
import { print } from "./print";
import { bill_division } from "./bill_division";
const result: number | string = bill_division([4, 99, 6], 1, 4);
print(result, "Bill Division");

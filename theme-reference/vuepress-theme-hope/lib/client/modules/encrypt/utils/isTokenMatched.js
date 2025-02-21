import { compareSync } from "bcrypt-ts/browser";
export const isTokenMatched = (token = "", hash) => Boolean(token) && compareSync(token, hash);
//# sourceMappingURL=isTokenMatched.js.map
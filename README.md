1. yarn
2. yarn dev

refresh page until you see that `loading` doesn't disappear despite success messages in console.

note that **react strict mode must be off**!

This was an issue for SWR up to version 2.1.3, 2.1.4 fixed it in https://github.com/vercel/swr/pull/2576.

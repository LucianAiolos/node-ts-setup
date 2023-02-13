// import { writeFile } from "fs";

// writeFile

// console.log('hello from ts hello again')

import express from 'express'

const app = express()

// interface for objects
// types for everything else

type Params2 = {
  a: number;
  b: number;
}

interface Params {
  a: number;
  b: number;
}

// const add = (x: Params) => {
//   return x.a + x.b
// }

type Add = (x: Params) =>  number

// const add: Add = x => {
//   add({a: 1, b: 2})
// }

const add = (a: number, b?: number) : number => {
  if(b) {
    return a + b
  } else {
    return a
  }
}

app.get("/", req => {
  add(1)
})

app.listen(9000, ()=> {
  console.log("server running")
})
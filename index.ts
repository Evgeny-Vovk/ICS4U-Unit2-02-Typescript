/**
 * This is the standard index.ts starting point.
 *
 * author  Evgeny Vovk
 * version 1.0
 * since   2024-03-19
 */
import { EvgenyStack } from './EvgenyStack'

let fruits = new EvgenyStack()
fruits.push("apple")
fruits.push("banana")
fruits.push("cherry")
console.log("fruits: " + fruits.showStack)
console.log("popped: " + fruits.popItem())
console.log("fruits: " + fruits.showStack)
console.log("")

let colours = new EvgenyStack()
colours.push("red")
colours.push("green")
colours.push("blue")
console.log("colours: " + colours.showStack)
console.log("popped: " + colours.popItem())
console.log("popped: " + colours.popItem())
console.log("colours: " + colours.showStack)
console.log("")

let feelings = new EvgenyStack()
feelings.push("happy")
feelings.push("sad")
feelings.push("mad")
console.log("feelings: " + feelings.showStack)
console.log("popped: " + feelings.popItem())
console.log("popped: " + feelings.popItem())
console.log("popped: " + feelings.popItem())
console.log("popped: " + feelings.popItem())
console.log("feelings: " + feelings.showStack)
console.log("")

console.log("\nDone.")


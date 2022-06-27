// Exports & Imports (Modules)

// person.js

const person = {
    name: 'Max'
}
export default person;

// utility.js

export const clean = () => {
    // ...
}

export const baseData = 10;

// app.js

// Default export
// Choose the name
import person from './person.js'
import prs from './person.js'

// Named Exports
// Name is defined by export
import { baseData } from './utility.js'
import { clean } from './utility.js'

// Aliases
import { baseData as BD } from './utility.js'
import * as bundled from './utility.js'
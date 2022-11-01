function * indexMaker() {
    let index = 0
    while (true) { yield index++ }
}

export const generator = indexMaker()

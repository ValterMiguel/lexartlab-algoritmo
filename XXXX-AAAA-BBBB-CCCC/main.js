

let idGenerated = () => {
    let id = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(32)
        .toString(1)
    }
    return id() + '-' + id()+ '-' +id()+ '-' +id();
}

console.log(idGenerated());
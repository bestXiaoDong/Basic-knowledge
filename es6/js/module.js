let module = {
    name: 'galaxyxd',
    exports: {}
}

let load = function(module) {
    let name = 'xd'
    let greet = function(name) {
        console.log(`${name}: hello`)
    }

    module.exports = greet

    return module.exports
}

let exported = load(module)

console.log(module,exported)
// arrays
class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task){
        this.tasks.pop()
    }

    showTask(){
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`);
        })
    }
}

let toDo = new ToDoList()
toDo.addTask("learn SQL");
toDo.addTask("learn express");
toDo.addTask("learn mongoDB");
toDo.addTask("learn mongoose");
// toDo.showTask()
// toDo.removeTask()
// toDo.showTask()


// linked list
class Track {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Album {
    constructor(){
        this.head = null
    }

    addTrack(data) {
        let newTrack = new Track(data)
        if(!this.head){
            this.head = newTrack
        } else {
            let current = this.head
            while(current.next){
                current = current.next
            }
         current.next = newTrack
        } 
    }

    playAllSongs(){
        let current = this.head
        while(current) {
            console.log(`playing : ${current.data}`);
            current = current.next
        }
    }


    playSingleSongs(songName){
        let current = this.head
        while(current) {
            if(current.data === songName){
                console.log(`playing : ${current.data}`);
                return
            }
            current = current.next
        }
        console.log(`song : ${songName} not found in the playlist`)
    }
}

// let LunguBoy = new Album()
// LunguBoy.addTrack("MMS")
// LunguBoy.addTrack("fuji vibes")
// LunguBoy.addTrack("active")
// LunguBoy.addTrack("Nzaza")
// LunguBoy.addTrack("amapiano")
// // LunguBoy.playSingleSongs("active")
// LunguBoy.playAllSongs()


// stack
class undoStack {
    constructor() {
        this.stack = []
    }
    addText(text){
        this.stack.push(text)
    }
    undoText(){
        if(this.stack.length > 0){
            console.log(`undoing : ${this.stack.pop()}`);
        } else {
            console.log("nothing to undo");
        }
    }

    showText(){
        console.log(this.stack);
    }
}

let word = new undoStack()
word.addText('hello')
word.addText('world')

// word.showText()
// word.undoText()
// word.showText()


// queue
class printQueue {
    constructor(){
        this.queue = []
    }

    addDocument(doc){
        this.queue.push(doc)
    }

    printDocument(){
        if(this.queue.length > 0){
        console.log(`printing : ${this.queue.shift()}`)
        } else{
            console.log("nothing to document in the queue")
        }
    }


    showQueue(){
        console.log(`document in queue:`, this.queue)
    }


}

// let library = new printQueue()
// library.addDocument('half of a yellowsun')
// library.addDocument('purple hearts')
// library.addDocument('women of owu')
// library.addDocument('egg of life')

// library.showQueue()


// SET
class cryptoPortfolio {
    constructor() {
        this.portfolio = new Set()
    }

    addCrypto(cryptoSymbol){
        this.portfolio.add(cryptoSymbol)
        console.log(`${cryptoSymbol} has been added to your wallet`);
    }


    removeCrypto(cryptoSymbol) {
        if (this.portfolio.has(cryptoSymbol)) {
            this.portfolio.delete(cryptoSymbol)
            console.log(`${cryptoSymbol} has been removed from your wallet`);
        }
    }

    hasCrypto(cryptoSymbol) {
        return this.portfolio.has(cryptoSymbol)
    }

    showPortfolio(){
        if (this.portfolio.size === 0) {
            console.log("your portfolio is empty");
        } else {
            console.log(`current portfolio:` , ...this.portfolio);
        }
    }
}

let wallet = new cryptoPortfolio()
wallet.addCrypto("BTC")
wallet.addCrypto("USDT")
wallet.addCrypto("TRON")
wallet.addCrypto("ETHERIUM")
wallet.showPortfolio()



// Maps
class UserDirectory {
    constructor() {
        this.directory = new Map()
    }
    addUser(id, email){
        this.directory.set(id, email)
    }
    removeUser(id) {
        this.directory.delete(id)
    }
    getUser(id){
        return this.directory.get(id)
    }
    showAllUser(){
        this.directory.forEach((email, id) => {
            console.log(`${id}: ${email}`);
        })
    }

}

let userDirectory = new UserDirectory()
userDirectory.addUser(1, "bozsbaby@wweer")
userDirectory.addUser(2, "oreva@wweer")
userDirectory.addUser(3, "dml@wweer")
userDirectory.addUser(4, "steve@wweer")
userDirectory.removeUser(3)
userDirectory.showAllUser()


// binary tree
class FileDirectory {
    constructor(name) {
        this.name = name
        this.children = []
    }

    addNode(node){
        this.children.push(node)
    }
    
    showDirectory(indent = 0){
        console.log(`${" " .repeat(indent)} - ${this.name} `);
        this.children.forEach(child => {
            child.showDirectory(indent + 2)
        })
    }
}

let src = new FileDirectory("src")
let component = new FileDirectory("component")
let pages = new FileDirectory("pages")
let file1 = new FileDirectory("nav.jsx")
let file2 = new FileDirectory("footer.jsx")
let file3 = new FileDirectory("about.jsx")
let file4 = new FileDirectory("home.jsx")

src.addNode(component)
src.addNode(pages)
component.addNode(file1)
component.addNode(file2)
pages.addNode(file3)
pages.addNode(file4)
src.showDirectory()



class Graph {
    constructor() {
        this.friendList = new Map()
    }
    createFriend(friend){
        if (!this.friendList.has(friend)){
            this.friendList.set(friend, [])
        }
    }

    createConnect(friend1, friend2){
        if (this.friendList.has(friend1) && this.friendList.has(friend2)){
            this.friendList.get(friend1).push(friend2)
            this.friendList.get(friend2).push(friend1)
        }
    }

    showConnections(){
        this.friendList.forEach((friend2, friend1) => {
            console.log(`${friend1} is friend with ${friend2.join(", ")}`)
        })
    }
}

let datingSite = new Graph()
datingSite.createFriend("Alice")
datingSite.createFriend("DML")
datingSite.createFriend("bozsbaby")
datingSite.createFriend("amegan")

datingSite.createConnect("Alice", "DML")
datingSite.createConnect("Amegan", "bozsbaby")
datingSite.createConnect("bozsbaby", "DML")
datingSite.createConnect("bozsbaby", "Alice")
datingSite.showConnections()

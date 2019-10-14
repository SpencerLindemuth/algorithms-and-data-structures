
class LinkedListNode{
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  
    toString(callback) {
      return callback ? callback(this.value) : `${this.value}`;
    }

    printLinkedList(){
        if(this === null){
            console.log("The list is empty")
        }else{
            console.log(this.value)
            let current = this.next
            while(current !== null){
              console.log(current.value)
              current = current.next
            }
        }
    }
  
    addNode(nodeValue){
      if(this === null){
          console.log("This list is empty")
      }else{
          let current = this
          while(current !== null){
              if(current.next === null){
                  current.next = new LinkedListNode(nodeValue)
                  return true
              }
              else{
                  current = current.next
              }
          }
      }
    }

    search(value){
        if(this === null){
            console.log("The list is empty")
        }else{
            let current = this
            while(current !== null){
                if(current.value === value){
                    return current
                }
                else{
                    current = current.next
                }
            }
        }
    }

    deleteAtValue(value){
        if(this === null){
            console.log("The list is empty")
        }else{
            let current = this
            let currentBackup
            while(current !== null){
                if(current.value === value){
                    let remainder = current.next
                    while(remainder != null){
                        currentBackup ? currentBackup.addNode(remainder.value) : currentBackup = new LinkedListNode(remainder.value)
                        remainder = remainder.next
                    }
                    return currentBackup
                }
                else{
                    currentBackup ? currentBackup.addNode(current.value) : currentBackup = new LinkedListNode(current.value)
                    current = current.next
                }
            }
        }
    }

    deleteAtIndex(index){
        if(this === null){
            console.log("The list is empty")
        }else{
            let current = this
            let counter = 0
            let currentBackup
            while(current !== null){
                if(counter === index){
                    let remainder = current.next
                    while(remainder != null){
                        currentBackup ? currentBackup.addNode(remainder.value) : currentBackup = new LinkedListNode(remainder.value)
                        remainder = remainder.next
                    }
                    return currentBackup
                }
                else{
                    currentBackup ? currentBackup.addNode(current.value) : currentBackup = new LinkedListNode(current.value)
                    current = current.next
                    counter++
                }
            }
        }
    }
}

  let list = new LinkedListNode(1)
  list.addNode(2)
  list.addNode(3)
  list.addNode(4)
  list.addNode(5)
  list.addNode(6)
  let four = list.search(4)
  let noFour = list.deleteAtValue(4)
  let indexTwo = list.deleteAtIndex(2)
  indexTwo.printLinkedList()
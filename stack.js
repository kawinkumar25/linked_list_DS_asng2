class node {
    data;
    nextNode;
    constructor(val)
    {
        this.data=val;
    }
} 

class LinkedList{
    rootNode = null;
    count = 0;
    addStack(val)
    {
        if(this.rootNode==null)
        {
            this.rootNode= new node(val)
            this.count++;
        }
        else{
            var temp=this.rootNode
            while(temp.nextNode != null)
            {
                temp=temp.nextNode;
                this.count++;
            }
            temp.nextNode = new node(val);
        }

    }

    printelements()
    {
        var temp = this.rootNode;
            if(temp == null)
            {
                console.log("Is empty!")
            }
            else
            {
                while(temp != null )
                {
                    console.log(temp.data)
                    temp = temp.nextNode;
                }
            }
    }

    remove()
    {
        var i=1
        let n1= this.rootNode
        while(i<this.count-1)
        {
           n1=n1.nextNode;
            i++;
        }
        n1.nextNode=n1.nextNode.nextNode
    }
    
}


var list = new LinkedList()
list.addStack(1);
list.addStack(2);
list.addStack(3);
list.remove();
list.printelements();
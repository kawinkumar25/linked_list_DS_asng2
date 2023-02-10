class node {
    data;
    nextNode;
    constructor(val)
    {
        this.data=val;
    }
} 

class queue{
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
        let temp = this.rootNode;
        this.rootNode=temp.nextNode;
    }
    
}


var list = new queue()
list.addStack(1);
list.addStack(2);
list.addStack(3);
list.remove();
list.printelements();
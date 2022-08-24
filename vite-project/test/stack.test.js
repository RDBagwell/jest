class Stack {
    constructor(){
        this.top = -1
        this.item = {}
    }
    push = (value)=>{
        this.top++
        this.item[this.top] = value
    }
    pop = ()=>{
        this.item[this.top] = undefined
        this.top--
    }
    get peek(){
        return this.item[this.top]
    }
}

describe('my stack',()=>{
    let stack;
    beforeEach(()=>{
        stack = new Stack();
    })
    it('is empty',()=>{
        expect(stack.top).toBe(-1);
        expect(stack.item).toEqual({});
        expect(stack.peek).toEqual(undefined)
    })
    it('push to stack', ()=>{
        stack.push('abc');
        expect(stack.top).toBe(0);
        expect(stack.peek).toEqual('abc')
    })
    it('pop off stack', ()=>{
        stack.push('abc');
        stack.push("def");
        stack.pop();
        expect(stack.peek).toEqual('abc')
        expect(stack.top).toEqual(0)
        stack.pop();
        expect(stack.peek).toEqual(undefined)
        expect(stack.top).toBe(-1)
    })
})
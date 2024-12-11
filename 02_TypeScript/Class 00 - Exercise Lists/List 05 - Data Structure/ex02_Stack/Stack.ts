interface stackInterface<Type> {
   push(dataItem: Type): void;
   pop(): Type | undefined;
   isEmpty(): boolean;
   count(): number;
   printStack(): void;
   peek(): Type | undefined;
   contains(dataItem: Type): boolean;
   clear(): void;
   indexOf(dataItem: Type): number;
}

export class Stack<Type> implements stackInterface<Type> {

   private StackData: Array<Type> = [];

   constructor() { }

   isEmpty(): boolean {
      let result = this.StackData.length <= 0;
      return result;
   }

   push(dataItem: Type): void {
      this.StackData.push(dataItem);
   }

   pop(): Type | undefined {
      if (this.isEmpty()) {
         console.log("\n-> The stack is empty!");
         return;
      } else {
         var element = this.StackData.pop();
         return element;
      }
   }

   count(): number {
      let len = this.StackData.length;
      return len;
   }

   printStack(): void {
      for (let i = this.StackData.length - 1; i >= 0 ; i--) {
         if(i === 0) {
               // console.log(`${this.StackData.length - i}º) ${this.StackData[i]}.`);
               console.log(`${i + 1}º) ${this.StackData[i]}.`);
         } else {
            console.log(`${i + 1}º) ${this.StackData[i]};`);
         }
         
      }
   }

   peek(): Type | undefined {
      if (this.isEmpty()) {
         console.log("\n-> The stack is empty!");
         return;
      } else {
         var element = this.StackData[this.StackData.length - 1];
         return element;
      }
   }

   contains(dataItem: Type): boolean {
      if (this.StackData.includes(dataItem)) {
         return true;
      } else {
         return false;
      }
   }

   clear(): void {
      this.StackData.length = 0;
   }

   indexOf(dataItem: Type): number {
      return this.StackData.indexOf(dataItem);
   }

}
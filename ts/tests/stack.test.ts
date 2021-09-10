/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	2:41 PM -- July 30th, 2019.
 *	Project: JSDSL - Stack
 */

import { Stack } from "../stack";

/**
 * Unit tests for the stack data structure implemented by this package.
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v1.0.0
 * @since v0.1.0
 */

let stack: Stack<any>;

describe("Initialization", () => {
	
	test("Empty Initialization", () => {
		
		stack = new Stack<number>();
		
		expect(stack).toBeDefined();
		expect(stack.pop()).toBeUndefined();
		expect(stack.peek()).toBeUndefined();
		
	});
	
	test("Initialization with elements.", () => {
		
		stack = new Stack<number>(1, 3, 5, 7);
		
		expect(stack).toBeDefined();
		expect(stack.pop()).toBe(7);
		expect(stack.pop()).toBe(5);
		expect(stack.pop()).toBe(3);
		expect(stack.pop()).toBe(1);
		expect(stack.pop()).toBeUndefined();
		expect(stack.peek()).toBeUndefined();
		
	});
	
});

describe("Per-method tests.", () => {
	
	beforeEach(() => {
		
		stack = new Stack<any>();
		
	});
	
	describe("#push", () => {
		
		test("Basic push.", () => {
			
			stack.push(4);
			
			expect(stack.toArray()).toStrictEqual([4])
			expect(stack.peek()).toBe(4);
			expect(stack.pop()).toBe(4);
			
		});
		
		test("Pushing undefined works as expected.", (): void => {
			
			stack.push(undefined);
			
			expect(stack.toArray()).toStrictEqual([undefined])
			expect(stack.peek()).toBe(undefined);
			expect(stack.pop()).toBe(undefined);
			
		});
		
		test("Pushing null works as expected.", (): void => {
			
			stack.push(null);
			
			expect(stack.toArray()).toStrictEqual([null])
			expect(stack.peek()).toBe(null);
			expect(stack.pop()).toBe(null);
			
		});
		
		test("Pushing multiple values occurs in the expected order.", (): void => {
			
			stack.push(1, 2);
			stack.push(3, 4, 5);
			
			expect(stack.toArray()).toStrictEqual([1, 2, 3, 4, 5]);
			expect(stack.pop()).toBe(5);
			expect(stack.pop()).toBe(4);
			expect(stack.pop()).toBe(3);
			expect(stack.pop()).toBe(2);
			expect(stack.pop()).toBe(1);
			
		});
		
	});
	
	describe("#pop", () => {
	
		test("Empty stack #pop returns undefined.", () => {
			
			expect(stack.pop()).toBeUndefined();
			
		});
		
		test("Populated stack #pop returns correct element.", () => {
			
			stack.push(3);
			stack.push(8);
			
			expect(stack.pop()).toBe(8);
			
		});
	
	});
	
	describe("#peek", () => {
		
		test("Empty stack #peek returns undefined.", () => {
			
			expect(stack.peek()).toBeUndefined();
			
		});
		
		test("Populated stack #peek returns correct elements.", () => {
			
			stack.push(3);
			stack.push(8);
			
			expect(stack.peek()).toBe(8);
			expect(stack.peek()).toBe(8);
			
			stack.pop();
			
			expect(stack.peek()).toBe(3);
			expect(stack.peek()).toBe(3);
			
		});
	
	});
	
	describe("#clear", () => {
	
		test("#clear on empty stack does nothing", (): void => {
			
			let beforeClear: any[] = [...stack.toArray()];
			
			stack.clear();
			
			let afterClear: any[] = [...stack.toArray()];
			
			expect(beforeClear).toStrictEqual(afterClear);
			
		});
		
		test("#clear empties a populated stack", (): void => {
			
			stack.push(1, 2, 3, 5, 8);
			stack.clear();
			
			expect(stack.isEmpty()).toBeTruthy();
			
		});
	
	});
	
	describe("#isEmpty", () => {
	
		test("#isEmpty returns true for newly initialized blank stack", (): void => {
			
			expect(stack.isEmpty()).toBeTruthy();
			
		});
		
		test("#isEmpty returns false for populated stack", (): void => {
			
			stack.push(5, 10, 15);
			
			expect(stack.isEmpty()).toBeFalsy();
			
		});
		
		test("#isEmpty correctly changes result after a stack is emptied", (): void => {
			
			expect(stack.isEmpty()).toBeTruthy();
			
			stack.push(1, 2, 4, 8, 16);
			
			expect(stack.isEmpty()).toBeFalsy();
			
			stack.pop();
			
			expect(stack.isEmpty()).toBeFalsy();
			
			stack.pop();
			
			expect(stack.isEmpty()).toBeFalsy();
			
			stack.pop();
			
			expect(stack.isEmpty()).toBeFalsy();
			
			stack.pop();
			
			expect(stack.isEmpty()).toBeFalsy();
			
			stack.pop();
			
			expect(stack.isEmpty()).toBeTruthy();
			
		});
	
	});
	
	describe("#iterator", () => {
	
		test("#iterator iterates over content in stack #pop order", (): void => {
			
			stack.push(2, 4, 6, 8);
			
			let expectedElements: number[] = [8, 6, 4, 2];
			let index: number = 0;
			
			for (let element of stack) expect(element).toBe(expectedElements[index++]);
			
		});
	
	});
	
	describe("#size", () => {
	
		test("#size returns 0 for empty stacks", (): void => {
			
			expect(stack.size()).toBe(0);
			
		});
		
		test("#size returns the correct number of contained elements", (): void => {
			
			expect(stack.size()).toBe(0);
			
			stack.push(0);
			
			expect(stack.size()).toBe(1);
			
			stack.push(0);
			
			expect(stack.size()).toBe(2);
			
			stack.push(0);
			
			expect(stack.size()).toBe(3);
			
		});
	
	});
	
	describe("#toArray", () => {
		
		test("#toArray returns an empty array for empty stacks", (): void => {
			
			expect(stack.toArray()).toStrictEqual([]);
			
		});
	
		test("#toArray returns elements in the expected order", (): void => {
			
			stack.push(3, 2, 1);
			
			expect(stack.toArray()).toStrictEqual([3, 2, 1]);
			
		});
	
	});
	
});

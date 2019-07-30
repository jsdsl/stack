/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	2:41 PM -- July 30th, 2019.
 *	Project: JSDSL - Stack
 */

import { Stack } from "../stack";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

let stack: Stack<number>;

describe("Initialization", () => {
	
	test("Empty Initialization", () => {
		
		stack = new Stack<number>();
		
		expect(stack).toBeDefined();
		
	});
	
	test("Initialization with elements.", () => {
		
		stack = new Stack<number>(1, 3, 5, 7);
		
		expect(stack).toBeDefined();
		expect(stack.pop()).toBe(7);
		expect(stack.pop()).toBe(5);
		expect(stack.pop()).toBe(3);
		expect(stack.pop()).toBe(1);
		expect(stack.pop()).toBeUndefined();
		
	});
	
});

describe("Per-method tests.", () => {
	
	beforeEach(() => {
		
		stack = new Stack<number>();
		
	});
	
	describe("#push", () => {
		
		test("Basic push.", () => {
			
			stack.push(4);
			
			expect(stack.toArray()).toStrictEqual([4])
			
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
	
	describe("#add", () => {
	
	
	
	});
	
	describe("#clear", () => {
	
	
	
	});
	
	describe("#contains", () => {
	
	
	
	});
	
	describe("#get", () => {
	
	
	
	});
	
	describe("#isEmpty", () => {
	
	
	
	});
	
	describe("#iterator", () => {
	
	
	
	});
	
	describe("#remove", () => {
	
	
	
	});
	
	describe("#size", () => {
	
	
	
	});
	
	describe("#toArray", () => {
	
	
	
	});
	
});
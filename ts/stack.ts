/*
 * Created by Trevor Sears <trevorsears.main@gmail.com>.
 * 9:12 PM -- July 29th, 2019.
 * Project: @jsdsl/stack
 * 
 * @jsdsl/stack - A stack (LIFO) implementation written in TypeScript.
 * Copyright (C) 2021 Trevor Sears
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {
	Iterable as JSDSLIterable,
	Iterator as JSDSLIterator,
	AbstractIterator as JSDSLAbstractIterator
} from "@jsdsl/iterator";

/**
 * A stack (LIFO) implementation written in TypeScript.
 * 
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v1.0.0
 * @since v0.1.0
 */
export class Stack<E> implements JSDSLIterable<E> {
	
	/**
	 * The internal raw array used to maintain this stack data structure.
	 */
	private internalStack: E[];
	
	/**
	 * Initializes a new stack with an optional collection of elements. The elements should be ordered in bottom-to-top
	 * of stack order.
	 * 
	 * @param {E} elements An optional list of elements to include in this newly initialized stack.
	 */
	public constructor(...elements: E[]) {
		
		this.internalStack = elements;
		
	}
	
	/**
	 * Pushes the specified element onto the top of this stack.
	 * 
	 * Elements are pushed onto the stack in the order they are provided. This entails the following:
	 * 
	 * <pre>
	 *     let stack: Stack<number> = new Stack();
	 *     stack.push(1, 3, 5);
	 *     stack.pop(); //=> 5
	 *     stack.pop(); //=> 3
	 *     stack.pop(); //=> 1
	 * </pre>
	 * 
	 * @param {E[]} elements A list of elements to push onto this stack.
	 */
	public push(...elements: E[]): void {
		
		this.internalStack.push(...elements);
		
	}
	
	/**
	 * Removes and returns the element at the top of this stack.
	 * 
	 * @returns {E | undefined} The element at the top of this stack.
	 */
	public pop(): E | undefined {
		
		return this.internalStack.pop();
		
	}
	
	/**
	 * Returns the element at the top of this stack without removing it.
	 * 
	 * @returns {E} The element at the top of this stack without removing it.
	 */
	public peek(): E | undefined {
		
		return this.internalStack[this.internalStack.length - 1];
		
	}
	
	/**
	 * Clears out this stack, rendering it empty of elements.
	 */
	public clear(): void {
		
		this.internalStack = [];
		
	}
	
	/**
	 * Returns true if this stack contains no elements.
	 * 
	 * @returns {boolean} true if this stack contains no elements.
	 */
	public isEmpty(): boolean {
		
		return (this.internalStack.length === 0);
		
	}
	
	/**
	 * Returns an iterator over the elements of this stack, in LIFO (last in, first out) order.
	 *
	 * @returns {IIterator<E>} An iterator over the elements of this stack, in LIFO (last in, first out) order.
	 */
	public iterator(): JSDSLIterator<E> {
		
		return new class extends JSDSLAbstractIterator<E> {
			
			protected elements: E[];
			
			protected index: number;
			
			public constructor(...elements: E[]) {
				
				super();
				
				this.elements = elements;
				this.index = this.elements.length - 1;
				
			}
			
			public hasNext(): boolean {
				
				return this.index >= 0;
				
			}
			
			public next(): E | undefined {
				
				return this.elements[this.index--];
				
			}
			
		}(...this.internalStack);
		
	}
	
	/**
	 * Returns an {@link IterableIterator} object that allows this class to be used with the baked-in `for...of`
	 * construct in JavaScript.
	 * 
	 * @returns {IterableIterator<E>} An {@link IterableIterator} object that allows this class to be used with the
	 * baked-in `for...of` construct in JavaScript.
	 */
	public [Symbol.iterator](): IterableIterator<E> {
		
		return this.iterator()[Symbol.iterator]();
		
	}
	
	// TODO [9/9/2021 @ 4:37 PM] Add `stream` method.
	
	/**
	 * Returns an integer representative of the number of elements contained in this stack.
	 * 
	 * @returns {number} An integer representative of the number of elements contained in this stack.
	 */
	public size(): number {
		
		return this.internalStack.length;
		
	}
	
	/**
	 * Returns an array representative of this stack, ordered from bottom to top of stack.
	 * 
	 * @returns {E[]} An array representative of this stack.
	 */
	public toArray(): E[] {
		
		return this.internalStack;
		
	}
	
}

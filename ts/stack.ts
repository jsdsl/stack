/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:12 PM -- July 29th, 2019.
 *	Project: @jsdsl/stack
 */

import { AbstractList } from "@jsdsl/abstract-list";
import { IIterator, ArrayIterator } from "iter-over";

/**
 * A stack (LIFO) implementation written in JavaScript/TypeScript.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class Stack<E> extends AbstractList<E> {
	
	private internalStack: E[];
	
	public constructor(...elements: E[]) {
		
		super();
		
		this.internalStack = [];
		this.addAll(elements);
		
	}
	
	public push(element: E): void {
		
		this.internalStack.push(element);
		
	}
	
	public pop(): E | undefined {
		
		return this.internalStack.pop();
		
	}
	
	public peek(): E {
		
		return this.internalStack[this.internalStack.length - 1];
		
	}
	
	public add(element: E): void {
	
		this.push(element);
	
	}
	
	public clear(): void {
		
		this.internalStack = [];
		
	}
	
	public contains(element: E): boolean {
		
		return this.internalStack.includes(element);
		
	}
	
	public get(index: number): E {
		
		return this.internalStack[index];
		
	}
	
	public isEmpty(): boolean {
		
		return (this.internalStack.length === 0);
		
	}
	
	public iterator(): IIterator<E> {
		
		return new ArrayIterator<E>(this.internalStack);
		
	}
	
	public remove(element: E): void {
		
		let index: number;
		
		do {
			
			index = this.internalStack.indexOf(element);
			
			if (index !== -1) this.internalStack.splice(index, 1);
			
		} while (index !== -1)
		
	}
	
	public size(): number {
		
		return this.internalStack.length;
		
	}
	
	public toArray(): E[] {
		
		return this.internalStack;
		
	}
	
}
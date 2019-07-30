import { AbstractList } from "@jsdsl/abstract-list";
import { IIterator } from "iter-over";
export declare class Stack<E> extends AbstractList<E> {
    private internalStack;
    constructor(...elements: E[]);
    push(element: E): void;
    pop(): E | undefined;
    peek(): E;
    add(element: E): void;
    clear(): void;
    contains(element: E): boolean;
    get(index: number): E;
    isEmpty(): boolean;
    iterator(): IIterator<E>;
    remove(element: E): void;
    size(): number;
    toArray(): E[];
}

package dataStructures;

import java.util.Arrays;

/**
 * heap Array implementation of a heap
 */
public class heap {

    private int capacity = 10;
    private int size = 0;

    int[] items = new int[capacity];

    // Parent = (index-1)/2
    public int getParentIndex(final int childIndex) {
        return (childIndex - 1) / 2;
    }

    // leftChild = index*2 + 1
    public int getLeftChildIndex(final int parentIndex) {
        return parentIndex * 2 + 1;
    }

    // rightChild = index*2 + 2
    public int getRightChildIndex(final int parentIndex) {
        return parentIndex * 2 + 2;
    }

    private boolean hasLeftChild(final int index){ return getLeftChildIndex(index) < size; }
    private boolean hasRightChild(final int index){ return getRightChildIndex(index) < size; }
    private boolean hasParent(final int index){ return getParentIndex(index) < size; }

    private int leftChild(final int index){ return items[getLeftChildIndex(index)];}
    private int rightChild(final int index){ return items[getRightChildIndex(index)];}
    private int parent(final int index){ return items[getParentIndex(index)];}

    private void swap(final int indexOne, final int indexTwo) {
        final int temp = items[indexOne];
        items[indexOne] = items[indexTwo];
        items[indexTwo] = temp;
    }

    private void ensureExtraCapacity() {
        if(size == capacity){
            items = Arrays.copyOf(items, size*2);
            capacity = capacity*2;
        }
    }

    public int peek() throws IllegalAccessException {
        if(size == 0) throw new IllegalAccessException();
        return items[0];
    }

    public int pool() throws IllegalAccessException {
        if(size == 0) throw new IllegalAccessException();
        int item = items[0];
        items[0] = items[size-1];
        size--;
        heapifyDown();
        return item;
    }

    public void heapifyDown() {
        int index = 0;
        while (hasLeftChild(index)) {
            int smallestChildIndex = getLeftChildIndex(index);
            if (hasRightChild(index) && rightChild(index) < leftChild(index)) {
                smallestChildIndex = getRightChildIndex(index);
            }
            
            if (items[index] < items[smallestChildIndex]) {
                break;
            }
            else{
                swap(index, smallestChildIndex);
            }
            
            index = smallestChildIndex;
        }
    }

    public void add(int item) {
        ensureExtraCapacity();
        items[size] = item;
        size++;
        heapifyUp();
    }

    public void heapifyUp() {
        int index = size -1;
        while(hasParent(index) && parent(index) > items[index]){
            swap(getParentIndex(index), index);
        }
    }
}
import java.io.*;

public class Node
{
    private String word;
    private int count;
    
    private Node leftChild;
    private Node rightChild;
    
    public Node(String myWord, int newVal){
        this.word = myWord;
        this.count = newVal;
    }
    
    public Node(Node left, Node right){
        this.word = "";
        this.leftChild = left;
        this.rightChild = right;
        this.count = this.leftChild.getCount() + this.rightChild.getCount();
    }
    
    public String getWord(){
        return word;
    }
    
    public int getCount(){
        return count;
    }
    
    public Node getLeftChild(){
        return leftChild;
    }
    
    public Node getRightChild(){
        return rightChild;
    }
    
    public String toString(){ 
        return this.getWord() + " " + this.getCount();
    } 
}

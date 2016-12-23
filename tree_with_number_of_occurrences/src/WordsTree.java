import java.util.*;
import java.io.*;
import java.util.Comparator;
import java.util.PriorityQueue;


public class WordsTree{
    
    private Node rootTree;
    private int numUniqueNodes;
    
    public WordsTree(String filePath){
        createOccurrencesTree(filePath);
    }
    
    public int getCountUniqueWords(){
        return numUniqueNodes;
    }
    
    /*This method create a map strcuture to sotre and object (Node) with the
      word and the number or the ocurrencies of this word.
      Use a priority queue access the minimum value in constant time
    */
    public void createOccurrencesTree(String pathFile){
        
        Map<String, Integer> wordsMap = getOcurrenciesByWord(pathFile);
        
        if(wordsMap.size() > 0){
            Queue<Node> nodePrioQueue = createPriotityNode(wordsMap);
            rootTree = createNodeTree(nodePrioQueue);
        }
    }
    
    //Implement Breadth first Algorithm to print the tree.
    public void printTree(){
        if(rootTree == null){
            System.out.println("No tree available");
            return ;
        }
        
        Queue<Node> myQueue = new LinkedList<Node>();
        myQueue.add(rootTree);
        System.out.println("Tree with: " + rootTree.getCount() + " words ");
        System.out.println("Tree with: " + getCountUniqueWords() + " unique words");
        int level = 0;
        
        while(myQueue.size()> 0){
            int numElem = myQueue.size();
            System.out.println(" ---------- Level " + level + " -------");
            
            while(numElem > 0){
                Node node = myQueue.poll();
                System.out.println(node);
                if(node.getLeftChild() != null)
                    myQueue.add(node.getLeftChild());
                if(node.getRightChild() != null)
                    myQueue.add(node.getRightChild());
                
                numElem --;    
            }
            
            level ++;
        }
    }
    
    //Read file and build a list with each word
    private Map<String, Integer> getOcurrenciesByWord(String pathFile){
        
        Map<String, Integer> wordsMap = new HashMap<String, Integer>();
        File file = new File(pathFile);
		FileInputStream fis = null;
		BufferedReader reader = null;
		
        try {
            fis = new FileInputStream(file);
            reader = new BufferedReader(new InputStreamReader(fis));
            String line = reader.readLine();
            
			while (line != null) {
				String tempLine = line.replaceAll("[(){}!?:!.,;]", "");
				String[] wordsPerLine = tempLine.split(" ");
				addWordsToMap(wordsPerLine, wordsMap);
				line = reader.readLine();
			}
        } 
        catch(FileNotFoundException e){
          System.out.println("The file " + file.getAbsolutePath() + " was not found");
        }
        catch(IOException ioe){
          System.out.println("Exception while reading the file" + ioe);
        }
        finally {
            try 
            {
                fis.close();
            } 
            catch (IOException ioe) 
            {
                ioe.printStackTrace();
            }
            
            return wordsMap;
        }
    }
    
    private void addWordsToMap(String[] wordsArray, Map<String, Integer> myMap){
        
        for(int i=0; i<wordsArray.length; i++){
            String key = wordsArray[i].toLowerCase();
            if(myMap.containsKey(key)){
                myMap.put(key, myMap.get(key) + 1);
            }
            else{
                myMap.put(key, 1);
            }
        }
    }
    
    //Read the word list and insert it in a priority queue
    private Queue<Node> createPriotityNode(Map<String, Integer> wordsMap){
         Queue<Node> nodePrioQueue = new PriorityQueue<Node>(wordsMap.size(), new Comparator<Node>() {
            public int compare(Node node1, Node node2){
                return (node1.getCount() - node2.getCount());
            }
        });
        
        
        for (Map.Entry<String, Integer> entry : wordsMap.entrySet()) {
            Node myNode = new Node(entry.getKey(),entry.getValue());
            nodePrioQueue.add(myNode);
        }
        
        numUniqueNodes = nodePrioQueue.size();
        
        return nodePrioQueue;
    }
    
    private Node createNodeTree(Queue<Node> nodePrioQueue){
        if(nodePrioQueue.size() == 0){
            return null;
        }
        
        while (nodePrioQueue.size() > 1){
            Node myNode = new Node(nodePrioQueue.poll(), nodePrioQueue.poll());
            nodePrioQueue.add(myNode);
        }
        
        return nodePrioQueue.poll();
    }
    
    //For Testing purpose
    private void printPriorityQueue(Queue<Node> nodePrioQueue){
        System.out.println ( "Priority queue values are: ");
          
        while (nodePrioQueue.size() > 0)        {
            System.out.println("Value: "+ nodePrioQueue.poll()); 
        }
    }
}




public class MyApp
{
    public static void main(String args[])
    {
        if(args.length != 1){
            System.out.println("Please provide the path of the input file");
            System.out.println("e.g: java MyApp [path]");
            return;
        }
        
        String myPath = args[0];
        WordsTree wt = new WordsTree(myPath);
        wt.printTree();
    }
}
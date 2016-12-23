using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Trees
{
    class Program
    {
       
        static void Main(string[] args)
        {
            TreeNode tree = new TreeNode("root");
            TreeNode childA = new TreeNode("A");
            TreeNode childB = new TreeNode("B");
            tree.AddLeftChild(childB);            
            tree.AddRigthChild(childA);

            childA.AddRigthChild(new TreeNode("A2"));
            childB.AddLeftChild(new TreeNode("B1"));
            childB.AddRigthChild(new TreeNode("B2"));

            Console.WriteLine("Pre order");
            TreeNode.PreOrder(tree);
            Console.WriteLine("");
            Console.WriteLine("Post order");
            TreeNode.PostOrder(tree);

            Console.WriteLine("");
            Console.WriteLine("Levels");
            TreeNode.Levels(tree);

            Console.ReadLine();
        }       
    }
}

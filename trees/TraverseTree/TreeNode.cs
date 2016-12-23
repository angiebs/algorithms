using System;
using System.Collections.Generic;

namespace Trees
{
    public class TreeNode
    {
        public string Data { get; set;}
        public TreeNode leftChild;
        public TreeNode rigthChild;

        public TreeNode(string data)
        {
            this.Data = data;
        }

        public void AddLeftChild(TreeNode node)
        {
            leftChild = node;
        }

        public void AddRigthChild(TreeNode node)
        {
            rigthChild = node;
        }

        public static void PreOrder(TreeNode node)
        {
            Console.WriteLine(node.Data);
            if (node.leftChild != null)
            {
                PreOrder(node.leftChild);
            }
            
            if (node.rigthChild != null)
            {
                PreOrder(node.rigthChild);
            }
        }

        public static void PostOrder(TreeNode node)
        {
            
            if (node.leftChild != null)
            {
                PostOrder(node.leftChild);
            }
            
            if (node.rigthChild != null)
            {
                PostOrder(node.rigthChild);
            }
            Console.WriteLine(node.Data);
        }

        public static void Levels(TreeNode node)
        {
            Queue<TreeNode> q = new Queue<TreeNode>();
            q.Enqueue(node);

            while (q.Count > 0)
            {
                TreeNode current = q.Dequeue();
                if (current == null)
                    continue;

                q.Enqueue(current.leftChild);
                q.Enqueue(current.rigthChild);

                Console.WriteLine(current.Data);
            }

        }

    }
}

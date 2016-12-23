#  Create a tree with the number of ocurrences of each word given a file with a text.

# Compile App

Open terminal and go to the root path of the exercise

javac -sourcepath src/ -d classes/ src/*.java


# Run App

Open terminal, go to classes folder and execute

java MyApp [path_with_input_data]

e.g: java MyApp sampleData1.txt

* There are other 2 sample data files: sampleData2.txt, sampleData3.txt
*

# Testing Data
In the testData folder there are testing files:

-sampleData1.txt
-sampleData2.txt
-sampleData3.txt

#Remarks
- The following special characters: (){}!?:!.,;  are skipped. 
  e.g: the word "dog!" will be the same as the word "dog"
- The input data is non case sensitive

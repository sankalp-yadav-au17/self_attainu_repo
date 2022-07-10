'''
Alphabet Rangoli - 1
You are given an integer, n. Your task is to print an alphabet rangoli of size .
(Rangoli is a form of Indian folk art based on creation of patterns.)

'''

n=int(input("Enter a number="))
for i in range(1,n+1):
    

    print("--"*(n-i),end="")
   

    for j in range(1,(i+1)):
        print(chr(96+(n-j+1)),end="")
        print("-",end="")

    for k in range((i-1),0,-1):
        print(chr(96+(n-k+1)),end="")
        print("-",end="")

    print("--"*(n-i))
   



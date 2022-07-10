'''
Alphabet Rangoli - 2
You are given an integer, n. Your task is to print an alphabet rangoli of size .
(Rangoli is a form of Indian folk art based on creation of patterns.)
'''

n=int(input("Enter a number="))
for i in range(1,2*n):                      #forward
    if i <= ((2*n-1)//2 + (2*n-1)%2):

        print("--"*(n-i),end="")            #dash
    

        for j in range(1,(i+1)):            #charecters forward
            print(chr(96+(n-j+1)),end="")
            print("-",end="")

        for k in range((i-1),0,-1):         #reverse charecter
            print(chr(96+(n-k+1)),end="")
            print("-",end="")

        print("--"*(n-i))                   #dash

    else:                                   #reverse
        print("--"*(i-n),end="")            #dash

        for j in range(1,(2*n-i)+1):        #charecters forward
            print(chr(96+(n-j+1)),end="")
            print("-",end="")

        for k in range((2*n-i)-1,0,-1):     #reverse charecter
            print(chr(96+(n-k+1)),end="")
            print("-",end="")

        print("--"*(i-n))                   #dash
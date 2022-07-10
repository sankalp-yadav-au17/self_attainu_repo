n=5
for line in range(1,n+1):   #for lines(position)
    print("--"*(n-line),end="")

    for i in range(1, line+1):    #for typing letters
        print(chr(96+(n-i)+1),end="")
        print("-",end="")
        

    if line>=2: # dont include 1st line 
        for j in range(line-1,0,-1): #each line consist of number of letters 
            print(chr(96+(n-j)+1),end="") #kaunsa letters
            print("-",end="") 
    

    print("--"*(n-line))

#         # n=5, line, i
#         # print(96+(i))
#         # print(96+(5))=e
#         # print(96+4)=d
#         # print(96+3)=c
#         # print(96+2)=b
#         # print(96+1)=a





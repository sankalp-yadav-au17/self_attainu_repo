


def xor(list1):
    dict={}
    for i in list1:
        if i in dict:
            dict[i]=dict[i]+1
        else:
             dict[i]=1

    for x,y in dict.items():
        if y==1:
            if Decimal_to_Binary(x)==0:
                return x
            
      


def Decimal_to_Binary(number):
    output=""
    while number!=0:
        remainder=number%2
        output=output+str(remainder)
        number=number//2
        
    
    return int(output[::-1])^int(output[::-1])
    

            
        
print(xor(list(map(int,input("Enter the list=").split()))))


"""
Time Complexity = O(n)
Space Complexity = O(n)
"""
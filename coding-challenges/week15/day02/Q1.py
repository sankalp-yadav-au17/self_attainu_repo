def ipconfig(arr):
    if len(arr)==8:
        for i in arr:
            for j in i:
                if (ord(j)>=65 and ord(j)<=70) or (ord(j)>=97 and ord(j)<=102) or (int(j)>=0 and int(j)<=9):
                    continue
                else:
                    return "Neither"
        return "IPV6"
            

    elif len(arr)==4:
        for i in arr:
            if len(i)>1 and i[0]!=0:
                for j in i:
                    if ord(j)>=48 and ord(j)<=57:
                        continue
                    else:
                        return "Neither"
                
                if int(i)>=0 and int(i)<=255:
                    continue
                else:
                    return "Neither"
            else:
                return "Neither"

        return "IPV4"

    else:
        return "Neither"
        
IP=input("enter the input= ")
if ":" in IP:
    print(ipconfig(list(IP.split(":"))))
elif "." in IP:
    print(ipconfig(list(IP.split("."))))

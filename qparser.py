import json
import base64
import codecs
with codecs.open('questions.txt', encoding='utf-8') as f:
    questionText = f.read()

qStr = ""
qID = 0
for q in questionText.split("\n- "):
    if("\t" in q):
            q = q.replace('"', "\"")
            options = q.split("\t", 1)
            qStr += '{"id": ' + str(qID) + ', "q": ' + json.dumps(options[0].strip()) + ', "a": ' + json.dumps(options[1].strip()) + '},\n'
            qID += 1

 

qStr = "[" + qStr[:-1] + "]"
print(qStr) 
f2 = open("questions.json", "w")
f2.write(qStr)
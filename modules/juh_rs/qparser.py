import json
import codecs
import re
mypath = globals()["MODULE_FOLDER"]
with codecs.open(mypath + '/questions.txt', encoding='utf-8') as f:
    questionText = "\n" + f.read().strip()

qStr = ""
qID = 0
topicGroups = re.split(r"\n[A-Za-z äöüßÄÖÜ]+ ?[\r\n]+", questionText)[1:]
topicList = re.findall(r"\n[A-Za-z äöüßÄÖÜ]+ ?[\r\n]+", questionText)
print(topicList)
for ti in range(len(topicList)):
    topic = json.dumps(topicList[ti].strip())
    s = "\n" + topicGroups[ti].strip()
    for q in s.split("\n- "):
        if("\t" in q):
                q = q.replace('"', "\"")
                options = q.split("\t", 1)
                qStr += '{"id": ' + str(qID) + ', "q": ' + json.dumps(options[0].strip()) + ', "a": ' + json.dumps(options[1].strip()) + ', "t": ' + topic + '},\n'
                qID += 1

 

qStr = "[" + (qStr.strip())[:-1] + "]"
print(qStr) 
f2 = open(mypath + "/questions.json", "w")
f2.write(qStr)
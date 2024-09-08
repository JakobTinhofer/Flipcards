import requests, os, json

NOTION_URL = "https://api.notion.com/v1/"
NOTION_DB_ID = "cb9a760a400548dd9b0c91bffd362d60"

NOTION_TOKEN = os.environ.get("NOTION_TOKEN", input("Please enter Notion token: "))

print("TOKEN LEN: " + str(len(NOTION_TOKEN)))

MY_PATH = globals().get("MODULE_FOLDER", "missing")
if MY_PATH != "missing":
    __file__ = "A"
else:
    MY_PATH = os.path.dirname(os.path.realpath(__file__))
    


def querry_db():
    eqs = []
    hasMore = True
    url = NOTION_URL + "databases/" + NOTION_DB_ID + "/query"
    while hasMore:
        r = requests.post(url, headers={"Authorization": "Bearer " + NOTION_TOKEN, "Notion-Version": "2022-06-28", "Content-Type": "application/json"})
        data = r.json()
        hasMore = data["has_more"]
        eqs += data["results"]
    return eqs

def parse_entry(eq, parsed, nr):
    parsed.append({
        "id": nr,
        "q": eq["properties"]["Name"]["title"][0]["text"]["content"],
        "a": parse_mixed_richtext(eq["properties"]["Gleichung"]["rich_text"]),
        "t": "EQUATIONS"})
    print("Parsed entry: " + str(parsed[-1]))


def parse_mixed_richtext(obj):
    string = ""
    for rt in obj:
        if "text" in rt:
            string += rt["text"]["content"]
        elif "equation" in rt:
            string += "$$" + rt["equation"]["expression"] + "$$"
        elif "rich_text" in rt:
            return parse_mixed_richtext(rt["rich_text"])
    return string 

r_eqs = querry_db()

parsed_entries = []
for i, e in enumerate(r_eqs):
    parse_entry(e, parsed_entries, i)

open(MY_PATH + "/questions.json", "w").write(json.dumps(parsed_entries))
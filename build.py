import os, json, shutil

class QuestionModule:
    def __init__(self, name, url, questions_bin, html_str):
        self.name = name
        self.url = url
        self.questions_bin = questions_bin
        self.html_str = html_str

def clear_public():
    print("Clearing public directory...")
    for root, dirs, files in os.walk(os.path.join(script_path, './public')):
        for f in files:
            os.unlink(os.path.join(root, f))
        for d in dirs:
            shutil.rmtree(os.path.join(root, d))

def build_html(question_info, html_base):
    return html_base.replace(r"{q_url}", question_info['url']).replace(r"{page_title}", question_info['name'])

def build_index(modules, html_index):
    module_html = ""
    for module in modules:
        module_html += '<a href="' + module.url + '.html">' + module.name + '</a><br>'
    return html_index.replace(r"<!--LINKS HERE-->", module_html)

def write_html(q_html, url):
    with open(os.path.abspath(os.path.join(script_path, './public/' + url +'.html')), 'w', encoding="utf-8") as f:
        f.write(q_html)

def write_questions(q_bin, url):
    with open(os.path.abspath(os.path.join(script_path, './public/questions/' + url +'.json')), 'wb') as f:
        f.write(q_bin)

def read_config(config_obj, config_path):
    config_dir = os.path.dirname(config_path)
    print("Processing config file: " + config_obj['name'])
    if("build_script" in config_obj):
        try:
            print("Running build script: " + config_obj["build_script"])
            exec(open(os.path.join(config_dir, config_obj["build_script"]), 'r').read(), {"MODULE_FOLDER": config_dir})
        except Exception as e:
            print("Error running build script: " + str(e))
    print("Building html...")
    html_str = build_html(config_obj, html_base)
    print("Reading questions...")
    questions_bin = open(os.path.join(config_dir, './questions.json'), 'rb').read()
    return QuestionModule(config_obj['name'], config_obj['url'], questions_bin, html_str)

def get_configs():
    cfgs = []
    for root, dirs, files in os.walk(os.path.abspath(os.path.join(script_path, './modules'))):
        for file in files:
            if file.endswith('config.json'):
                cfgs.append(os.path.join(root, file))
    return cfgs        
    

script_path = os.path.dirname(os.path.realpath(__file__))
clear_public()

html_base = open(os.path.join(script_path, './templates/base.html'), 'r', encoding='utf-8').read()
html_index = open(os.path.join(script_path, './templates/index.html'), 'r', encoding='utf-8').read()
configs = get_configs()
modules = []

for q in configs:
    config_obj = json.loads(open(q, 'r', encoding='utf-8').read())
    modules.append(read_config(config_obj, q))

write_html(build_index(modules, html_index), 'index')
os.mkdir(os.path.join(script_path, './public/questions'))
for module in modules:
    write_html(module.html_str, module.url)
    write_questions(module.questions_bin, module.url)
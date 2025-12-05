from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/MEMORY")
def MiniJeu():
    return render_template("JEU.html")

@app.route("/LINUX")
def linux():
    return render_template("LINUX.html")

@app.route("/PARTI-PRIS")
def PartiPri():
    return render_template("PartiPris.html")

@app.route("/FRISE")
def Frise():
    return render_template("frise.html")


handler = app

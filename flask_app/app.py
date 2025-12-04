from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/MINI-JEU")
def MiniJeu():
    return render_template("JEU.html")

@app.route("/LINUX")
def Linux():
    return render_template("LINUX.html")

@app.route("/PARTI-PRIS")
def PartiPri():
    return render_template("PartiPris.html")

if __name__ == "__main__":
    app.run(debug=True)

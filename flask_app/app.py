from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/annee1")
def annee1():
    return render_template("annee1.html")

@app.route("/annee2")
def annee2():
    return render_template("annee2.html")

@app.route("/annee3")
def annee3():
    return render_template("annee3.html")

if __name__ == "__main__":
    app.run(debug=True)

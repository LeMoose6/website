from flask import Flask, redirect, render_template, request, session
from flask_session import Session

app = Flask(__name__)

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

from helpers import get_data, write_data

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/stories")
def stories():
    return render_template("stories.html")
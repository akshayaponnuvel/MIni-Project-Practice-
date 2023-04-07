from flask import Flask
import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials= True)
@app.route("/getTime",methods = ["GET"])
def getTime():
    d = datetime.datetime.now()
    return f"{d.hour} : {d.minute} : {d.second}"

app.run(debug=True)
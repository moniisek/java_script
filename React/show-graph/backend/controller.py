from flask import Flask, jsonify, request
from pathlib import Path
from flask_cors import CORS
from utils import browseDirs, parse

app = Flask(__name__)
cors = CORS(app)

data_dir = Path().resolve().parents[0] / "data"

@app.route("/get-list", methods=["GET"])
def returnList():
    response = browseDirs(data_dir)
    return jsonify(response)

@app.route("/graph", methods=["POST"])
def returnGraph():
    """
    request = {value: filename, optgroup: folder }
    """
    request_json = request.json

    return jsonify(
        parse(data_dir / request_json["optgroup"] / request_json['value'], request_json["optgroup"])
        )











if __name__ == '__main__':
    app.run(debug=True)

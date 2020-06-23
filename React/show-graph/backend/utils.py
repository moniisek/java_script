from pathlib import Path
import json
import requests


def browseDirs(source):
    response = {}
    for path in sorted(source.rglob("*")):
        if path.is_dir():
            response[path.name] = []

        if path.suffix == '.txt':

            if path.parts[-2] in response.keys():
                response[path.parts[-2]].append(path.name)



    return response



def parse(fullpath, station):
    result = {
        "status": "NOK",
        "angle_values": [],
        "torque_values": [],
        "station": station,
        "line": "PHEV",
        "date_time": "",
        "tightening_steps_index": [0],
        "VV_point": {
            "x": 0,
            "y": 0
        },
        "VV_percent": 0
    }
    try:
        with open(fullpath) as fh:
            file = json.load(fh)
    except Exception as e:
        print(str(e), flush=True)

    if file['result'] == "NOK":
        return result
    result['status'] = "OK"



    result['date_time'] = file['date']
    end_index = 0

    for step in file['tightening steps']:
        result['angle_values'] +=step['graph']['angle values']
        result['torque_values'] += step['graph']['torque values']
        end_index = len(step['graph']['angle values'])
        result['tightening_steps_index'].append(result['tightening_steps_index'][-1] + end_index)




    vv_point_response = requests.post("http://localhost:9000/custom/tightening_curves", data=json.dumps(result)).json()
    result['VV_point'] = vv_point_response['VV_point']
    result['VV_percent'] = vv_point_response['percent']


    return result

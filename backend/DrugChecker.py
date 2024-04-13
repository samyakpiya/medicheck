# from flask import Flask, jsonify, request
# import logging
# from CheckPatient import CheckPatient
# from GenerateData import PatientData
# import subprocess

# app = Flask(__name__)

# app.logger.setLevel(logging.INFO)  # Set log level to INFO
# handler = logging.FileHandler('app.log')  # Log to a file
# app.logger.addHandler(handler)

# @app.route('/check-drug', methods=['GET'])
# def get_date():
#     app.logger.info(request.json)
#     drug = request.args.get("drug", type=str)
#     age = int(request.args.get("age"), type=int)
#     weight = int(request.args.get("weight"), type=int)
#     height = int(request.args.get("height"), type=int)
#     app.logger.info("yo")
#     gender = 1 if request.args.get("female", default=False, type=bool) == "true" else 0
#     hos = 1 if request.args.get("hos", default=False, type=bool) == "true" else 0
#     patient = PatientData().set(age, weight, gender, height, hos)
#     result = CheckPatient(drug, patient)
#     return jsonify({'drug-conf': result})

# @app.errorhandler(500)
# def server_error(error):
#     app.logger.exception('An exception occurred during a request.')
#     return 'Internal Server Error', 500


from flask import Flask, request, jsonify
from flask_restful import Api, Resource, reqparse
from CheckPatient import CheckPatient
from GenerateData import PatientData

app = Flask(__name__)
api = Api(app)

drug_args = reqparse.RequestParser()
drug_args.add_argument("drug", type=str, location='args')
drug_args.add_argument("weight", type=int, location='args')
drug_args.add_argument("height", type=int, location='args')
drug_args.add_argument("female", type=int, location='args')
drug_args.add_argument("age", type=int, location='args')
drug_args.add_argument("hos", type=int, location='args')

#basic get and post
class DrugConfidence(Resource):
    def get(self):
        args = drug_args.parse_args()
        drug = args["drug"]
        age = args["age"]
        weight = args["weight"]
        height = args["height"]
        gender = 1 if args["female"] else 0
        hos = 1 if args["hos"] else 0
        patient = PatientData(age, weight, gender, height, hos, random=False)
        result = CheckPatient(drug, patient)
        return jsonify({'drug-conf': result})

api.add_resource(DrugConfidence, "/check-drug")

if __name__ == '__main__':
    app.run(debug=True)
import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
from ModelTrainer import DrugTester
from GenerateData import PatientData

def CheckPatient(drug, patient: PatientData):
    model = DrugTester()
    model.load_state_dict(torch.load(f"models/{drug}.model"))
    model.eval()
    with torch.no_grad():
        data = [patient.age, patient.weight, patient.gender, patient.height, patient.history_of_seizures]
        datatensor = torch.tensor(data, dtype=torch.float32)
        res = model(datatensor)
        return res.item()

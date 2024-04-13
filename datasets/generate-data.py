import sys
import csv
from numpy import random as ran
import random

class PatientData:
    def __init__(self):
        generator = ran.default_rng()
        self.age = int(generator.normal(30.0, 10.0))
        self.weight = int(generator.normal(160.0, 30.0))
        self.gender = random.randint(0,1) # 0 for male, 1 for female
        self.history_of_seizures = 1 if ran.ranf() < 0.3 else 0
        self.height = int(generator.normal(65.0, 8.0))

    def __repr__(self):
        return f"Age: {self.age}, Weight: {self.weight} \nGender: {'Female' if self.gender else 'Male'}, Height: {self.height}\nPrevious Seizures: {'Yes' if self.history_of_seizures else 'No'}"

    def toCSVForm(self, shouldUseDrug: bool) -> list:
        return [f"{shouldUseDrug}", f"{self.age}", f"{self.weight}", f"{self.gender}", f"{self.height}", f"{self.history_of_seizures}"]

    def predict_disease(self, weights: list, ranges: list):
        weight_vals = [weights[0], weights[1], weights[2][0], weights[3], weights[4]]
        if sum(weight_vals) != 1:
            print("Weights must add to 1!")
            sys.exit(3)

        age_comp = weights[0] * inv_lerp(self.age, ranges[0][0], ranges[0][1])
        weight_comp = weights[1] * inv_lerp(self.weight, ranges[1][0], ranges[1][1])
        height_comp = weights[3] * inv_lerp(self.height, ranges[2][0], ranges[2][1])

        gender_factor = 1 if self.gender == weights[2][1] else 0
        gender_comp = weights[2][0] * gender_factor
        seizure_comp = weights[4] * self.history_of_seizures 


        total_prob = age_comp + weight_comp + height_comp + gender_comp + seizure_comp
        return 1 if ran.ranf() < total_prob else 0


def inv_lerp(x, a, b):
    if a == b:
        print("Cannot inverse lerp on range 0!")
        sys.exit(2)
    
    return (x-a)/(b-a)


if len(sys.argv) != 3:
    print(f"Usage: python generate-data.py <output-file-name> <drug-name>")
    sys.exit(1)

output_file_name = sys.argv[1]
drug_name = sys.argv[2]

age_weight = float(input(f"What weight to assign to age for {drug_name}? "))
weight_weight = float(input(f"What weight to assign to weight for {drug_name}? "))

gender_weight = float(input(f"What weight to assign to gender for {drug_name}? "))
gender_weight_val = None
if gender_weight > 0:
    gender_weight_val = int(input(f"Which gender is affected? "))

height_weight = float(input(f"What weight to assign to height for {drug_name}? "))

seizures_weight = float(input(f"What weight to assign to seizure history for {drug_name}? "))

weights = [age_weight, weight_weight, (gender_weight, gender_weight_val), height_weight, seizures_weight]

patients = [ PatientData() for _ in range(10000) ]
age_range = ( min([p.age for p in patients]), max([p.age for p in patients]))
weight_range = ( min([p.weight for p in patients]), max([p.weight for p in patients]))
height_range = ( min([p.height for p in patients]), max([p.height for p in patients]))
ranges = [age_range, weight_range, height_range]




with open(output_file_name+".csv", "w", newline='') as file:
    output_csv = csv.writer(file)
    output_csv.writerow([drug_name, "age", "weight", "gender", "height", "history of seizures"])
    for p in patients:
        drug_rec = p.predict_disease(weights, ranges)
        output_csv.writerow(p.toCSVForm(drug_rec))


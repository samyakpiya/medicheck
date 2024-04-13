import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim

dataset = np.loadtxt('datasets/metformin.csv', delimiter=',',skiprows=1)
data = dataset[:,1:]
result = dataset[:,0]

dataTensor = torch.tensor(data, dtype=torch.float32)
resultTensor = torch.tensor(result, dtype=torch.float32).reshape(-1, 1)
class PimaClassifier(nn.Module):
    def __init__(self):
        super().__init__()
        self.hidden1 = nn.Linear(5, 12)
        self.act1 = nn.ReLU()
        self.hidden2 = nn.Linear(12, 8)
        self.act2 = nn.ReLU()
        self.output = nn.Linear(8, 1)
        self.act_output = nn.Sigmoid()

    def forward(self, data):
        data = self.act1(self.hidden1(data))
        data = self.act2(self.hidden2(data))
        data = self.act_output(self.output(data))
        return data

model = PimaClassifier()
print(model)

loss_fn = nn.L1Loss()  # binary cross entropy
optimizer = optim.Adam(model.parameters(), lr=0.00001)

n_epochs = 10
batch_size = 10

for epoch in range(n_epochs):
    for i in range(0, len(dataTensor), batch_size):
        Xbatch = dataTensor[i:i+batch_size]
        y_pred = model(Xbatch)
        ybatch = resultTensor[i:i+batch_size]
        loss = loss_fn(y_pred, ybatch)
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
    print(f'Finished epoch {epoch}, latest loss {loss}')


# compute accuracy (no_grad is optional)
with torch.no_grad():
    y_pred = model(dataTensor)

accuracy = (y_pred.round() == resultTensor).float().mean()
print(f"Accuracy {accuracy}")
torch.save(model.state_dict(), "./model")
# MediCheck

![ScreenShot Tool -20240414002349](https://github.com/samyakpiya/medicheck/assets/76403666/0ba6e7ee-efc7-4d11-886d-94014f28d734)


## Project Inspiration
The tragic medication error at Vanderbilt University Medical Center underscores the need for technology that reduces such risks. Nurse RaDonda Vaught's confusion between generic and brand drug names—leading her to dispense and administer the paralytic vecuronium instead of the intended Versed—has critical implications for healthcare safety.

[Check this article to learn more](https://www.healthecareers.com/nurse-resources/wyoming-nurse-june-2022/wyoming-nurse-june-2022-the-case-of-nurse-radonda-vaught-how-administering-the-wrong-medication-resulted-in-a-criminal-conviction)

## Problem Statement
![problem drawio](https://github.com/samyakpiya/medicheck/assets/76403666/65a3cc11-ada0-4535-af50-20a962f1d68d)
In fast-paced healthcare settings, medication cabinets like Pyxis can increase the potential for errors by displaying only generic drug names. Nurses must rapidly translate between generic and brand names, a task prone to mistakes under pressure and distraction.

## Our Solution
![Blank diagram (2)](https://github.com/samyakpiya/medicheck/assets/76403666/4ffbccb9-b564-46d8-9aff-2ab59d16e7c7)
We propose a system that augments the Pyxis UI to enhance drug selection safety. Our solution uses neural networks to analyze the chosen medication against patient data, providing a confidence rating to the nurse. A low confidence rating would trigger additional verification steps, potentially preventing catastrophic errors.

## Proof-of-Concept
We've built a web app prototype to demonstrate our concept. The interface simulates the nurse's workflow, highlighting where our system could have intervened to prevent misidentification.

## Technical Details
- Frontend: TypeScript, Next.js, Tailwind CSS, shadcn/ui, Prisma (ORM for SQLite database)
- Backend: Flask server to handle requests and interface with the PyTorch neural network.

## Challenges
- Data: We generated simulated patient data due to the lack of readily available sources. We also sourced a drug database to map generic and brand names.
- UI: Delivering a clear, intuitive UI within the hackathon timeframe required prioritizing core functionality.

## Achievements
- Intuitive UI for rapid understanding within the Pyxis workflow.
- Robust Neural Network: Models trained for specific drugs to demonstrate confidence ratings.
- Proof of Concept: Our system highlights the potential to prevent future medication errors.

## Learning Outcomes
- Aastha: Product management in a rapid development environment
- Samyak: Prisma ORM, SQLite database integration
- Matthew: Neural Network with PyTorch

## Features

- Medication Search Interface: Revamps the traditional search process in medication dispensing systems like Pyxis, ensuring safer and more accurate medication retrieval by clearly distinguishing between generic and brand-name drugs.

- Patient-Specific Drug Recommendation System: Utilizes simulated patient data and machine learning models to provide personalized drug recommendations, improving treatment outcomes and patient safety.

## Current Working Drugs:
 1. metformin
 2. sertraline
 3. gabapentin
 4. levetiracetam
 5. atorvastatin

## Example URL for backend API requests:

HTTP Fetch Request: http://127.0.0.1:5000/check-drug?drug=metformin&age=25&weight=150&height=60&female=1&hos=0
```
{
  "drug-conf": 0.7603774666786194
}
```

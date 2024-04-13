Project Name: Medicheck


Project Description:

Medicheck is an innovative solution designed to reduce medical errors in medication dispensing within healthcare settings. Utilizing advanced technologies, Medicheck enhances the accuracy and reliability of medication search functionalities through a dual-display interface that simultaneously presents generic and brand names based on user search queries. This feature is complemented by a cutting-edge, patient-specific drug recommendation system that leverages machine learning to predict the efficacy of drugs based on individual patient data.

The project focuses on two main features:

Medication Search Interface: Revamps the traditional search process in medication dispensing systems like Pyxis, ensuring safer and more accurate medication retrieval by clearly distinguishing between generic and brand named drugs.

Patient-Specific Drug Recommendation System: Utilizes simulated patient data and machine learning models to provide personalized drug recommendations, improving treatment outcomes and patient safety.


Example URL for backend API requests:
http://127.0.0.1:5000/check-drug?drug=metformin&age=25&weight=150&height=60&female=1&hos=0

Response:
{
  "drug-conf": 0.7603774666786194
}
# hackUTA2022

# Insure It : Winner of hackUTA 2022

Deciding and buying insurance policies on car, home and other areas has always been a maze. There is so much complexity to it that users are unaware of what products can be covered under a insurance category. Our idea was to create a mobile friendly web application for state Farm that uses Optical Character Recognizer (OCR) to parse contents from consumer good receipt(s)and use the data to determine what products can and cannot be insured. The user then has the option to insure the item under a plan and get a quote from State Farm within the app. This heavily reduces the overhead in getting quotes and educates the customer about possible options under an insurance plan. Future work includes using better OCR and NLP tools, ML models to effectively label data, and developing a consumer friendly mobile application.

We used ReactJS and CSS Bootstrap to build the dynamically loaded front end of the website and used a NodeJS server for the backend. We utilized JS version of the Tesseract OCR engine to parse the data from the receipts and used Axios to call the API from our backend. We also integrated Twilio 's SMS API to send automated alerts when uploading receipts or performing major events in the interface.

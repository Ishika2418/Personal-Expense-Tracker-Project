open cmd: 

cd TASK/TASK/BACKEND/expenses_pro
pip install django djangorestframework
pip install django-cors-header
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

open another cmd:

npm install 
npm run dev

Deployment:
Deployed backend on render and passed the deployed URL in frontend. Then deployed frontend on netlify.


FROM python:3.8

WORKDIR /app

ENV FLASK_APP=app.py 

ENV FLASK_ENV=production

COPY ./requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 5000
CMD ["gunicorn", "-b", ":5000", "app:app"]

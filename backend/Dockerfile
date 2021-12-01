FROM python:3.8

WORKDIR /app

ENV FLASK_APP=app.py 

ENV FLASK_ENV=production

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENTRYPOINT [ "flask" ]
CMD ["run", "--host=0.0.0.0", "--port=5000"]

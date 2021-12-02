from flask import Flask, jsonify, request, Blueprint
from flask.helpers import send_from_directory
# from  scripts.fullTrain import getdata, train
from flask import current_app
from scripts.fullTrain import getdata, train
from scripts.upload_To_Pinata import main
# from contract_scripts.set_tokenuri import main
from flask_cors import CORS, cross_origin
import os



app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

# api = Blueprint('api', __name__)
####### Trainning vars and get data ######
DATA_PATH = './images/'
EPOCHS = 5

train_dataset = getdata(DATA_PATH)
ipfsfilepath = "./ipfs.json"




@app.route('/predict', methods=['POST'])
@cross_origin()
def generate():
    data = request.get_json()
    # digit = data['digit']
    # TODO
    # Smartcontract Pay
    train(train_dataset, EPOCHS)
    main(ipfsfilepath)
    
    return jsonify({"image":"image generation done"})

@app.route('/mint', methods=['POST'])
def mint():
    return main()

@app.route('/', methods=['GET'])
@cross_origin()
def serve():
    return app.send_static_file('index.html')
    # return app.send_from_directory(app.static_folder,'index.html')
# app.register_blueprint(api, url_prefix='/api')
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", threaded=True, port=port)
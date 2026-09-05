from fastapi import FastAPI
from pymongo import MongoClient
from dotenv import load_dotenv
import os


# Carrega as variáveis do arquivo .env
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))


# ==============================
# CONFIGURAÇÃO DO MONGODB
# ==============================

MONGO_URI = os.getenv("MONGO_URI")
MONGO_DATABASE = os.getenv("MONGO_DATABASE")


client = MongoClient(MONGO_URI)

db = client[MONGO_DATABASE]


# Coleção de pacientes
pacientes_collection = db["pacientes"]


# ==============================
# FASTAPI
# ==============================

app = FastAPI(
    title="RetinaEdge API",
    description="API do sistema RetinaEdge",
    version="1.0.0"
)


# ==============================
# ROTA PRINCIPAL
# ==============================

@app.get("/")
def inicio():

    return {
        "sistema": "RetinaEdge",
        "status": "online"
    }


# ==============================
# TESTE DO MONGODB
# ==============================

@app.get("/api/teste-mongodb")
def teste_mongodb():

    try:

        client.admin.command("ping")

        return {
            "mongodb": "conectado",
            "status": "ok"
        }

    except Exception as erro:

        return {
            "mongodb": "erro",
            "mensagem": str(erro)
        }
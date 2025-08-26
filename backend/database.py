import motor.motor_asyncio

MONGO_URL = 'mongodb+srv://rupamdutta905:rupamdutta7980@cluster0.j5ghcds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


client = client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL)

db = client["disease_prediction"]
users_collection = db["users"]

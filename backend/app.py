import requests, base64, os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route("/api/guardar-nota", methods=["POST"])
def guardar_nota():
    data = request.get_json()
    markdown = data.get("markdown", "")

    token = os.getenv("GITHUB_TOKEN")
    repo_owner = "roeltios"         
    repo_name = "notas"      
    folder = "notas"
    filename = f"nota-{datetime.now().strftime('%Y%m%d-%H%M%S')}.md"
    path = f"{folder}/{filename}"

    url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/contents/{path}"
    contenido_codificado = base64.b64encode(markdown.encode("utf-8")).decode("utf-8")

    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github+json"
    }

    payload = {
        "message": f"Agregar {filename}",
        "content": contenido_codificado
    }

    response = requests.put(url, headers=headers, json=payload)
    print("GitHub responde:", response.status_code, response.json())

    if response.ok:
        return jsonify({"mensaje": "Nota guardada en GitHub correctamente"}), 200
    else:
        return jsonify({"error": response.json()}), 500

if __name__ == "__main__":
    app.run(debug=True)

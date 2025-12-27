from flask import Flask, request, jsonify
import git
import os

app = Flask(__name__)

print("🚀 Сервер запускается на порту 5001")
print("📞 Для тестирования используйте:")
print("   curl http://localhost:5001/get")
print("   curl http://localhost:5001/hello/Student")

data = {"message": "Hello, world!"}

@app.route("/get", methods=["GET"])
def get_data():
    return jsonify(data), 200

@app.route("/post", methods=["POST"])
def post_data():
    new_data = request.json
    data.update(new_data)
    return jsonify({"status": "added", "data": data}), 201

@app.route("/put", methods=["PUT"])
def put_data():
    new_data = request.json
    data.clear()
    data.update(new_data)
    return jsonify({"status": "replaced", "data": data}), 200

@app.route("/patch", methods=["PATCH"])
def patch_data():
    patch_data = request.json
    data.update(patch_data)
    return jsonify({"status": "patched", "data": data}), 200

@app.route("/delete", methods=["DELETE"])
def delete_data():
    data.clear()
    return jsonify({"status": "deleted"}), 200

@app.route("/git/status", methods=["GET"])
def git_status():
    try:
        repo = git.Repo(".")
        return jsonify({"branch": repo.active_branch.name, "is_dirty": repo.is_dirty()}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route("/hello/<name>")
def hello_name(name):
    return jsonify({"message": f"Hello, {name}!"})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True)
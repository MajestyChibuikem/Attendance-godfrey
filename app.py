from flask import Flask, render_template, jsonify, request, redirect, url_for, abort
from flask_sqlalchemy import SQLAlchemy
import uuid
import socket
import os

app = Flask(__name__)
db_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'instance', 'attendance.db')
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{db_path}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    reg_number = db.Column(db.String(100), nullable=False)
    ip = db.Column(db.String(100), nullable=False)
    mac = db.Column(db.String(100), nullable=False)

# def get_mac():
#     mac = ':'.join(['{:02x}'.format((uuid.getnode() >> elements) & 0xff) for elements in range(0, 2*6, 8)][::-1])
#     return mac

# def get_mac():
#     mac = uuid.getnode()
#     mac_address = ':'.join(['{:02x}'.format((mac >> elements) & 0xff) for elements in range(0, 2*6, 8)][::-1])
#     return mac_address
# def get_mac():
#     mac = uuid.getnode()
#     mac_address = ':'.join(['{:02x}'.format((mac >> i) & 0xff) for i in range(0, 2*6, 8)])
#     return mac_address
def get_mac():
    mac = uuid.getnode()
    mac_address = ':'.join(['{:02x}'.format((mac >> i) & 0xff) for i in range(0, 48, 8)])
    return mac_address



# def is_allowed_ip(ip):
#     allowed_ip_prefix = '192.168.1.'
#     return ip.startswith(allowed_ip_prefix)

@app.route('/')
def home():
    return render_template('registration.html')

@app.route('/attendance')
def attendance():
    # ip = request.remote_addr
    # if not is_allowed_ip(ip):
    #     abort(403)  # Forbidden
    return render_template('attendance.html')

@app.route('/get-ip-mac', methods=['GET'])
def get_ip_mac():
    ip = request.remote_addr
    mac = get_mac()
    return jsonify({'ip': ip, 'mac': mac})

@app.route('/verify-attendance', methods=['POST'])
def verify_attendance():
    data = request.json
    ip = data.get('ip')
    mac = data.get('mac')
    is_valid = verify_attendance(ip, mac)
    return jsonify({'success': is_valid})

@app.route('/submit-login', methods=['POST'])
def submit_login():
    full_name = request.form['full-name']
    reg_number = request.form['registration_number']
    ip = request.remote_addr
    mac = get_mac()
    new_user = User(full_name=full_name, reg_number=reg_number, ip=ip, mac=mac)
    db.session.add(new_user)
    db.session.commit()
    return redirect(url_for('home'))

def verify_attendance(ip, mac):
    user = User.query.filter_by(ip=ip, mac=mac).first()
    return user is not None

if __name__ == '__main__':
    if not os.path.exists(os.path.dirname(db_path)):
        os.makedirs(os.path.dirname(db_path))
    with app.app_context():
        db.create_all()
    app.run(debug=True)

from flask import Flask, render_template, jsonify, request,abort
import os
import socket

app = Flask(__name__)

def get_mac():
    hostname = socket.gethostname()
    mac = ':'.join(['{:02x}'.format((os.getnode() >> elements) & 0xff) for elements in range(0, 2*6, 8)][::-1])
    return mac

def allowed_ip(ip):
    allowed_ip_prefix = "192.8.1"
    return ip.startswith(allowed_ip_prefix)


@app.route('/')
def home():
    return render_template('Registration.html')

@app.route('/attendance')
def attendance():
    ip = request.remote_addr
    if not allowed_ip(ip):
        abort(403)
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

def verify_attendance(ip, mac):
    return True

if __name__ == '__main__':
    app.run(debug=True)

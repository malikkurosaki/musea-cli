#!/usr/bin/env node
const prompts = require('prompts');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { LocalStorage } = require('node-localstorage');
const storage = new LocalStorage('./storage');
const SSH = require('simple-ssh');
const colors = require('colors');

const _host = '103.161.184.66';
const _port = '52123';
const _user = 'root';
const _password = 'Mkuro9920';

;(async () => {
    const ssh = new SSH({
        host: _host,
        user: _user,
        pass: _password,
        port: _port,
    });

    // npm, node, mysql, php, pm2 version
    ssh.exec('npm -v', {
        out: (stdout) => {
            console.log(`npm : ${stdout}`.green);
        }
    }).exec('node -v', {
        out: (stdout) => {
            console.log(`node : ${stdout}`.green);
        }
    }).exec('mysql -V', {
        out: (stdout) => {
            console.log(`mysql : ${stdout}`.green);
        }
    }).exec('php -v', {
        out: (stdout) => {
            console.log(`php : ${stdout}`.green);
        }
    }).exec('pm2 -v', {
        out: (stdout) => {
            console.log(`pm2 : ${stdout}`.green);
        }
    }).exec('git --version', {
        out: (stdout) => {
            console.log(`git : ${stdout}`.green);
        }
        
    }).start();

})();

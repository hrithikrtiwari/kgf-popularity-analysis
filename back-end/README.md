p## Installation
You need to make some changes to your system for running this app. Assuming you have the latest Node installed

### check Node installation
<code> node -v</code><br/>
v15.11.0(on my system)<br>
<code> npm -v</code><br/>
7.9.0(on my system)

## Install all Node Modules
<code>npm i</code>


### Install Nodemon
 npm i -g nodemon
<p align="center">(use sudo if you're on linux)</p>

### Run 
<p align="center">(make sure to be in dir back-end)</p>
<code>nodemon server.js</code><br>
Now check <a href="http://localhost:8000/">http://localhost:8000/</a>in browser

## Back-end Technology

- Developer dependencies Used
    - Nodemon : so that we don't need to restart node runtime (basically a hot-reload for back-end)
- Npm Packages Used
    - Express: The nodejs framework which eases the coding
    - CORS: Cross Origin Resource Anonymous
    - xlsx: to read and retrive xlsx excel data
/* 
 * The MIT License
 *
 * Copyright 2018 <%= author %> <<%= email %>>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

'use strict';

var teonet = require('teonet/teonet');
var logger = teonet.syslog('<%= name %>', module.filename);

/**
 * This application API commands
 */
var teoApi = {
    CMD_ECHO_ANSWER: 66
};

var _ke; // right pointer to ksnetEvMgrClass
var peers = Object.create(null);

// Application welcome message
console.log("<%= name_capitalize %> ver. <%= version %>, based on teonet ver. " + teonet.version());

// Start teonet module
teo_main();

/**
 * Teonet event callback
 *
 * Original C function parameters:
 * void roomEventCb(ksnetEvMgrClass *ke, ksnetEvMgrEvents event, void *data, size_t data_len, void *user_data)
 *
 * @param {pointer} ke Pointer to ksnetEvMgrClass, see the http://repo.ksproject.org/docs/teonet/structksnetEvMgrClass.html
 * @param {int} ev Teonet event number, see the http://repo.ksproject.org/docs/teonet/ev__mgr_8h.html#ad7b9bff24cb809ad64c305b3ec3a21fe
 * @param {pointer} data Binary or string (depended on event) data
 * @param {int} data_len Data length
 * @param {pointer} user_data Additional poiner to User data
 */
function teoEventCb(ke, ev, data, data_len, user_data) {
    var rd;

    switch (ev) {

        // EV_K_STARTED #0 Calls immediately after event manager starts
        case teonet.ev.EV_K_STARTED:
            _ke = ke;
            console.log('<%= name_capitalize %> started .... ');
            break;

        // EV_K_CONNECTED #3 New peer connected to host event
        case teonet.ev.EV_K_CONNECTED:
            rd = new teonet.packetData(data);
            console.log('Peer "' + rd.from + '" connected');
            peers[rd.from] = 0;
            break;

        // EV_K_DISCONNECTED #4 A peer was disconnected from host
        case teonet.ev.EV_K_DISCONNECTED:
            rd = new teonet.packetData(data);
            console.log('Peer "' + rd.from + '" disconnected'/*, arguments*/);

            delete peers[rd.from];
            break;

        // EV_K_TIMER #9 Timer event, seted by ksnetEvMgrSetCustomTimer
        case teonet.ev.EV_K_TIMER:
            break;

        // EV_K_RECEIVED #5 This host Received a data
        case teonet.ev.EV_K_RECEIVED:
            rd = new teonet.packetData(data);

            // Command    
            switch (rd.cmd) {
                case teoApi.CMD_ECHO_ANSWER:
                    peers[rd.from] = 0;
                    break;

                default:
                    break;
            }
            break;

        // EV_K_USER #11 User press A hotkey
        case teonet.ev.EV_K_USER:
            break;

        case teonet.ev.EV_K_STOPPED:
            break;

        default:
            break;
    }
}

/**
 * Initialize and start Teonet
 *
 * @returns {undefined}
 */
function teo_main() {

    // Initialize teonet event manager and Read configuration
    var ke = teonet.init(teoEventCb, 3);

    // Set application type
    teonet.setAppType(ke, "<%= peer %>");

    // Set application version
    teonet.setAppVersion(ke, '<%= version %>');

    // Start Timer event 
    teonet.setCustomTimer(ke, 5.000);

    // Start teonet
    teonet.run(ke, () => console.log('Bye!'));

    // Show exit message
    console.log("<%= name_capitalize %> application initialization finished ...");
}

﻿/*
 * Common dialogs
 * Author   : Mikhail Shiryaev
 * Created  : 2016
 * Modified : 2016
 */

/*
 * Requires external objects:
 * - scada.chart
 * - scada.cmd
 * - scada.eventAck
 */

// Rapid SCADA namespace
var scada = scada || {};

// Common dialogs object
scada.dialogs = {
    // Show chart web page
    showChart: function (viewID, cnlNums) {
        if (scada.chart && scada.chart.show) {
            scada.chart.show(viewID, cnlNums);
        }
    },

    // Show command dialog
    showCmd: function (viewID, ctrlCnlNum) {
        if (scada.cmd && scada.cmd.show) {
            scada.cmd.show(viewID, ctrlCnlNum);
        }
    },

    // Show event acknowledgement dialog
    showEventAck: function (viewID, year, month, day, evNum) {
        if (scada.eventAck && scada.eventAck.show) {
            scada.eventAck.show(viewID, year, month, day, evNum);
        }
    }
};
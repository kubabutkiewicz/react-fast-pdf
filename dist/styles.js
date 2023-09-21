"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles = {
    container: {
        width: '100%',
        height: '100%',
        /**
         * It's being used on Web/Desktop only to vertically center short PDFs,
         * while preventing the overflow of the top of long PDF files.
         */
        display: 'grid',
    },
    list: {
        overflowX: 'hidden',
        // There properties disable "focus" effect on list
        boxShadow: 'none',
        outline: 'none',
    },
};
exports.default = styles;

export default class HttpGetRequestUrlMaker {
    constructor(urlPrefix) {
        this._urlPrefix = urlPrefix;
        this._urlParametersArray = [];
    }

    addKeyAndBoolean(key, boolean) {
        if (!isVarNullOrUndefined(boolean)) {
            const urlPiece = key + '=' + boolean;
            this._urlParametersArray.push(urlPiece);
        }
    }

    addKeyAndStringForEncode(key, str) {
        if (!isVarNullOrUndefined(str) && str.trim() != '') {
            const encodedStr = encodeURI(str);
            const urlPiece = key + '=' + encodedStr;
            this._urlParametersArray.push(urlPiece);
        }
    }

    addKeyAndNumber(key, number) {
        if (!isVarNullOrUndefined(number)) {
            const urlPiece = key + '=' + number;
            this._urlParametersArray.push(urlPiece);
        }
    }

    addKeyAndArray(key, array) {
        if (!isVarNullOrUndefined(array) && array.length > 0) {
            let arrayUrlPiece = '';
            for (let i = 0; i < array.length; i++) {
                arrayUrlPiece = key + '=' + array[i];
                this._urlParametersArray.push(arrayUrlPiece);
            }
        }
    }

    addKeyAndDate(key, date) {
        this.addKeyAndString(key, date);
    }

    addQueryParam(str) {
        if (!isVarNullOrUndefined(str)) {
            this._urlParametersArray.push(str);
        }
    }

    addKeyAndString(key, str) {
        if (!isVarNullOrUndefined(str)) {
            const urlPiece = key + '=' + str;
            this._urlParametersArray.push(urlPiece);
        }
    }

    getURL() {
        return this._urlPrefix + '?' + this._urlParametersArray.join('&');
    }
}

const isVarNullOrUndefined = variable => {
    return variable === undefined || variable === null || variable === '';
};

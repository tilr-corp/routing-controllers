"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParam = void 0;
const index_1 = require("../index");
/**
 * Injects a request's query parameter value to the controller action parameter.
 * Must be applied on a controller action parameter.
 */
function QueryParam(name, options) {
    return function (object, methodName, index) {
        var _a;
        index_1.getMetadataArgsStorage().params.push({
            type: 'query',
            object: object,
            method: methodName,
            index: index,
            name: name,
            parse: options ? options.parse : false,
            required: options ? options.required : undefined,
            classTransform: options ? options.transform : undefined,
            explicitType: options ? options.type : undefined,
            validate: options ? options.validate : undefined,
            isArray: (_a = options === null || options === void 0 ? void 0 : options.isArray) !== null && _a !== void 0 ? _a : false,
        });
    };
}
exports.QueryParam = QueryParam;
//# sourceMappingURL=QueryParam.js.map
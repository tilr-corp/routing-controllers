/**
 * Action Parameter metadata.
 */
export class ParamMetadata {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(actionMetadata, args) {
        /**
         * Parameter target type's name in lowercase.
         */
        this.targetName = '';
        /**
         * Indicates if target type is an object.
         */
        this.isTargetObject = false;
        this.actionMetadata = actionMetadata;
        this.target = args.object.constructor;
        this.method = args.method;
        this.extraOptions = args.extraOptions;
        this.index = args.index;
        this.type = args.type;
        this.name = args.name;
        this.parse = args.parse;
        this.required = args.required;
        this.transform = args.transform;
        this.classTransform = args.classTransform;
        this.validate = args.validate;
        this.isArray = args.isArray;
        if (args.explicitType) {
            this.targetType = args.explicitType;
        }
        else {
            const ParamTypes = Reflect.getMetadata('design:paramtypes', args.object, args.method);
            if (typeof ParamTypes !== 'undefined') {
                this.targetType = ParamTypes[args.index];
            }
        }
        if (this.targetType) {
            if (this.targetType instanceof Function && this.targetType.name) {
                this.targetName = this.targetType.name.toLowerCase();
            }
            else if (typeof this.targetType === 'string') {
                this.targetName = this.targetType.toLowerCase();
            }
            this.isTargetObject = this.targetType instanceof Function || this.targetType.toLowerCase() === 'object';
        }
    }
}
//# sourceMappingURL=ParamMetadata.js.map
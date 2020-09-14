/**
 * Helper class for mixins, which requires data or methods
 * which are only available during runtime
 */
export default class HelperMixin {
    /**
     * Represents the data container in the mixin
     * @type {{
     *     data key: data value
     * }}
     */
    data = {}

    /**
     * Represents the methods container in the mixin
     * @type {{
     *     method key: function definition
     * }}
     */
    methods = {}

    /**
     * Constructor in which you could pass a Map with
     * multiple data or method items
     * @param data
     * @param methods
     */
    constructor (data = null, methods = null) {
      this.addMultipleData(data)
      this.addMultipleMethods(methods)
    }

    /**
     * Add a single data item
     * @param key
     * @param value
     */
    addData = (key, value) => {
      this.data[key] = value
    }

    /**
     * Add multiple data items
     * @param data: Map
     */
    addMultipleData = (data) => {
      if (data && data instanceof Map) {
        data.forEach((value, key) => {
          this.addData(key, value)
        })
      }
    }

    /**
     * Add a single method item
     * @param key
     * @param value
     */
    addMethod = (key, value) => {
      this.methods[key] = value
    }

    /**
     * Add multiple method items
     * @param methods
     */
    addMultipleMethods = (methods) => {
      if (methods && methods instanceof Map) {
        methods.forEach((value, key) => {
          this.addMethod(key, value)
        })
      }
    }

    /**
     * Get the class as valid mixin to use with
     * Vue.mixin(helperMixinInstance.getMixin())
     * @returns {{data(): {data, key: HelperMixin.data, value}, methods: {method, key: Function, definition}}}
     */
    getMixin = () => {
      const that = this

      return {
        data () {
          return that.data
        },
        methods: this.methods
      }
    }
}

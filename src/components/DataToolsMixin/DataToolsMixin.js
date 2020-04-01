/* 
_.get(object, path, [defaultValue])
object (Object): The object to query.
path (Array|string): The path of the property to get.
[defaultValue] (*): The value returned for undefined resolved values.

Example
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.get(object, 'a[0].b.c');
// => 3
 
_.get(object, ['a', '0', 'b', 'c']);
// => 3
 
_.get(object, 'a.b.c', 'default');
// => 'default'
*/
import {cloneDeep, get, has} from "lodash"

export const DataToolsMixin = {
  methods: {

    /**
     * Will return the result or undefined
     */
    
    dataGet(string) {
      let result = get(this, string);
      return result
    },
    dataHas(string) {
      return has(this, string);
      
    },
    dataCount(string) {
        let value =  get(this, string);

        if( this.dataType(value) === 'array' ){
          return value.length;
        }

        if( this.dataType(value) === 'object' ){
          return Object.keys(value).length;
        }

        if( this.dataType(value) === 'string' ){
          return value.length;
        }

        return 0;
      
    },
    dataClone(value) {
      return  cloneDeep(value)
    },

    dataType(value){
        if( toString.call(value) === '[object Array]' ){
          return 'array';
        }
        else if(  value === true || value === false || toString.call(value) === '[object Boolean]' ){
            return 'boolean';
        }
        else if( toString.call(value) === '[object Date]' ){
            return 'date';
        }
        else if( value === null ){
            return 'null';
        }
        else if( Object(value) === value ){
            return 'object';
        }
        else if( toString.call(value) === '[object String]' ){
            return 'string';
        }
        else if( value === void 0 ){
            return 'undefined';
        }
        else if( Number.isFinite(value) && toString.call(value) === '[object Number]' ){
            return 'number';
        }
    },

    /** 
     * It will itterate over an array, and return an array with objects that fits the criteria given.
     * 
     * Example: dataWhere('states.items', 'id', 2)
      */
    dataWhere(nestedString, key, value){
        // nestedString: this is the nested object
        let arr = this.dataGet(nestedString)
        if( this.dataType(arr) === 'array' && this.dataType(key) === 'string' ){
          let items = arr.filter(element => element[key] === value);
          if( items !== undefined ){
            return items;
          }
        }
      return null
    },

    /** 
     * It will itterate over an array, and return the first object that fits the criteria given.
     * 
     * Example: dataFind('states.items', 'id', 2)
      */
    dataFind(nestedString, key, value){
        // nestedString: this is the nested object
        let arr = this.dataGet(nestedString)
        if( this.dataType(arr) === 'array' && this.dataType(key) === 'string' ){
          let item = arr.find(element => element[key] === value);
          if( item !== undefined ){
            return item;
          }
        }
      return null
    },

    /** 
     * It will itterate over an array, and return the first object that fits the criteria given.
     * 
     * Example: dataFor('states.items', item => item['male'] === true) 
      */
    dataFor(nestedString, callbackFn){
        // nestedString: this is the nested object
        let arr = this.dataGet(nestedString)
        if( this.dataType(arr) === 'array' ){
          let items = arr.filter(callbackFn);
          if( items !== undefined ){
            return items;
          }
        }
      return null
    },

  }//methods
   
}
try {
    Object.defineProperty({}, 'a', {value: 0});
}
catch(err) {
    // failed: so we're in IE8
    (function() {
        var defineProperty = Object.defineProperty;
        Object.defineProperty = function (object, property, descriptor) {
            delete descriptor.configurable;
            delete descriptor.enumerable;
            delete descriptor.writable;
            try {
                return defineProperty(object, property, descriptor);
            }
            catch(err) {
                object[property] = descriptor.value;
            }
        };
    }());
}

Object.defineProperties || (Object.defineProperties=function defineProperties(object, descriptors) {
    var property;
    for (property in descriptors) {
        Object.defineProperty(object, property, descriptors[property]);
    }
    return object;
});

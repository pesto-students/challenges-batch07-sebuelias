const deepCopyObject = (objToCopy, copyDescriptors = false) => {
  if (objToCopy === null || typeof objToCopy !== 'object') {
    return objToCopy;
  }
  const clone = {};
  for (const key in objToCopy) {
    /*  If it is a sub object we recurse so we can create a new object and keep going */
    if (typeof objToCopy[key] === 'object' && objToCopy[key] !== null) {
      clone[key] = deepCopyObject(objToCopy[key]);
    } else {
      /* If not a sub object, we copy that value to exact key pair in new object */
      clone[key] = objToCopy[key];
      /* If copyDescriptors flag is on then we copy the property Descriptors after copying the value
      because, if readonly property is there, we wont be able to copy in  */
      if (copyDescriptors) {
        Object.defineProperty(
          clone,
          key,
          Object.getOwnPropertyDescriptor(objToCopy, key),
        );
      }
    }
  }
  return clone;
};

export { deepCopyObject };

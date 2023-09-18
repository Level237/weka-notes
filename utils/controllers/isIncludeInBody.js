

const isIncludeInBody=(allowedKey,bodyObject)=>{
    const keysBody=Object.keys(bodyObject)

    const isValidated=keysBody.every((key)=>allowedKey.includes(key))

    return isValidated;
}

module.exports=isIncludeInBody
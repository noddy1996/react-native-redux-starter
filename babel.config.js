module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    [
        "module-resolver", 
        { 
            "root": ['./app'],
            "extensions": ['.js', '.json','.ts','.tsx'],

            "cwd": "babelrc",                
            "alias": { 
                 "Components": "./app/components", 
                 "Redux": "./app/redux",
                 "Utils": "./app/utils"    
            }
        },
        "@babel/plugin-syntax-dynamic-import" 
    ]
],
};

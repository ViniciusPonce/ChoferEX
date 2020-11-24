import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class Search extends Component {
    render() {
        return <GooglePlacesAutocomplete
            placeholder="Para onde Vamos?"
            placeholderTextColor="#333"
            onPress={() => { }}
            query={{
                key: 'AIzaSyAHZJsxlZbX3r2cc9dlYB9994K0f8fBJxY',
                language: 'pt'
            }}
            textInputProps={{
                autoCapitalize: "none",
                autoCorrect: false
            }}
            fetchDetails
            enablePoweredByContainer={false}
            styles={{
                container: {
                    position: "absolute",
                    top: 40,
                    width: "100%",
                    top: 100

                },
                textInputContainer: {
                    flex: 1,
                    backgroundColor: "transparent",
                    height: 54,
                    marginHorizontal: 20,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                },
                textInput: {
                    height: 54,
                    margin: 0,
                    borderRadius: 50,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    elevation: 5,
                    borderWidth: 1,
                    borderColor: "#DDD",
                    fontSize: 18,

                },
                listView: {
                    borderWidth: 1,
                    borderColor: "#DDD",
                    backgroundColor: "#FFF",
                    marginHorizontal: 20,
                    elevation: 5,
                    marginTop: 10

                },
                description: {
                    fontSize: 16,
                },
                row: {
                    padding: 20,
                    height: 58
                }
            }
            }
        />;
    }
}


export const response1 = {
    "openapi":"3.0.1",
    "info":{
        "title":"OpenAPI definition",
        "version":"v0"
    },
    "servers":[
        {
            "url":"http://localhost:8080",
            "description":"Generated server url"
        }
    ],
    "paths":{
        "/item/products":{
            "get":{
                "operationId":"getProducts",
                "responses":{
                    "200":{
                        "description":"default response",
                        "content":{
                            "*/*":{
                                "schema":{
                                    "type":"array",
                                    "items":{
                                        "type":"object",
                                        "additionalProperties":{
                                            "type":"object"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/v2/application.wadl":{
            "get":{
                "operationId":"generateWadl",
                "responses":{
                    "200":{
                        "description":"default response",
                        "content":{
                            "application/xml":{
                                "schema":{
                                    "$ref":"#/components/schemas/Application"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/categories/hello":{
            "get":{
                "summary":"Hello World api endpoint example",
                "description":"This api called hello returns an id from the token that receive",
                "operationId":"getHello",
                "parameters":[
                    {
                        "name":"Authorization",
                        "in":"header",
                        "required":true,
                        "schema":{
                            "type":"string"
                        }
                    }
                ],
                "responses":{
                    "200":{
                        "description":"successful operation",
                        "content":{
                            "*/*":{
                                "schema":{
                                    "type":"string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/public/login":{
            "post":{
                "operationId":"loginUser",
                "requestBody":{
                    "content":{
                        "*/*":{
                            "schema":{
                                "type":"string"
                            }
                        }
                    }
                },
                "responses":{
                    "200":{
                        "description":"default response",
                        "content":{
                            "*/*":{
                                "schema":{
                                    "type":"object",
                                    "additionalProperties":{
                                        "type":"string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/categories/main/categories":{
            "get":{
                "operationId":"getMainCategories",
                "responses":{
                    "200":{
                        "description":"default response",
                        "content":{
                            "*/*":{
                                "schema":{
                                    "type":"array",
                                    "items":{
                                        "type":"object",
                                        "additionalProperties":{
                                            "type":"object"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/item/product/{product_id}/wishlist":{
            "post":{
                "operationId":"addToWishlist",
                "parameters":[
                    {
                        "name":"Authorization",
                        "in":"header",
                        "required":true,
                        "schema":{
                            "type":"string"
                        }
                    },
                    {
                        "name":"product_id",
                        "in":"path",
                        "required":true,
                        "schema":{
                            "type":"integer",
                            "format":"int32"
                        }
                    }
                ],
                "responses":{
                    "200":{
                        "description":"default response",
                        "content":{
                            "*/*":{
                                "schema":{
                                    "type":"integer",
                                    "format":"int32"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/categories/tree/categories":{
            "get":{
                "operationId":"getCategories",
                "responses":{
                    "200":{
                        "description":"default response",
                        "content":{
                            "*/*":{
                                "schema":{
                                    "type":"array",
                                    "items":{
                                        "type":"object",
                                        "additionalProperties":{
                                            "type":"object"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/public/tokensignin":{
            "get":{
                "operationId":"tokenSignIn",
                "parameters":[
                    {
                        "name":"tokenId",
                        "in":"path",
                        "required":true,
                        "schema":{
                            "type":"string"
                        }
                    }
                ],
                "responses":{
                    "200":{
                        "description":"default response",
                        "content":{
                            "*/*":{
                                "schema":{
                                    "type":"string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/item/product/{product_id}":{
            "get":{
                "operationId":"getProduct",
                "parameters":[
                    {
                        "name":"product_id",
                        "in":"path",
                        "required":true,
                        "schema":{
                            "type":"integer",
                            "format":"int32"
                        }
                    }
                ],
                "responses":{
                    "200":{
                        "description":"default response",
                        "content":{
                            "*/*":{
                                "schema":{
                                    "type":"object",
                                    "additionalProperties":{
                                        "type":"object"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/public/register":{
            "post":{
                "operationId":"registerUser",
                "requestBody":{
                    "content":{
                        "*/*":{
                            "schema":{
                                "type":"string"
                            }
                        }
                    }
                },
                "responses":{
                    "200":{
                        "description":"default response",
                        "content":{
                            "*/*":{
                                "schema":{
                                    "type":"object",
                                    "additionalProperties":{
                                        "type":"string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/item/product":{
            "post":{
                "operationId":"createProduct",
                "parameters":[
                    {
                        "name":"Authorization",
                        "in":"header",
                        "required":true,
                        "schema":{
                            "type":"string"
                        }
                    }
                ],
                "requestBody":{
                    "content":{
                        "*/*":{
                            "schema":{
                                "type":"string"
                            }
                        }
                    }
                },
                "responses":{
                    "200":{
                        "description":"default response",
                        "content":{
                            "*/*":{
                                "schema":{
                                    "type":"string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/item/search/products/{product}":{
            "get":{
                "operationId":"searchProducts",
                "parameters":[
                    {
                        "name":"product",
                        "in":"path",
                        "required":true,
                        "schema":{
                            "type":"string"
                        }
                    }
                ],
                "responses":{
                    "200":{
                        "description":"default response",
                        "content":{
                            "*/*":{
                                "schema":{
                                    "type":"array",
                                    "items":{
                                        "type":"object",
                                        "additionalProperties":{
                                            "type":"object"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "components":{
        "schemas":{
            "Application":{
                "type":"object",
                "properties":{
                    "doc":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Doc"
                        }
                    },
                    "grammars":{
                        "$ref":"#/components/schemas/Grammars"
                    },
                    "resources":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Resources"
                        }
                    },
                    "resourceTypeOrMethodOrRepresentation":{
                        "type":"array",
                        "items":{
                            "type":"object"
                        }
                    },
                    "any":{
                        "type":"array",
                        "items":{
                            "type":"object"
                        }
                    },
                    "sourceLocation":{
                        "$ref":"#/components/schemas/Locator"
                    }
                },
                "xml":{
                    "name":"application"
                }
            },
            "Doc":{
                "type":"object",
                "properties":{
                    "content":{
                        "type":"array",
                        "items":{
                            "type":"object"
                        }
                    },
                    "title":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "lang":{
                        "type":"string",
                        "xml":{
                            "namespace":"http://www.w3.org/XML/1998/namespace",
                            "attribute":true
                        }
                    },
                    "otherAttributes":{
                        "type":"object",
                        "additionalProperties":{
                            "type":"string"
                        }
                    },
                    "sourceLocation":{
                        "$ref":"#/components/schemas/Locator"
                    }
                },
                "xml":{
                    "name":"doc"
                }
            },
            "Grammars":{
                "type":"object",
                "properties":{
                    "doc":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Doc"
                        }
                    },
                    "include":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Include"
                        }
                    },
                    "any":{
                        "type":"array",
                        "items":{
                            "type":"object"
                        }
                    },
                    "sourceLocation":{
                        "$ref":"#/components/schemas/Locator"
                    }
                },
                "xml":{
                    "name":"grammars"
                }
            },
            "Include":{
                "type":"object",
                "properties":{
                    "doc":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Doc"
                        }
                    },
                    "href":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "otherAttributes":{
                        "type":"object",
                        "additionalProperties":{
                            "type":"string"
                        }
                    },
                    "sourceLocation":{
                        "$ref":"#/components/schemas/Locator"
                    }
                },
                "xml":{
                    "name":"include"
                }
            },
            "Link":{
                "type":"object",
                "properties":{
                    "doc":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Doc"
                        }
                    },
                    "any":{
                        "type":"array",
                        "items":{
                            "type":"object"
                        }
                    },
                    "resourceType":{
                        "type":"string",
                        "xml":{
                            "name":"resource_type",
                            "attribute":true
                        }
                    },
                    "rel":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "rev":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "otherAttributes":{
                        "type":"object",
                        "additionalProperties":{
                            "type":"string"
                        }
                    },
                    "sourceLocation":{
                        "$ref":"#/components/schemas/Locator"
                    }
                },
                "xml":{
                    "name":"link"
                }
            },
            "Locator":{
                "type":"object",
                "properties":{
                    "lineNumber":{
                        "type":"integer",
                        "format":"int32"
                    },
                    "publicId":{
                        "type":"string"
                    },
                    "systemId":{
                        "type":"string"
                    },
                    "columnNumber":{
                        "type":"integer",
                        "format":"int32"
                    }
                }
            },
            "Option":{
                "type":"object",
                "properties":{
                    "doc":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Doc"
                        }
                    },
                    "any":{
                        "type":"array",
                        "items":{
                            "type":"object"
                        }
                    },
                    "value":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "mediaType":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "otherAttributes":{
                        "type":"object",
                        "additionalProperties":{
                            "type":"string"
                        }
                    },
                    "sourceLocation":{
                        "$ref":"#/components/schemas/Locator"
                    }
                },
                "xml":{
                    "name":"option"
                }
            },
            "Param":{
                "type":"object",
                "properties":{
                    "doc":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Doc"
                        }
                    },
                    "option":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Option"
                        }
                    },
                    "link":{
                        "$ref":"#/components/schemas/Link"
                    },
                    "any":{
                        "type":"array",
                        "items":{
                            "type":"object"
                        }
                    },
                    "href":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "name":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "style":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        },
                        "enum":[
                            "PLAIN",
                            "QUERY",
                            "MATRIX",
                            "HEADER",
                            "TEMPLATE"
                        ]
                    },
                    "id":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "type":{
                        "type":"object",
                        "properties":{
                            "namespaceURI":{
                                "type":"string"
                            },
                            "localPart":{
                                "type":"string"
                            },
                            "prefix":{
                                "type":"string"
                            }
                        },
                        "xml":{
                            "attribute":true
                        }
                    },
                    "required":{
                        "type":"boolean",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "repeating":{
                        "type":"boolean",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "fixed":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "path":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "otherAttributes":{
                        "type":"object",
                        "additionalProperties":{
                            "type":"string"
                        }
                    },
                    "default":{
                        "type":"string"
                    },
                    "sourceLocation":{
                        "$ref":"#/components/schemas/Locator"
                    }
                },
                "xml":{
                    "name":"param"
                }
            },
            "Resource":{
                "type":"object",
                "properties":{
                    "doc":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Doc"
                        }
                    },
                    "param":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Param"
                        }
                    },
                    "methodOrResource":{
                        "type":"array",
                        "items":{
                            "type":"object"
                        }
                    },
                    "any":{
                        "type":"array",
                        "items":{
                            "type":"object"
                        }
                    },
                    "id":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "type":{
                        "type":"array",
                        "items":{
                            "type":"string"
                        }
                    },
                    "queryType":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "path":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "otherAttributes":{
                        "type":"object",
                        "additionalProperties":{
                            "type":"string"
                        }
                    },
                    "sourceLocation":{
                        "$ref":"#/components/schemas/Locator"
                    }
                },
                "xml":{
                    "name":"resource"
                }
            },
            "Resources":{
                "required":[
                    "resource"
                ],
                "type":"object",
                "properties":{
                    "doc":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Doc"
                        }
                    },
                    "resource":{
                        "type":"array",
                        "items":{
                            "$ref":"#/components/schemas/Resource"
                        }
                    },
                    "any":{
                        "type":"array",
                        "items":{
                            "type":"object"
                        }
                    },
                    "base":{
                        "type":"string",
                        "xml":{
                            "attribute":true
                        }
                    },
                    "otherAttributes":{
                        "type":"object",
                        "additionalProperties":{
                            "type":"string"
                        }
                    },
                    "sourceLocation":{
                        "$ref":"#/components/schemas/Locator"
                    }
                },
                "xml":{
                    "name":"resources"
                }
            }
        }
    }
}
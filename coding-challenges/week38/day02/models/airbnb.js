const mongoose = require("mongoose")


const airbnbSchema = new mongoose.Schema(

    {
        "_id": {
          "type": "object",
          "properties": {
            "$oid": {
              "type": "string"
            }
          },
          "required": [
            "$oid"
          ]
        },
        "listing_url": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "space": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "neighborhood_overview": {
          "type": "string"
        },
        "notes": {
          "type": "string"
        },
        "transit": {
          "type": "string"
        },
        "access": {
          "type": "string"
        },
        "interaction": {
          "type": "string"
        },
        "house_rules": {
          "type": "string"
        },
        "property_type": {
          "type": "string"
        },
        "room_type": {
          "type": "string"
        },
        "bed_type": {
          "type": "string"
        },
        "minimum_nights": {
          "type": "string"
        },
        "maximum_nights": {
          "type": "string"
        },
        "cancellation_policy": {
          "type": "string"
        },
        "last_scraped": {
          "type": "object",
          "properties": {
            "$date": {
              "type": "object",
              "properties": {
                "$numberLong": {
                  "type": "string"
                }
              },
              "required": [
                "$numberLong"
              ]
            }
          },
          "required": [
            "$date"
          ]
        },
        "calendar_last_scraped": {
          "type": "object",
          "properties": {
            "$date": {
              "type": "object",
              "properties": {
                "$numberLong": {
                  "type": "string"
                }
              },
              "required": [
                "$numberLong"
              ]
            }
          },
          "required": [
            "$date"
          ]
        },
        "first_review": {
          "type": "object",
          "properties": {
            "$date": {
              "type": "object",
              "properties": {
                "$numberLong": {
                  "type": "string"
                }
              },
              "required": [
                "$numberLong"
              ]
            }
          },
          "required": [
            "$date"
          ]
        },
        "last_review": {
          "type": "object",
          "properties": {
            "$date": {
              "type": "object",
              "properties": {
                "$numberLong": {
                  "type": "string"
                }
              },
              "required": [
                "$numberLong"
              ]
            }
          },
          "required": [
            "$date"
          ]
        },
        "accommodates": {
          "type": "object",
          "properties": {
            "$numberInt": {
              "type": "string"
            }
          },
          "required": [
            "$numberInt"
          ]
        },
        "bedrooms": {
          "type": "object",
          "properties": {
            "$numberInt": {
              "type": "string"
            }
          },
          "required": [
            "$numberInt"
          ]
        },
        "beds": {
          "type": "object",
          "properties": {
            "$numberInt": {
              "type": "string"
            }
          },
          "required": [
            "$numberInt"
          ]
        },
        "number_of_reviews": {
          "type": "object",
          "properties": {
            "$numberInt": {
              "type": "string"
            }
          },
          "required": [
            "$numberInt"
          ]
        },
        "bathrooms": {
          "type": "object",
          "properties": {
            "$numberDecimal": {
              "type": "string"
            }
          },
          "required": [
            "$numberDecimal"
          ]
        },
        "amenities": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "price": {
          "type": "object",
          "properties": {
            "$numberDecimal": {
              "type": "string"
            }
          },
          "required": [
            "$numberDecimal"
          ]
        },
        "security_deposit": {
          "type": "object",
          "properties": {
            "$numberDecimal": {
              "type": "string"
            }
          },
          "required": [
            "$numberDecimal"
          ]
        },
        "cleaning_fee": {
          "type": "object",
          "properties": {
            "$numberDecimal": {
              "type": "string"
            }
          },
          "required": [
            "$numberDecimal"
          ]
        },
        "extra_people": {
          "type": "object",
          "properties": {
            "$numberDecimal": {
              "type": "string"
            }
          },
          "required": [
            "$numberDecimal"
          ]
        },
        "guests_included": {
          "type": "object",
          "properties": {
            "$numberDecimal": {
              "type": "string"
            }
          },
          "required": [
            "$numberDecimal"
          ]
        },
        "images": {
          "type": "object",
          "properties": {
            "thumbnail_url": {
              "type": "string"
            },
            "medium_url": {
              "type": "string"
            },
            "picture_url": {
              "type": "string"
            },
            "xl_picture_url": {
              "type": "string"
            }
          },
          "required": [
            "thumbnail_url",
            "medium_url",
            "picture_url",
            "xl_picture_url"
          ]
        },
        "host": {
          "type": "object",
          "properties": {
            "host_id": {
              "type": "string"
            },
            "host_url": {
              "type": "string"
            },
            "host_name": {
              "type": "string"
            },
            "host_location": {
              "type": "string"
            },
            "host_about": {
              "type": "string"
            },
            "host_response_time": {
              "type": "string"
            },
            "host_thumbnail_url": {
              "type": "string"
            },
            "host_picture_url": {
              "type": "string"
            },
            "host_neighbourhood": {
              "type": "string"
            },
            "host_response_rate": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            },
            "host_is_superhost": {
              "type": "boolean"
            },
            "host_has_profile_pic": {
              "type": "boolean"
            },
            "host_identity_verified": {
              "type": "boolean"
            },
            "host_listings_count": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            },
            "host_total_listings_count": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            },
            "host_verifications": {
              "type": "array",
              "items": [
                {
                  "type": "string"
                },
                {
                  "type": "string"
                },
                {
                  "type": "string"
                },
                {
                  "type": "string"
                },
                {
                  "type": "string"
                },
                {
                  "type": "string"
                }
              ]
            }
          },
          "required": [
            "host_id",
            "host_url",
            "host_name",
            "host_location",
            "host_about",
            "host_response_time",
            "host_thumbnail_url",
            "host_picture_url",
            "host_neighbourhood",
            "host_response_rate",
            "host_is_superhost",
            "host_has_profile_pic",
            "host_identity_verified",
            "host_listings_count",
            "host_total_listings_count",
            "host_verifications"
          ]
        },
        "address": {
          "type": "object",
          "properties": {
            "street": {
              "type": "string"
            },
            "suburb": {
              "type": "string"
            },
            "government_area": {
              "type": "string"
            },
            "market": {
              "type": "string"
            },
            "country": {
              "type": "string"
            },
            "country_code": {
              "type": "string"
            },
            "location": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string"
                },
                "coordinates": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "$numberDouble": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberDouble"
                      ]
                    },
                    {
                      "type": "object",
                      "properties": {
                        "$numberDouble": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberDouble"
                      ]
                    }
                  ]
                },
                "is_location_exact": {
                  "type": "boolean"
                }
              },
              "required": [
                "type",
                "coordinates",
                "is_location_exact"
              ]
            }
          },
          "required": [
            "street",
            "suburb",
            "government_area",
            "market",
            "country",
            "country_code",
            "location"
          ]
        },
        "availability": {
          "type": "object",
          "properties": {
            "availability_30": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            },
            "availability_60": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            },
            "availability_90": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            },
            "availability_365": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            }
          },
          "required": [
            "availability_30",
            "availability_60",
            "availability_90",
            "availability_365"
          ]
        },
        "review_scores": {
          "type": "object",
          "properties": {
            "review_scores_accuracy": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            },
            "review_scores_cleanliness": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            },
            "review_scores_checkin": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            },
            "review_scores_communication": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            },
            "review_scores_location": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            },
            "review_scores_value": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            },
            "review_scores_rating": {
              "type": "object",
              "properties": {
                "$numberInt": {
                  "type": "string"
                }
              },
              "required": [
                "$numberInt"
              ]
            }
          },
          "required": [
            "review_scores_accuracy",
            "review_scores_cleanliness",
            "review_scores_checkin",
            "review_scores_communication",
            "review_scores_location",
            "review_scores_value",
            "review_scores_rating"
          ]
        },
        "reviews": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            },
            {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "date": {
                  "type": "object",
                  "properties": {
                    "$date": {
                      "type": "object",
                      "properties": {
                        "$numberLong": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "$numberLong"
                      ]
                    }
                  },
                  "required": [
                    "$date"
                  ]
                },
                "listing_id": {
                  "type": "string"
                },
                "reviewer_id": {
                  "type": "string"
                },
                "reviewer_name": {
                  "type": "string"
                },
                "comments": {
                  "type": "string"
                }
              },
              "required": [
                "_id",
                "date",
                "listing_id",
                "reviewer_id",
                "reviewer_name",
                "comments"
              ]
            }
          ]
        }
      ,
      "required": [
        "_id",
        "listing_url",
        "name",
        "summary",
        "space",
        "description",
        "neighborhood_overview",
        "notes",
        "transit",
        "access",
        "interaction",
        "house_rules",
        "property_type",
        "room_type",
        "bed_type",
        "minimum_nights",
        "maximum_nights",
        "cancellation_policy",
        "last_scraped",
        "calendar_last_scraped",
        "first_review",
        "last_review",
        "accommodates",
        "bedrooms",
        "beds",
        "number_of_reviews",
        "bathrooms",
        "amenities",
        "price",
        "security_deposit",
        "cleaning_fee",
        "extra_people",
        "guests_included",
        "images",
        "host",
        "address",
        "availability",
        "review_scores",
        "reviews"
      ]
    
    }
    )

    
    const Airbnb = mongoose.model("listingsAndReview",airbnbSchema);

    module.exports = {Airbnb}
    
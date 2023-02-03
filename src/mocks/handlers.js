import {rest} from 'msw'

export const handlers =[
    rest.get('https://api.spotify.com/v1/search',(req,res,ctx)=>{
        return res(ctx.status(200),ctx.json({
            "artists" : {
              "href" : "https://api.spotify.com/v1/search?query=arjit&type=artist&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=20",
              "items" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw"
                },
                "followers" : {
                  "href" : null,
                  "total" : 68850978
                },
                "genres" : [ "desi pop", "filmi", "modern bollywood" ],
                "href" : "https://api.spotify.com/v1/artists/4YRxDV8wJFPHPTeXepOstw",
                "id" : "4YRxDV8wJFPHPTeXepOstw",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab676161000051740261696c5df3be99da6ed3f3",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f1780261696c5df3be99da6ed3f3",
                  "width" : 160
                } ],
                "name" : "Arijit Singh",
                "popularity" : 90,
                "type" : "artist",
                "uri" : "spotify:artist:4YRxDV8wJFPHPTeXepOstw"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2oSONSC9zQ4UonDKnLqksx"
                },
                "followers" : {
                  "href" : null,
                  "total" : 12797635
                },
                "genres" : [ "classic pakistani pop", "desi pop", "filmi", "modern bollywood", "sufi" ],
                "href" : "https://api.spotify.com/v1/artists/2oSONSC9zQ4UonDKnLqksx",
                "id" : "2oSONSC9zQ4UonDKnLqksx",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab67616100005174c40600e02356cc86f0debe84",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f178c40600e02356cc86f0debe84",
                  "width" : 160
                } ],
                "name" : "Atif Aslam",
                "popularity" : 78,
                "type" : "artist",
                "uri" : "spotify:artist:2oSONSC9zQ4UonDKnLqksx"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1mYsTxnqsietFxj1OgoGbG"
                },
                "followers" : {
                  "href" : null,
                  "total" : 29406562
                },
                "genres" : [ "filmi", "modern bollywood" ],
                "href" : "https://api.spotify.com/v1/artists/1mYsTxnqsietFxj1OgoGbG",
                "id" : "1mYsTxnqsietFxj1OgoGbG",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5ebb19af0ea736c6228d6eb539c",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f178b19af0ea736c6228d6eb539c",
                  "width" : 160
                } ],
                "name" : "A.R. Rahman",
                "popularity" : 81,
                "type" : "artist",
                "uri" : "spotify:artist:1mYsTxnqsietFxj1OgoGbG"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1tqysapcCh1lWEAc9dIFpa"
                },
                "followers" : {
                  "href" : null,
                  "total" : 8661389
                },
                "genres" : [ "desi pop", "filmi", "hare krishna", "modern bollywood" ],
                "href" : "https://api.spotify.com/v1/artists/1tqysapcCh1lWEAc9dIFpa",
                "id" : "1tqysapcCh1lWEAc9dIFpa",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5eb1a9d9cfc59b01338c0786953",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab676161000051741a9d9cfc59b01338c0786953",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f1781a9d9cfc59b01338c0786953",
                  "width" : 160
                } ],
                "name" : "Jubin Nautiyal",
                "popularity" : 79,
                "type" : "artist",
                "uri" : "spotify:artist:1tqysapcCh1lWEAc9dIFpa"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/4IKVDbCSBTxBeAsMKjAuTs"
                },
                "followers" : {
                  "href" : null,
                  "total" : 16769506
                },
                "genres" : [ "desi pop", "filmi", "modern bollywood" ],
                "href" : "https://api.spotify.com/v1/artists/4IKVDbCSBTxBeAsMKjAuTs",
                "id" : "4IKVDbCSBTxBeAsMKjAuTs",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5ebfc11e518d6fb19b531db9ead",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab67616100005174fc11e518d6fb19b531db9ead",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f178fc11e518d6fb19b531db9ead",
                  "width" : 160
                } ],
                "name" : "Armaan Malik",
                "popularity" : 76,
                "type" : "artist",
                "uri" : "spotify:artist:4IKVDbCSBTxBeAsMKjAuTs"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1wRPtKGflJrBx9BmLsSwlU"
                },
                "followers" : {
                  "href" : null,
                  "total" : 11081058
                },
                "genres" : [ "filmi", "indian instrumental", "modern bollywood" ],
                "href" : "https://api.spotify.com/v1/artists/1wRPtKGflJrBx9BmLsSwlU",
                "id" : "1wRPtKGflJrBx9BmLsSwlU",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f178cb6926f44f620555ba444fca",
                  "width" : 160
                } ],
                "name" : "Pritam",
                "popularity" : 88,
                "type" : "artist",
                "uri" : "spotify:artist:1wRPtKGflJrBx9BmLsSwlU"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/70B80Lwx2sxti0M1Ng9e8K"
                },
                "followers" : {
                  "href" : null,
                  "total" : 8756400
                },
                "genres" : [ "chutney", "classic bollywood", "desi pop", "filmi" ],
                "href" : "https://api.spotify.com/v1/artists/70B80Lwx2sxti0M1Ng9e8K",
                "id" : "70B80Lwx2sxti0M1Ng9e8K",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5eb8de0e6e7e55d7773931ab7f4",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab676161000051748de0e6e7e55d7773931ab7f4",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f1788de0e6e7e55d7773931ab7f4",
                  "width" : 160
                } ],
                "name" : "Udit Narayan",
                "popularity" : 79,
                "type" : "artist",
                "uri" : "spotify:artist:70B80Lwx2sxti0M1Ng9e8K"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/09UmIX92EUH9hAK4bxvHx6"
                },
                "followers" : {
                  "href" : null,
                  "total" : 5032465
                },
                "genres" : [ "desi pop", "filmi", "modern bollywood", "sufi" ],
                "href" : "https://api.spotify.com/v1/artists/09UmIX92EUH9hAK4bxvHx6",
                "id" : "09UmIX92EUH9hAK4bxvHx6",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5eb632872204269d4b950c97731",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab67616100005174632872204269d4b950c97731",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f178632872204269d4b950c97731",
                  "width" : 160
                } ],
                "name" : "Mithoon",
                "popularity" : 72,
                "type" : "artist",
                "uri" : "spotify:artist:09UmIX92EUH9hAK4bxvHx6"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/3gBKY0y3dFFVRqicLnVZYz"
                },
                "followers" : {
                  "href" : null,
                  "total" : 8143563
                },
                "genres" : [ "classic bollywood", "desi pop", "filmi", "hare krishna", "modern bollywood" ],
                "href" : "https://api.spotify.com/v1/artists/3gBKY0y3dFFVRqicLnVZYz",
                "id" : "3gBKY0y3dFFVRqicLnVZYz",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5eb935b2dd507212bd72a71d7f9",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab67616100005174935b2dd507212bd72a71d7f9",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f178935b2dd507212bd72a71d7f9",
                  "width" : 160
                } ],
                "name" : "Alka Yagnik",
                "popularity" : 80,
                "type" : "artist",
                "uri" : "spotify:artist:3gBKY0y3dFFVRqicLnVZYz"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0KkW3YBJhwXPBLMGRIDn2V"
                },
                "followers" : {
                  "href" : null,
                  "total" : 5282
                },
                "genres" : [ ],
                "href" : "https://api.spotify.com/v1/artists/0KkW3YBJhwXPBLMGRIDn2V",
                "id" : "0KkW3YBJhwXPBLMGRIDn2V",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5eb745cd2e4e1e92331040f2eb2",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab67616100005174745cd2e4e1e92331040f2eb2",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f178745cd2e4e1e92331040f2eb2",
                  "width" : 160
                } ],
                "name" : "Arjit Singh",
                "popularity" : 22,
                "type" : "artist",
                "uri" : "spotify:artist:0KkW3YBJhwXPBLMGRIDn2V"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2EoJ4M59ia6ioM6Fmx7MxM"
                },
                "followers" : {
                  "href" : null,
                  "total" : 14505
                },
                "genres" : [ "desi pop", "modern bollywood" ],
                "href" : "https://api.spotify.com/v1/artists/2EoJ4M59ia6ioM6Fmx7MxM",
                "id" : "2EoJ4M59ia6ioM6Fmx7MxM",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab67616d0000b273045dabee2c45c497dc639750",
                  "width" : 640
                }, {
                  "height" : 300,
                  "url" : "https://i.scdn.co/image/ab67616d00001e02045dabee2c45c497dc639750",
                  "width" : 300
                }, {
                  "height" : 64,
                  "url" : "https://i.scdn.co/image/ab67616d00004851045dabee2c45c497dc639750",
                  "width" : 64
                } ],
                "name" : "Arijit",
                "popularity" : 45,
                "type" : "artist",
                "uri" : "spotify:artist:2EoJ4M59ia6ioM6Fmx7MxM"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2zvJLk0gTH7r7A5Q6X5Bq8"
                },
                "followers" : {
                  "href" : null,
                  "total" : 197477
                },
                "genres" : [ "desi pop", "modern bollywood" ],
                "href" : "https://api.spotify.com/v1/artists/2zvJLk0gTH7r7A5Q6X5Bq8",
                "id" : "2zvJLk0gTH7r7A5Q6X5Bq8",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5eb8a40587c51625baf4a070c29",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab676161000051748a40587c51625baf4a070c29",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f1788a40587c51625baf4a070c29",
                  "width" : 160
                } ],
                "name" : "Javed-Mohsin",
                "popularity" : 64,
                "type" : "artist",
                "uri" : "spotify:artist:2zvJLk0gTH7r7A5Q6X5Bq8"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2kkQthS9OLpK4UqNWYqoVl"
                },
                "followers" : {
                  "href" : null,
                  "total" : 837463
                },
                "genres" : [ "desi pop", "filmi", "modern bollywood" ],
                "href" : "https://api.spotify.com/v1/artists/2kkQthS9OLpK4UqNWYqoVl",
                "id" : "2kkQthS9OLpK4UqNWYqoVl",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5eb4071f043160cd787e6a483ce",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab676161000051744071f043160cd787e6a483ce",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f1784071f043160cd787e6a483ce",
                  "width" : 160
                } ],
                "name" : "Jeet Gannguli",
                "popularity" : 67,
                "type" : "artist",
                "uri" : "spotify:artist:2kkQthS9OLpK4UqNWYqoVl"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7krhVPk6Lfqrsv95Bc4FkG"
                },
                "followers" : {
                  "href" : null,
                  "total" : 3301
                },
                "genres" : [ ],
                "href" : "https://api.spotify.com/v1/artists/7krhVPk6Lfqrsv95Bc4FkG",
                "id" : "7krhVPk6Lfqrsv95Bc4FkG",
                "images" : [ ],
                "name" : "Arjit Singh, Ramya Behara",
                "popularity" : 27,
                "type" : "artist",
                "uri" : "spotify:artist:7krhVPk6Lfqrsv95Bc4FkG"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/56u9iTir9xQQfPXZY5FxQN"
                },
                "followers" : {
                  "href" : null,
                  "total" : 1798
                },
                "genres" : [ ],
                "href" : "https://api.spotify.com/v1/artists/56u9iTir9xQQfPXZY5FxQN",
                "id" : "56u9iTir9xQQfPXZY5FxQN",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab67616d0000b273b8dc4563038e2e4e9f3cbd09",
                  "width" : 640
                }, {
                  "height" : 300,
                  "url" : "https://i.scdn.co/image/ab67616d00001e02b8dc4563038e2e4e9f3cbd09",
                  "width" : 300
                }, {
                  "height" : 64,
                  "url" : "https://i.scdn.co/image/ab67616d00004851b8dc4563038e2e4e9f3cbd09",
                  "width" : 64
                } ],
                "name" : "Arjit",
                "popularity" : 1,
                "type" : "artist",
                "uri" : "spotify:artist:56u9iTir9xQQfPXZY5FxQN"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/64DvMieEUCdrYKmEIhDt8G"
                },
                "followers" : {
                  "href" : null,
                  "total" : 726365
                },
                "genres" : [ "punjabi pop" ],
                "href" : "https://api.spotify.com/v1/artists/64DvMieEUCdrYKmEIhDt8G",
                "id" : "64DvMieEUCdrYKmEIhDt8G",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab6761610000e5eb44aa5e0b6bf8cfc9837f3f55",
                  "width" : 640
                }, {
                  "height" : 320,
                  "url" : "https://i.scdn.co/image/ab6761610000517444aa5e0b6bf8cfc9837f3f55",
                  "width" : 320
                }, {
                  "height" : 160,
                  "url" : "https://i.scdn.co/image/ab6761610000f17844aa5e0b6bf8cfc9837f3f55",
                  "width" : 160
                } ],
                "name" : "Arjan Dhillon",
                "popularity" : 71,
                "type" : "artist",
                "uri" : "spotify:artist:64DvMieEUCdrYKmEIhDt8G"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/0eKJUH4oeUa0OFIIjbKzzj"
                },
                "followers" : {
                  "href" : null,
                  "total" : 172
                },
                "genres" : [ ],
                "href" : "https://api.spotify.com/v1/artists/0eKJUH4oeUa0OFIIjbKzzj",
                "id" : "0eKJUH4oeUa0OFIIjbKzzj",
                "images" : [ ],
                "name" : "Arjith",
                "popularity" : 4,
                "type" : "artist",
                "uri" : "spotify:artist:0eKJUH4oeUa0OFIIjbKzzj"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/7EBfv067H7dViRbeOVQqFv"
                },
                "followers" : {
                  "href" : null,
                  "total" : 77
                },
                "genres" : [ ],
                "href" : "https://api.spotify.com/v1/artists/7EBfv067H7dViRbeOVQqFv",
                "id" : "7EBfv067H7dViRbeOVQqFv",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab67616d0000b273ddb828b3407f3e5f5349c6c4",
                  "width" : 640
                }, {
                  "height" : 300,
                  "url" : "https://i.scdn.co/image/ab67616d00001e02ddb828b3407f3e5f5349c6c4",
                  "width" : 300
                }, {
                  "height" : 64,
                  "url" : "https://i.scdn.co/image/ab67616d00004851ddb828b3407f3e5f5349c6c4",
                  "width" : 64
                } ],
                "name" : "Arjit Shrivastava",
                "popularity" : 24,
                "type" : "artist",
                "uri" : "spotify:artist:7EBfv067H7dViRbeOVQqFv"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/2jEIuGkd6x0QhbZi6bxmjN"
                },
                "followers" : {
                  "href" : null,
                  "total" : 41
                },
                "genres" : [ ],
                "href" : "https://api.spotify.com/v1/artists/2jEIuGkd6x0QhbZi6bxmjN",
                "id" : "2jEIuGkd6x0QhbZi6bxmjN",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab67616d0000b273533ae30836cb6520aefe9793",
                  "width" : 640
                }, {
                  "height" : 300,
                  "url" : "https://i.scdn.co/image/ab67616d00001e02533ae30836cb6520aefe9793",
                  "width" : 300
                }, {
                  "height" : 64,
                  "url" : "https://i.scdn.co/image/ab67616d00004851533ae30836cb6520aefe9793",
                  "width" : 64
                } ],
                "name" : "Arjit Shrivastav",
                "popularity" : 2,
                "type" : "artist",
                "uri" : "spotify:artist:2jEIuGkd6x0QhbZi6bxmjN"
              }, {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/6vlqMWrJ5YkLU50P1feTXi"
                },
                "followers" : {
                  "href" : null,
                  "total" : 1
                },
                "genres" : [ ],
                "href" : "https://api.spotify.com/v1/artists/6vlqMWrJ5YkLU50P1feTXi",
                "id" : "6vlqMWrJ5YkLU50P1feTXi",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab67616d0000b2736602d0635a18859e5ecc5141",
                  "width" : 640
                }, {
                  "height" : 300,
                  "url" : "https://i.scdn.co/image/ab67616d00001e026602d0635a18859e5ecc5141",
                  "width" : 300
                }, {
                  "height" : 64,
                  "url" : "https://i.scdn.co/image/ab67616d000048516602d0635a18859e5ecc5141",
                  "width" : 64
                } ],
                "name" : "Arjit Gujar",
                "popularity" : 1,
                "type" : "artist",
                "uri" : "spotify:artist:6vlqMWrJ5YkLU50P1feTXi"
              } ],
              "limit" : 20,
              "next" : "https://api.spotify.com/v1/search?query=arjit&type=artist&locale=en-US%2Cen%3Bq%3D0.9&offset=20&limit=20",
              "offset" : 0,
              "previous" : null,
              "total" : 895
            }
          }))
    })
]
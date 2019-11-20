exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("addresses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("addresses").insert([
        { address: "5 Loeprich Court", member_id: 45, inspection_id: 53 },
        { address: "92 Graedel Place", member_id: 76, inspection_id: 13 },
        {
          address: "4058 Bayside Crossing",
          member_id: 113,
          inspection_id: 235
        },
        {
          address: "778 Pennsylvania Crossing",
          member_id: 275,
          inspection_id: 152
        },
        { address: "76 Reinke Center", member_id: 216, inspection_id: 167 },
        {
          address: "5093 Coolidge Parkway",
          member_id: 102,
          inspection_id: 103
        },
        { address: "05998 Spenser Way", member_id: 70, inspection_id: 26 },
        { address: "0 Paget Point", member_id: 263, inspection_id: 179 },
        { address: "09 Lunder Street", member_id: 124, inspection_id: 32 },
        { address: "1 Hagan Trail", member_id: 188, inspection_id: 21 },
        { address: "0971 Sommers Circle", member_id: 87, inspection_id: 211 },
        { address: "8738 Main Place", member_id: 78, inspection_id: 47 },
        { address: "4 Dexter Alley", member_id: 2, inspection_id: 35 },
        {
          address: "612 Monument Crossing",
          member_id: 102,
          inspection_id: 110
        },
        { address: "87542 Roth Court", member_id: 191, inspection_id: 275 },
        { address: "99 Leroy Pass", member_id: 19, inspection_id: 100 },
        { address: "58217 Sherman Pass", member_id: 233, inspection_id: 92 },
        { address: "71 Novick Park", member_id: 207, inspection_id: 190 },
        { address: "01 Jenna Terrace", member_id: 98, inspection_id: 266 },
        { address: "54683 Maywood Center", member_id: 25, inspection_id: 16 },
        { address: "419 Quincy Hill", member_id: 15, inspection_id: 62 },
        { address: "8 Loeprich Plaza", member_id: 249, inspection_id: 141 },
        { address: "02 Summit Hill", member_id: 59, inspection_id: 187 },
        {
          address: "4733 Eagle Crest Circle",
          member_id: 132,
          inspection_id: 201
        },
        {
          address: "4496 Holmberg Junction",
          member_id: 202,
          inspection_id: 240
        },
        { address: "0092 Artisan Parkway", member_id: 162, inspection_id: 40 },
        { address: "317 Caliangt Lane", member_id: 238, inspection_id: 125 },
        { address: "7 Dahle Parkway", member_id: 14, inspection_id: 150 },
        { address: "47363 Kinsman Point", member_id: 202, inspection_id: 250 },
        { address: "85 East Court", member_id: 1, inspection_id: 189 },
        { address: "9 Hermina Alley", member_id: 61, inspection_id: 87 },
        { address: "5985 Harbort Street", member_id: 27, inspection_id: 260 },
        { address: "1 Continental Way", member_id: 174, inspection_id: 178 },
        { address: "34180 Ohio Center", member_id: 206, inspection_id: 139 },
        { address: "2 Scofield Crossing", member_id: 94, inspection_id: 194 },
        { address: "052 Sunnyside Center", member_id: 183, inspection_id: 115 },
        { address: "3 Paget Parkway", member_id: 249, inspection_id: 116 },
        { address: "67934 Fulton Terrace", member_id: 68, inspection_id: 190 },
        { address: "2245 Hagan Pass", member_id: 45, inspection_id: 221 },
        { address: "138 Redwing Circle", member_id: 31, inspection_id: 68 },
        { address: "21 Farwell Crossing", member_id: 151, inspection_id: 217 },
        { address: "62 Bellgrove Place", member_id: 31, inspection_id: 203 },
        { address: "90 2nd Circle", member_id: 237, inspection_id: 259 },
        { address: "56 Heath Center", member_id: 62, inspection_id: 42 },
        { address: "7 Pearson Point", member_id: 89, inspection_id: 180 },
        { address: "3 Starling Alley", member_id: 195, inspection_id: 141 },
        { address: "1 Maywood Way", member_id: 128, inspection_id: 185 },
        { address: "0490 Emmet Alley", member_id: 238, inspection_id: 241 },
        { address: "34805 Ohio Hill", member_id: 272, inspection_id: 160 },
        { address: "012 Evergreen Street", member_id: 2, inspection_id: 149 },
        { address: "6273 Hanover Place", member_id: 68, inspection_id: 230 },
        {
          address: "65006 Forest Dale Road",
          member_id: 51,
          inspection_id: 120
        },
        { address: "338 Saint Paul Trail", member_id: 115, inspection_id: 162 },
        { address: "701 Melby Alley", member_id: 107, inspection_id: 53 },
        {
          address: "034 La Follette Parkway",
          member_id: 105,
          inspection_id: 162
        },
        {
          address: "98952 Twin Pines Crossing",
          member_id: 224,
          inspection_id: 64
        },
        { address: "9842 Schiller Park", member_id: 263, inspection_id: 295 },
        { address: "7 Randy Lane", member_id: 171, inspection_id: 246 },
        {
          address: "80614 Northwestern Road",
          member_id: 199,
          inspection_id: 88
        },
        { address: "2 Spaight Trail", member_id: 235, inspection_id: 259 },
        { address: "0 Grover Circle", member_id: 141, inspection_id: 207 },
        { address: "287 Dahle Avenue", member_id: 68, inspection_id: 238 },
        { address: "7904 2nd Street", member_id: 145, inspection_id: 224 },
        { address: "20953 Warner Point", member_id: 279, inspection_id: 105 },
        { address: "4 Boyd Street", member_id: 90, inspection_id: 198 },
        { address: "5203 Garrison Way", member_id: 230, inspection_id: 166 },
        {
          address: "8 Weeping Birch Circle",
          member_id: 81,
          inspection_id: 195
        },
        { address: "40 Rockefeller Trail", member_id: 173, inspection_id: 105 },
        { address: "640 Del Sol Park", member_id: 155, inspection_id: 99 },
        {
          address: "80969 Ludington Parkway",
          member_id: 46,
          inspection_id: 183
        },
        { address: "91429 Iowa Street", member_id: 61, inspection_id: 112 },
        { address: "046 Coolidge Center", member_id: 243, inspection_id: 195 },
        { address: "1 Crowley Avenue", member_id: 74, inspection_id: 99 },
        { address: "8 Hoffman Plaza", member_id: 152, inspection_id: 281 },
        { address: "5 Sheridan Avenue", member_id: 189, inspection_id: 76 },
        {
          address: "3363 Riverside Junction",
          member_id: 104,
          inspection_id: 124
        },
        {
          address: "79580 Talmadge Parkway",
          member_id: 72,
          inspection_id: 208
        },
        { address: "4 Bunker Hill Court", member_id: 107, inspection_id: 267 },
        { address: "82995 Sauthoff Parkway", member_id: 2, inspection_id: 298 },
        { address: "15958 Orin Street", member_id: 178, inspection_id: 95 },
        { address: "91 Clove Way", member_id: 73, inspection_id: 136 },
        {
          address: "79618 Crescent Oaks Junction",
          member_id: 13,
          inspection_id: 182
        },
        { address: "62 Vermont Point", member_id: 218, inspection_id: 88 },
        { address: "940 Hovde Parkway", member_id: 210, inspection_id: 151 },
        { address: "60 Alpine Park", member_id: 91, inspection_id: 252 },
        { address: "8035 Bluejay Road", member_id: 38, inspection_id: 71 },
        { address: "863 Oak Valley Point", member_id: 176, inspection_id: 6 },
        { address: "64393 Dwight Street", member_id: 60, inspection_id: 204 },
        { address: "4193 Oakridge Center", member_id: 76, inspection_id: 171 },
        { address: "2051 Leroy Alley", member_id: 164, inspection_id: 74 },
        {
          address: "80 Pepper Wood Avenue",
          member_id: 271,
          inspection_id: 118
        },
        { address: "8 Kedzie Parkway", member_id: 252, inspection_id: 90 },
        { address: "7136 Gale Junction", member_id: 120, inspection_id: 229 },
        { address: "5 Barby Plaza", member_id: 266, inspection_id: 299 },
        { address: "45500 Fulton Place", member_id: 193, inspection_id: 83 },
        { address: "695 Tennyson Crossing", member_id: 53, inspection_id: 109 },
        { address: "26 Upham Place", member_id: 228, inspection_id: 184 },
        { address: "26332 Carioca Crossing", member_id: 104, inspection_id: 6 },
        {
          address: "2 Clyde Gallagher Road",
          member_id: 212,
          inspection_id: 79
        },
        { address: "71 Quincy Junction", member_id: 198, inspection_id: 207 },
        { address: "279 Hanover Circle", member_id: 29, inspection_id: 11 },
        { address: "3 Manitowish Way", member_id: 244, inspection_id: 66 },
        { address: "82 Cottonwood Court", member_id: 175, inspection_id: 283 },
        { address: "17 Eggendart Drive", member_id: 10, inspection_id: 119 },
        { address: "50 Golf View Lane", member_id: 244, inspection_id: 279 },
        {
          address: "46 Village Green Crossing",
          member_id: 218,
          inspection_id: 92
        },
        { address: "90 David Point", member_id: 172, inspection_id: 272 },
        { address: "0 Arkansas Circle", member_id: 230, inspection_id: 215 },
        { address: "466 Mendota Circle", member_id: 162, inspection_id: 19 },
        {
          address: "93 Burning Wood Junction",
          member_id: 269,
          inspection_id: 282
        },
        { address: "559 Bartelt Point", member_id: 239, inspection_id: 149 },
        { address: "32784 Truax Place", member_id: 40, inspection_id: 118 },
        { address: "4046 Warbler Lane", member_id: 57, inspection_id: 30 },
        { address: "0 Basil Point", member_id: 16, inspection_id: 3 },
        { address: "07790 Mallard Plaza", member_id: 244, inspection_id: 61 },
        { address: "8 Sachs Road", member_id: 122, inspection_id: 250 },
        { address: "8 Sugar Road", member_id: 133, inspection_id: 300 },
        { address: "77050 Hoffman Center", member_id: 8, inspection_id: 295 },
        { address: "733 Coleman Center", member_id: 169, inspection_id: 232 },
        { address: "982 Cardinal Junction", member_id: 241, inspection_id: 64 },
        { address: "47113 Reinke Street", member_id: 89, inspection_id: 115 },
        { address: "14 Paget Way", member_id: 175, inspection_id: 131 },
        { address: "037 Briar Crest Way", member_id: 57, inspection_id: 13 },
        { address: "53 Farwell Place", member_id: 137, inspection_id: 46 },
        {
          address: "6 Crescent Oaks Junction",
          member_id: 179,
          inspection_id: 191
        },
        { address: "0 Jay Park", member_id: 84, inspection_id: 215 },
        {
          address: "9148 Valley Edge Point",
          member_id: 119,
          inspection_id: 261
        },
        { address: "739 Barnett Point", member_id: 52, inspection_id: 267 },
        { address: "5741 Haas Center", member_id: 80, inspection_id: 7 },
        { address: "178 Mandrake Plaza", member_id: 213, inspection_id: 63 },
        { address: "613 Kropf Street", member_id: 41, inspection_id: 229 },
        { address: "8665 Elgar Road", member_id: 138, inspection_id: 133 },
        { address: "9 Porter Avenue", member_id: 25, inspection_id: 98 },
        { address: "6045 Southridge Court", member_id: 16, inspection_id: 69 },
        { address: "992 Karstens Hill", member_id: 186, inspection_id: 37 },
        { address: "98406 Fallview Court", member_id: 142, inspection_id: 194 },
        { address: "2534 Grover Junction", member_id: 183, inspection_id: 51 },
        { address: "003 Walton Road", member_id: 20, inspection_id: 281 },
        {
          address: "107 Charing Cross Park",
          member_id: 198,
          inspection_id: 195
        },
        { address: "31 Calypso Center", member_id: 228, inspection_id: 188 },
        { address: "23 John Wall Drive", member_id: 128, inspection_id: 287 },
        { address: "507 Coleman Trail", member_id: 109, inspection_id: 17 },
        {
          address: "78747 Buena Vista Point",
          member_id: 171,
          inspection_id: 207
        },
        {
          address: "56913 Norway Maple Terrace",
          member_id: 199,
          inspection_id: 118
        },
        { address: "40 Redwing Park", member_id: 262, inspection_id: 241 },
        { address: "7445 Clove Hill", member_id: 236, inspection_id: 22 },
        { address: "86 Di Loreto Street", member_id: 230, inspection_id: 208 },
        { address: "97189 Kennedy Road", member_id: 276, inspection_id: 115 },
        { address: "37265 Coleman Park", member_id: 97, inspection_id: 46 },
        { address: "93397 Carey Street", member_id: 25, inspection_id: 95 },
        { address: "8 Gateway Plaza", member_id: 34, inspection_id: 182 },
        { address: "5 Elka Circle", member_id: 9, inspection_id: 140 },
        { address: "304 Hooker Center", member_id: 35, inspection_id: 293 },
        {
          address: "87880 Claremont Street",
          member_id: 156,
          inspection_id: 227
        },
        { address: "49906 Gerald Place", member_id: 11, inspection_id: 145 },
        { address: "7142 Debs Way", member_id: 219, inspection_id: 79 },
        { address: "7 Alpine Pass", member_id: 134, inspection_id: 22 },
        { address: "800 Cody Alley", member_id: 213, inspection_id: 156 },
        { address: "04697 Bashford Pass", member_id: 213, inspection_id: 170 },
        { address: "66228 Nancy Point", member_id: 110, inspection_id: 130 },
        { address: "677 Eliot Pass", member_id: 99, inspection_id: 269 },
        { address: "8712 Hauk Trail", member_id: 6, inspection_id: 121 },
        { address: "83079 Schiller Lane", member_id: 7, inspection_id: 238 },
        { address: "50159 Brentwood Alley", member_id: 22, inspection_id: 22 },
        { address: "39546 School Alley", member_id: 212, inspection_id: 27 },
        { address: "16724 Huxley Parkway", member_id: 118, inspection_id: 211 },
        { address: "445 Pond Street", member_id: 135, inspection_id: 31 },
        { address: "9387 Hayes Alley", member_id: 166, inspection_id: 146 },
        { address: "417 Johnson Way", member_id: 154, inspection_id: 164 },
        { address: "1353 Elka Pass", member_id: 163, inspection_id: 296 },
        { address: "659 Melby Park", member_id: 146, inspection_id: 7 },
        { address: "5818 Pleasure Street", member_id: 217, inspection_id: 171 },
        { address: "26 Oneill Circle", member_id: 88, inspection_id: 132 },
        { address: "84 Northwestern Park", member_id: 25, inspection_id: 48 },
        { address: "529 Surrey Lane", member_id: 196, inspection_id: 39 },
        { address: "71 Spenser Place", member_id: 135, inspection_id: 230 },
        { address: "1817 Lien Center", member_id: 105, inspection_id: 130 },
        { address: "0341 Buhler Street", member_id: 101, inspection_id: 289 },
        { address: "1818 Green Point", member_id: 247, inspection_id: 224 },
        { address: "480 Claremont Pass", member_id: 270, inspection_id: 23 },
        { address: "87061 Meadow Vale Pass", member_id: 22, inspection_id: 30 },
        {
          address: "217 Bunker Hill Junction",
          member_id: 228,
          inspection_id: 27
        },
        { address: "2 Northland Pass", member_id: 121, inspection_id: 205 },
        { address: "7 Merry Road", member_id: 115, inspection_id: 277 },
        { address: "228 Lakewood Avenue", member_id: 258, inspection_id: 119 },
        { address: "64183 Haas Pass", member_id: 268, inspection_id: 182 },
        { address: "37424 Everett Park", member_id: 61, inspection_id: 95 },
        { address: "2 Sunbrook Avenue", member_id: 54, inspection_id: 71 },
        { address: "087 Raven Avenue", member_id: 57, inspection_id: 47 },
        { address: "81199 Mcbride Point", member_id: 50, inspection_id: 166 },
        { address: "118 Green Ridge Road", member_id: 243, inspection_id: 122 },
        {
          address: "9377 New Castle Street",
          member_id: 128,
          inspection_id: 109
        },
        { address: "780 Browning Park", member_id: 215, inspection_id: 83 },
        { address: "4 Crescent Oaks Lane", member_id: 108, inspection_id: 246 },
        { address: "17379 Marcy Road", member_id: 98, inspection_id: 199 },
        { address: "52163 Oak Court", member_id: 146, inspection_id: 117 },
        { address: "34260 Moose Alley", member_id: 119, inspection_id: 271 },
        { address: "97 Mendota Alley", member_id: 124, inspection_id: 14 },
        { address: "0 Northview Avenue", member_id: 166, inspection_id: 17 },
        { address: "2442 Schiller Park", member_id: 116, inspection_id: 196 },
        { address: "145 Old Gate Terrace", member_id: 41, inspection_id: 83 },
        { address: "3 Artisan Circle", member_id: 66, inspection_id: 23 },
        { address: "1 Utah Place", member_id: 52, inspection_id: 223 },
        { address: "72 Mallory Plaza", member_id: 101, inspection_id: 54 },
        { address: "22554 Warbler Court", member_id: 27, inspection_id: 72 },
        { address: "2 Shoshone Terrace", member_id: 6, inspection_id: 84 },
        { address: "58722 Debra Lane", member_id: 239, inspection_id: 154 },
        { address: "980 Ludington Court", member_id: 253, inspection_id: 254 },
        {
          address: "34183 Victoria Avenue",
          member_id: 208,
          inspection_id: 106
        },
        {
          address: "63738 Continental Park",
          member_id: 68,
          inspection_id: 270
        },
        {
          address: "03756 Buena Vista Drive",
          member_id: 246,
          inspection_id: 283
        },
        { address: "06007 Kedzie Trail", member_id: 259, inspection_id: 202 },
        {
          address: "4698 Grasskamp Center",
          member_id: 116,
          inspection_id: 141
        },
        { address: "47371 2nd Trail", member_id: 109, inspection_id: 51 },
        { address: "6 Waubesa Park", member_id: 90, inspection_id: 156 },
        { address: "25 Pepper Wood Place", member_id: 233, inspection_id: 96 },
        { address: "8126 Dixon Lane", member_id: 2, inspection_id: 96 },
        { address: "77 Dennis Way", member_id: 164, inspection_id: 273 },
        { address: "26 Fairview Drive", member_id: 255, inspection_id: 141 },
        { address: "5480 Farragut Place", member_id: 19, inspection_id: 9 },
        { address: "8 Talmadge Drive", member_id: 114, inspection_id: 75 },
        { address: "57 Farmco Lane", member_id: 169, inspection_id: 202 },
        { address: "8380 Moulton Trail", member_id: 158, inspection_id: 41 },
        { address: "44 Jenna Drive", member_id: 35, inspection_id: 64 },
        { address: "4 Johnson Junction", member_id: 143, inspection_id: 232 },
        { address: "41 Amoth Crossing", member_id: 12, inspection_id: 86 },
        { address: "10 Goodland Drive", member_id: 21, inspection_id: 101 },
        { address: "60347 Hooker Terrace", member_id: 27, inspection_id: 156 },
        { address: "1135 Goodland Parkway", member_id: 141, inspection_id: 62 },
        { address: "1130 Graedel Drive", member_id: 121, inspection_id: 157 },
        { address: "94 Mandrake Lane", member_id: 31, inspection_id: 188 },
        { address: "0591 Claremont Place", member_id: 145, inspection_id: 86 },
        { address: "1 Tennessee Hill", member_id: 136, inspection_id: 66 },
        {
          address: "17 Messerschmidt Terrace",
          member_id: 24,
          inspection_id: 53
        },
        { address: "286 Goodland Pass", member_id: 4, inspection_id: 56 },
        { address: "0818 Clove Center", member_id: 212, inspection_id: 226 },
        {
          address: "5580 Cottonwood Circle",
          member_id: 273,
          inspection_id: 155
        },
        { address: "3787 Mitchell Center", member_id: 94, inspection_id: 138 },
        { address: "5 Riverside Road", member_id: 240, inspection_id: 131 },
        {
          address: "554 Manufacturers Parkway",
          member_id: 208,
          inspection_id: 45
        },
        { address: "33 Blaine Crossing", member_id: 151, inspection_id: 103 },
        {
          address: "43617 Meadow Ridge Avenue",
          member_id: 273,
          inspection_id: 253
        },
        { address: "9160 Forest Crossing", member_id: 273, inspection_id: 290 },
        { address: "84584 Nova Trail", member_id: 34, inspection_id: 55 },
        { address: "7479 Eastwood Alley", member_id: 41, inspection_id: 242 },
        { address: "039 Barnett Parkway", member_id: 54, inspection_id: 170 },
        { address: "360 Commercial Trail", member_id: 41, inspection_id: 96 },
        { address: "723 Schmedeman Lane", member_id: 15, inspection_id: 156 },
        { address: "8 Corscot Drive", member_id: 181, inspection_id: 25 },
        { address: "36417 Dexter Circle", member_id: 199, inspection_id: 150 },
        { address: "55056 Clarendon Place", member_id: 231, inspection_id: 89 },
        { address: "1869 Surrey Terrace", member_id: 64, inspection_id: 214 },
        { address: "5823 Hoepker Way", member_id: 85, inspection_id: 54 },
        { address: "792 Debra Junction", member_id: 200, inspection_id: 265 },
        { address: "69913 Oriole Center", member_id: 269, inspection_id: 247 },
        { address: "70 East Park", member_id: 36, inspection_id: 36 },
        {
          address: "932 Village Green Way",
          member_id: 144,
          inspection_id: 163
        },
        { address: "16934 Utah Circle", member_id: 269, inspection_id: 202 },
        { address: "425 Bultman Road", member_id: 200, inspection_id: 89 },
        { address: "82 Stuart Junction", member_id: 213, inspection_id: 165 },
        { address: "28786 Di Loreto Hill", member_id: 95, inspection_id: 146 },
        { address: "9192 Roth Court", member_id: 68, inspection_id: 296 },
        { address: "7 Holy Cross Drive", member_id: 204, inspection_id: 18 },
        { address: "76 Hagan Alley", member_id: 188, inspection_id: 167 },
        { address: "5517 5th Alley", member_id: 178, inspection_id: 47 },
        {
          address: "8 Pepper Wood Crossing",
          member_id: 133,
          inspection_id: 53
        },
        { address: "14 La Follette Road", member_id: 33, inspection_id: 266 },
        { address: "228 Donald Road", member_id: 89, inspection_id: 90 },
        { address: "7 Springview Lane", member_id: 154, inspection_id: 213 },
        { address: "59 Grover Hill", member_id: 257, inspection_id: 19 },
        { address: "948 Fordem Point", member_id: 146, inspection_id: 88 },
        {
          address: "64717 Little Fleur Park",
          member_id: 101,
          inspection_id: 30
        },
        { address: "5 Petterle Lane", member_id: 15, inspection_id: 192 },
        { address: "334 Di Loreto Lane", member_id: 27, inspection_id: 216 },
        { address: "9 Anhalt Street", member_id: 42, inspection_id: 42 },
        {
          address: "5030 Bartillon Junction",
          member_id: 207,
          inspection_id: 155
        },
        { address: "7 Leroy Junction", member_id: 52, inspection_id: 103 },
        { address: "94 Cody Drive", member_id: 124, inspection_id: 148 },
        { address: "7985 2nd Center", member_id: 65, inspection_id: 48 },
        { address: "69 Twin Pines Street", member_id: 269, inspection_id: 258 },
        { address: "72579 Center Avenue", member_id: 98, inspection_id: 231 },
        { address: "533 Schiller Terrace", member_id: 209, inspection_id: 18 },
        { address: "92162 Center Plaza", member_id: 66, inspection_id: 149 },
        { address: "56 Paget Parkway", member_id: 114, inspection_id: 274 },
        { address: "1 Morrow Point", member_id: 58, inspection_id: 128 },
        { address: "454 Merrick Drive", member_id: 48, inspection_id: 67 },
        {
          address: "59772 New Castle Junction",
          member_id: 135,
          inspection_id: 17
        },
        { address: "97 Sachtjen Court", member_id: 187, inspection_id: 178 },
        { address: "05 Lakeland Park", member_id: 253, inspection_id: 47 },
        {
          address: "39680 Kingsford Street",
          member_id: 83,
          inspection_id: 246
        },
        { address: "402 Shasta Drive", member_id: 278, inspection_id: 129 },
        {
          address: "02449 John Wall Court",
          member_id: 280,
          inspection_id: 262
        },
        { address: "990 Blaine Place", member_id: 207, inspection_id: 99 },
        { address: "29815 Reindahl Circle", member_id: 95, inspection_id: 148 },
        { address: "4092 Dennis Plaza", member_id: 239, inspection_id: 98 },
        { address: "30972 Rigney Alley", member_id: 144, inspection_id: 23 },
        { address: "3667 Magdeline Plaza", member_id: 239, inspection_id: 266 },
        { address: "20 Petterle Point", member_id: 14, inspection_id: 126 },
        { address: "64 Artisan Pass", member_id: 97, inspection_id: 231 },
        {
          address: "91926 Manitowish Street",
          member_id: 150,
          inspection_id: 93
        }
      ]);
    });
};

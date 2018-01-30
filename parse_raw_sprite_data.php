#!/usr/local/bin/php
<?php

$template = <<<EOF
        "[name]": {
            "frame":            { "x": [x],  "y": [y], "w": [w], "h": [h] },
            "spriteSourceSize": { "x": 0, "y": 0, "w": [w], "h": [h] },
            "sourceSize":       { "w": [w], "h": [h] },
            "pivot":            { "x": 0.5, "y": 0.5 },
            "rotated":          false,
            "trimmed":          false
            }

EOF;

$map = [
//['name' => '0',                'x' => 0,    'y' => 0,   'w' => 0,   'h' => 0 ],

['name' => 'stand_down',       'x' => 8,    'y' => 16,  'w' => 40,  'h' => 48 ],
['name' => 'stand_sw',         'x' => 56,   'y' => 8,   'w' => 44,  'h' => 56 ],
['name' => 'stand_w',          'x' => 108,  'y' => 16,  'w' => 43,  'h' => 48 ],
['name' => 'stand_nw',         'x' => 160,  'y' => 15,  'w' => 43,  'h' => 48 ],
['name' => 'stand_up',         'x' => 212,  'y' => 15,  'w' => 47,  'h' => 48 ],

['name' => 'walking_nw0',     'x' => 8,    'y' => 72,  'w' => 49,  'h' => 52 ],
['name' => 'walking_nw1',     'x' => 58,   'y' => 72,  'w' => 49,  'h' => 52 ],
['name' => 'walking_nw2',     'x' => 108,  'y' => 72,  'w' => 49,  'h' => 52 ],
['name' => 'walking_nw3',     'x' => 158,  'y' => 72,  'w' => 49,  'h' => 52 ],
['name' => 'walking_nw4',     'x' => 208,  'y' => 72,  'w' => 49,  'h' => 52 ],
['name' => 'walking_nw5',     'x' => 258,  'y' => 72,  'w' => 49,  'h' => 52 ],

['name' => 'walking_sw0',     'x' => 332,  'y' => 72,  'w' => 49,  'h' => 51 ],
['name' => 'walking_sw1',     'x' => 386,  'y' => 72,  'w' => 49,  'h' => 51 ],
['name' => 'walking_sw2',     'x' => 439,  'y' => 72,  'w' => 49,  'h' => 51 ],
['name' => 'walking_sw3',     'x' => 492,  'y' => 72,  'w' => 49,  'h' => 51 ],
['name' => 'walking_sw4',     'x' => 545,  'y' => 72,  'w' => 49,  'h' => 51 ],
['name' => 'walking_sw5',     'x' => 598,  'y' => 72,  'w' => 49,  'h' => 51 ],

// for (let x = 0; x < 20; x++) {console.log(x*74+8);}
['name' => 'battle_intro0',   'x' => 8,    'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro1',   'x' => 82,   'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro2',   'x' => 156,  'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro3',   'x' => 230,  'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro4',   'x' => 304,  'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro5',   'x' => 378,  'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro6',   'x' => 452,  'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro7',   'x' => 526,  'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro8',   'x' => 600,  'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro9',  'x' => 674,  'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro10',  'x' => 748,  'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro11',  'x' => 822,  'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro12',  'x' => 896,  'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro13',  'x' => 970,  'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro14',  'x' => 1044, 'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro15',  'x' => 1118, 'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro16',  'x' => 1192, 'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro17',  'x' => 1266, 'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro18',  'x' => 1340, 'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro19',  'x' => 1414, 'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro20',  'x' => 1488, 'y' => 588, 'w' => 73,  'h' => 118 ],
['name' => 'battle_intro21',  'x' => 1562, 'y' => 588, 'w' => 73,  'h' => 118 ],

// for (let x = 0; x < 26; x++) {console.log(x*107+8);}
['name' => 'battle_attack0',  'x' => 8,    'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack1',  'x' => 115,  'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack2',  'x' => 222,  'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack3',  'x' => 329,  'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack4',  'x' => 436,  'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack5',  'x' => 543,  'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack6',  'x' => 650,  'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack7',  'x' => 757,  'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack8',  'x' => 864,  'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack9', 'x' => 971,  'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack10', 'x' => 1078, 'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack11', 'x' => 1185, 'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack12', 'x' => 1292, 'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack13', 'x' => 1399, 'y' => 784, 'w' => 106, 'h' => 60 ],
['name' => 'battle_attack14', 'x' => 1506, 'y' => 784, 'w' => 106, 'h' => 60 ],
];

echo implode(',', array_map(
    function($sprite) use ($template) {
        return strtr(
            $template, 
            array_combine(
                array_map(function($v) {
                    return '['.$v.']';
                }, array_keys($sprite)),
                array_values($sprite)
            )
        );
    },
    $map
));

echo "\n";

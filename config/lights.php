<?php

return [
    'groups' => [
        'downstairs' => [
            'name' => 'Downstairs',
            'groups' => [
                'lounge'   => [
                    'name' => 'Lounge',
                    'groups' => [
                        'ceiling' => [
                            'name' => 'Ceiling',
                            'lights' => [
                                [
                                    'id'    => 27,
                                    'name'  => 'Lounge 1',
                                    'make'  => 'hue',
                                    'model' => 'white',
                                ],
                                [
                                    'id'    => 21,
                                    'name'  => 'Lounge 2',
                                    'make'  => 'hue',
                                    'model' => 'white',
                                ],
                                [
                                    'id'    => 26,
                                    'name'  => 'Lounge 3',
                                    'make'  => 'hue',
                                    'model' => 'white',
                                ],
                            ],
                        ],
                        'wall'    => [
                            'name' => 'Wall',
                            'lights' => [
                                [
                                    'id'    => 25,
                                    'name'  => 'Left',
                                    'make'  => 'hue',
                                    'model' => 'white',
                                ],
                                [
                                    'id'    => 23,
                                    'name'  => 'Right',
                                    'make'  => 'hue',
                                    'model' => 'white',
                                ],
                            ],
                        ],
                    ],
                    'lights'  => [
                        [
                            'id'    => 19,
                            'name'  => 'Lamp',
                            'make'  => 'hue',
                            'model' => 'white',
                        ],
                    ],
                ],
                'playroom' => [
                    'name' => 'Play Room',
                    'lights' => [
                        [
                            'id'    => 22,
                            'name'  => 'Playroom 1',
                            'make'  => 'hue',
                            'model' => 'white',
                        ],
                        [
                            'id'    => 20,
                            'name'  => 'Playroom 2',
                            'make'  => 'hue',
                            'model' => 'white',
                        ],
                    ],
                ],
            ],
            // 'lights' => [
            //     [
            //         'id'    => 28,
            //         'name'  => 'Broken Bulb',
            //         'make'  => 'hue',
            //         'model' => 'white',
            //     ],
            // ]
        ],
        'hallway' => [
            'name' => 'Hallway',
            'lights' => [
                [
                    'id'    => 24,
                    'name'  => 'Downstairs',
                    'make'  => 'hue',
                    'model' => 'white',
                ],
                [
                    'id'    => 11,
                    'name'  => 'Upstairs',
                    'make'  => 'hue',
                    'model' => 'white',
                ],
            ],
        ],
        'upstairs'   => [
            'name' => 'Upstairs',
            'lights' => [
                [
                    'id'    => 'd073d5032114',
                    'name'  => 'Bedroom',
                    'make'  => 'lifx',
                    'model' => 'color',
                ],
                [
                    'id'    => 16,
                    'name'  => 'Daniel',
                    'make'  => 'hue',
                    'model' => 'color',
                ],
                [
                    'id'    => 17,
                    'name'  => 'Eve',
                    'make'  => 'hue',
                    'model' => 'color',
                ],
                [
                    'id'    => 'd073d512326b',
                    'name'  => 'Study',
                    'make'  => 'lifx',
                    'model' => 'white',
                ],
            ],
        ],
    ],
];

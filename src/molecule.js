/* Intro to BabylonJS (version 0.1.0)
 *
 * molecule.js: Moleule definition and management function.
 * For the sake of simplicity, Molecules definitions are
 * hardcoded. A more realistic approach could be to
 * have each molecule definition in its own JSON file
 * to be loaded in the 3D mol viewer (via an Ajax
 * request for exemple) or directly from any Rest
 * service that may provide such a functionality.
 */

Molecule = function(name, type, position, scene) {

    //Hardcoded molecules definitions :-)
    var molsdef = {
        Ethanol: {
            label: "C2H6O",
            type: "Ethanol",
            nb: 9,
            atoms: [
                ['H', -2.0801425360, 0.4329727646, 0.0722817289],
                ['C', -1.2129704155, -0.2295285634, -0.0097156258],
                ['H', -1.2655910941, -0.9539857247, 0.8097953440],
                ['C', 0.0849758188, 0.5590385475, 0.0510545434],
                ['O', 1.2322305822, -0.2731895077, -0.1276123902],
                ['H', 0.1506137362, 1.1200249874, 0.9943015309],
                ['H', 1.2473876659, -0.8998737590, 0.6150681570],
                ['H', 0.1316093068, 1.2841805400, -0.7645223601],
                ['H', -1.2737541560, -0.7748626513, -0.9540587845]
            ],
            bounds: [
                [0, 1],
                [1, 2],
                [1, 3],
                [3, 4],
                [1, 8],
                [4, 6],
                [3, 7],
                [3, 5]
            ]
        },
        Water: {
            label: "H2O",
            type: "Water",
            nb: 3,
            atoms: [
                ['H', -2.0801425360, 0.4329727646, 0.0722817289],
                ['O', -1.2129704155, -0.2295285634, -0.0097156258],
                ['H', -1.2655910941, -0.9539857247, 0.8097953440]
            ],
            bounds: [
                [0, 1],
                [2, 1]
            ]
        },
		Glicerine: {
			label: "C2H5NO2",
			type: "Glycine",
			group: "Acide",
			nb: 10,
            atoms: [
                  ["N", 1.931, 0.090, -0.034],
				  ["C", 0.761, -0.799, -0.008],
				  ["C", -0.498, 0.029, -0.005],
				  ["O", -0.429, 1.235, -0.023],
				  ["O", -1.697, -0.574, 0.018],
				  ["H", 1.910, 0.738, 0.738],
				  ["H", 2.788, -0.442, -0.037],
				  ["H", 0.772, -1.440, -0.889],
				  ["H", 0.793, -1.415, 0.891],
				  ["H", -2.477, -0.002, 0.019]
            ],
            bounds: [
					[0, 1],
					[0, 5],
					[0, 6],
					[1, 7],
					[1, 8],
					[2, 1],
					[2, 3],
					[3, 2],
					[2, 4],
					[4, 9]
            ]
        },
		Cholesterol : {
           "label": "C27H46O",
    "type": "Cholesterol",
    "group": "General",
    "nb": 74,
    "atoms": [
        ["C", 1.300, -1.004, -4.518],
        ["C", 1.651, -0.336, -5.850],
        ["C", 0.368, 0.011, -6.606],
        ["C", -0.434, 1.041, -5.806],
        ["C", -0.671, 0.485, -4.412],
        ["C", -1.887, 0.476, -3.951],
        ["C", -2.243, -0.054, -2.593],
        ["C", -1.026, 0.068, -1.670],
        ["C", 0.164, -0.655, -2.313],
        ["C", 0.516, -0.018, -3.647],
        ["C", 1.395, -0.674, -1.410],
        ["C", 1.072, -1.238, -0.018],
        ["C", -0.084, -0.430, 0.572],
        ["C", -1.320, -0.619, -0.349],
        ["C", -2.437, 0.005, 0.494],
        ["C", -2.120, -0.507, 1.925],
        ["C", -0.607, -0.839, 1.946],
        ["C", 0.266, 1.058, 0.566],
        ["C", 1.426, 1.172, -3.340],
        ["C", 0.095, -0.036, 3.041],
        ["C", 1.597, -0.326, 3.002],
        ["C", -0.465, -0.436, 4.407],
        ["C", 0.238, 0.366, 5.503],
        ["C", -0.323, -0.034, 6.869],
        ["C", 0.380, 0.768, 7.965],
        ["C", -0.180, 0.368, 9.331],
        ["C", 1.882, 0.478, 7.926],
        ["O", 0.702, 0.556, -7.885],
        ["H", 0.692, -1.889, -4.705],
        ["H", 2.217, -1.294, -4.005],
        ["H", 2.253, -1.017, -6.450],
        ["H", 2.218, 0.575, -5.660],
        ["H", -0.229, -0.890, -6.741],
        ["H", -1.390, 1.223, -6.296],
        ["H", 0.128, 1.972, -5.739],
        ["H", -2.677, 0.868, -4.574],
        ["H", -2.533, -1.102, -2.676],
        ["H", -3.071, 0.522, -2.182],
        ["H", -0.784, 1.117, -1.503],
        ["H", -0.144, -1.684, -2.495],
        ["H", 2.165, -1.291, -1.873],
        ["H", 1.772, 0.342, -1.303],
        ["H", 0.736, -2.271, -0.105],
        ["H", 1.955, -1.186, 0.617],
        ["H", -1.515, -1.679, -0.509],
        ["H", -3.413, -0.348, 0.164],
        ["H", -2.386, 1.094, 0.454],
        ["H", -2.703, -1.404, 2.138],
        ["H", -2.344, 0.266, 2.658],
        ["H", -0.457, -1.907, 2.105],
        ["H", 0.546, 1.361, -0.442],
        ["H", -0.598, 1.636, 0.893],
        ["H", 1.100, 1.238, 1.245],
        ["H", 1.618, 1.728, -4.258],
        ["H", 0.938, 1.824, -2.616],
        ["H", 2.369, 0.812, -2.928],
        ["H", -0.073, 1.028, 2.877],
        ["H", 1.766, -1.390, 3.166],
        ["H", 1.997, -0.040, 2.029],
        ["H", 2.098, 0.245, 3.783],
        ["H", -0.296, -1.501, 4.572],
        ["H", -1.535, -0.230, 4.435],
        ["H", 0.069, 1.430, 5.339],
        ["H", 1.307, 0.159, 5.475],
        ["H", -0.154, -1.098, 7.033],
        ["H", -1.393, 0.172, 6.897],
        ["H", 0.211, 1.833, 7.801],
        ["H", 0.320, 0.940, 10.112],
        ["H", -1.250, 0.575, 9.359],
        ["H", -0.012, -0.696, 9.495],
        ["H", 2.050, -0.585, 8.090],
        ["H", 2.281, 0.764, 6.953],
        ["H", 2.383, 1.050, 8.706],
        ["H", -0.132, 0.760, -8.328]
    ],
    "bounds": [
        [0, 1],
        [0, 28],
        [0, 29],
        [1, 2],
        [1, 30],
        [1, 31],
        [2, 3],
        [2, 27],
        [2, 32],
        [3, 4],
        [3, 33],
        [3, 34],
        [4, 5],
        [4, 9],
        [5, 6],
        [5, 35],
        [6, 7],
        [6, 36],
        [6, 37],
        [7, 8],
        [7, 13],
        [7, 38],
        [8, 9],
        [8, 10],
        [8, 39],
        [9, 0],
        [9, 18],
        [10, 11],
        [10, 40],
        [10, 41],
        [11, 12],
        [11, 42],
        [11, 43],
        [12, 13],
        [12, 16],
        [12, 17],
        [13, 14],
        [13, 44],
        [14, 15],
        [14, 45],
        [14, 46],
        [15, 16],
        [15, 47],
        [15, 48],
        [16, 19],
        [16, 49],
        [17, 50],
        [17, 51],
        [17, 52],
        [18, 53],
        [18, 54],
        [18, 55],
        [19, 20],
        [19, 21],
        [19, 56],
        [20, 57],
        [20, 58],
        [20, 59],
        [21, 22],
        [21, 60],
        [21, 61],
        [22, 23],
        [22, 62],
        [22, 63],
        [23, 24],
        [23, 64],
        [23, 65],
        [24, 25],
        [24, 26],
        [24, 66],
        [25, 67],
        [25, 68],
        [25, 69],
        [26, 70],
        [26, 71],
        [26, 72],
        [27, 73]
    ]
        },
		VitamineC :{
            "label": "C6H8O6",
            "type": "VitamineC",
        "group": "Enzyme",
            "nb": 20,
            "atoms": [
                ["C", 1.182, 0.132, -1.342],
                ["C", -0.182, -0.055, -1.818],
                ["C", -1.039, 0.352, -0.860],
                ["C", -0.193, 0.829, 0.297],
                ["C", -0.490, -0.006, 1.544],
                ["C", 0.387, 0.473, 2.701],
                ["O", 2.186, -0.139, -1.974],
                ["O", -0.535, -0.561, -3.033],
                ["O", -2.388, 0.336, -0.923],
                ["O", 1.169, 0.652, -0.100],
                ["O", -0.211, -1.381, 1.273],
                ["O", 0.110, -0.307, 3.865],
                ["H", -0.391, 1.882, 0.497],
                ["H", -1.540, 0.104, 1.814],
                ["H", 0.174, 1.522, 2.907],
                ["H", 1.437, 0.362, 2.430],
                ["H", 0.286, -0.763, -3.501],
                ["H", -2.623, -0.023, -1.789],
                ["H", 0.725, -1.435, 1.038],
                ["H", 0.683, 0.027, 4.56]
            ],
            "bounds": [
                [0, 1],
                [0, 6],
                [0, 9],
                [1, 2],
                [1, 7],
                [2, 3],
                [2, 8],
                [3, 4],
                [3, 9],
                [3, 12],
                [4, 5],
                [4, 10],
                [4, 13],
                [5, 11],
                [5, 14],
                [5, 15],
                [7, 16],
                [8, 17],
                [10, 18],
                [11, 19]
            ]
        } 
		
    };

    this.moldata = molsdef[type];

    BABYLON.Mesh.call(this, "Molecule", scene);


    this.id = name;
    this.position.x = position.x;
    this.position.z = position.y;
    this.position.y = position.z;
    this.label = this.moldata.label;
    this.type = this.moldata.type;
    this.nbAtom = this.moldata.nb;


    this.atoms = [];
    this.bounds = [];

// Put the mol in a "Ball" representation
    this.viewMode = BALL_VIEW_MODE;

    for (var i = 0; i < this.moldata.atoms.length; i++) {
        var atm = new Atom(this.type + ": " + this.moldata.atoms[i][0] + i, this.moldata.atoms[i][0], new BABYLON.Vector3(this.moldata.atoms[i][1], this.moldata.atoms[i][2], this.moldata.atoms[i][3]), scene);
        atm.parent = this;
        this.atoms.push(atm);
    }
    this.scaleUp(INIT_BALL_SCALE_VALUE);
};

Molecule.prototype = Object.create(BABYLON.Mesh.prototype);
Molecule.prototype.constructor = Molecule;

// This function increases the distance between each atoms while keeping the
// molecule's 3D structure and shape coherent
Molecule.prototype.scaleUp = function(scaleValue) {
    // Scale up and shift everything
    var dims = ['x', 'y', 'z'];
    for (var d = 0; d < 3; d++) {
        // Find mean values for each dimension
        var meanValue = 0;
        var dimension = dims[d];
        for (i = 0; i < this.atoms.length; i++) {
            meanValue += this.atoms[i].position[dimension];
        }
        meanValue /= this.atoms.length;
        for (i = 0; i < this.atoms.length; i++) {
            this.atoms[i].position[dimension] = scaleValue * (this.atoms[i].position[dimension] - meanValue);
        }
        console.log(this.atoms.length);
    }
};

// This function decreases the distance between each atoms while keeping the
// molecule's 3D structure and shape coherent
Molecule.prototype.scaleDown = function(scaleValue) {
    // Scale Down and shift everything
    var dims = ['x', 'y', 'z'];
    for (var d = 0; d < 3; d++) {
        // Find mean values for each dimension
        var meanValue = 0;
        var dimension = dims[d];
        for (i = 0; i < this.atoms.length; i++) {
            meanValue += this.atoms[i].position[dimension];
        }
        meanValue /= this.atoms.length;

        for (i = 0; i < this.atoms.length; i++) {
            this.atoms[i].position[dimension] = (this.atoms[i].position[dimension] / scaleValue) + meanValue;
        }
        console.log(this.atoms.length);
    }
};


// Switch 3D representation from 'Ball' to 'Stick and Ball'
Molecule.prototype.fromBallToStickBall = function(scaleValue, scene) {
    // Build the Stick & Ball view from a Ball view
    if ((this.viewMode != BALL_VIEW_MODE) || scaleValue != BALL_AND_STICK_SCALE_VALUE) {
        console.log("fromBallToStickBall: you passed a wrong scaleValue or scaling from a wong viewMode");
        return ; // please, consider throwing an exception instead ! :)
    }

    this.scaleUp(scaleValue) ;
    for (var i = 0; i < this.moldata.bounds.length; i++) {
        var vstart = new BABYLON.Vector3(this.atoms[this.moldata.bounds[i][0]].position.x, this.atoms[this.moldata.bounds[i][0]].position.y, this.atoms[this.moldata.bounds[i][0]].position.z);
        var vend   = new BABYLON.Vector3(this.atoms[this.moldata.bounds[i][1]].position.x, this.atoms[this.moldata.bounds[i][1]].position.y, this.atoms[this.moldata.bounds[i][1]].position.z);
        var bds = new Bound(this.type + ": " + this.atoms[this.moldata.bounds[i][0]] + "-" +this.atoms[this.moldata.bounds[i][1]], vstart, vend, scene);
        bds.parent = this;
        this.bounds.push(bds);
    }
    this.viewMode = BALL_AND_STICK_VIEW_MODE;


};

// Switch 3D representation from 'Stick and Ball' to 'Ball'
Molecule.prototype.fromStickBallToBall = function(scaleValue, scene) {
    // Build the Stick & Ball view from a Ball view
    if ((this.viewMode != BALL_AND_STICK_VIEW_MODE ) || scaleValue != BALL_AND_STICK_SCALE_VALUE) {
        console.log("fromBallToStickBall: you passed a wrong scaleValue or scaling from a wong viewMode");
        return ; // please, consider throwing an exception instead ! :)
    }
    for (var i = 0; i < this.bounds.length; i++) {
    this.bounds[i].dispose() ;
    }
    this.bounds = [] ;
    this.scaleDown(scaleValue) ;
    this.viewMode = BALL_VIEW_MODE ;
};


Molecule.prototype._initMovement = function() {
    var onKeyDown = function(evt) {
        console.log(evt.keyCode);
        if (evt.keyCode == 37) {
            Molecule.moveLeft = true;
            Molecule.moveRight = false;
        } else if (evt.keyCode == 39) {
            Molecule.moveRight = true;
            Molecule.moveLeft = false;
        }
    };

    var onKeyUp = function(evt) {
        Molecule.moveRight = false;
        Molecule.moveLeft = false;
    };

    // Register events
    BABYLON.Tools.RegisterTopRootEvents([{
        name: "keydown",
        handler: onKeyDown
    }, {
        name: "keyup",
        handler: onKeyUp
    }]);
};

Molecule.prototype.move = function() {
    if (Molecule.moveRight) {
        Molecule.position.x += 1;
    }
    if (Molecule.moveLeft) {
        Molecule.position.x += -1;
    }
};

// Identify cells getting ID
var A1 = document.getElementById('A-1'), B1 = document.getElementById('B-1'),
	C1 = document.getElementById('C-1'), D1 = document.getElementById('D-1'),
	E1 = document.getElementById('E-1'), F1 = document.getElementById('F-1'),
	G1 = document.getElementById('G-1'), H1 = document.getElementById('H-1'),

	A2 = document.getElementById('A-2'), B2 = document.getElementById('B-2'),
	C2 = document.getElementById('C-2'), D2 = document.getElementById('D-2'),
	E2 = document.getElementById('E-2'), F2 = document.getElementById('F-2'),
	G2 = document.getElementById('G-2'), H2 = document.getElementById('H-2'),

	A3 = document.getElementById('A-3'), B3 = document.getElementById('B-3'),
	C3 = document.getElementById('C-3'), D3 = document.getElementById('D-3'),
	E3 = document.getElementById('E-3'), F3 = document.getElementById('F-3'),
	G3 = document.getElementById('G-3'), H3 = document.getElementById('H-3'),

	A4 = document.getElementById('A-4'), B4 = document.getElementById('B-4'),
	C4 = document.getElementById('C-4'), D4 = document.getElementById('D-4'),
	E4 = document.getElementById('E-4'), F4 = document.getElementById('F-4'),
	G4 = document.getElementById('G-4'), H4 = document.getElementById('H-4'),

	A5 = document.getElementById('A-5'), B5 = document.getElementById('B-5'),
	C5 = document.getElementById('C-5'), D5 = document.getElementById('D-5'),
	E5 = document.getElementById('E-5'), F5 = document.getElementById('F-5'),
	G5 = document.getElementById('G-5'), H5 = document.getElementById('H-5'),

	A6 = document.getElementById('A-6'), B6 = document.getElementById('B-6'),
	C6 = document.getElementById('C-6'), D6 = document.getElementById('D-6'),
	E6 = document.getElementById('E-6'), F6 = document.getElementById('F-6'),
	G6 = document.getElementById('G-6'), H6 = document.getElementById('H-6'),

	A7 = document.getElementById('A-7'), B7 = document.getElementById('B-7'),
	C7 = document.getElementById('C-7'), D7 = document.getElementById('D-7'),
	E7 = document.getElementById('E-7'), F7 = document.getElementById('F-7'),
	G7 = document.getElementById('G-7'), H7 = document.getElementById('H-7'),

	A8 = document.getElementById('A-8'), B8 = document.getElementById('B-8'),
	C8 = document.getElementById('C-8'), D8 = document.getElementById('D-8'),
	E8 = document.getElementById('E-8'), F8 = document.getElementById('F-8'),
	G8 = document.getElementById('G-8'), H8 = document.getElementById('H-8');


// Pieces like objects with it's respective properties
var WTowerL = {
	id: 'W-TowerL', color: 'W', type: 'Tower',
	content: '<img id="W-TowerL" src="resources/W-Tower.png">',
	oldCoordinates: A8, actualCoordinates: A8
};
var WHorseL = {
    id: 'W-HorseL', color: 'W', type: 'Horse',
    content: '<img id="W-HorseL" src="resources/W-Horse.png">',
    oldCoordinates: B1, actualCoordinates: B1
};
var WBishopL = {
    id: 'W-BishopL', color: 'W', type: 'Bishop',
    content: '<img id="W-BishopL" src="resources/W-Bishop.png">',
    oldCoordinates: C1, actualCoordinates: C1
};
var WQueen = {
    id: 'W-Queen', color: 'W', type: 'Queen',
    content: '<img id="W-Queen" src="resources/W-Queen.png">',
    oldCoordinates: D1, actualCoordinates: D1
};
var WKing = {
    id: 'W-King', color: 'W', type: 'King',
    content: '<img id="W-King" src="resources/W-King.png">',
    oldCoordinates: E1, actualCoordinates: E1
};
var WBishopR = {
    id: 'W-BishopR', color: 'W', type: 'Bishop',
    content: '<img id="W-BishopR" src="resources/W-Bishop.png">',
    oldCoordinates: F1, actualCoordinates: F1
};
var WHorseR = {
    id: 'W-HorseR', color: 'W', type: 'Horse',
    content: '<img id="W-HorseR" src="resources/W-Horse.png">',
    oldCoordinates: G1, actualCoordinates: G1
};
var WTowerR = {
    id: 'W-TowerR', color: 'W', type: 'Tower',
    content: '<img id="W-TowerR" src="resources/W-Tower.png">',
    oldCoordinates: H1, actualCoordinates: H1
};

var WPawn1 = {
    id: 'W-Pawn1', color: 'W', type: 'Pawn',
    content: '<img id="W-Pawn1" src="resources/W-Pawn.png">',
    originalCoordianes: 'A-2',
    oldCoordinates: A2, actualCoordinates: 'A-2'
};
var WPawn2 = {
    id: 'W-Pawn2', color: 'W', type: 'Pawn',
    content: '<img id="W-Pawn2" src="resources/W-Pawn.png">',
    originalCoordianes: 'B-2',
    oldCoordinates: B2, actualCoordinates: 'B-2'
};
var WPawn3 = {
    id: 'W-Pawn3', color: 'W', type: 'Pawn',
    content: '<img id="W-Pawn3" src="resources/W-Pawn.png">',
    originalCoordianes: 'C-2',
    oldCoordinates: C2, actualCoordinates: 'C-2'
};
var WPawn4 = {
    id: 'W-Pawn4', color: 'W', type: 'Pawn',
    content: '<img id="W-Pawn4" src="resources/W-Pawn.png">',
    originalCoordianes: 'D-2',
    oldCoordinates: D2, actualCoordinates: 'D-2'
};
var WPawn5 = {
    id: 'W-Pawn5', color: 'W', type: 'Pawn',
    content: '<img id="W-Pawn5" src="resources/W-Pawn.png">',
    originalCoordianes: 'E-2',
    oldCoordinates: E2, actualCoordinates: 'E-2'
};
var WPawn6 = {
    id: 'W-Pawn6', color: 'W', type: 'Pawn',
    content: '<img id="W-Pawn6" src="resources/W-Pawn.png">',
    originalCoordianes: 'F-2',
    oldCoordinates: F2, actualCoordinates: 'F-2'
};
var WPawn7 = {
    id: 'W-Pawn7', color: 'W', type: 'Pawn',
    content: '<img id="W-Pawn7" src="resources/W-Pawn.png">',
    originalCoordianes: 'G-2',
    oldCoordinates: G2, actualCoordinates: 'G-2'
};
var WPawn8 = {
    id: 'W-Pawn8', color: 'W', type: 'Pawn',
    content: '<img id="W-Pawn8" src="resources/W-Pawn.png">',
    originalCoordianes: 'H-2',
    oldCoordinates: H2, actualCoordinates: 'H-2'
};


var BTowerL = {
	id: 'B-TowerL',	color: 'B', type: 'Tower',
	content: '<img id="B-TowerL" src="resources/B-Tower.png">',
	oldCoordinates: A8,	actualCoordinates: A8
};
var BHorseL = {
    id: 'B-HorseL', color: 'B', type: 'Horse',
    content: '<img id="B-HorseL" src="resources/B-Horse.png">',
    oldCoordinates: B8, actualCoordinates: B8
};
var BBishopL = {
    id: 'B-BishopL', color: 'B', type: 'Bishop',
    content: '<img id="B-BishopL" src="resources/B-Bishop.png">',
    oldCoordinates: C8, actualCoordinates: C8
};
var BQueen = {
    id: 'B-Queen', color: 'B', type: 'Queen',
    content: '<img id="B-Queen" src="resources/B-Queen.png">',
    oldCoordinates: D8, actualCoordinates: D8
};
var BKing = {
    id: 'B-King', color: 'B', type: 'King',
    content: '<img id="B-King" src="resources/B-King.png">',
    oldCoordinates: E8, actualCoordinates: E8
};
var BBishopR = {
    id: 'B-BishopR', color: 'B', type: 'Bishop',
    content: '<img id="B-BishopR" src="resources/B-Bishop.png">',
    oldCoordinates: F8, actualCoordinates: F8
};
var BHorseR = {
    id: 'B-HorseR', color: 'B', type: 'Horse',
    content: '<img id="B-HorseR" src="resources/B-Horse.png">',
    oldCoordinates: G8, actualCoordinates: G8
};
var BTowerR = {
    id: 'B-TowerR', color: 'B', type: 'Tower',
    content: '<img id="B-TowerR" src="resources/B-Tower.png">',
    oldCoordinates: H8, actualCoordinates: H8
};

var BPawn1 = {
    id: 'B-Pawn1', color: 'B', type: 'Pawn',
    content: '<img id="B-Pawn1" src="resources/B-Pawn.png">',
    originalCoordianes: 'A-7',
    oldCoordinates: A7, actualCoordinates: 'A-7'
};
var BPawn2 = {
    id: 'B-Pawn2', color: 'B', type: 'Pawn',
    content: '<img id="B-Pawn2" src="resources/B-Pawn.png">',
    originalCoordianes: 'B-7',
    oldCoordinates: B7, actualCoordinates: 'B-7'
};
var BPawn3 = {
    id: 'B-Pawn3', color: 'B', type: 'Pawn',
    content: '<img id="B-Pawn3" src="resources/B-Pawn.png">',
    originalCoordianes: 'C-7',
    oldCoordinates: C7, actualCoordinates: 'C-7'
};
var BPawn4 = {
    id: 'B-Pawn4', color: 'B', type: 'Pawn',
    content: '<img id="B-Pawn4" src="resources/B-Pawn.png">',
    originalCoordianes: 'D-7',
    oldCoordinates: D7, actualCoordinates: 'D-7'
};
var BPawn5 = {
    id: 'B-Pawn5', color: 'B', type: 'Pawn',
    content: '<img id="B-Pawn5" src="resources/B-Pawn.png">',
    originalCoordianes: 'E-7',
    oldCoordinates: E7, actualCoordinates: 'E-7'
};
var BPawn6 = {
    id: 'B-Pawn6', color: 'B', type: 'Pawn',
    content: '<img id="B-Pawn6" src="resources/B-Pawn.png">',
    originalCoordianes: 'F-7',
    oldCoordinates: F7, actualCoordinates: 'F-7'
};
var BPawn7 = {
    id: 'B-Pawn7', color: 'B', type: 'Pawn',
    content: '<img id="B-Pawn7" src="resources/B-Pawn.png">',
    originalCoordianes: 'G-7',
    oldCoordinates: G7, actualCoordinates: 'G-7'
};
var BPawn8 = {
    id: 'B-Pawn8', color: 'B', type: 'Pawn',
    content: '<img id="B-Pawn8" src="resources/B-Pawn.png">',
    originalCoordianes: 'H-7',
    oldCoordinates: H7, actualCoordinates: 'H-7'
};


// Set those objects inside one of the initial cells
A1.innerHTML = WTowerL.content;
B1.innerHTML = WHorseL.content;
C1.innerHTML = WBishopL.content;
D1.innerHTML = WQueen.content;
E1.innerHTML = WKing.content;
F1.innerHTML = WBishopR.content;
G1.innerHTML = WHorseR.content;
H1.innerHTML = WTowerR.content;

A2.innerHTML = WPawn1.content;
B2.innerHTML = WPawn2.content;
C2.innerHTML = WPawn3.content;
D2.innerHTML = WPawn4.content;
E2.innerHTML = WPawn5.content;
F2.innerHTML = WPawn6.content;
G2.innerHTML = WPawn7.content;
H2.innerHTML = WPawn8.content;


A8.innerHTML = BTowerL.content;
B8.innerHTML = BHorseL.content;
C8.innerHTML = BBishopL.content;
D8.innerHTML = BQueen.content;
E8.innerHTML = BKing.content;
F8.innerHTML = BBishopR.content;
G8.innerHTML = BHorseR.content;
H8.innerHTML = BTowerR.content;

A7.innerHTML = BPawn1.content;
B7.innerHTML = BPawn2.content;
C7.innerHTML = BPawn3.content;
D7.innerHTML = BPawn4.content;
E7.innerHTML = BPawn5.content;
F7.innerHTML = BPawn6.content;
G7.innerHTML = BPawn7.content;
H7.innerHTML = BPawn8.content;

// List of the pieces
var pieces = [
    WTowerL, WHorseL, WBishopL, WQueen, WKing, WBishopR, WHorseR, WTowerR, 
    WPawn1, WPawn2, WPawn3, WPawn4, WPawn5, WPawn6, WPawn7, WPawn8,
    BTowerL, BHorseL, BBishopL, BQueen, BKing, BBishopR, BHorseR, BTowerR,
    BPawn1, BPawn2, BPawn3, BPawn4, BPawn5, BPawn6, BPawn7, BPawn8
];
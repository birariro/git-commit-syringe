function BinaryArt(char) {
    const characters = new Map([
        ["A", [
            "0011100",
            "0100010",
            "1000001",
            "1000001",
            "1111111",
            "1000001",
            "1000001"
        ]],
        ["B", [
            "1111110",
            "1000001",
            "1000001",
            "1111110",
            "1000001",
            "1000001",
            "1111110"
        ]],
        ["C", [
            "0111100",
            "1000010",
            "1000000",
            "1000000",
            "1000000",
            "1000010",
            "0111100"
        ]],
        ["D", [
            "1111100",
            "1000010",
            "1000001",
            "1000001",
            "1000001",
            "1000010",
            "1111100"
        ]],
        ["E", [
            "1111111",
            "1000000",
            "1000000",
            "1111111",
            "1000000",
            "1000000",
            "1111111"
        ]],
        ["F", [
            "1111111",
            "1000000",
            "1111111",
            "1000000",
            "1000000",
            "1000000",
            "1000000"
        ]],
        ["G", [
            "0111110",
            "1000001",
            "1000000",
            "1000111",
            "1000001",
            "1000001",
            "0111110"
        ]],
        ["H", [
            "1000001",
            "1000001",
            "1000001",
            "1111111",
            "1000001",
            "1000001",
            "1000001"
        ]],
        ["I", [
            "1111111",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "1111111"
        ]],
        ["J", [
            "1111111",
            "0000100",
            "0000100",
            "1000100",
            "1000100",
            "1000100",
            "0111000"
        ]],
        ["K", [
            "1000010",
            "1000100",
            "1001000",
            "1110000",
            "1001000",
            "1000100",
            "1000010"
        ]],
        ["L", [
            "1000000",
            "1000000",
            "1000000",
            "1000000",
            "1000000",
            "1000000",
            "1111111"
        ]],
        ["M", [
            "1000001",
            "1100011",
            "1010101",
            "1001001",
            "1000001",
            "1000001",
            "1000001"
        ]],
        ["N", [
            "1000001",
            "1100001",
            "1010001",
            "1001001",
            "1000101",
            "1000011",
            "1000001"
        ]],
        ["O", [
            "0111110",
            "1000001",
            "1000001",
            "1000001",
            "1000001",
            "1000001",
            "0111110"
        ]],
        ["P", [
            "1111110",
            "1000001",
            "1000001",
            "1111110",
            "1000000",
            "1000000",
            "1000000"
        ]],
        ["Q", [
            "0111100",
            "1000010",
            "1000010",
            "1001010",
            "1000110",
            "1000010",
            "0111101"
        ]],
        ["R", [
            "1111110",
            "1000001",
            "1111110",
            "1001000",
            "1000100",
            "1000010",
            "1000001"
        ]],
        ["S", [
            "0111110",
            "1000000",
            "0100000",
            "0011111",
            "1000001",
            "1000010",
            "0111100"
        ]],
        ["T", [
            "1111111",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0001000",
            "0001000"
        ]],
        ["U", [
            "1000001",
            "1000001",
            "1000001",
            "1000001",
            "1000001",
            "0100010",
            "0011100"
        ]],
        ["V", [
            "1000001",
            "1000001",
            "0100010",
            "0100010",
            "0010100",
            "0010100",
            "0001000"
        ]],
        ["W", [
            "1000001",
            "1000001",
            "1000001",
            "1001001",
            "1001001",
            "1001001",
            "0010100"
        ]],
        ["X", [
            "1000001",
            "0100010",
            "0010100",
            "0001000",
            "0010100",
            "0100010",
            "1000001"
        ]],
        ["Y", [
            "1000001",
            "0100010",
            "0010100",
            "0001000",
            "0001000",
            "0001000",
            "0001000"
        ]],
        ["Z", [
            "1111111",
            "0000010",
            "0000100",
            "0001000",
            "0010000",
            "0100000",
            "1111111"
        ]]
    ]);

    return characters.get(char);
}

function StringToBinary(input) {
    let binaryArray = [];

    for (const char of input) {
        const binary = BinaryArt(char).map(row => row.split(''));

        if (binaryArray.length === 0) {
            binaryArray = binary;
        } else {
            // 이전에 추가된 0과 현재 문자의 이진 표현을 합침
            binaryArray = binaryArray.map((row, index) => row.concat("0", binary[index]));
        }
    }

    return binaryArray;
}
module.exports = {
    StringToBinary
};
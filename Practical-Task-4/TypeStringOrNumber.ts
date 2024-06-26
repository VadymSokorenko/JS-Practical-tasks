type StringOrNumber = string | number;

function combine(input1: StringOrNumber, input2: StringOrNumber) {
    if (typeof input1 === "string" && typeof input2 === "string") {
        return input1 + input2;
    } else if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    } else {
        return "Тип аргументів має співпадати."
    }
}
function logId(id) {
    //* для работы с аргументом типа union в runtime используем "сужение типа"
    if (typeof id === "string") {
        console.log("id: ", id.toLowerCase());
    }
    else if (typeof id === "number") {
        console.log("id: ", id);
    }
    else {
        console.log("id: ", id);
    }
}
function logError(error) {
    if (Array.isArray(error)) {
        console.log("error: ", error);
    }
    else {
        console.log("error: ", error);
    }
}

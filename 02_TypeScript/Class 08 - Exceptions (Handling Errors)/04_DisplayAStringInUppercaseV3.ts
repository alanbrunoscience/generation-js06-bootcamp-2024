try {

    const result = convert(123);

    console.log(result);

} catch (error) {

    if(error instanceof TypeError) // "instanceof": check the type of error caught by the error parameter.
        console.error("TypeError: " + error.message);
    else
        console.error("Error: " + error);

} finally {
    console.log("Try-catch caught this error!");
}

export function convert(content: any): string {
    return content.toUpperCase();
}

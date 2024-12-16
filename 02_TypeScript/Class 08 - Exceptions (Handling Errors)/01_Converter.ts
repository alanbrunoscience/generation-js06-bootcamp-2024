try {
    const result = convert(123);

    console.log(result);

} catch(error: any) {
    if (error instanceof TypeError)
        console.error("\n You entered a value that is not a type of 'string'! ");
    else
        console.error("\n Unexpected error! ", error.message);
} finally {
    console.log("\nFinished program!");
}

export function convert(content: any): string {
    return content.toUpperCase();
}